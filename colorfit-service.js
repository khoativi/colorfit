/**
 * ColorFit Data & Business Logic Service
 * Implements colorfit-data-contract.json (v1.0.0)
 * Strictly separated from UI components.
 */
const ColorFitService = (function () {
  const lib = typeof COLORFIT_COLOR_LIBRARY !== 'undefined' ? COLORFIT_COLOR_LIBRARY : null;
  const palettesData = typeof COLORFIT_PALETTES_DATA !== 'undefined' ? COLORFIT_PALETTES_DATA : null;

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

  function isLightColor(hex) {
    const { r, g, b } = hexToRgb(hex);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62;
  }

  function colorDistance(hex1, hex2) {
    const a = hexToRgb(hex1);
    const b = hexToRgb(hex2);
    const rm = (a.r + b.r) / 2;
    const dr = a.r - b.r;
    const dg = a.g - b.g;
    const db = a.b - b.b;
    return Math.sqrt(((512 + rm) * dr * dr) / 256 + 4 * dg * dg + ((767 - rm) * db * db) / 256);
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
      .sort((a, b) => a.displayOrder - b.displayOrder)
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

  return {
    ERROR_CODES,
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
    normalizeVi,
    searchColors,
    queryPalettesByAnchor,
    getPaletteById,
    getSimilarColors,
    reanchor
  };
})();
