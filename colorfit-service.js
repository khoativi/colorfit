/**
 * ColorFit Data & Business Logic Service
 * Implements colorfit-data-contract.json (v1.1.0)
 * Strictly separated from UI components.
 */
const ColorFitService = (function () {
  const lib = typeof COLORFIT_COLOR_LIBRARY !== 'undefined' ? COLORFIT_COLOR_LIBRARY : null;
  const palettesData = typeof COLORFIT_PALETTES_DATA !== 'undefined' ? COLORFIT_PALETTES_DATA : null;

  const FASHION_MATCHING_RULES = {
    priority: ['universal-neutrals', 'fashion-color-matching', 'color-theory'],
    universalNeutrals: ['black', 'white', 'grey', 'beige', 'navy', 'brown']
  };

  function getGroupPriorityTier(group) {
    if (!group) return 3;
    if (group.id === 'neutral') return 0; // 1. universal-neutrals
    if (group.classification === 'fashion-application' || group.classification === 'color-character') return 1; // 2. fashion-color-matching
    return 2; // 3. color-theory
  }

  const ERROR_CODES = {
    COLOR_NOT_FOUND: 'COLOR_NOT_FOUND',
    COLOR_INACTIVE: 'COLOR_INACTIVE',
    PALETTE_NOT_FOUND: 'PALETTE_NOT_FOUND',
    INVALID_COLOR_REFERENCE: 'INVALID_COLOR_REFERENCE',
    INVALID_ANCHOR: 'INVALID_ANCHOR',
    INVALID_PALETTE_GROUP: 'INVALID_PALETTE_GROUP'
  };

  const familyMap = {};
  const colorMap = {};
  const groupMap = {};
  const activeColors = [];
  const validPalettes = [];
  const validationErrors = [];

  const HEX_REGEX = /^#[0-9A-Fa-f]{6}$/;

  function normalizeVi(str) {
    return (str || '')
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9#\s-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function hexToRgb(hex) {
    const clean = (hex || '#000000').replace('#', '').trim();
    const num = parseInt(clean.length === 6 ? clean : '000000', 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
  }

  function rgbToHex(r, g, b) {
    const clamp = (v) => Math.max(0, Math.min(255, Math.round(v)));
    return '#' + [clamp(r), clamp(g), clamp(b)]
      .map(v => v.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase();
  }

  function rgbToLab(r, g, b) {
    // sRGB -> linear RGB
    const toLinear = (c) => {
      const v = c / 255;
      return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    const rl = toLinear(r);
    const gl = toLinear(g);
    const bl = toLinear(b);

    // Linear RGB -> XYZ (D65)
    const x = (rl * 0.4124564 + gl * 0.3575761 + bl * 0.1804375) / 0.95047;
    const y = (rl * 0.2126729 + gl * 0.7151522 + bl * 0.0721750) / 1.00000;
    const z = (rl * 0.0193339 + gl * 0.1191920 + bl * 0.9503041) / 1.08883;

    const f = (t) => (t > 0.008856 ? Math.cbrt(t) : (7.787 * t) + (16 / 116));
    const fx = f(x);
    const fy = f(y);
    const fz = f(z);

    return {
      L: 116 * fy - 16,
      a: 500 * (fx - fy),
      b: 200 * (fy - fz)
    };
  }

  function labDistance(lab1, lab2) {
    const dL = lab1.L - lab2.L;
    const da = lab1.a - lab2.a;
    const db = lab1.b - lab2.b;
    return Math.sqrt(dL * dL + da * da + db * db);
  }

  function isLightColor(hex) {
    const { r, g, b } = hexToRgb(hex);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62;
  }

  function colorDistance(hex1, hex2) {
    const a = hexToRgb(hex1);
    const b = hexToRgb(hex2);
    return labDistance(rgbToLab(a.r, a.g, a.b), rgbToLab(b.r, b.g, b.b));
  }

  function applyWarmLightCompensation(rgb) {
    // Gentle tungsten/store warm-light white balance correction
    const r = Math.max(0, Math.min(255, Math.round(rgb.r * 0.93)));
    const g = Math.max(0, Math.min(255, Math.round(rgb.g * 0.98)));
    const b = Math.max(0, Math.min(255, Math.round(rgb.b * 1.13)));
    return { r, g, b };
  }

  function matchColorsByRgb(rgb, options = {}) {
    const limit = options.limit || 4;
    const warmLightCompensation = Boolean(options.warmLightCompensation);
    const sampledRgb = {
      r: Math.max(0, Math.min(255, Math.round(rgb.r))),
      g: Math.max(0, Math.min(255, Math.round(rgb.g))),
      b: Math.max(0, Math.min(255, Math.round(rgb.b)))
    };
    const targetRgb = warmLightCompensation ? applyWarmLightCompensation(sampledRgb) : sampledRgb;
    const targetLab = rgbToLab(targetRgb.r, targetRgb.g, targetRgb.b);

    const ranked = activeColors
      .map(color => {
        const cRgb = hexToRgb(color.hex);
        const deltaE = labDistance(targetLab, rgbToLab(cRgb.r, cRgb.g, cRgb.b));
        // Perceptual similarity score mapped cleanly to 0..100%
        const matchPercent = Math.max(1, Math.min(99, Math.round(100 * Math.exp(-deltaE / 42))));
        return { color, deltaE, matchPercent };
      })
      .sort((a, b) => a.deltaE - b.deltaE)
      .slice(0, limit);

    return {
      sampledRgb,
      sampledHex: rgbToHex(sampledRgb.r, sampledRgb.g, sampledRgb.b),
      adjustedRgb: targetRgb,
      adjustedHex: rgbToHex(targetRgb.r, targetRgb.g, targetRgb.b),
      matches: ranked
    };
  }

  // ==================== DATA VALIDATION ON LOAD ====================
  function initAndValidate() {
    if (!lib || !palettesData) {
      validationErrors.push({ code: 'DATA_MISSING', message: 'Color library or palettes dataset is not loaded.' });
      return;
    }

    // 1. Validate ColorFamilies
    const seenFamilyIds = new Set();
    for (const fam of (lib.colorFamilies || [])) {
      if (seenFamilyIds.has(fam.id)) {
        validationErrors.push({ code: 'DUPLICATE_FAMILY_ID', id: fam.id });
        continue;
      }
      seenFamilyIds.add(fam.id);
      familyMap[fam.id] = fam;
    }

    // 2. Validate PaletteGroupDefinitions
    const seenGroupIds = new Set();
    for (const grp of (lib.paletteGroupDefinitions || [])) {
      if (seenGroupIds.has(grp.id)) {
        validationErrors.push({ code: 'DUPLICATE_GROUP_ID', id: grp.id });
        continue;
      }
      seenGroupIds.add(grp.id);
      groupMap[grp.id] = grp;
    }

    // 3. Validate Colors
    const seenColorIds = new Set();
    for (const c of (lib.colors || [])) {
      if (seenColorIds.has(c.id)) {
        validationErrors.push({ code: 'DUPLICATE_COLOR_ID', id: c.id });
        continue;
      }
      seenColorIds.add(c.id);
      if (!familyMap[c.familyId]) {
        validationErrors.push({ code: 'INVALID_FAMILY_REFERENCE', colorId: c.id, familyId: c.familyId });
        continue;
      }
      if (!HEX_REGEX.test(c.hex)) {
        validationErrors.push({ code: 'INVALID_HEX', colorId: c.id, hex: c.hex });
        continue;
      }
      colorMap[c.id] = c;
      if (c.isActive !== false) {
        activeColors.push(c);
      }
    }

    // 4. Validate Palettes strictly against colorfit-data-contract.json
    const seenPaletteIds = new Set();
    for (const p of (palettesData.palettes || [])) {
      if (seenPaletteIds.has(p.id)) {
        validationErrors.push({ code: 'DUPLICATE_PALETTE_ID', paletteId: p.id });
        continue;
      }
      seenPaletteIds.add(p.id);

      const anchorColor = colorMap[p.anchorColorId];
      if (!anchorColor) {
        validationErrors.push({ code: ERROR_CODES.INVALID_COLOR_REFERENCE, paletteId: p.id, colorId: p.anchorColorId });
        continue;
      }
      if (anchorColor.isActive === false) {
        validationErrors.push({ code: ERROR_CODES.COLOR_INACTIVE, paletteId: p.id, colorId: p.anchorColorId });
        continue;
      }
      if (!groupMap[p.groupId]) {
        validationErrors.push({ code: ERROR_CODES.INVALID_PALETTE_GROUP, paletteId: p.id, groupId: p.groupId });
        continue;
      }

      const items = Array.isArray(p.colorItems) ? p.colorItems : [];
      if (items.length < 5 || items.length > 7) {
        validationErrors.push({ code: 'INVALID_PALETTE_LENGTH', paletteId: p.id, count: items.length });
        continue;
      }

      const itemColorIds = new Set();
      const itemOrders = new Set();
      let anchorItems = [];
      let itemInvalid = false;

      for (const it of items) {
        const refColor = colorMap[it.colorId];
        if (!refColor) {
          validationErrors.push({ code: ERROR_CODES.INVALID_COLOR_REFERENCE, paletteId: p.id, colorId: it.colorId });
          itemInvalid = true;
          break;
        }
        if (refColor.isActive === false) {
          validationErrors.push({ code: ERROR_CODES.COLOR_INACTIVE, paletteId: p.id, colorId: it.colorId });
          itemInvalid = true;
          break;
        }
        if (itemColorIds.has(it.colorId) || itemOrders.has(it.order)) {
          validationErrors.push({ code: 'DUPLICATE_ITEM_OR_ORDER', paletteId: p.id });
          itemInvalid = true;
          break;
        }
        if (!['anchor', 'supporting', 'accent'].includes(it.role)) {
          validationErrors.push({ code: 'INVALID_ROLE', paletteId: p.id, role: it.role });
          itemInvalid = true;
          break;
        }
        itemColorIds.add(it.colorId);
        itemOrders.add(it.order);
        if (it.role === 'anchor') anchorItems.push(it);
      }

      if (itemInvalid) continue;

      if (anchorItems.length !== 1 || anchorItems[0].colorId !== p.anchorColorId) {
        validationErrors.push({ code: ERROR_CODES.INVALID_ANCHOR, paletteId: p.id });
        continue;
      }

      if (p.isActive !== false) {
        validPalettes.push(p);
      }
    }

    if (validationErrors.length > 0 && typeof console !== 'undefined') {
      console.warn('[ColorFitService] Data validation errors detected:', validationErrors);
    }
  }

  initAndValidate();

  // ==================== GARMENT CONTEXT EXTRACTION ====================
  const GARMENT_PHRASES = [
    { norm: 'ao so mi', label: 'Áo sơ mi' },
    { norm: 'so mi', label: 'Áo sơ mi' },
    { norm: 'ao khoac blazer', label: 'Áo khoác blazer' },
    { norm: 'ao blazer', label: 'Áo blazer' },
    { norm: 'blazer', label: 'Áo blazer' },
    { norm: 'ao khoac', label: 'Áo khoác' },
    { norm: 'ao cardigan', label: 'Áo cardigan' },
    { norm: 'cardigan', label: 'Áo cardigan' },
    { norm: 'ao polo', label: 'Áo polo' },
    { norm: 'polo', label: 'Áo polo' },
    { norm: 'ao thun', label: 'Áo thun' },
    { norm: 'ao phong', label: 'Áo phông' },
    { norm: 'ao len', label: 'Áo len' },
    { norm: 'ao hoodie', label: 'Áo hoodie' },
    { norm: 'hoodie', label: 'Áo hoodie' },
    { norm: 'ao vest', label: 'Áo vest' },
    { norm: 'vest', label: 'Áo vest' },
    { norm: 'quan kaki', label: 'Quần kaki' },
    { norm: 'quan tay', label: 'Quần tây' },
    { norm: 'quan au', label: 'Quần âu' },
    { norm: 'quan jean', label: 'Quần jean' },
    { norm: 'quan jeans', label: 'Quần jeans' },
    { norm: 'quan short', label: 'Quần short' },
    { norm: 'chan vay', label: 'Chân váy' },
    { norm: 'dam lien', label: 'Đầm liền' },
    { norm: 'vay', label: 'Váy' },
    { norm: 'dam', label: 'Đầm' },
    { norm: 'ao', label: 'Áo' },
    { norm: 'quan', label: 'Quần' },
    { norm: 'giay', label: 'Giày' },
    { norm: 'tui xach', label: 'Túi xách' },
    { norm: 'tui', label: 'Túi' }
  ];

  function hasWordPhrase(haystack, phrase) {
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(^|\\s)${escaped}(\\s|$)`).test(haystack);
  }

  // ==================== SEARCH CONTRACT ====================
  function searchColors(rawQuery) {
    const trimmed = (rawQuery || '').trim();
    if (!trimmed) {
      return { colors: [], matchedGarment: null, exactHex: null };
    }

    // 1. HEX search (#RRGGBB)
    const hexMatch = trimmed.match(/^#?([0-9a-fA-F]{6})$/);
    if (hexMatch) {
      const fullHex = '#' + hexMatch[1].toUpperCase();
      const exact = activeColors.filter(c => c.hex.toUpperCase() === fullHex);
      if (exact.length > 0) {
        return { colors: exact, matchedGarment: null, exactHex: fullHex };
      }
      // Return closest colors by perceptual distance for HEX lookup
      const nearest = [...activeColors]
        .sort((a, b) => colorDistance(fullHex, a.hex) - colorDistance(fullHex, b.hex))
        .slice(0, 6);
      return { colors: nearest, matchedGarment: null, exactHex: fullHex };
    }

    const norm = normalizeVi(trimmed);
    let matchedGarment = null;
    let colorQuery = norm;

    for (const g of GARMENT_PHRASES) {
      if (hasWordPhrase(norm, g.norm)) {
        matchedGarment = g.label;
        const stripped = norm.replace(new RegExp(`(^|\\s)${g.norm}(\\s|$)`), ' ').replace(/\s+/g, ' ').trim();
        if (stripped.length > 0 && !['mau', 'tone', 'tong'].includes(stripped)) {
          colorQuery = stripped;
        }
        break;
      }
    }

    const cleaned = colorQuery
      .replace(/\b(mau|phoi voi|hop voi|mac voi|di voi|ket hop|tone|tong|cho|cua)\b/g, ' ')
      .replace(/\s+/g, ' ')
      .trim() || norm;

    // Score according to searchContract.output.sort:
    // 1. Exact name match -> 2. Exact English name match -> 3. Alias match -> 4. Partial name match
    const scored = [];
    for (const c of activeColors) {
      const nName = normalizeVi(c.name);
      const nEn = normalizeVi(c.nameEn);
      const nAliases = (c.aliases || []).map(normalizeVi);
      const fam = familyMap[c.familyId];
      const nFam = fam ? normalizeVi(fam.name) : '';
      const nFamEn = fam ? normalizeVi(fam.nameEn) : '';

      let rank = 0;
      if (cleaned === nName) {
        rank = 400;
      } else if (cleaned === nEn) {
        rank = 350;
      } else if (nAliases.some(a => a === cleaned)) {
        rank = 300;
      } else if (hasWordPhrase(cleaned, nName) || hasWordPhrase(norm, nName)) {
        rank = 250 + nName.length;
      } else if (hasWordPhrase(cleaned, nEn) || hasWordPhrase(norm, nEn)) {
        rank = 220 + nEn.length;
      } else if (nAliases.some(a => a && (hasWordPhrase(cleaned, a) || hasWordPhrase(norm, a)))) {
        rank = 200;
      } else if (cleaned.length >= 2 && (nName.includes(cleaned) || nEn.includes(cleaned) || nAliases.some(a => a.includes(cleaned)))) {
        rank = 140 + (cleaned.length / Math.max(nName.length, 1)) * 20;
      } else if (cleaned.length >= 2 && (nFam.includes(cleaned) || nFamEn.includes(cleaned))) {
        rank = 100;
      }

      if (rank > 0) {
        scored.push({ color: c, rank });
      }
    }

    scored.sort((a, b) => b.rank - a.rank || a.color.name.length - b.color.name.length);
    return {
      colors: scored.map(s => s.color),
      matchedGarment,
      exactHex: null
    };
  }

  // ==================== RESOLVE PALETTE ====================
  function resolvePalette(palette) {
    const resolvedItems = [...palette.colorItems]
      .sort((a, b) => a.order - b.order)
      .map(it => ({
        color: colorMap[it.colorId],
        role: it.role,
        theoryRole: it.theoryRole || (it.role === 'anchor' ? 'anchor' : (it.role === 'accent' ? 'accent' : 'formula')),
        order: it.order
      }));
    const group = groupMap[palette.groupId];
    return {
      paletteId: palette.id,
      anchorColorId: palette.anchorColorId,
      groupId: palette.groupId,
      groupName: group ? group.name : palette.groupId,
      groupNameEn: group ? group.nameEn : '',
      classification: group ? group.classification : '',
      name: palette.name,
      description: palette.description,
      styleTags: palette.styleTags || [],
      occasions: palette.occasions || [],
      difficulty: palette.difficulty || 'easy',
      colorItems: resolvedItems
    };
  }

  // ==================== PALETTE QUERY CONTRACT ====================
  function queryPalettesByAnchor(anchorColorId) {
    const anchorColor = colorMap[anchorColorId];
    if (!anchorColor) {
      return { ok: false, error: ERROR_CODES.COLOR_NOT_FOUND, anchorColor: null, family: null, groups: [], totalGroups: 0, totalPalettes: 0 };
    }
    if (anchorColor.isActive === false) {
      return { ok: false, error: ERROR_CODES.COLOR_INACTIVE, anchorColor: null, family: null, groups: [], totalGroups: 0, totalPalettes: 0 };
    }

    const matching = validPalettes.filter(p => p.anchorColorId === anchorColorId);
    const byGroup = {};
    for (const p of matching) {
      if (!byGroup[p.groupId]) byGroup[p.groupId] = [];
      byGroup[p.groupId].push(resolvePalette(p));
    }

    const groups = (lib.paletteGroupDefinitions || [])
      .slice()
      .sort((a, b) => getGroupPriorityTier(a) - getGroupPriorityTier(b) || a.displayOrder - b.displayOrder)
      .filter(g => byGroup[g.id] && byGroup[g.id].length > 0)
      .map(g => ({
        groupId: g.id,
        groupName: g.name,
        groupNameEn: g.nameEn,
        description: g.description,
        classification: g.classification,
        paletteCount: byGroup[g.id].length,
        palettes: byGroup[g.id]
      }));

    const totalPalettes = groups.reduce((sum, g) => sum + g.paletteCount, 0);

    return {
      ok: true,
      error: null,
      anchorColor,
      family: familyMap[anchorColor.familyId] || null,
      groups,
      totalGroups: groups.length,
      totalPalettes
    };
  }

  function getPaletteById(paletteId) {
    const raw = validPalettes.find(p => p.id === paletteId);
    if (!raw) {
      return { ok: false, error: ERROR_CODES.PALETTE_NOT_FOUND, palette: null, relatedPalettes: [] };
    }
    const resolved = resolvePalette(raw);
    const related = validPalettes
      .filter(p => p.anchorColorId === raw.anchorColorId && p.id !== raw.id)
      .slice(0, 4)
      .map(resolvePalette);
    return {
      ok: true,
      error: null,
      palette: resolved,
      relatedPalettes: related
    };
  }

  // Explicitly separated extended suggestion for empty states (never mixed into exact results)
  function getSimilarColors(anchorColorId, limit = 6) {
    const anchor = colorMap[anchorColorId];
    if (!anchor) return [];
    return activeColors
      .filter(c => c.id !== anchor.id)
      .sort((a, b) => colorDistance(anchor.hex, a.hex) - colorDistance(anchor.hex, b.hex))
      .slice(0, limit);
  }

  function getFamilyColors(familyId) {
    return activeColors.filter(c => c.familyId === familyId);
  }

  // Re-anchor contract: always discards old result & executes fresh query
  function reanchor(selectedColorId) {
    return queryPalettesByAnchor(selectedColorId);
  }

  // ==================== MATHEMATICAL RYB COLOR WHEEL ENGINE + ACHROMATIC RULES ====================
  // Chromatic colors (68): computed directly from actual HEX -> HSL -> 12-hue RYB wheel angle
  // so every harmony (Monochromatic, Analogous ±35°, Complementary 180°, Triadic ±120°, Split ±150°)
  // is mathematically accurate while selecting real wearable clothing fabrics from the 86-color library.
  // Achromatic colors (18: Black, White, Grey): strictly follow luminance scale + true 180° pairs.

  const ACHROMATIC_FAMILIES = new Set(['black', 'white', 'grey']);

  const ACHROMATIC_WHEEL_RULES = {
    black: {
      monochromatic: ['grey-charcoal', 'grey-dark', 'black-soft', 'black-washed'],
      analogous: ['blue-midnight', 'brown-espresso', 'grey-charcoal', 'blue-navy'],
      complementary: ['white-pure', 'white-soft', 'white-ivory'],
      triadic: ['grey-silver', 'white-pure', 'grey-medium', 'white-soft'],
      'split-complementary': ['red-burgundy', 'green-moss', 'yellow-mustard', 'purple-plum']
    },
    white: {
      monochromatic: ['white-ivory', 'white-cream', 'white-soft', 'white-oat', 'white-pure'],
      analogous: ['grey-ice', 'beige-light', 'grey-light', 'beige-pale'],
      complementary: ['black-jet', 'black-soft', 'grey-charcoal'],
      triadic: ['grey-medium', 'black-jet', 'grey-silver', 'black-soft'],
      'split-complementary': ['blue-navy', 'orange-terracotta', 'red-burgundy', 'green-moss']
    },
    grey: {
      monochromatic: ['grey-light', 'grey-charcoal', 'grey-medium', 'grey-silver', 'grey-dark'],
      analogous: ['grey-blue', 'grey-greige', 'grey-warm', 'blue-slate'],
      complementary: ['black-jet', 'white-pure', 'black-soft', 'white-soft'],
      triadic: ['white-pure', 'black-jet', 'white-soft', 'black-soft'],
      'split-complementary': ['blue-navy', 'orange-terracotta', 'red-burgundy', 'green-moss']
    }
  };

  function hexToRybInfo(hex) {
    const { r: r255, g: g255, b: b255 } = hexToRgb(hex);
    const r = r255 / 255, g = g255 / 255, b = b255 / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const l = (max + min) / 2;
    const d = max - min;
    const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
    if (d === 0) return { ryb: 0, s: 0, l };

    let h = 0;
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
    else if (max === g) h = ((b - r) / d + 2) * 60;
    else h = ((r - g) / d + 4) * 60;

    // Calibrated Itten/Gossett-Chen 12-hue RYB wheel mapping:
    // HSL: Red=0, Orange=30, Yellow=60, Yellow-Green=75, Green=120, Teal=180, Blue=215, Purple=285, Magenta=330
    // RYB: Red=0, Orange=60, Yellow=120, Yellow-Green=150, Green=180, Teal=210, Blue=240, Purple=300, Red-Violet=330
    const stops = [
      [0, 0], [30, 60], [60, 120], [75, 150], [120, 180],
      [180, 210], [215, 240], [285, 300], [330, 330], [360, 360]
    ];
    let ryb = 0;
    for (let i = 0; i < stops.length - 1; i++) {
      const [h1, r1] = stops[i];
      const [h2, r2] = stops[i + 1];
      if (h >= h1 && h <= h2) {
        ryb = r1 + ((h - h1) / (h2 - h1)) * (r2 - r1);
        break;
      }
    }

    return { ryb: ((ryb % 360) + 360) % 360, s, l };
  }

  // Canonical 12-Sector RYB Fashion Wheel (0°..330° in exact 30° steps).
  // Every sector has curated Rich/Dark and Light/Soft real Vietnamese clothing fabrics
  // so every harmony hits the EXACT mathematical sector (+-1, +6, +-4, +-5) with matching fabric tone.
  const RYB_12_SECTORS = [
    { deg: 0,   rich: ['red-burgundy', 'red-classic', 'red-wine'],         soft: ['red-pinkish', 'pink-rose', 'pink-dusty'] },        // 0: Red
    { deg: 30,  rich: ['red-brick', 'orange-terracotta', 'red-rust'],      soft: ['orange-coral', 'orange-peach', 'orange-terracotta'] }, // 1: Red-Orange
    { deg: 60,  rich: ['orange-burnt', 'beige-camel', 'brown-caramel'],    soft: ['orange-apricot', 'brown-milk', 'beige-camel'] },   // 2: Orange
    { deg: 90,  rich: ['yellow-mustard', 'yellow-golden', 'beige-khaki'],  soft: ['beige-sand', 'yellow-butter', 'beige-khaki'] },    // 3: Yellow-Orange
    { deg: 120, rich: ['yellow-mustard', 'yellow-golden', 'yellow-lemon'], soft: ['yellow-butter', 'yellow-pale', 'yellow-lemon'] },  // 4: Yellow
    { deg: 150, rich: ['green-olive', 'green-moss', 'green-olive-light'],  soft: ['green-pistachio', 'green-sage', 'green-olive-light'] }, // 5: Yellow-Green
    { deg: 180, rich: ['green-forest', 'green-emerald', 'green-moss'],     soft: ['green-sage', 'green-pastel', 'green-eucalyptus'] }, // 6: Green
    { deg: 210, rich: ['green-teal', 'green-emerald', 'green-forest'],     soft: ['green-mint', 'green-eucalyptus', 'green-mint-pale'] }, // 7: Blue-Green
    { deg: 240, rich: ['blue-navy', 'blue-denim', 'blue-slate'],           soft: ['blue-denim-light', 'blue-sky', 'blue-powder'] },   // 8: Blue
    { deg: 270, rich: ['blue-midnight', 'blue-navy', 'purple-dusty'],      soft: ['purple-lavender', 'blue-powder', 'purple-dusty'] }, // 9: Blue-Violet
    { deg: 300, rich: ['purple-plum', 'purple-dusty', 'purple-mauve'],     soft: ['purple-lavender', 'purple-lilac', 'purple-mauve'] }, // 10: Purple
    { deg: 330, rich: ['purple-plum', 'red-wine', 'pink-earth'],           soft: ['pink-dusty', 'pink-blush', 'pink-mauve'] }         // 11: Red-Violet
  ];

  function getColorRybSector(c) {
    // Anchor's exact 12-sector index derived from HEX + family disambiguation
    const { ryb } = hexToRybInfo(c.hex);
    if (c.familyId === 'yellow') return 4;
    if (c.familyId === 'blue' && c.id === 'blue-midnight') return 9;
    if (c.familyId === 'blue') return 8;
    if (c.id === 'green-teal') return 7;
    if (c.id === 'green-emerald' || c.id === 'green-forest') return 6;
    if (c.id === 'green-olive' || c.id === 'green-olive-light' || c.id === 'green-moss' || c.id === 'green-pistachio') return 5;
    if (c.id === 'purple-plum') return 10;
    if (c.familyId === 'pink') return 11;
    if (c.familyId === 'red' && (c.id === 'red-brick' || c.id === 'red-rust')) return 1;
    if (c.familyId === 'red') return 0;
    if (c.familyId === 'orange' && (c.id === 'orange-coral' || c.id === 'orange-terracotta')) return 1;
    if (c.familyId === 'orange') return 2;
    return Math.round(ryb / 30) % 12;
  }

  function pickFromSector(sectorIdx, isSoftAnchor, usedIds) {
    const sec = RYB_12_SECTORS[((sectorIdx % 12) + 12) % 12];
    const pool = isSoftAnchor ? [...sec.soft, ...sec.rich] : [...sec.rich, ...sec.soft];
    for (const id of pool) {
      if (!usedIds.has(id) && colorMap[id] && colorMap[id].isActive !== false) {
        return colorMap[id];
      }
    }
    return null;
  }

  function pickMonochromaticPair(anchor) {
    const aInfo = hexToRybInfo(anchor.hex);
    const sameFam = activeColors
      .filter(c => c.familyId === anchor.familyId && c.id !== anchor.id)
      .map(c => ({ c, info: hexToRybInfo(c.hex) }));

    const lighter = sameFam
      .filter(x => x.info.l > aInfo.l + 0.04)
      .sort((a, b) => Math.abs((a.info.l - aInfo.l) - 0.22) - Math.abs((b.info.l - aInfo.l) - 0.22));
    const darker = sameFam
      .filter(x => x.info.l < aInfo.l - 0.04)
      .sort((a, b) => Math.abs((aInfo.l - a.info.l) - 0.22) - Math.abs((aInfo.l - b.info.l) - 0.22));

    const picked = [];
    if (lighter.length > 0) picked.push(lighter[0].c);
    if (darker.length > 0) picked.push(darker[0].c);

    // Fill remaining from same family with widest lightness spread
    const byDist = sameFam
      .filter(x => !picked.some(p => p.id === x.c.id))
      .sort((a, b) => Math.abs(b.info.l - aInfo.l) - Math.abs(a.info.l - aInfo.l));
    for (const x of byDist) {
      if (picked.length >= 2) break;
      picked.push(x.c);
    }
    return picked;
  }

  const WHEEL_META = [
    {
      id: 'monochromatic',
      name: 'Đơn sắc',
      nameEn: 'Monochromatic',
      fallbackGroups: ['monochromatic', 'neutral', 'tonal'],
      advice: (anchor) => `Phối các sắc độ sáng – tối cùng họ ${anchor.name.toLowerCase()} tạo tổng thể tinh gọn, dễ mặc nhất.`
    },
    {
      id: 'analogous',
      name: 'Liền kề',
      nameEn: 'Analogous',
      fallbackGroups: ['analogous', 'earth-tone', 'pastel'],
      advice: (anchor) => `Kết hợp 2 màu nằm liền kề hai bên ${anchor.name.toLowerCase()} (±35°) trên bánh xe màu — chuyển tông mượt và dịu mắt.`
    },
    {
      id: 'complementary',
      name: 'Tương phản',
      nameEn: 'Complementary',
      fallbackGroups: ['complementary', 'accent'],
      advice: (anchor) => `Cặp màu đối diện trực tiếp 180° với ${anchor.name.toLowerCase()} trên bánh xe màu — tạo điểm nhấn rõ nét, bắt mắt.`
    },
    {
      id: 'triadic',
      name: 'Bộ ba',
      nameEn: 'Triadic',
      fallbackGroups: ['triadic', 'color-blocking'],
      advice: (anchor) => `Ba màu tạo tam giác đều (120°) quanh ${anchor.name.toLowerCase()} — cân bằng, nổi bật và có gu.`
    },
    {
      id: 'split-complementary',
      name: 'Đối tách lập',
      nameEn: 'Split-Complementary',
      fallbackGroups: ['split-complementary'],
      advice: (anchor) => `Giữ ${anchor.name.toLowerCase()} làm màu chính kết hợp 2 màu hai bên màu đối diện (±150°) — nổi bật nhưng mềm mại hơn.`
    }
  ];

  function getWheelRecommendations(anchorColorId) {
    const anchor = colorMap[anchorColorId];
    if (!anchor || anchor.isActive === false) return [];

    const anchorPals = validPalettes.filter(p => p.anchorColorId === anchorColorId);
    const isAchromatic = ACHROMATIC_FAMILIES.has(anchor.familyId);
    const aInfo = hexToRybInfo(anchor.hex);

    return WHEEL_META.map(meta => {
      let matchedPal = null;
      for (const gid of meta.fallbackGroups) {
        const found = anchorPals.find(p => p.groupId === gid);
        if (found) {
          matchedPal = found;
          break;
        }
      }

      let wheelColors = [];
      if (isAchromatic) {
        let targetIds = (ACHROMATIC_WHEEL_RULES[anchor.familyId] || ACHROMATIC_WHEEL_RULES.grey)[meta.id] || [];
        if (anchor.familyId === 'grey' && anchor.tone === 'dark' && meta.id === 'complementary') {
          targetIds = ['white-pure', 'white-soft', 'grey-ice'];
        }
        const needed = meta.id === 'complementary' ? 1 : 2;
        const seen = new Set([anchor.id]);
        for (const id of targetIds) {
          if (wheelColors.length >= needed) break;
          if (!seen.has(id) && colorMap[id] && colorMap[id].isActive !== false) {
            wheelColors.push(colorMap[id]);
            seen.add(id);
          }
        }
      } else {
        // Exact 12-Sector RYB Color Wheel Math (+-1, +6, +-4, +-5) with Tone-Matched Fabrics
        const used = new Set([anchor.id]);
        const s = getColorRybSector(anchor);
        const isSoft = aInfo.l > 0.66;

        if (meta.id === 'monochromatic') {
          wheelColors = pickMonochromaticPair(anchor);
        } else if (meta.id === 'analogous') {
          const left = pickFromSector(s - 1, isSoft, used);
          if (left) { wheelColors.push(left); used.add(left.id); }
          const right = pickFromSector(s + 1, isSoft, used);
          if (right) { wheelColors.push(right); used.add(right.id); }
        } else if (meta.id === 'complementary') {
          const opp = pickFromSector(s + 6, isSoft, used);
          if (opp) { wheelColors.push(opp); used.add(opp.id); }
        } else if (meta.id === 'triadic') {
          const t1 = pickFromSector(s + 4, isSoft, used);
          if (t1) { wheelColors.push(t1); used.add(t1.id); }
          const t2 = pickFromSector(s + 8, isSoft, used);
          if (t2) { wheelColors.push(t2); used.add(t2.id); }
        } else {
          // split-complementary (s+5 & s+7)
          const s1 = pickFromSector(s + 5, isSoft, used);
          if (s1) { wheelColors.push(s1); used.add(s1.id); }
          const s2 = pickFromSector(s + 7, isSoft, used);
          if (s2) { wheelColors.push(s2); used.add(s2.id); }
        }
      }

      const colorItems = [
        { color: anchor, role: 'anchor', theoryRole: 'anchor', order: 1 },
        ...wheelColors.map((c, idx) => ({
          color: c,
          role: idx === wheelColors.length - 1 ? 'accent' : 'supporting',
          theoryRole: idx === wheelColors.length - 1 ? 'accent' : 'formula',
          order: idx + 2
        }))
      ];

      return {
        harmonyId: meta.id,
        name: meta.name,
        nameEn: meta.nameEn,
        advice: meta.advice(anchor),
        paletteId: matchedPal ? matchedPal.id : `wheel:${anchor.id}:${meta.id}`,
        isSavedBacked: Boolean(matchedPal),
        anchorColor: anchor,
        recommendedColors: wheelColors,
        colorItems,
        occasions: matchedPal ? (matchedPal.occasions || ['daily', 'office']) : ['daily', 'office'],
        styleTags: matchedPal ? (matchedPal.styleTags || []) : [],
        difficulty: (meta.id === 'monochromatic' || meta.id === 'analogous') ? 'easy' : 'medium'
      };
    });
  }

  return {
    ERROR_CODES,
    FASHION_MATCHING_RULES,
    getValidationErrors: () => [...validationErrors],
    getFamilies: () => (lib ? lib.colorFamilies : []),
    getGroups: () => (lib ? lib.paletteGroupDefinitions : []),
    getNotes: () => (lib ? lib.notes : {}),
    getColorById: (id) => colorMap[id] || null,
    getFamilyById: (id) => familyMap[id] || null,
    getFamilyColors,
    getPopularColors: () => [
      'beige-main', 'white-pure', 'blue-navy', 'grey-light',
      'green-sage', 'brown-caramel', 'red-burgundy', 'black-jet',
      'blue-baby', 'pink-dusty', 'green-olive', 'orange-terracotta'
    ].map(id => colorMap[id]).filter(Boolean),
    isLightColor,
    rgbToHex,
    matchColorsByRgb,
    getWheelRecommendations,
    normalizeVi,
    searchColors,
    queryPalettesByAnchor,
    getPaletteById,
    getSimilarColors,
    reanchor
  };
})();
