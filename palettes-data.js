/**
 * ColorFit Palettes Dataset (Color-Theory & Data-Contract Validated)
 */
const COLORFIT_PALETTES_DATA = {
  "schemaVersion": "1.0.0",
  "description": "ColorFit strictly-validated palette collection referencing colorfit-color-library.json by colorId.",
  "rules": {
    "minColors": 5,
    "maxColors": 7,
    "exactlyOneAnchor": true,
    "anchorMustMatchAnchorColorId": true,
    "noDuplicateColorIds": true,
    "unknownColorIdsForbidden": true,
    "doNotForceAllGroupsForEveryAnchor": true
  },
  "palettes": [
    {
      "id": "be-monochromatic-01",
      "anchorColorId": "beige-main",
      "groupId": "monochromatic",
      "name": "Be thanh lịch",
      "description": "Các sắc độ be cùng hướng hue ấm từ sáng đến đậm, tạo tổng thể nhẹ nhàng và tinh tế.",
      "colorItems": [
        {
          "colorId": "beige-main",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "beige-camel",
          "role": "accent",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant",
        "classic"
      ],
      "occasions": [
        "office",
        "casual",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "be-neutral-01",
      "anchorColorId": "beige-main",
      "groupId": "neutral",
      "name": "Be phối trung tính",
      "description": "Kết hợp be với các màu trung tính dễ mặc, phù hợp nhiều hoàn cảnh công sở và hằng ngày.",
      "colorItems": [
        {
          "colorId": "beige-main",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "grey-charcoal",
          "role": "accent",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "blue-navy",
          "role": "accent",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "office"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "be-neutral-02",
      "anchorColorId": "beige-main",
      "groupId": "neutral",
      "name": "Be tối giản hiện đại",
      "description": "Be phối cùng trắng mềm, greige, đen mềm và nâu espresso cho diện mạo gọn gàng.",
      "colorItems": [
        {
          "colorId": "beige-main",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-greige",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "accent",
          "theoryRole": "neutral-support",
          "order": 5
        }
      ],
      "styleTags": [
        "minimal",
        "modern",
        "chic"
      ],
      "occasions": [
        "office",
        "daily",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "be-earth-tone-01",
      "anchorColorId": "beige-main",
      "groupId": "earth-tone",
      "name": "Be và sắc đất",
      "description": "Các gam màu tự nhiên như camel, caramel, nâu và olive tạo tổng thể ấm áp.",
      "colorItems": [
        {
          "colorId": "beige-main",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-camel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-caramel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "green-olive",
          "role": "accent",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural",
        "vintage"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "be-pastel-01",
      "anchorColorId": "beige-main",
      "groupId": "pastel",
      "name": "Be pastel dịu nhẹ",
      "description": "Be làm màu nền kết hợp các màu pastel sáng, độ bão hòa thấp đến vừa.",
      "colorItems": [
        {
          "colorId": "beige-main",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "yellow-butter",
          "role": "accent",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "feminine"
      ],
      "occasions": [
        "date",
        "weekend",
        "spring"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "be-accent-01",
      "anchorColorId": "beige-main",
      "groupId": "accent",
      "name": "Be tạo điểm nhấn",
      "description": "Be và các gam trung tính làm nền ổn định để đỏ burgundy và cam san hô tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "beige-main",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "red-burgundy",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "grey-monochromatic-01",
      "anchorColorId": "grey-light",
      "groupId": "monochromatic",
      "name": "Ghi chuyển sắc",
      "description": "Dải ghi trung tính từ sáng đến đậm tạo vẻ hiện đại và tối giản.",
      "colorItems": [
        {
          "colorId": "grey-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "grey-silver",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-stone",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-dark",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "accent",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "modern",
        "office"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "navy-neutral-01",
      "anchorColorId": "blue-navy",
      "groupId": "neutral",
      "name": "Navy thanh lịch",
      "description": "Navy phối với trắng, be, ghi và camel để tạo tổng thể cân bằng.",
      "colorItems": [
        {
          "colorId": "blue-navy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-camel",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "classic",
        "office",
        "preppy"
      ],
      "occasions": [
        "office",
        "daily",
        "formal"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "sage-earth-tone-01",
      "anchorColorId": "green-sage",
      "groupId": "earth-tone",
      "name": "Sage tự nhiên",
      "description": "Sage kết hợp với be, nâu và olive tạo cảm giác gần gũi thiên nhiên.",
      "colorItems": [
        {
          "colorId": "green-sage",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-camel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "brown-chocolate",
          "role": "accent",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural",
        "casual"
      ],
      "occasions": [
        "daily",
        "travel",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-pastel-01",
      "anchorColorId": "blue-baby",
      "groupId": "pastel",
      "name": "Xanh baby blue nhẹ nhàng",
      "description": "Baby blue phối với các màu sáng và pastel nhẹ tạo tổng thể dịu mắt.",
      "colorItems": [
        {
          "colorId": "blue-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-blush",
          "role": "accent",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "weekend",
        "date",
        "spring"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-analogous-01",
      "anchorColorId": "pink-dusty",
      "groupId": "analogous",
      "name": "Hồng dusty tương đồng",
      "description": "Các sắc hồng, đỏ hồng và tím mận có hue liền kề trên vòng tròn màu tạo cảm giác mềm mại.",
      "colorItems": [
        {
          "colorId": "pink-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "purple-plum",
          "role": "accent",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "feminine",
        "soft",
        "romantic"
      ],
      "occasions": [
        "date",
        "party",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-pure-monochromatic-01",
      "anchorColorId": "white-pure",
      "groupId": "monochromatic",
      "name": "Trắng tinh đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Trắng tinh, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "white-pure",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-soft",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "white-cream",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-pure-neutral-01",
      "anchorColorId": "white-pure",
      "groupId": "neutral",
      "name": "Trắng tinh phối trung tính",
      "description": "Kết hợp Trắng tinh cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "white-pure",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-pure-accent-01",
      "anchorColorId": "white-pure",
      "groupId": "accent",
      "name": "Trắng tinh tạo điểm nhấn",
      "description": "Giữ Trắng tinh cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "white-pure",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "white-pure-pastel-01",
      "anchorColorId": "white-pure",
      "groupId": "pastel",
      "name": "Trắng tinh pastel nhẹ nhàng",
      "description": "Phối Trắng tinh cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "white-pure",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-pure-color-blocking-01",
      "anchorColorId": "white-pure",
      "groupId": "color-blocking",
      "name": "Trắng tinh phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Trắng tinh, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "white-pure",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "white-soft-monochromatic-01",
      "anchorColorId": "white-soft",
      "groupId": "monochromatic",
      "name": "Trắng mềm đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Trắng mềm, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "white-soft",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "white-cream",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-soft-neutral-01",
      "anchorColorId": "white-soft",
      "groupId": "neutral",
      "name": "Trắng mềm phối trung tính",
      "description": "Kết hợp Trắng mềm cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "white-soft",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-soft-tonal-01",
      "anchorColorId": "white-soft",
      "groupId": "tonal",
      "name": "Trắng mềm cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Trắng mềm hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "white-soft",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-ice",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-soft-accent-01",
      "anchorColorId": "white-soft",
      "groupId": "accent",
      "name": "Trắng mềm tạo điểm nhấn",
      "description": "Giữ Trắng mềm cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "white-soft",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "red-burgundy",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "white-soft-pastel-01",
      "anchorColorId": "white-soft",
      "groupId": "pastel",
      "name": "Trắng mềm pastel nhẹ nhàng",
      "description": "Phối Trắng mềm cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "white-soft",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-ivory-monochromatic-01",
      "anchorColorId": "white-ivory",
      "groupId": "monochromatic",
      "name": "Trắng ngà đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Trắng ngà, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "white-ivory",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "white-soft",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "white-cream",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-ivory-neutral-01",
      "anchorColorId": "white-ivory",
      "groupId": "neutral",
      "name": "Trắng ngà phối trung tính",
      "description": "Kết hợp Trắng ngà cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "white-ivory",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-ivory-tonal-01",
      "anchorColorId": "white-ivory",
      "groupId": "tonal",
      "name": "Trắng ngà cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Trắng ngà hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "white-ivory",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-ivory-accent-01",
      "anchorColorId": "white-ivory",
      "groupId": "accent",
      "name": "Trắng ngà tạo điểm nhấn",
      "description": "Giữ Trắng ngà cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "white-ivory",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "white-ivory-pastel-01",
      "anchorColorId": "white-ivory",
      "groupId": "pastel",
      "name": "Trắng ngà pastel nhẹ nhàng",
      "description": "Phối Trắng ngà cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "white-ivory",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-ivory-earth-tone-01",
      "anchorColorId": "white-ivory",
      "groupId": "earth-tone",
      "name": "Trắng ngà hòa sắc đất",
      "description": "Kết hợp Trắng ngà với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "white-ivory",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-cream-monochromatic-01",
      "anchorColorId": "white-cream",
      "groupId": "monochromatic",
      "name": "Kem đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Kem, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "white-cream",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "white-soft",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-cream-neutral-01",
      "anchorColorId": "white-cream",
      "groupId": "neutral",
      "name": "Kem phối trung tính",
      "description": "Kết hợp Kem cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "white-cream",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-cream-tonal-01",
      "anchorColorId": "white-cream",
      "groupId": "tonal",
      "name": "Kem cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Kem hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "white-cream",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-cream-accent-01",
      "anchorColorId": "white-cream",
      "groupId": "accent",
      "name": "Kem tạo điểm nhấn",
      "description": "Giữ Kem cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "white-cream",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "white-cream-pastel-01",
      "anchorColorId": "white-cream",
      "groupId": "pastel",
      "name": "Kem pastel nhẹ nhàng",
      "description": "Phối Kem cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "white-cream",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-cream-earth-tone-01",
      "anchorColorId": "white-cream",
      "groupId": "earth-tone",
      "name": "Kem hòa sắc đất",
      "description": "Kết hợp Kem với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "white-cream",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-oat-monochromatic-01",
      "anchorColorId": "white-oat",
      "groupId": "monochromatic",
      "name": "Trắng yến mạch đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Trắng yến mạch, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "white-oat",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "white-soft",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-cream",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-oat-neutral-01",
      "anchorColorId": "white-oat",
      "groupId": "neutral",
      "name": "Trắng yến mạch phối trung tính",
      "description": "Kết hợp Trắng yến mạch cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "white-oat",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-oat-tonal-01",
      "anchorColorId": "white-oat",
      "groupId": "tonal",
      "name": "Trắng yến mạch cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Trắng yến mạch hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "white-oat",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-oat-accent-01",
      "anchorColorId": "white-oat",
      "groupId": "accent",
      "name": "Trắng yến mạch tạo điểm nhấn",
      "description": "Giữ Trắng yến mạch cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "white-oat",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "white-oat-pastel-01",
      "anchorColorId": "white-oat",
      "groupId": "pastel",
      "name": "Trắng yến mạch pastel nhẹ nhàng",
      "description": "Phối Trắng yến mạch cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "white-oat",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "white-oat-earth-tone-01",
      "anchorColorId": "white-oat",
      "groupId": "earth-tone",
      "name": "Trắng yến mạch hòa sắc đất",
      "description": "Kết hợp Trắng yến mạch với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "white-oat",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-ice-monochromatic-01",
      "anchorColorId": "grey-ice",
      "groupId": "monochromatic",
      "name": "Ghi rất sáng đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Ghi rất sáng, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "grey-ice",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "grey-greige",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-stone",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-dark",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-ice-neutral-01",
      "anchorColorId": "grey-ice",
      "groupId": "neutral",
      "name": "Ghi rất sáng phối trung tính",
      "description": "Kết hợp Ghi rất sáng cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "grey-ice",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-ice-tonal-01",
      "anchorColorId": "grey-ice",
      "groupId": "tonal",
      "name": "Ghi rất sáng cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Ghi rất sáng hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "grey-ice",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-silver",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-ice-accent-01",
      "anchorColorId": "grey-ice",
      "groupId": "accent",
      "name": "Ghi rất sáng tạo điểm nhấn",
      "description": "Giữ Ghi rất sáng cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "grey-ice",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "grey-ice-pastel-01",
      "anchorColorId": "grey-ice",
      "groupId": "pastel",
      "name": "Ghi rất sáng pastel nhẹ nhàng",
      "description": "Phối Ghi rất sáng cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "grey-ice",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-light-neutral-01",
      "anchorColorId": "grey-light",
      "groupId": "neutral",
      "name": "Ghi sáng phối trung tính",
      "description": "Kết hợp Ghi sáng cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "grey-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-light-tonal-01",
      "anchorColorId": "grey-light",
      "groupId": "tonal",
      "name": "Ghi sáng cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Ghi sáng hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "grey-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "white-soft",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-ice",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-silver",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-light-accent-01",
      "anchorColorId": "grey-light",
      "groupId": "accent",
      "name": "Ghi sáng tạo điểm nhấn",
      "description": "Giữ Ghi sáng cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "grey-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "grey-light-pastel-01",
      "anchorColorId": "grey-light",
      "groupId": "pastel",
      "name": "Ghi sáng pastel nhẹ nhàng",
      "description": "Phối Ghi sáng cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "grey-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-silver-monochromatic-01",
      "anchorColorId": "grey-silver",
      "groupId": "monochromatic",
      "name": "Ghi bạc đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Ghi bạc, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "grey-silver",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "grey-ice",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-stone",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-dark",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-silver-neutral-01",
      "anchorColorId": "grey-silver",
      "groupId": "neutral",
      "name": "Ghi bạc phối trung tính",
      "description": "Kết hợp Ghi bạc cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "grey-silver",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-silver-tonal-01",
      "anchorColorId": "grey-silver",
      "groupId": "tonal",
      "name": "Ghi bạc cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Ghi bạc hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "grey-silver",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-silver-accent-01",
      "anchorColorId": "grey-silver",
      "groupId": "accent",
      "name": "Ghi bạc tạo điểm nhấn",
      "description": "Giữ Ghi bạc cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "grey-silver",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "grey-silver-pastel-01",
      "anchorColorId": "grey-silver",
      "groupId": "pastel",
      "name": "Ghi bạc pastel nhẹ nhàng",
      "description": "Phối Ghi bạc cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "grey-silver",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-blue-monochromatic-01",
      "anchorColorId": "grey-blue",
      "groupId": "monochromatic",
      "name": "Ghi xanh đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Ghi xanh, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "grey-blue",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "grey-ice",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-stone",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-dark",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-blue-neutral-01",
      "anchorColorId": "grey-blue",
      "groupId": "neutral",
      "name": "Ghi xanh phối trung tính",
      "description": "Kết hợp Ghi xanh cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "grey-blue",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-blue-tonal-01",
      "anchorColorId": "grey-blue",
      "groupId": "tonal",
      "name": "Ghi xanh cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Ghi xanh hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "grey-blue",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-blue-accent-01",
      "anchorColorId": "grey-blue",
      "groupId": "accent",
      "name": "Ghi xanh tạo điểm nhấn",
      "description": "Giữ Ghi xanh cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "grey-blue",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "grey-medium-monochromatic-01",
      "anchorColorId": "grey-medium",
      "groupId": "monochromatic",
      "name": "Ghi vừa đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Ghi vừa, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "grey-medium",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "grey-ice",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-silver",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-dark",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-medium-neutral-01",
      "anchorColorId": "grey-medium",
      "groupId": "neutral",
      "name": "Ghi vừa phối trung tính",
      "description": "Kết hợp Ghi vừa cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "grey-medium",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-medium-tonal-01",
      "anchorColorId": "grey-medium",
      "groupId": "tonal",
      "name": "Ghi vừa cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Ghi vừa hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "grey-medium",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-medium-accent-01",
      "anchorColorId": "grey-medium",
      "groupId": "accent",
      "name": "Ghi vừa tạo điểm nhấn",
      "description": "Giữ Ghi vừa cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "grey-medium",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "grey-stone-monochromatic-01",
      "anchorColorId": "grey-stone",
      "groupId": "monochromatic",
      "name": "Ghi đá đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Ghi đá, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "grey-stone",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "grey-ice",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-silver",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-dark",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-stone-neutral-01",
      "anchorColorId": "grey-stone",
      "groupId": "neutral",
      "name": "Ghi đá phối trung tính",
      "description": "Kết hợp Ghi đá cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "grey-stone",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-stone-tonal-01",
      "anchorColorId": "grey-stone",
      "groupId": "tonal",
      "name": "Ghi đá cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Ghi đá hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "grey-stone",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-mushroom",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-stone-accent-01",
      "anchorColorId": "grey-stone",
      "groupId": "accent",
      "name": "Ghi đá tạo điểm nhấn",
      "description": "Giữ Ghi đá cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "grey-stone",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "grey-dark-monochromatic-01",
      "anchorColorId": "grey-dark",
      "groupId": "monochromatic",
      "name": "Ghi đậm đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Ghi đậm, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "grey-dark",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "grey-ice",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-silver",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-blue",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-warm",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-dark-neutral-01",
      "anchorColorId": "grey-dark",
      "groupId": "neutral",
      "name": "Ghi đậm phối trung tính",
      "description": "Kết hợp Ghi đậm cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "grey-dark",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-dark-accent-01",
      "anchorColorId": "grey-dark",
      "groupId": "accent",
      "name": "Ghi đậm tạo điểm nhấn",
      "description": "Giữ Ghi đậm cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "grey-dark",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "grey-charcoal-monochromatic-01",
      "anchorColorId": "grey-charcoal",
      "groupId": "monochromatic",
      "name": "Xám than đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xám than, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "grey-charcoal",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "grey-ice",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-silver",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-blue",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-warm",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-charcoal-neutral-01",
      "anchorColorId": "grey-charcoal",
      "groupId": "neutral",
      "name": "Xám than phối trung tính",
      "description": "Kết hợp Xám than cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "grey-charcoal",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-charcoal-accent-01",
      "anchorColorId": "grey-charcoal",
      "groupId": "accent",
      "name": "Xám than tạo điểm nhấn",
      "description": "Giữ Xám than cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "grey-charcoal",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "grey-warm-monochromatic-01",
      "anchorColorId": "grey-warm",
      "groupId": "monochromatic",
      "name": "Ghi ấm đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Ghi ấm, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "grey-warm",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "grey-ice",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-silver",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-dark",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-warm-neutral-01",
      "anchorColorId": "grey-warm",
      "groupId": "neutral",
      "name": "Ghi ấm phối trung tính",
      "description": "Kết hợp Ghi ấm cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "grey-warm",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-warm-tonal-01",
      "anchorColorId": "grey-warm",
      "groupId": "tonal",
      "name": "Ghi ấm cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Ghi ấm hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "grey-warm",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-warm-accent-01",
      "anchorColorId": "grey-warm",
      "groupId": "accent",
      "name": "Ghi ấm tạo điểm nhấn",
      "description": "Giữ Ghi ấm cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "grey-warm",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "grey-warm-earth-tone-01",
      "anchorColorId": "grey-warm",
      "groupId": "earth-tone",
      "name": "Ghi ấm hòa sắc đất",
      "description": "Kết hợp Ghi ấm với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "grey-warm",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-greige-monochromatic-01",
      "anchorColorId": "grey-greige",
      "groupId": "monochromatic",
      "name": "Greige đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Greige, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "grey-greige",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "grey-ice",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-silver",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-dark",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-greige-neutral-01",
      "anchorColorId": "grey-greige",
      "groupId": "neutral",
      "name": "Greige phối trung tính",
      "description": "Kết hợp Greige cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "grey-greige",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-greige-tonal-01",
      "anchorColorId": "grey-greige",
      "groupId": "tonal",
      "name": "Greige cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Greige hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "grey-greige",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "grey-greige-accent-01",
      "anchorColorId": "grey-greige",
      "groupId": "accent",
      "name": "Greige tạo điểm nhấn",
      "description": "Giữ Greige cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "grey-greige",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "grey-greige-earth-tone-01",
      "anchorColorId": "grey-greige",
      "groupId": "earth-tone",
      "name": "Greige hòa sắc đất",
      "description": "Kết hợp Greige với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "grey-greige",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "black-soft-monochromatic-01",
      "anchorColorId": "black-soft",
      "groupId": "monochromatic",
      "name": "Đen mềm đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Đen mềm, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "black-soft",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "grey-ice",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-silver",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-washed",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "black-soft-neutral-01",
      "anchorColorId": "black-soft",
      "groupId": "neutral",
      "name": "Đen mềm phối trung tính",
      "description": "Kết hợp Đen mềm cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "black-soft",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "black-soft-accent-01",
      "anchorColorId": "black-soft",
      "groupId": "accent",
      "name": "Đen mềm tạo điểm nhấn",
      "description": "Giữ Đen mềm cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "black-soft",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "black-jet-monochromatic-01",
      "anchorColorId": "black-jet",
      "groupId": "monochromatic",
      "name": "Đen tuyền đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Đen tuyền, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "black-jet",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "grey-ice",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-silver",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-washed",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "black-jet-neutral-01",
      "anchorColorId": "black-jet",
      "groupId": "neutral",
      "name": "Đen tuyền phối trung tính",
      "description": "Kết hợp Đen tuyền cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "black-jet",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "black-jet-accent-01",
      "anchorColorId": "black-jet",
      "groupId": "accent",
      "name": "Đen tuyền tạo điểm nhấn",
      "description": "Giữ Đen tuyền cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "black-jet",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "black-jet-color-blocking-01",
      "anchorColorId": "black-jet",
      "groupId": "color-blocking",
      "name": "Đen tuyền phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Đen tuyền, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "black-jet",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "black-washed-monochromatic-01",
      "anchorColorId": "black-washed",
      "groupId": "monochromatic",
      "name": "Đen bạc màu đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Đen bạc màu, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "black-washed",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "grey-ice",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-silver",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "black-washed-neutral-01",
      "anchorColorId": "black-washed",
      "groupId": "neutral",
      "name": "Đen bạc màu phối trung tính",
      "description": "Kết hợp Đen bạc màu cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "black-washed",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "black-washed-tonal-01",
      "anchorColorId": "black-washed",
      "groupId": "tonal",
      "name": "Đen bạc màu cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Đen bạc màu hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "black-washed",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "black-washed-accent-01",
      "anchorColorId": "black-washed",
      "groupId": "accent",
      "name": "Đen bạc màu tạo điểm nhấn",
      "description": "Giữ Đen bạc màu cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "black-washed",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-pale-monochromatic-01",
      "anchorColorId": "beige-pale",
      "groupId": "monochromatic",
      "name": "Be rất nhạt đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Be rất nhạt, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "beige-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-mushroom",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-camel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-pale-analogous-01",
      "anchorColorId": "beige-pale",
      "groupId": "analogous",
      "name": "Be rất nhạt phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Be rất nhạt hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "beige-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-pale-complementary-01",
      "anchorColorId": "beige-pale",
      "groupId": "complementary",
      "name": "Be rất nhạt bổ túc cân bằng",
      "description": "Ghép Be rất nhạt với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "beige-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-pale-split-complementary-01",
      "anchorColorId": "beige-pale",
      "groupId": "split-complementary",
      "name": "Be rất nhạt bổ túc bộ ba",
      "description": "Kết hợp Be rất nhạt với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "beige-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-pale-neutral-01",
      "anchorColorId": "beige-pale",
      "groupId": "neutral",
      "name": "Be rất nhạt phối trung tính",
      "description": "Kết hợp Be rất nhạt cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "beige-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-pale-tonal-01",
      "anchorColorId": "beige-pale",
      "groupId": "tonal",
      "name": "Be rất nhạt cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Be rất nhạt hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "beige-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "white-cream",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-pale-accent-01",
      "anchorColorId": "beige-pale",
      "groupId": "accent",
      "name": "Be rất nhạt tạo điểm nhấn",
      "description": "Giữ Be rất nhạt cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "beige-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-pale-pastel-01",
      "anchorColorId": "beige-pale",
      "groupId": "pastel",
      "name": "Be rất nhạt pastel nhẹ nhàng",
      "description": "Phối Be rất nhạt cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "beige-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-pale-earth-tone-01",
      "anchorColorId": "beige-pale",
      "groupId": "earth-tone",
      "name": "Be rất nhạt hòa sắc đất",
      "description": "Kết hợp Be rất nhạt với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "beige-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-light-monochromatic-01",
      "anchorColorId": "beige-light",
      "groupId": "monochromatic",
      "name": "Be sáng đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Be sáng, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "beige-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-mushroom",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-camel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-light-analogous-01",
      "anchorColorId": "beige-light",
      "groupId": "analogous",
      "name": "Be sáng phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Be sáng hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "beige-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-brick",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-light-complementary-01",
      "anchorColorId": "beige-light",
      "groupId": "complementary",
      "name": "Be sáng bổ túc cân bằng",
      "description": "Ghép Be sáng với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "beige-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-light-split-complementary-01",
      "anchorColorId": "beige-light",
      "groupId": "split-complementary",
      "name": "Be sáng bổ túc bộ ba",
      "description": "Kết hợp Be sáng với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "beige-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-light-neutral-01",
      "anchorColorId": "beige-light",
      "groupId": "neutral",
      "name": "Be sáng phối trung tính",
      "description": "Kết hợp Be sáng cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "beige-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-light-tonal-01",
      "anchorColorId": "beige-light",
      "groupId": "tonal",
      "name": "Be sáng cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Be sáng hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "beige-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-light-accent-01",
      "anchorColorId": "beige-light",
      "groupId": "accent",
      "name": "Be sáng tạo điểm nhấn",
      "description": "Giữ Be sáng cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "beige-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-light-pastel-01",
      "anchorColorId": "beige-light",
      "groupId": "pastel",
      "name": "Be sáng pastel nhẹ nhàng",
      "description": "Phối Be sáng cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "beige-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-light-earth-tone-01",
      "anchorColorId": "beige-light",
      "groupId": "earth-tone",
      "name": "Be sáng hòa sắc đất",
      "description": "Kết hợp Be sáng với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "beige-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-sand-monochromatic-01",
      "anchorColorId": "beige-sand",
      "groupId": "monochromatic",
      "name": "Be cát đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Be cát, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "beige-sand",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-mushroom",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-camel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-sand-analogous-01",
      "anchorColorId": "beige-sand",
      "groupId": "analogous",
      "name": "Be cát phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Be cát hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "beige-sand",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-sand-complementary-01",
      "anchorColorId": "beige-sand",
      "groupId": "complementary",
      "name": "Be cát bổ túc cân bằng",
      "description": "Ghép Be cát với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "beige-sand",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-sand-split-complementary-01",
      "anchorColorId": "beige-sand",
      "groupId": "split-complementary",
      "name": "Be cát bổ túc bộ ba",
      "description": "Kết hợp Be cát với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "beige-sand",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-sand-neutral-01",
      "anchorColorId": "beige-sand",
      "groupId": "neutral",
      "name": "Be cát phối trung tính",
      "description": "Kết hợp Be cát cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "beige-sand",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-sand-tonal-01",
      "anchorColorId": "beige-sand",
      "groupId": "tonal",
      "name": "Be cát cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Be cát hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "beige-sand",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-sand-accent-01",
      "anchorColorId": "beige-sand",
      "groupId": "accent",
      "name": "Be cát tạo điểm nhấn",
      "description": "Giữ Be cát cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "beige-sand",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-sand-pastel-01",
      "anchorColorId": "beige-sand",
      "groupId": "pastel",
      "name": "Be cát pastel nhẹ nhàng",
      "description": "Phối Be cát cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "beige-sand",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-sand-earth-tone-01",
      "anchorColorId": "beige-sand",
      "groupId": "earth-tone",
      "name": "Be cát hòa sắc đất",
      "description": "Kết hợp Be cát với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "beige-sand",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-main-analogous-01",
      "anchorColorId": "beige-main",
      "groupId": "analogous",
      "name": "Be phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Be hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "beige-main",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-main-complementary-01",
      "anchorColorId": "beige-main",
      "groupId": "complementary",
      "name": "Be bổ túc cân bằng",
      "description": "Ghép Be với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "beige-main",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-main-split-complementary-01",
      "anchorColorId": "beige-main",
      "groupId": "split-complementary",
      "name": "Be bổ túc bộ ba",
      "description": "Kết hợp Be với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "beige-main",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-main-tonal-01",
      "anchorColorId": "beige-main",
      "groupId": "tonal",
      "name": "Be cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Be hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "beige-main",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-main-color-blocking-01",
      "anchorColorId": "beige-main",
      "groupId": "color-blocking",
      "name": "Be phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Be, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "beige-main",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "beige-oat-monochromatic-01",
      "anchorColorId": "beige-oat",
      "groupId": "monochromatic",
      "name": "Be yến mạch đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Be yến mạch, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "beige-oat",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-mushroom",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-camel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-oat-analogous-01",
      "anchorColorId": "beige-oat",
      "groupId": "analogous",
      "name": "Be yến mạch phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Be yến mạch hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "beige-oat",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-brick",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-oat-complementary-01",
      "anchorColorId": "beige-oat",
      "groupId": "complementary",
      "name": "Be yến mạch bổ túc cân bằng",
      "description": "Ghép Be yến mạch với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "beige-oat",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-oat-split-complementary-01",
      "anchorColorId": "beige-oat",
      "groupId": "split-complementary",
      "name": "Be yến mạch bổ túc bộ ba",
      "description": "Kết hợp Be yến mạch với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "beige-oat",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-oat-neutral-01",
      "anchorColorId": "beige-oat",
      "groupId": "neutral",
      "name": "Be yến mạch phối trung tính",
      "description": "Kết hợp Be yến mạch cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "beige-oat",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-oat-tonal-01",
      "anchorColorId": "beige-oat",
      "groupId": "tonal",
      "name": "Be yến mạch cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Be yến mạch hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "beige-oat",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-oat-accent-01",
      "anchorColorId": "beige-oat",
      "groupId": "accent",
      "name": "Be yến mạch tạo điểm nhấn",
      "description": "Giữ Be yến mạch cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "beige-oat",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-oat-earth-tone-01",
      "anchorColorId": "beige-oat",
      "groupId": "earth-tone",
      "name": "Be yến mạch hòa sắc đất",
      "description": "Kết hợp Be yến mạch với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "beige-oat",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-taupe-monochromatic-01",
      "anchorColorId": "beige-taupe",
      "groupId": "monochromatic",
      "name": "Taupe đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Taupe, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "beige-taupe",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-mushroom",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-camel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-taupe-analogous-01",
      "anchorColorId": "beige-taupe",
      "groupId": "analogous",
      "name": "Taupe phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Taupe hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "beige-taupe",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-brick",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-taupe-complementary-01",
      "anchorColorId": "beige-taupe",
      "groupId": "complementary",
      "name": "Taupe bổ túc cân bằng",
      "description": "Ghép Taupe với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "beige-taupe",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-taupe-split-complementary-01",
      "anchorColorId": "beige-taupe",
      "groupId": "split-complementary",
      "name": "Taupe bổ túc bộ ba",
      "description": "Kết hợp Taupe với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "beige-taupe",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-taupe-neutral-01",
      "anchorColorId": "beige-taupe",
      "groupId": "neutral",
      "name": "Taupe phối trung tính",
      "description": "Kết hợp Taupe cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "beige-taupe",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-taupe-tonal-01",
      "anchorColorId": "beige-taupe",
      "groupId": "tonal",
      "name": "Taupe cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Taupe hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "beige-taupe",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-taupe-accent-01",
      "anchorColorId": "beige-taupe",
      "groupId": "accent",
      "name": "Taupe tạo điểm nhấn",
      "description": "Giữ Taupe cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "beige-taupe",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-taupe-earth-tone-01",
      "anchorColorId": "beige-taupe",
      "groupId": "earth-tone",
      "name": "Taupe hòa sắc đất",
      "description": "Kết hợp Taupe với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "beige-taupe",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-camel-monochromatic-01",
      "anchorColorId": "beige-camel",
      "groupId": "monochromatic",
      "name": "Camel đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Camel, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "beige-camel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-camel-analogous-01",
      "anchorColorId": "beige-camel",
      "groupId": "analogous",
      "name": "Camel phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Camel hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "beige-camel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-brick",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-camel-complementary-01",
      "anchorColorId": "beige-camel",
      "groupId": "complementary",
      "name": "Camel bổ túc cân bằng",
      "description": "Ghép Camel với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "beige-camel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-camel-split-complementary-01",
      "anchorColorId": "beige-camel",
      "groupId": "split-complementary",
      "name": "Camel bổ túc bộ ba",
      "description": "Kết hợp Camel với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "beige-camel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-camel-neutral-01",
      "anchorColorId": "beige-camel",
      "groupId": "neutral",
      "name": "Camel phối trung tính",
      "description": "Kết hợp Camel cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "beige-camel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-camel-tonal-01",
      "anchorColorId": "beige-camel",
      "groupId": "tonal",
      "name": "Camel cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Camel hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "beige-camel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-tan",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "red-brick",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-camel-accent-01",
      "anchorColorId": "beige-camel",
      "groupId": "accent",
      "name": "Camel tạo điểm nhấn",
      "description": "Giữ Camel cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "beige-camel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-camel-earth-tone-01",
      "anchorColorId": "beige-camel",
      "groupId": "earth-tone",
      "name": "Camel hòa sắc đất",
      "description": "Kết hợp Camel với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "beige-camel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-khaki-monochromatic-01",
      "anchorColorId": "beige-khaki",
      "groupId": "monochromatic",
      "name": "Kaki đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Kaki, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "beige-khaki",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-khaki-analogous-01",
      "anchorColorId": "beige-khaki",
      "groupId": "analogous",
      "name": "Kaki phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Kaki hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "beige-khaki",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-khaki-complementary-01",
      "anchorColorId": "beige-khaki",
      "groupId": "complementary",
      "name": "Kaki bổ túc cân bằng",
      "description": "Ghép Kaki với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "beige-khaki",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-khaki-split-complementary-01",
      "anchorColorId": "beige-khaki",
      "groupId": "split-complementary",
      "name": "Kaki bổ túc bộ ba",
      "description": "Kết hợp Kaki với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "beige-khaki",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-khaki-neutral-01",
      "anchorColorId": "beige-khaki",
      "groupId": "neutral",
      "name": "Kaki phối trung tính",
      "description": "Kết hợp Kaki cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "beige-khaki",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-khaki-tonal-01",
      "anchorColorId": "beige-khaki",
      "groupId": "tonal",
      "name": "Kaki cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Kaki hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "beige-khaki",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-khaki-accent-01",
      "anchorColorId": "beige-khaki",
      "groupId": "accent",
      "name": "Kaki tạo điểm nhấn",
      "description": "Giữ Kaki cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "beige-khaki",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-khaki-earth-tone-01",
      "anchorColorId": "beige-khaki",
      "groupId": "earth-tone",
      "name": "Kaki hòa sắc đất",
      "description": "Kết hợp Kaki với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "beige-khaki",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-mushroom-monochromatic-01",
      "anchorColorId": "beige-mushroom",
      "groupId": "monochromatic",
      "name": "Be nấm đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Be nấm, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "beige-mushroom",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-mushroom-analogous-01",
      "anchorColorId": "beige-mushroom",
      "groupId": "analogous",
      "name": "Be nấm phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Be nấm hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "beige-mushroom",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-brick",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-mushroom-complementary-01",
      "anchorColorId": "beige-mushroom",
      "groupId": "complementary",
      "name": "Be nấm bổ túc cân bằng",
      "description": "Ghép Be nấm với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "beige-mushroom",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-mushroom-split-complementary-01",
      "anchorColorId": "beige-mushroom",
      "groupId": "split-complementary",
      "name": "Be nấm bổ túc bộ ba",
      "description": "Kết hợp Be nấm với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "beige-mushroom",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-mushroom-neutral-01",
      "anchorColorId": "beige-mushroom",
      "groupId": "neutral",
      "name": "Be nấm phối trung tính",
      "description": "Kết hợp Be nấm cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "beige-mushroom",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-mushroom-tonal-01",
      "anchorColorId": "beige-mushroom",
      "groupId": "tonal",
      "name": "Be nấm cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Be nấm hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "beige-mushroom",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "beige-mushroom-accent-01",
      "anchorColorId": "beige-mushroom",
      "groupId": "accent",
      "name": "Be nấm tạo điểm nhấn",
      "description": "Giữ Be nấm cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "beige-mushroom",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "beige-mushroom-earth-tone-01",
      "anchorColorId": "beige-mushroom",
      "groupId": "earth-tone",
      "name": "Be nấm hòa sắc đất",
      "description": "Kết hợp Be nấm với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "beige-mushroom",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-milk-monochromatic-01",
      "anchorColorId": "brown-milk",
      "groupId": "monochromatic",
      "name": "Nâu sữa đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Nâu sữa, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "brown-milk",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-milk-analogous-01",
      "anchorColorId": "brown-milk",
      "groupId": "analogous",
      "name": "Nâu sữa phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Nâu sữa hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "brown-milk",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-brick",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-milk-complementary-01",
      "anchorColorId": "brown-milk",
      "groupId": "complementary",
      "name": "Nâu sữa bổ túc cân bằng",
      "description": "Ghép Nâu sữa với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "brown-milk",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-milk-split-complementary-01",
      "anchorColorId": "brown-milk",
      "groupId": "split-complementary",
      "name": "Nâu sữa bổ túc bộ ba",
      "description": "Kết hợp Nâu sữa với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "brown-milk",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-milk-neutral-01",
      "anchorColorId": "brown-milk",
      "groupId": "neutral",
      "name": "Nâu sữa phối trung tính",
      "description": "Kết hợp Nâu sữa cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "brown-milk",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-milk-tonal-01",
      "anchorColorId": "brown-milk",
      "groupId": "tonal",
      "name": "Nâu sữa cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Nâu sữa hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "brown-milk",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-milk-accent-01",
      "anchorColorId": "brown-milk",
      "groupId": "accent",
      "name": "Nâu sữa tạo điểm nhấn",
      "description": "Giữ Nâu sữa cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "brown-milk",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-milk-earth-tone-01",
      "anchorColorId": "brown-milk",
      "groupId": "earth-tone",
      "name": "Nâu sữa hòa sắc đất",
      "description": "Kết hợp Nâu sữa với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "brown-milk",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "orange-burnt",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-tan-monochromatic-01",
      "anchorColorId": "brown-tan",
      "groupId": "monochromatic",
      "name": "Nâu da bò đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Nâu da bò, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "brown-tan",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-caramel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-tan-analogous-01",
      "anchorColorId": "brown-tan",
      "groupId": "analogous",
      "name": "Nâu da bò phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Nâu da bò hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "brown-tan",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-tan-complementary-01",
      "anchorColorId": "brown-tan",
      "groupId": "complementary",
      "name": "Nâu da bò bổ túc cân bằng",
      "description": "Ghép Nâu da bò với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "brown-tan",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-tan-split-complementary-01",
      "anchorColorId": "brown-tan",
      "groupId": "split-complementary",
      "name": "Nâu da bò bổ túc bộ ba",
      "description": "Kết hợp Nâu da bò với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "brown-tan",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-tan-neutral-01",
      "anchorColorId": "brown-tan",
      "groupId": "neutral",
      "name": "Nâu da bò phối trung tính",
      "description": "Kết hợp Nâu da bò cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "brown-tan",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-tan-tonal-01",
      "anchorColorId": "brown-tan",
      "groupId": "tonal",
      "name": "Nâu da bò cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Nâu da bò hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "brown-tan",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-camel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-tan-accent-01",
      "anchorColorId": "brown-tan",
      "groupId": "accent",
      "name": "Nâu da bò tạo điểm nhấn",
      "description": "Giữ Nâu da bò cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "brown-tan",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-tan-earth-tone-01",
      "anchorColorId": "brown-tan",
      "groupId": "earth-tone",
      "name": "Nâu da bò hòa sắc đất",
      "description": "Kết hợp Nâu da bò với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "brown-tan",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-caramel-monochromatic-01",
      "anchorColorId": "brown-caramel",
      "groupId": "monochromatic",
      "name": "Nâu caramel đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Nâu caramel, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "brown-caramel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-caramel-analogous-01",
      "anchorColorId": "brown-caramel",
      "groupId": "analogous",
      "name": "Nâu caramel phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Nâu caramel hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "brown-caramel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-caramel-complementary-01",
      "anchorColorId": "brown-caramel",
      "groupId": "complementary",
      "name": "Nâu caramel bổ túc cân bằng",
      "description": "Ghép Nâu caramel với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "brown-caramel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-caramel-split-complementary-01",
      "anchorColorId": "brown-caramel",
      "groupId": "split-complementary",
      "name": "Nâu caramel bổ túc bộ ba",
      "description": "Kết hợp Nâu caramel với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "brown-caramel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-caramel-neutral-01",
      "anchorColorId": "brown-caramel",
      "groupId": "neutral",
      "name": "Nâu caramel phối trung tính",
      "description": "Kết hợp Nâu caramel cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "brown-caramel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-caramel-tonal-01",
      "anchorColorId": "brown-caramel",
      "groupId": "tonal",
      "name": "Nâu caramel cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Nâu caramel hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "brown-caramel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-caramel-accent-01",
      "anchorColorId": "brown-caramel",
      "groupId": "accent",
      "name": "Nâu caramel tạo điểm nhấn",
      "description": "Giữ Nâu caramel cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "brown-caramel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-caramel-earth-tone-01",
      "anchorColorId": "brown-caramel",
      "groupId": "earth-tone",
      "name": "Nâu caramel hòa sắc đất",
      "description": "Kết hợp Nâu caramel với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "brown-caramel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "orange-burnt",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-cognac-monochromatic-01",
      "anchorColorId": "brown-cognac",
      "groupId": "monochromatic",
      "name": "Nâu cognac đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Nâu cognac, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "brown-cognac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-caramel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-cognac-analogous-01",
      "anchorColorId": "brown-cognac",
      "groupId": "analogous",
      "name": "Nâu cognac phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Nâu cognac hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "brown-cognac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-cognac-complementary-01",
      "anchorColorId": "brown-cognac",
      "groupId": "complementary",
      "name": "Nâu cognac bổ túc cân bằng",
      "description": "Ghép Nâu cognac với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "brown-cognac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-cognac-split-complementary-01",
      "anchorColorId": "brown-cognac",
      "groupId": "split-complementary",
      "name": "Nâu cognac bổ túc bộ ba",
      "description": "Kết hợp Nâu cognac với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "brown-cognac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-cognac-neutral-01",
      "anchorColorId": "brown-cognac",
      "groupId": "neutral",
      "name": "Nâu cognac phối trung tính",
      "description": "Kết hợp Nâu cognac cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "brown-cognac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-cognac-tonal-01",
      "anchorColorId": "brown-cognac",
      "groupId": "tonal",
      "name": "Nâu cognac cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Nâu cognac hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "brown-cognac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-brick",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-burnt",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "beige-camel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-cognac-accent-01",
      "anchorColorId": "brown-cognac",
      "groupId": "accent",
      "name": "Nâu cognac tạo điểm nhấn",
      "description": "Giữ Nâu cognac cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "brown-cognac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-cognac-earth-tone-01",
      "anchorColorId": "brown-cognac",
      "groupId": "earth-tone",
      "name": "Nâu cognac hòa sắc đất",
      "description": "Kết hợp Nâu cognac với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "brown-cognac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-mocha-monochromatic-01",
      "anchorColorId": "brown-mocha",
      "groupId": "monochromatic",
      "name": "Nâu mocha đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Nâu mocha, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "brown-mocha",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-caramel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-mocha-analogous-01",
      "anchorColorId": "brown-mocha",
      "groupId": "analogous",
      "name": "Nâu mocha phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Nâu mocha hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "brown-mocha",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-mocha-complementary-01",
      "anchorColorId": "brown-mocha",
      "groupId": "complementary",
      "name": "Nâu mocha bổ túc cân bằng",
      "description": "Ghép Nâu mocha với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "brown-mocha",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-mocha-split-complementary-01",
      "anchorColorId": "brown-mocha",
      "groupId": "split-complementary",
      "name": "Nâu mocha bổ túc bộ ba",
      "description": "Kết hợp Nâu mocha với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "brown-mocha",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-mocha-neutral-01",
      "anchorColorId": "brown-mocha",
      "groupId": "neutral",
      "name": "Nâu mocha phối trung tính",
      "description": "Kết hợp Nâu mocha cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "brown-mocha",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-mocha-accent-01",
      "anchorColorId": "brown-mocha",
      "groupId": "accent",
      "name": "Nâu mocha tạo điểm nhấn",
      "description": "Giữ Nâu mocha cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "brown-mocha",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-mocha-earth-tone-01",
      "anchorColorId": "brown-mocha",
      "groupId": "earth-tone",
      "name": "Nâu mocha hòa sắc đất",
      "description": "Kết hợp Nâu mocha với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "brown-mocha",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-coffee-monochromatic-01",
      "anchorColorId": "brown-coffee",
      "groupId": "monochromatic",
      "name": "Nâu cà phê đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Nâu cà phê, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "brown-coffee",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-caramel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-tan",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-coffee-analogous-01",
      "anchorColorId": "brown-coffee",
      "groupId": "analogous",
      "name": "Nâu cà phê phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Nâu cà phê hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "brown-coffee",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-coffee-complementary-01",
      "anchorColorId": "brown-coffee",
      "groupId": "complementary",
      "name": "Nâu cà phê bổ túc cân bằng",
      "description": "Ghép Nâu cà phê với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "brown-coffee",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-coffee-split-complementary-01",
      "anchorColorId": "brown-coffee",
      "groupId": "split-complementary",
      "name": "Nâu cà phê bổ túc bộ ba",
      "description": "Kết hợp Nâu cà phê với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "brown-coffee",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-coffee-neutral-01",
      "anchorColorId": "brown-coffee",
      "groupId": "neutral",
      "name": "Nâu cà phê phối trung tính",
      "description": "Kết hợp Nâu cà phê cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "brown-coffee",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-coffee-accent-01",
      "anchorColorId": "brown-coffee",
      "groupId": "accent",
      "name": "Nâu cà phê tạo điểm nhấn",
      "description": "Giữ Nâu cà phê cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "brown-coffee",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-coffee-earth-tone-01",
      "anchorColorId": "brown-coffee",
      "groupId": "earth-tone",
      "name": "Nâu cà phê hòa sắc đất",
      "description": "Kết hợp Nâu cà phê với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "brown-coffee",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-chocolate-monochromatic-01",
      "anchorColorId": "brown-chocolate",
      "groupId": "monochromatic",
      "name": "Nâu chocolate đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Nâu chocolate, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "brown-chocolate",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-caramel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-tan",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-chocolate-analogous-01",
      "anchorColorId": "brown-chocolate",
      "groupId": "analogous",
      "name": "Nâu chocolate phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Nâu chocolate hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "brown-chocolate",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-chocolate-complementary-01",
      "anchorColorId": "brown-chocolate",
      "groupId": "complementary",
      "name": "Nâu chocolate bổ túc cân bằng",
      "description": "Ghép Nâu chocolate với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "brown-chocolate",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-chocolate-split-complementary-01",
      "anchorColorId": "brown-chocolate",
      "groupId": "split-complementary",
      "name": "Nâu chocolate bổ túc bộ ba",
      "description": "Kết hợp Nâu chocolate với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "brown-chocolate",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-chocolate-neutral-01",
      "anchorColorId": "brown-chocolate",
      "groupId": "neutral",
      "name": "Nâu chocolate phối trung tính",
      "description": "Kết hợp Nâu chocolate cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "brown-chocolate",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-chocolate-accent-01",
      "anchorColorId": "brown-chocolate",
      "groupId": "accent",
      "name": "Nâu chocolate tạo điểm nhấn",
      "description": "Giữ Nâu chocolate cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "brown-chocolate",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-chocolate-earth-tone-01",
      "anchorColorId": "brown-chocolate",
      "groupId": "earth-tone",
      "name": "Nâu chocolate hòa sắc đất",
      "description": "Kết hợp Nâu chocolate với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "brown-chocolate",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-espresso-monochromatic-01",
      "anchorColorId": "brown-espresso",
      "groupId": "monochromatic",
      "name": "Nâu espresso đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Nâu espresso, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "brown-espresso",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-caramel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-tan",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-espresso-analogous-01",
      "anchorColorId": "brown-espresso",
      "groupId": "analogous",
      "name": "Nâu espresso phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Nâu espresso hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "brown-espresso",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-butter",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-golden",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-espresso-complementary-01",
      "anchorColorId": "brown-espresso",
      "groupId": "complementary",
      "name": "Nâu espresso bổ túc cân bằng",
      "description": "Ghép Nâu espresso với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "brown-espresso",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-espresso-split-complementary-01",
      "anchorColorId": "brown-espresso",
      "groupId": "split-complementary",
      "name": "Nâu espresso bổ túc bộ ba",
      "description": "Kết hợp Nâu espresso với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "brown-espresso",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-espresso-neutral-01",
      "anchorColorId": "brown-espresso",
      "groupId": "neutral",
      "name": "Nâu espresso phối trung tính",
      "description": "Kết hợp Nâu espresso cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "brown-espresso",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "brown-espresso-accent-01",
      "anchorColorId": "brown-espresso",
      "groupId": "accent",
      "name": "Nâu espresso tạo điểm nhấn",
      "description": "Giữ Nâu espresso cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "brown-espresso",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "brown-espresso-earth-tone-01",
      "anchorColorId": "brown-espresso",
      "groupId": "earth-tone",
      "name": "Nâu espresso hòa sắc đất",
      "description": "Kết hợp Nâu espresso với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "brown-espresso",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-pinkish-monochromatic-01",
      "anchorColorId": "red-pinkish",
      "groupId": "monochromatic",
      "name": "Đỏ hồng đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Đỏ hồng, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "red-pinkish",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-wine",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-burgundy",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-pinkish-analogous-01",
      "anchorColorId": "red-pinkish",
      "groupId": "analogous",
      "name": "Đỏ hồng phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Đỏ hồng hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "red-pinkish",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-pinkish-complementary-01",
      "anchorColorId": "red-pinkish",
      "groupId": "complementary",
      "name": "Đỏ hồng bổ túc cân bằng",
      "description": "Ghép Đỏ hồng với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "red-pinkish",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-pinkish-split-complementary-01",
      "anchorColorId": "red-pinkish",
      "groupId": "split-complementary",
      "name": "Đỏ hồng bổ túc bộ ba",
      "description": "Kết hợp Đỏ hồng với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "red-pinkish",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-pinkish-triadic-01",
      "anchorColorId": "red-pinkish",
      "groupId": "triadic",
      "name": "Đỏ hồng phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Đỏ hồng, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "red-pinkish",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "red-pinkish-neutral-01",
      "anchorColorId": "red-pinkish",
      "groupId": "neutral",
      "name": "Đỏ hồng phối trung tính",
      "description": "Kết hợp Đỏ hồng cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "red-pinkish",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-pinkish-tonal-01",
      "anchorColorId": "red-pinkish",
      "groupId": "tonal",
      "name": "Đỏ hồng cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Đỏ hồng hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "red-pinkish",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-tan",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-caramel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-pinkish-color-blocking-01",
      "anchorColorId": "red-pinkish",
      "groupId": "color-blocking",
      "name": "Đỏ hồng phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Đỏ hồng, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "red-pinkish",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "red-classic-monochromatic-01",
      "anchorColorId": "red-classic",
      "groupId": "monochromatic",
      "name": "Đỏ tươi đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Đỏ tươi, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "red-classic",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-wine",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-burgundy",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-classic-analogous-01",
      "anchorColorId": "red-classic",
      "groupId": "analogous",
      "name": "Đỏ tươi phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Đỏ tươi hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "red-classic",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-classic-complementary-01",
      "anchorColorId": "red-classic",
      "groupId": "complementary",
      "name": "Đỏ tươi bổ túc cân bằng",
      "description": "Ghép Đỏ tươi với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "red-classic",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-classic-split-complementary-01",
      "anchorColorId": "red-classic",
      "groupId": "split-complementary",
      "name": "Đỏ tươi bổ túc bộ ba",
      "description": "Kết hợp Đỏ tươi với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "red-classic",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-classic-triadic-01",
      "anchorColorId": "red-classic",
      "groupId": "triadic",
      "name": "Đỏ tươi phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Đỏ tươi, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "red-classic",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "red-classic-neutral-01",
      "anchorColorId": "red-classic",
      "groupId": "neutral",
      "name": "Đỏ tươi phối trung tính",
      "description": "Kết hợp Đỏ tươi cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "red-classic",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-classic-tonal-01",
      "anchorColorId": "red-classic",
      "groupId": "tonal",
      "name": "Đỏ tươi cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Đỏ tươi hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "red-classic",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-mustard",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-classic-color-blocking-01",
      "anchorColorId": "red-classic",
      "groupId": "color-blocking",
      "name": "Đỏ tươi phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Đỏ tươi, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "red-classic",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "red-brick-monochromatic-01",
      "anchorColorId": "red-brick",
      "groupId": "monochromatic",
      "name": "Đỏ gạch đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Đỏ gạch, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "red-brick",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-brick-analogous-01",
      "anchorColorId": "red-brick",
      "groupId": "analogous",
      "name": "Đỏ gạch phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Đỏ gạch hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "red-brick",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-mustard",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-brick-complementary-01",
      "anchorColorId": "red-brick",
      "groupId": "complementary",
      "name": "Đỏ gạch bổ túc cân bằng",
      "description": "Ghép Đỏ gạch với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "red-brick",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-brick-split-complementary-01",
      "anchorColorId": "red-brick",
      "groupId": "split-complementary",
      "name": "Đỏ gạch bổ túc bộ ba",
      "description": "Kết hợp Đỏ gạch với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "red-brick",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-brick-triadic-01",
      "anchorColorId": "red-brick",
      "groupId": "triadic",
      "name": "Đỏ gạch phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Đỏ gạch, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "red-brick",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "red-brick-neutral-01",
      "anchorColorId": "red-brick",
      "groupId": "neutral",
      "name": "Đỏ gạch phối trung tính",
      "description": "Kết hợp Đỏ gạch cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "red-brick",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-brick-accent-01",
      "anchorColorId": "red-brick",
      "groupId": "accent",
      "name": "Đỏ gạch tạo điểm nhấn",
      "description": "Giữ Đỏ gạch cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "red-brick",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-brick-earth-tone-01",
      "anchorColorId": "red-brick",
      "groupId": "earth-tone",
      "name": "Đỏ gạch hòa sắc đất",
      "description": "Kết hợp Đỏ gạch với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "red-brick",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-brick-color-blocking-01",
      "anchorColorId": "red-brick",
      "groupId": "color-blocking",
      "name": "Đỏ gạch phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Đỏ gạch, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "red-brick",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "red-rust-monochromatic-01",
      "anchorColorId": "red-rust",
      "groupId": "monochromatic",
      "name": "Đỏ gỉ đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Đỏ gỉ, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "red-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-brick",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-rust-analogous-01",
      "anchorColorId": "red-rust",
      "groupId": "analogous",
      "name": "Đỏ gỉ phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Đỏ gỉ hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "red-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-mustard",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-rust-complementary-01",
      "anchorColorId": "red-rust",
      "groupId": "complementary",
      "name": "Đỏ gỉ bổ túc cân bằng",
      "description": "Ghép Đỏ gỉ với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "red-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-rust-split-complementary-01",
      "anchorColorId": "red-rust",
      "groupId": "split-complementary",
      "name": "Đỏ gỉ bổ túc bộ ba",
      "description": "Kết hợp Đỏ gỉ với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "red-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-rust-triadic-01",
      "anchorColorId": "red-rust",
      "groupId": "triadic",
      "name": "Đỏ gỉ phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Đỏ gỉ, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "red-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "red-rust-neutral-01",
      "anchorColorId": "red-rust",
      "groupId": "neutral",
      "name": "Đỏ gỉ phối trung tính",
      "description": "Kết hợp Đỏ gỉ cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "red-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-rust-accent-01",
      "anchorColorId": "red-rust",
      "groupId": "accent",
      "name": "Đỏ gỉ tạo điểm nhấn",
      "description": "Giữ Đỏ gỉ cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "red-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-rust-earth-tone-01",
      "anchorColorId": "red-rust",
      "groupId": "earth-tone",
      "name": "Đỏ gỉ hòa sắc đất",
      "description": "Kết hợp Đỏ gỉ với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "red-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-rust-color-blocking-01",
      "anchorColorId": "red-rust",
      "groupId": "color-blocking",
      "name": "Đỏ gỉ phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Đỏ gỉ, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "red-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "red-burgundy-monochromatic-01",
      "anchorColorId": "red-burgundy",
      "groupId": "monochromatic",
      "name": "Đỏ burgundy đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Đỏ burgundy, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "red-burgundy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-wine",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-burgundy-analogous-01",
      "anchorColorId": "red-burgundy",
      "groupId": "analogous",
      "name": "Đỏ burgundy phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Đỏ burgundy hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "red-burgundy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-burgundy-complementary-01",
      "anchorColorId": "red-burgundy",
      "groupId": "complementary",
      "name": "Đỏ burgundy bổ túc cân bằng",
      "description": "Ghép Đỏ burgundy với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "red-burgundy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-burgundy-split-complementary-01",
      "anchorColorId": "red-burgundy",
      "groupId": "split-complementary",
      "name": "Đỏ burgundy bổ túc bộ ba",
      "description": "Kết hợp Đỏ burgundy với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "red-burgundy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-burgundy-triadic-01",
      "anchorColorId": "red-burgundy",
      "groupId": "triadic",
      "name": "Đỏ burgundy phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Đỏ burgundy, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "red-burgundy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "red-burgundy-neutral-01",
      "anchorColorId": "red-burgundy",
      "groupId": "neutral",
      "name": "Đỏ burgundy phối trung tính",
      "description": "Kết hợp Đỏ burgundy cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "red-burgundy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-burgundy-accent-01",
      "anchorColorId": "red-burgundy",
      "groupId": "accent",
      "name": "Đỏ burgundy tạo điểm nhấn",
      "description": "Giữ Đỏ burgundy cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "red-burgundy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-burgundy-color-blocking-01",
      "anchorColorId": "red-burgundy",
      "groupId": "color-blocking",
      "name": "Đỏ burgundy phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Đỏ burgundy, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "red-burgundy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "red-wine-monochromatic-01",
      "anchorColorId": "red-wine",
      "groupId": "monochromatic",
      "name": "Đỏ rượu vang đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Đỏ rượu vang, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "red-wine",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-burgundy",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-wine-analogous-01",
      "anchorColorId": "red-wine",
      "groupId": "analogous",
      "name": "Đỏ rượu vang phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Đỏ rượu vang hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "red-wine",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "orange-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-wine-complementary-01",
      "anchorColorId": "red-wine",
      "groupId": "complementary",
      "name": "Đỏ rượu vang bổ túc cân bằng",
      "description": "Ghép Đỏ rượu vang với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "red-wine",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-wine-split-complementary-01",
      "anchorColorId": "red-wine",
      "groupId": "split-complementary",
      "name": "Đỏ rượu vang bổ túc bộ ba",
      "description": "Kết hợp Đỏ rượu vang với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "red-wine",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-wine-triadic-01",
      "anchorColorId": "red-wine",
      "groupId": "triadic",
      "name": "Đỏ rượu vang phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Đỏ rượu vang, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "red-wine",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "red-wine-neutral-01",
      "anchorColorId": "red-wine",
      "groupId": "neutral",
      "name": "Đỏ rượu vang phối trung tính",
      "description": "Kết hợp Đỏ rượu vang cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "red-wine",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "red-wine-accent-01",
      "anchorColorId": "red-wine",
      "groupId": "accent",
      "name": "Đỏ rượu vang tạo điểm nhấn",
      "description": "Giữ Đỏ rượu vang cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "red-wine",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "red-wine-color-blocking-01",
      "anchorColorId": "red-wine",
      "groupId": "color-blocking",
      "name": "Đỏ rượu vang phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Đỏ rượu vang, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "red-wine",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "orange-peach-monochromatic-01",
      "anchorColorId": "orange-peach",
      "groupId": "monochromatic",
      "name": "Đào đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Đào, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "orange-peach",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-peach-analogous-01",
      "anchorColorId": "orange-peach",
      "groupId": "analogous",
      "name": "Đào phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Đào hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "orange-peach",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-peach-complementary-01",
      "anchorColorId": "orange-peach",
      "groupId": "complementary",
      "name": "Đào bổ túc cân bằng",
      "description": "Ghép Đào với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "orange-peach",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-peach-split-complementary-01",
      "anchorColorId": "orange-peach",
      "groupId": "split-complementary",
      "name": "Đào bổ túc bộ ba",
      "description": "Kết hợp Đào với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "orange-peach",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-peach-triadic-01",
      "anchorColorId": "orange-peach",
      "groupId": "triadic",
      "name": "Đào phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Đào, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "orange-peach",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "orange-peach-neutral-01",
      "anchorColorId": "orange-peach",
      "groupId": "neutral",
      "name": "Đào phối trung tính",
      "description": "Kết hợp Đào cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "orange-peach",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-peach-tonal-01",
      "anchorColorId": "orange-peach",
      "groupId": "tonal",
      "name": "Đào cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Đào hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "orange-peach",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-butter",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-cream",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-peach-accent-01",
      "anchorColorId": "orange-peach",
      "groupId": "accent",
      "name": "Đào tạo điểm nhấn",
      "description": "Giữ Đào cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "orange-peach",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-peach-color-blocking-01",
      "anchorColorId": "orange-peach",
      "groupId": "color-blocking",
      "name": "Đào phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Đào, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "orange-peach",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "orange-apricot-monochromatic-01",
      "anchorColorId": "orange-apricot",
      "groupId": "monochromatic",
      "name": "Cam mơ đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Cam mơ, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "orange-apricot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-peach",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-apricot-analogous-01",
      "anchorColorId": "orange-apricot",
      "groupId": "analogous",
      "name": "Cam mơ phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Cam mơ hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "orange-apricot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-apricot-complementary-01",
      "anchorColorId": "orange-apricot",
      "groupId": "complementary",
      "name": "Cam mơ bổ túc cân bằng",
      "description": "Ghép Cam mơ với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "orange-apricot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-apricot-split-complementary-01",
      "anchorColorId": "orange-apricot",
      "groupId": "split-complementary",
      "name": "Cam mơ bổ túc bộ ba",
      "description": "Kết hợp Cam mơ với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "orange-apricot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-apricot-triadic-01",
      "anchorColorId": "orange-apricot",
      "groupId": "triadic",
      "name": "Cam mơ phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Cam mơ, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "orange-apricot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "orange-apricot-neutral-01",
      "anchorColorId": "orange-apricot",
      "groupId": "neutral",
      "name": "Cam mơ phối trung tính",
      "description": "Kết hợp Cam mơ cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "orange-apricot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-apricot-tonal-01",
      "anchorColorId": "orange-apricot",
      "groupId": "tonal",
      "name": "Cam mơ cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Cam mơ hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "orange-apricot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-butter",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-apricot-accent-01",
      "anchorColorId": "orange-apricot",
      "groupId": "accent",
      "name": "Cam mơ tạo điểm nhấn",
      "description": "Giữ Cam mơ cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "orange-apricot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-apricot-color-blocking-01",
      "anchorColorId": "orange-apricot",
      "groupId": "color-blocking",
      "name": "Cam mơ phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Cam mơ, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "orange-apricot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "orange-coral-monochromatic-01",
      "anchorColorId": "orange-coral",
      "groupId": "monochromatic",
      "name": "Cam san hô đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Cam san hô, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "orange-coral",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-peach",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-coral-analogous-01",
      "anchorColorId": "orange-coral",
      "groupId": "analogous",
      "name": "Cam san hô phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Cam san hô hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "orange-coral",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-mustard",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-coral-complementary-01",
      "anchorColorId": "orange-coral",
      "groupId": "complementary",
      "name": "Cam san hô bổ túc cân bằng",
      "description": "Ghép Cam san hô với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "orange-coral",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-coral-split-complementary-01",
      "anchorColorId": "orange-coral",
      "groupId": "split-complementary",
      "name": "Cam san hô bổ túc bộ ba",
      "description": "Kết hợp Cam san hô với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "orange-coral",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-coral-triadic-01",
      "anchorColorId": "orange-coral",
      "groupId": "triadic",
      "name": "Cam san hô phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Cam san hô, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "orange-coral",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "orange-coral-neutral-01",
      "anchorColorId": "orange-coral",
      "groupId": "neutral",
      "name": "Cam san hô phối trung tính",
      "description": "Kết hợp Cam san hô cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "orange-coral",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-coral-tonal-01",
      "anchorColorId": "orange-coral",
      "groupId": "tonal",
      "name": "Cam san hô cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Cam san hô hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "orange-coral",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-caramel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-coral-color-blocking-01",
      "anchorColorId": "orange-coral",
      "groupId": "color-blocking",
      "name": "Cam san hô phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Cam san hô, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "orange-coral",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "orange-terracotta-monochromatic-01",
      "anchorColorId": "orange-terracotta",
      "groupId": "monochromatic",
      "name": "Cam đất đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Cam đất, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "orange-terracotta",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-peach",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-terracotta-analogous-01",
      "anchorColorId": "orange-terracotta",
      "groupId": "analogous",
      "name": "Cam đất phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Cam đất hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "orange-terracotta",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-butter",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-golden",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-terracotta-complementary-01",
      "anchorColorId": "orange-terracotta",
      "groupId": "complementary",
      "name": "Cam đất bổ túc cân bằng",
      "description": "Ghép Cam đất với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "orange-terracotta",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-terracotta-split-complementary-01",
      "anchorColorId": "orange-terracotta",
      "groupId": "split-complementary",
      "name": "Cam đất bổ túc bộ ba",
      "description": "Kết hợp Cam đất với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "orange-terracotta",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-terracotta-triadic-01",
      "anchorColorId": "orange-terracotta",
      "groupId": "triadic",
      "name": "Cam đất phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Cam đất, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "orange-terracotta",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "orange-terracotta-neutral-01",
      "anchorColorId": "orange-terracotta",
      "groupId": "neutral",
      "name": "Cam đất phối trung tính",
      "description": "Kết hợp Cam đất cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "orange-terracotta",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-terracotta-tonal-01",
      "anchorColorId": "orange-terracotta",
      "groupId": "tonal",
      "name": "Cam đất cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Cam đất hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "orange-terracotta",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-tan",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-caramel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-terracotta-accent-01",
      "anchorColorId": "orange-terracotta",
      "groupId": "accent",
      "name": "Cam đất tạo điểm nhấn",
      "description": "Giữ Cam đất cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "orange-terracotta",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-terracotta-earth-tone-01",
      "anchorColorId": "orange-terracotta",
      "groupId": "earth-tone",
      "name": "Cam đất hòa sắc đất",
      "description": "Kết hợp Cam đất với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "orange-terracotta",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-terracotta-color-blocking-01",
      "anchorColorId": "orange-terracotta",
      "groupId": "color-blocking",
      "name": "Cam đất phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Cam đất, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "orange-terracotta",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "orange-burnt-monochromatic-01",
      "anchorColorId": "orange-burnt",
      "groupId": "monochromatic",
      "name": "Cam cháy đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Cam cháy, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "orange-burnt",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-peach",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-burnt-analogous-01",
      "anchorColorId": "orange-burnt",
      "groupId": "analogous",
      "name": "Cam cháy phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Cam cháy hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "orange-burnt",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-golden",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-burnt-complementary-01",
      "anchorColorId": "orange-burnt",
      "groupId": "complementary",
      "name": "Cam cháy bổ túc cân bằng",
      "description": "Ghép Cam cháy với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "orange-burnt",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-burnt-split-complementary-01",
      "anchorColorId": "orange-burnt",
      "groupId": "split-complementary",
      "name": "Cam cháy bổ túc bộ ba",
      "description": "Kết hợp Cam cháy với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "orange-burnt",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-burnt-triadic-01",
      "anchorColorId": "orange-burnt",
      "groupId": "triadic",
      "name": "Cam cháy phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Cam cháy, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "orange-burnt",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "orange-burnt-neutral-01",
      "anchorColorId": "orange-burnt",
      "groupId": "neutral",
      "name": "Cam cháy phối trung tính",
      "description": "Kết hợp Cam cháy cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "orange-burnt",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-burnt-accent-01",
      "anchorColorId": "orange-burnt",
      "groupId": "accent",
      "name": "Cam cháy tạo điểm nhấn",
      "description": "Giữ Cam cháy cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "orange-burnt",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-burnt-earth-tone-01",
      "anchorColorId": "orange-burnt",
      "groupId": "earth-tone",
      "name": "Cam cháy hòa sắc đất",
      "description": "Kết hợp Cam cháy với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "orange-burnt",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-burnt-color-blocking-01",
      "anchorColorId": "orange-burnt",
      "groupId": "color-blocking",
      "name": "Cam cháy phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Cam cháy, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "orange-burnt",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "orange-rust-monochromatic-01",
      "anchorColorId": "orange-rust",
      "groupId": "monochromatic",
      "name": "Cam gỉ đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Cam gỉ, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "orange-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-peach",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-burnt",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-rust-analogous-01",
      "anchorColorId": "orange-rust",
      "groupId": "analogous",
      "name": "Cam gỉ phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Cam gỉ hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "orange-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-butter",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-golden",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-rust-complementary-01",
      "anchorColorId": "orange-rust",
      "groupId": "complementary",
      "name": "Cam gỉ bổ túc cân bằng",
      "description": "Ghép Cam gỉ với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "orange-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-rust-split-complementary-01",
      "anchorColorId": "orange-rust",
      "groupId": "split-complementary",
      "name": "Cam gỉ bổ túc bộ ba",
      "description": "Kết hợp Cam gỉ với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "orange-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-rust-triadic-01",
      "anchorColorId": "orange-rust",
      "groupId": "triadic",
      "name": "Cam gỉ phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Cam gỉ, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "orange-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "orange-rust-neutral-01",
      "anchorColorId": "orange-rust",
      "groupId": "neutral",
      "name": "Cam gỉ phối trung tính",
      "description": "Kết hợp Cam gỉ cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "orange-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-rust-accent-01",
      "anchorColorId": "orange-rust",
      "groupId": "accent",
      "name": "Cam gỉ tạo điểm nhấn",
      "description": "Giữ Cam gỉ cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "orange-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "orange-rust-earth-tone-01",
      "anchorColorId": "orange-rust",
      "groupId": "earth-tone",
      "name": "Cam gỉ hòa sắc đất",
      "description": "Kết hợp Cam gỉ với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "orange-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "orange-rust-color-blocking-01",
      "anchorColorId": "orange-rust",
      "groupId": "color-blocking",
      "name": "Cam gỉ phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Cam gỉ, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "orange-rust",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "yellow-pale-monochromatic-01",
      "anchorColorId": "yellow-pale",
      "groupId": "monochromatic",
      "name": "Vàng nhạt đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Vàng nhạt, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "yellow-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-butter",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-golden",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-mustard",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-pale-analogous-01",
      "anchorColorId": "yellow-pale",
      "groupId": "analogous",
      "name": "Vàng nhạt phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Vàng nhạt hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "yellow-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "orange-peach",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-burnt",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-pale-complementary-01",
      "anchorColorId": "yellow-pale",
      "groupId": "complementary",
      "name": "Vàng nhạt bổ túc cân bằng",
      "description": "Ghép Vàng nhạt với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "yellow-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "yellow-pale-split-complementary-01",
      "anchorColorId": "yellow-pale",
      "groupId": "split-complementary",
      "name": "Vàng nhạt bổ túc bộ ba",
      "description": "Kết hợp Vàng nhạt với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "yellow-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "yellow-pale-triadic-01",
      "anchorColorId": "yellow-pale",
      "groupId": "triadic",
      "name": "Vàng nhạt phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Vàng nhạt, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "yellow-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "yellow-pale-neutral-01",
      "anchorColorId": "yellow-pale",
      "groupId": "neutral",
      "name": "Vàng nhạt phối trung tính",
      "description": "Kết hợp Vàng nhạt cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "yellow-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-pale-tonal-01",
      "anchorColorId": "yellow-pale",
      "groupId": "tonal",
      "name": "Vàng nhạt cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Vàng nhạt hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "yellow-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-peach",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "yellow-butter",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-pale-accent-01",
      "anchorColorId": "yellow-pale",
      "groupId": "accent",
      "name": "Vàng nhạt tạo điểm nhấn",
      "description": "Giữ Vàng nhạt cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "yellow-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "red-burgundy",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "yellow-pale-color-blocking-01",
      "anchorColorId": "yellow-pale",
      "groupId": "color-blocking",
      "name": "Vàng nhạt phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Vàng nhạt, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "yellow-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "yellow-butter-monochromatic-01",
      "anchorColorId": "yellow-butter",
      "groupId": "monochromatic",
      "name": "Vàng bơ đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Vàng bơ, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "yellow-butter",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-golden",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-mustard",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-butter-analogous-01",
      "anchorColorId": "yellow-butter",
      "groupId": "analogous",
      "name": "Vàng bơ phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Vàng bơ hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "yellow-butter",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-butter-complementary-01",
      "anchorColorId": "yellow-butter",
      "groupId": "complementary",
      "name": "Vàng bơ bổ túc cân bằng",
      "description": "Ghép Vàng bơ với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "yellow-butter",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "yellow-butter-split-complementary-01",
      "anchorColorId": "yellow-butter",
      "groupId": "split-complementary",
      "name": "Vàng bơ bổ túc bộ ba",
      "description": "Kết hợp Vàng bơ với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "yellow-butter",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "yellow-butter-triadic-01",
      "anchorColorId": "yellow-butter",
      "groupId": "triadic",
      "name": "Vàng bơ phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Vàng bơ, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "yellow-butter",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "yellow-butter-neutral-01",
      "anchorColorId": "yellow-butter",
      "groupId": "neutral",
      "name": "Vàng bơ phối trung tính",
      "description": "Kết hợp Vàng bơ cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "yellow-butter",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-butter-tonal-01",
      "anchorColorId": "yellow-butter",
      "groupId": "tonal",
      "name": "Vàng bơ cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Vàng bơ hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "yellow-butter",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-peach",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-butter-accent-01",
      "anchorColorId": "yellow-butter",
      "groupId": "accent",
      "name": "Vàng bơ tạo điểm nhấn",
      "description": "Giữ Vàng bơ cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "yellow-butter",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "red-burgundy",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "yellow-butter-color-blocking-01",
      "anchorColorId": "yellow-butter",
      "groupId": "color-blocking",
      "name": "Vàng bơ phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Vàng bơ, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "yellow-butter",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "yellow-lemon-monochromatic-01",
      "anchorColorId": "yellow-lemon",
      "groupId": "monochromatic",
      "name": "Vàng chanh đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Vàng chanh, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "yellow-lemon",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-butter",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-golden",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-mustard",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-lemon-analogous-01",
      "anchorColorId": "yellow-lemon",
      "groupId": "analogous",
      "name": "Vàng chanh phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Vàng chanh hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "yellow-lemon",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-lemon-complementary-01",
      "anchorColorId": "yellow-lemon",
      "groupId": "complementary",
      "name": "Vàng chanh bổ túc cân bằng",
      "description": "Ghép Vàng chanh với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "yellow-lemon",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "yellow-lemon-split-complementary-01",
      "anchorColorId": "yellow-lemon",
      "groupId": "split-complementary",
      "name": "Vàng chanh bổ túc bộ ba",
      "description": "Kết hợp Vàng chanh với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "yellow-lemon",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "yellow-lemon-triadic-01",
      "anchorColorId": "yellow-lemon",
      "groupId": "triadic",
      "name": "Vàng chanh phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Vàng chanh, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "yellow-lemon",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "yellow-lemon-neutral-01",
      "anchorColorId": "yellow-lemon",
      "groupId": "neutral",
      "name": "Vàng chanh phối trung tính",
      "description": "Kết hợp Vàng chanh cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "yellow-lemon",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-lemon-accent-01",
      "anchorColorId": "yellow-lemon",
      "groupId": "accent",
      "name": "Vàng chanh tạo điểm nhấn",
      "description": "Giữ Vàng chanh cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "yellow-lemon",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "red-burgundy",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "yellow-lemon-color-blocking-01",
      "anchorColorId": "yellow-lemon",
      "groupId": "color-blocking",
      "name": "Vàng chanh phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Vàng chanh, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "yellow-lemon",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "yellow-mustard-monochromatic-01",
      "anchorColorId": "yellow-mustard",
      "groupId": "monochromatic",
      "name": "Vàng mù tạt đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Vàng mù tạt, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "yellow-mustard",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-butter",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-golden",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-mustard-analogous-01",
      "anchorColorId": "yellow-mustard",
      "groupId": "analogous",
      "name": "Vàng mù tạt phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Vàng mù tạt hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "yellow-mustard",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-mustard-complementary-01",
      "anchorColorId": "yellow-mustard",
      "groupId": "complementary",
      "name": "Vàng mù tạt bổ túc cân bằng",
      "description": "Ghép Vàng mù tạt với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "yellow-mustard",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "yellow-mustard-split-complementary-01",
      "anchorColorId": "yellow-mustard",
      "groupId": "split-complementary",
      "name": "Vàng mù tạt bổ túc bộ ba",
      "description": "Kết hợp Vàng mù tạt với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "yellow-mustard",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "yellow-mustard-triadic-01",
      "anchorColorId": "yellow-mustard",
      "groupId": "triadic",
      "name": "Vàng mù tạt phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Vàng mù tạt, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "yellow-mustard",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "yellow-mustard-neutral-01",
      "anchorColorId": "yellow-mustard",
      "groupId": "neutral",
      "name": "Vàng mù tạt phối trung tính",
      "description": "Kết hợp Vàng mù tạt cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "yellow-mustard",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-mustard-tonal-01",
      "anchorColorId": "yellow-mustard",
      "groupId": "tonal",
      "name": "Vàng mù tạt cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Vàng mù tạt hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "yellow-mustard",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "red-brick",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-mustard-accent-01",
      "anchorColorId": "yellow-mustard",
      "groupId": "accent",
      "name": "Vàng mù tạt tạo điểm nhấn",
      "description": "Giữ Vàng mù tạt cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "yellow-mustard",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "yellow-mustard-earth-tone-01",
      "anchorColorId": "yellow-mustard",
      "groupId": "earth-tone",
      "name": "Vàng mù tạt hòa sắc đất",
      "description": "Kết hợp Vàng mù tạt với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "yellow-mustard",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-mustard-color-blocking-01",
      "anchorColorId": "yellow-mustard",
      "groupId": "color-blocking",
      "name": "Vàng mù tạt phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Vàng mù tạt, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "yellow-mustard",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "yellow-golden-monochromatic-01",
      "anchorColorId": "yellow-golden",
      "groupId": "monochromatic",
      "name": "Vàng ánh kim đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Vàng ánh kim, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "yellow-golden",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-butter",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-mustard",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-golden-analogous-01",
      "anchorColorId": "yellow-golden",
      "groupId": "analogous",
      "name": "Vàng ánh kim phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Vàng ánh kim hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "yellow-golden",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-golden-complementary-01",
      "anchorColorId": "yellow-golden",
      "groupId": "complementary",
      "name": "Vàng ánh kim bổ túc cân bằng",
      "description": "Ghép Vàng ánh kim với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "yellow-golden",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "yellow-golden-split-complementary-01",
      "anchorColorId": "yellow-golden",
      "groupId": "split-complementary",
      "name": "Vàng ánh kim bổ túc bộ ba",
      "description": "Kết hợp Vàng ánh kim với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "yellow-golden",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "yellow-golden-triadic-01",
      "anchorColorId": "yellow-golden",
      "groupId": "triadic",
      "name": "Vàng ánh kim phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Vàng ánh kim, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "yellow-golden",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "yellow-golden-neutral-01",
      "anchorColorId": "yellow-golden",
      "groupId": "neutral",
      "name": "Vàng ánh kim phối trung tính",
      "description": "Kết hợp Vàng ánh kim cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "yellow-golden",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-golden-tonal-01",
      "anchorColorId": "yellow-golden",
      "groupId": "tonal",
      "name": "Vàng ánh kim cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Vàng ánh kim hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "yellow-golden",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "yellow-golden-color-blocking-01",
      "anchorColorId": "yellow-golden",
      "groupId": "color-blocking",
      "name": "Vàng ánh kim phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Vàng ánh kim, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "yellow-golden",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-mint-pale-monochromatic-01",
      "anchorColorId": "green-mint-pale",
      "groupId": "monochromatic",
      "name": "Mint nhạt đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Mint nhạt, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "green-mint-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-mint-pale-analogous-01",
      "anchorColorId": "green-mint-pale",
      "groupId": "analogous",
      "name": "Mint nhạt phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Mint nhạt hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "green-mint-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-mint-pale-complementary-01",
      "anchorColorId": "green-mint-pale",
      "groupId": "complementary",
      "name": "Mint nhạt bổ túc cân bằng",
      "description": "Ghép Mint nhạt với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "green-mint-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-mint-pale-split-complementary-01",
      "anchorColorId": "green-mint-pale",
      "groupId": "split-complementary",
      "name": "Mint nhạt bổ túc bộ ba",
      "description": "Kết hợp Mint nhạt với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "green-mint-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-mint-pale-triadic-01",
      "anchorColorId": "green-mint-pale",
      "groupId": "triadic",
      "name": "Mint nhạt phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Mint nhạt, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "green-mint-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "orange-peach",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-mint-pale-neutral-01",
      "anchorColorId": "green-mint-pale",
      "groupId": "neutral",
      "name": "Mint nhạt phối trung tính",
      "description": "Kết hợp Mint nhạt cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "green-mint-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-mint-pale-tonal-01",
      "anchorColorId": "green-mint-pale",
      "groupId": "tonal",
      "name": "Mint nhạt cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Mint nhạt hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "green-mint-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "beige-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-mint-pale-accent-01",
      "anchorColorId": "green-mint-pale",
      "groupId": "accent",
      "name": "Mint nhạt tạo điểm nhấn",
      "description": "Giữ Mint nhạt cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "green-mint-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-mint-pale-pastel-01",
      "anchorColorId": "green-mint-pale",
      "groupId": "pastel",
      "name": "Mint nhạt pastel nhẹ nhàng",
      "description": "Phối Mint nhạt cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "green-mint-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-soft",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-mint-pale-color-blocking-01",
      "anchorColorId": "green-mint-pale",
      "groupId": "color-blocking",
      "name": "Mint nhạt phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Mint nhạt, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "green-mint-pale",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-mint-monochromatic-01",
      "anchorColorId": "green-mint",
      "groupId": "monochromatic",
      "name": "Xanh mint đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh mint, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "green-mint",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-mint-analogous-01",
      "anchorColorId": "green-mint",
      "groupId": "analogous",
      "name": "Xanh mint phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh mint hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "green-mint",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-mint-complementary-01",
      "anchorColorId": "green-mint",
      "groupId": "complementary",
      "name": "Xanh mint bổ túc cân bằng",
      "description": "Ghép Xanh mint với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "green-mint",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-burgundy",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-mint-split-complementary-01",
      "anchorColorId": "green-mint",
      "groupId": "split-complementary",
      "name": "Xanh mint bổ túc bộ ba",
      "description": "Kết hợp Xanh mint với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "green-mint",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-mint-triadic-01",
      "anchorColorId": "green-mint",
      "groupId": "triadic",
      "name": "Xanh mint phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh mint, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "green-mint",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-camel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-mint-neutral-01",
      "anchorColorId": "green-mint",
      "groupId": "neutral",
      "name": "Xanh mint phối trung tính",
      "description": "Kết hợp Xanh mint cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "green-mint",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-mint-tonal-01",
      "anchorColorId": "green-mint",
      "groupId": "tonal",
      "name": "Xanh mint cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Xanh mint hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "green-mint",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-mint-accent-01",
      "anchorColorId": "green-mint",
      "groupId": "accent",
      "name": "Xanh mint tạo điểm nhấn",
      "description": "Giữ Xanh mint cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "green-mint",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-mint-pastel-01",
      "anchorColorId": "green-mint",
      "groupId": "pastel",
      "name": "Xanh mint pastel nhẹ nhàng",
      "description": "Phối Xanh mint cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "green-mint",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-soft",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-mint-color-blocking-01",
      "anchorColorId": "green-mint",
      "groupId": "color-blocking",
      "name": "Xanh mint phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Xanh mint, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "green-mint",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-pastel-analogous-01",
      "anchorColorId": "green-pastel",
      "groupId": "analogous",
      "name": "Xanh lá pastel phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh lá pastel hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "green-pastel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-pastel-complementary-01",
      "anchorColorId": "green-pastel",
      "groupId": "complementary",
      "name": "Xanh lá pastel bổ túc cân bằng",
      "description": "Ghép Xanh lá pastel với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "green-pastel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-pastel-split-complementary-01",
      "anchorColorId": "green-pastel",
      "groupId": "split-complementary",
      "name": "Xanh lá pastel bổ túc bộ ba",
      "description": "Kết hợp Xanh lá pastel với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "green-pastel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-pastel-triadic-01",
      "anchorColorId": "green-pastel",
      "groupId": "triadic",
      "name": "Xanh lá pastel phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh lá pastel, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "green-pastel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-pastel-neutral-01",
      "anchorColorId": "green-pastel",
      "groupId": "neutral",
      "name": "Xanh lá pastel phối trung tính",
      "description": "Kết hợp Xanh lá pastel cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "green-pastel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-pastel-tonal-01",
      "anchorColorId": "green-pastel",
      "groupId": "tonal",
      "name": "Xanh lá pastel cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Xanh lá pastel hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "green-pastel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-silver",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "beige-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-pastel-accent-01",
      "anchorColorId": "green-pastel",
      "groupId": "accent",
      "name": "Xanh lá pastel tạo điểm nhấn",
      "description": "Giữ Xanh lá pastel cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "green-pastel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-pastel-pastel-01",
      "anchorColorId": "green-pastel",
      "groupId": "pastel",
      "name": "Xanh lá pastel pastel nhẹ nhàng",
      "description": "Phối Xanh lá pastel cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "green-pastel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-soft",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-pistachio-monochromatic-01",
      "anchorColorId": "green-pistachio",
      "groupId": "monochromatic",
      "name": "Xanh pistachio đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh pistachio, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "green-pistachio",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-pistachio-analogous-01",
      "anchorColorId": "green-pistachio",
      "groupId": "analogous",
      "name": "Xanh pistachio phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh pistachio hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "green-pistachio",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-golden",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-pistachio-complementary-01",
      "anchorColorId": "green-pistachio",
      "groupId": "complementary",
      "name": "Xanh pistachio bổ túc cân bằng",
      "description": "Ghép Xanh pistachio với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "green-pistachio",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-pistachio-split-complementary-01",
      "anchorColorId": "green-pistachio",
      "groupId": "split-complementary",
      "name": "Xanh pistachio bổ túc bộ ba",
      "description": "Kết hợp Xanh pistachio với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "green-pistachio",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-pistachio-triadic-01",
      "anchorColorId": "green-pistachio",
      "groupId": "triadic",
      "name": "Xanh pistachio phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh pistachio, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "green-pistachio",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-pistachio-neutral-01",
      "anchorColorId": "green-pistachio",
      "groupId": "neutral",
      "name": "Xanh pistachio phối trung tính",
      "description": "Kết hợp Xanh pistachio cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "green-pistachio",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-pistachio-tonal-01",
      "anchorColorId": "green-pistachio",
      "groupId": "tonal",
      "name": "Xanh pistachio cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Xanh pistachio hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "green-pistachio",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-pistachio-accent-01",
      "anchorColorId": "green-pistachio",
      "groupId": "accent",
      "name": "Xanh pistachio tạo điểm nhấn",
      "description": "Giữ Xanh pistachio cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "green-pistachio",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "orange-burnt",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "red-burgundy",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-pistachio-pastel-01",
      "anchorColorId": "green-pistachio",
      "groupId": "pastel",
      "name": "Xanh pistachio pastel nhẹ nhàng",
      "description": "Phối Xanh pistachio cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "green-pistachio",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-soft",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-pistachio-earth-tone-01",
      "anchorColorId": "green-pistachio",
      "groupId": "earth-tone",
      "name": "Xanh pistachio hòa sắc đất",
      "description": "Kết hợp Xanh pistachio với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "green-pistachio",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "orange-burnt",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-pistachio-color-blocking-01",
      "anchorColorId": "green-pistachio",
      "groupId": "color-blocking",
      "name": "Xanh pistachio phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Xanh pistachio, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "green-pistachio",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-sage-monochromatic-01",
      "anchorColorId": "green-sage",
      "groupId": "monochromatic",
      "name": "Xanh sage đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh sage, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "green-sage",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-sage-analogous-01",
      "anchorColorId": "green-sage",
      "groupId": "analogous",
      "name": "Xanh sage phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh sage hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "green-sage",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-sage-complementary-01",
      "anchorColorId": "green-sage",
      "groupId": "complementary",
      "name": "Xanh sage bổ túc cân bằng",
      "description": "Ghép Xanh sage với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "green-sage",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-sage-split-complementary-01",
      "anchorColorId": "green-sage",
      "groupId": "split-complementary",
      "name": "Xanh sage bổ túc bộ ba",
      "description": "Kết hợp Xanh sage với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "green-sage",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-sage-triadic-01",
      "anchorColorId": "green-sage",
      "groupId": "triadic",
      "name": "Xanh sage phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh sage, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "green-sage",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-sage-neutral-01",
      "anchorColorId": "green-sage",
      "groupId": "neutral",
      "name": "Xanh sage phối trung tính",
      "description": "Kết hợp Xanh sage cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "green-sage",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-sage-tonal-01",
      "anchorColorId": "green-sage",
      "groupId": "tonal",
      "name": "Xanh sage cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Xanh sage hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "green-sage",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-greige",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-sage-accent-01",
      "anchorColorId": "green-sage",
      "groupId": "accent",
      "name": "Xanh sage tạo điểm nhấn",
      "description": "Giữ Xanh sage cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "green-sage",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "orange-burnt",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "red-burgundy",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-eucalyptus-monochromatic-01",
      "anchorColorId": "green-eucalyptus",
      "groupId": "monochromatic",
      "name": "Xanh bạch đàn đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh bạch đàn, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "green-eucalyptus",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-eucalyptus-analogous-01",
      "anchorColorId": "green-eucalyptus",
      "groupId": "analogous",
      "name": "Xanh bạch đàn phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh bạch đàn hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "green-eucalyptus",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-eucalyptus-complementary-01",
      "anchorColorId": "green-eucalyptus",
      "groupId": "complementary",
      "name": "Xanh bạch đàn bổ túc cân bằng",
      "description": "Ghép Xanh bạch đàn với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "green-eucalyptus",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-eucalyptus-split-complementary-01",
      "anchorColorId": "green-eucalyptus",
      "groupId": "split-complementary",
      "name": "Xanh bạch đàn bổ túc bộ ba",
      "description": "Kết hợp Xanh bạch đàn với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "green-eucalyptus",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-eucalyptus-triadic-01",
      "anchorColorId": "green-eucalyptus",
      "groupId": "triadic",
      "name": "Xanh bạch đàn phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh bạch đàn, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "green-eucalyptus",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-eucalyptus-neutral-01",
      "anchorColorId": "green-eucalyptus",
      "groupId": "neutral",
      "name": "Xanh bạch đàn phối trung tính",
      "description": "Kết hợp Xanh bạch đàn cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "green-eucalyptus",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-eucalyptus-tonal-01",
      "anchorColorId": "green-eucalyptus",
      "groupId": "tonal",
      "name": "Xanh bạch đàn cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Xanh bạch đàn hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "green-eucalyptus",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-mushroom",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "grey-stone",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-greige",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-olive-light-monochromatic-01",
      "anchorColorId": "green-olive-light",
      "groupId": "monochromatic",
      "name": "Xanh olive nhạt đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh olive nhạt, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "green-olive-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-olive-light-analogous-01",
      "anchorColorId": "green-olive-light",
      "groupId": "analogous",
      "name": "Xanh olive nhạt phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh olive nhạt hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "green-olive-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-mustard",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-olive-light-complementary-01",
      "anchorColorId": "green-olive-light",
      "groupId": "complementary",
      "name": "Xanh olive nhạt bổ túc cân bằng",
      "description": "Ghép Xanh olive nhạt với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "green-olive-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-olive-light-split-complementary-01",
      "anchorColorId": "green-olive-light",
      "groupId": "split-complementary",
      "name": "Xanh olive nhạt bổ túc bộ ba",
      "description": "Kết hợp Xanh olive nhạt với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "green-olive-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-olive-light-triadic-01",
      "anchorColorId": "green-olive-light",
      "groupId": "triadic",
      "name": "Xanh olive nhạt phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh olive nhạt, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "green-olive-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-olive-light-neutral-01",
      "anchorColorId": "green-olive-light",
      "groupId": "neutral",
      "name": "Xanh olive nhạt phối trung tính",
      "description": "Kết hợp Xanh olive nhạt cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "green-olive-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-olive-light-tonal-01",
      "anchorColorId": "green-olive-light",
      "groupId": "tonal",
      "name": "Xanh olive nhạt cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Xanh olive nhạt hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "green-olive-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-mushroom",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "brown-tan",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-olive-light-accent-01",
      "anchorColorId": "green-olive-light",
      "groupId": "accent",
      "name": "Xanh olive nhạt tạo điểm nhấn",
      "description": "Giữ Xanh olive nhạt cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "green-olive-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "red-burgundy",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-olive-light-earth-tone-01",
      "anchorColorId": "green-olive-light",
      "groupId": "earth-tone",
      "name": "Xanh olive nhạt hòa sắc đất",
      "description": "Kết hợp Xanh olive nhạt với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "green-olive-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-olive-monochromatic-01",
      "anchorColorId": "green-olive",
      "groupId": "monochromatic",
      "name": "Xanh olive đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh olive, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "green-olive",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-olive-analogous-01",
      "anchorColorId": "green-olive",
      "groupId": "analogous",
      "name": "Xanh olive phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh olive hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "green-olive",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-butter",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-golden",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-olive-complementary-01",
      "anchorColorId": "green-olive",
      "groupId": "complementary",
      "name": "Xanh olive bổ túc cân bằng",
      "description": "Ghép Xanh olive với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "green-olive",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-olive-split-complementary-01",
      "anchorColorId": "green-olive",
      "groupId": "split-complementary",
      "name": "Xanh olive bổ túc bộ ba",
      "description": "Kết hợp Xanh olive với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "green-olive",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-olive-triadic-01",
      "anchorColorId": "green-olive",
      "groupId": "triadic",
      "name": "Xanh olive phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh olive, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "green-olive",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-olive-neutral-01",
      "anchorColorId": "green-olive",
      "groupId": "neutral",
      "name": "Xanh olive phối trung tính",
      "description": "Kết hợp Xanh olive cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "green-olive",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-olive-accent-01",
      "anchorColorId": "green-olive",
      "groupId": "accent",
      "name": "Xanh olive tạo điểm nhấn",
      "description": "Giữ Xanh olive cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "green-olive",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-olive-earth-tone-01",
      "anchorColorId": "green-olive",
      "groupId": "earth-tone",
      "name": "Xanh olive hòa sắc đất",
      "description": "Kết hợp Xanh olive với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "green-olive",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-moss-monochromatic-01",
      "anchorColorId": "green-moss",
      "groupId": "monochromatic",
      "name": "Xanh rêu đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh rêu, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "green-moss",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-moss-analogous-01",
      "anchorColorId": "green-moss",
      "groupId": "analogous",
      "name": "Xanh rêu phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh rêu hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "green-moss",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-golden",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-moss-complementary-01",
      "anchorColorId": "green-moss",
      "groupId": "complementary",
      "name": "Xanh rêu bổ túc cân bằng",
      "description": "Ghép Xanh rêu với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "green-moss",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-moss-split-complementary-01",
      "anchorColorId": "green-moss",
      "groupId": "split-complementary",
      "name": "Xanh rêu bổ túc bộ ba",
      "description": "Kết hợp Xanh rêu với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "green-moss",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-moss-triadic-01",
      "anchorColorId": "green-moss",
      "groupId": "triadic",
      "name": "Xanh rêu phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh rêu, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "green-moss",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-moss-neutral-01",
      "anchorColorId": "green-moss",
      "groupId": "neutral",
      "name": "Xanh rêu phối trung tính",
      "description": "Kết hợp Xanh rêu cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "green-moss",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-moss-accent-01",
      "anchorColorId": "green-moss",
      "groupId": "accent",
      "name": "Xanh rêu tạo điểm nhấn",
      "description": "Giữ Xanh rêu cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "green-moss",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-moss-earth-tone-01",
      "anchorColorId": "green-moss",
      "groupId": "earth-tone",
      "name": "Xanh rêu hòa sắc đất",
      "description": "Kết hợp Xanh rêu với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "green-moss",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-emerald-monochromatic-01",
      "anchorColorId": "green-emerald",
      "groupId": "monochromatic",
      "name": "Xanh emerald đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh emerald, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "green-emerald",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-emerald-analogous-01",
      "anchorColorId": "green-emerald",
      "groupId": "analogous",
      "name": "Xanh emerald phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh emerald hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "green-emerald",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-emerald-complementary-01",
      "anchorColorId": "green-emerald",
      "groupId": "complementary",
      "name": "Xanh emerald bổ túc cân bằng",
      "description": "Ghép Xanh emerald với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "green-emerald",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-emerald-split-complementary-01",
      "anchorColorId": "green-emerald",
      "groupId": "split-complementary",
      "name": "Xanh emerald bổ túc bộ ba",
      "description": "Kết hợp Xanh emerald với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "green-emerald",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-emerald-triadic-01",
      "anchorColorId": "green-emerald",
      "groupId": "triadic",
      "name": "Xanh emerald phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh emerald, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "green-emerald",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-emerald-neutral-01",
      "anchorColorId": "green-emerald",
      "groupId": "neutral",
      "name": "Xanh emerald phối trung tính",
      "description": "Kết hợp Xanh emerald cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "green-emerald",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-emerald-accent-01",
      "anchorColorId": "green-emerald",
      "groupId": "accent",
      "name": "Xanh emerald tạo điểm nhấn",
      "description": "Giữ Xanh emerald cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "green-emerald",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-emerald-color-blocking-01",
      "anchorColorId": "green-emerald",
      "groupId": "color-blocking",
      "name": "Xanh emerald phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Xanh emerald, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "green-emerald",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "pink-hot",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-forest-monochromatic-01",
      "anchorColorId": "green-forest",
      "groupId": "monochromatic",
      "name": "Xanh lá đậm đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh lá đậm, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "green-forest",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-forest-analogous-01",
      "anchorColorId": "green-forest",
      "groupId": "analogous",
      "name": "Xanh lá đậm phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh lá đậm hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "green-forest",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-forest-complementary-01",
      "anchorColorId": "green-forest",
      "groupId": "complementary",
      "name": "Xanh lá đậm bổ túc cân bằng",
      "description": "Ghép Xanh lá đậm với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "green-forest",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-forest-split-complementary-01",
      "anchorColorId": "green-forest",
      "groupId": "split-complementary",
      "name": "Xanh lá đậm bổ túc bộ ba",
      "description": "Kết hợp Xanh lá đậm với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "green-forest",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-forest-triadic-01",
      "anchorColorId": "green-forest",
      "groupId": "triadic",
      "name": "Xanh lá đậm phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh lá đậm, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "green-forest",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-tan",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-forest-neutral-01",
      "anchorColorId": "green-forest",
      "groupId": "neutral",
      "name": "Xanh lá đậm phối trung tính",
      "description": "Kết hợp Xanh lá đậm cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "green-forest",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-forest-accent-01",
      "anchorColorId": "green-forest",
      "groupId": "accent",
      "name": "Xanh lá đậm tạo điểm nhấn",
      "description": "Giữ Xanh lá đậm cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "green-forest",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-forest-earth-tone-01",
      "anchorColorId": "green-forest",
      "groupId": "earth-tone",
      "name": "Xanh lá đậm hòa sắc đất",
      "description": "Kết hợp Xanh lá đậm với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "green-forest",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-teal-monochromatic-01",
      "anchorColorId": "green-teal",
      "groupId": "monochromatic",
      "name": "Xanh teal đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh teal, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "green-teal",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-teal-analogous-01",
      "anchorColorId": "green-teal",
      "groupId": "analogous",
      "name": "Xanh teal phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh teal hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "green-teal",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-teal-complementary-01",
      "anchorColorId": "green-teal",
      "groupId": "complementary",
      "name": "Xanh teal bổ túc cân bằng",
      "description": "Ghép Xanh teal với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "green-teal",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-teal-split-complementary-01",
      "anchorColorId": "green-teal",
      "groupId": "split-complementary",
      "name": "Xanh teal bổ túc bộ ba",
      "description": "Kết hợp Xanh teal với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "green-teal",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-camel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-teal-triadic-01",
      "anchorColorId": "green-teal",
      "groupId": "triadic",
      "name": "Xanh teal phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh teal, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "green-teal",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "green-teal-neutral-01",
      "anchorColorId": "green-teal",
      "groupId": "neutral",
      "name": "Xanh teal phối trung tính",
      "description": "Kết hợp Xanh teal cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "green-teal",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "green-teal-accent-01",
      "anchorColorId": "green-teal",
      "groupId": "accent",
      "name": "Xanh teal tạo điểm nhấn",
      "description": "Giữ Xanh teal cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "green-teal",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "green-teal-color-blocking-01",
      "anchorColorId": "green-teal",
      "groupId": "color-blocking",
      "name": "Xanh teal phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Xanh teal, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "green-teal",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-baby-monochromatic-01",
      "anchorColorId": "blue-baby",
      "groupId": "monochromatic",
      "name": "Xanh baby đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh baby, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "blue-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-steel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-baby-complementary-01",
      "anchorColorId": "blue-baby",
      "groupId": "complementary",
      "name": "Xanh baby bổ túc cân bằng",
      "description": "Ghép Xanh baby với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "blue-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-baby-split-complementary-01",
      "anchorColorId": "blue-baby",
      "groupId": "split-complementary",
      "name": "Xanh baby bổ túc bộ ba",
      "description": "Kết hợp Xanh baby với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "blue-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-baby-triadic-01",
      "anchorColorId": "blue-baby",
      "groupId": "triadic",
      "name": "Xanh baby phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh baby, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "blue-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-baby-neutral-01",
      "anchorColorId": "blue-baby",
      "groupId": "neutral",
      "name": "Xanh baby phối trung tính",
      "description": "Kết hợp Xanh baby cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "blue-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-baby-tonal-01",
      "anchorColorId": "blue-baby",
      "groupId": "tonal",
      "name": "Xanh baby cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Xanh baby hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "blue-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "white-cream",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "orange-peach",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-baby-accent-01",
      "anchorColorId": "blue-baby",
      "groupId": "accent",
      "name": "Xanh baby tạo điểm nhấn",
      "description": "Giữ Xanh baby cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "blue-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-baby-color-blocking-01",
      "anchorColorId": "blue-baby",
      "groupId": "color-blocking",
      "name": "Xanh baby phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Xanh baby, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "blue-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-powder-monochromatic-01",
      "anchorColorId": "blue-powder",
      "groupId": "monochromatic",
      "name": "Xanh phấn đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh phấn, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "blue-powder",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-steel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-powder-analogous-01",
      "anchorColorId": "blue-powder",
      "groupId": "analogous",
      "name": "Xanh phấn phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh phấn hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "blue-powder",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-powder-complementary-01",
      "anchorColorId": "blue-powder",
      "groupId": "complementary",
      "name": "Xanh phấn bổ túc cân bằng",
      "description": "Ghép Xanh phấn với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "blue-powder",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-tan",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-powder-split-complementary-01",
      "anchorColorId": "blue-powder",
      "groupId": "split-complementary",
      "name": "Xanh phấn bổ túc bộ ba",
      "description": "Kết hợp Xanh phấn với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "blue-powder",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-powder-triadic-01",
      "anchorColorId": "blue-powder",
      "groupId": "triadic",
      "name": "Xanh phấn phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh phấn, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "blue-powder",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-powder-neutral-01",
      "anchorColorId": "blue-powder",
      "groupId": "neutral",
      "name": "Xanh phấn phối trung tính",
      "description": "Kết hợp Xanh phấn cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "blue-powder",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-powder-tonal-01",
      "anchorColorId": "blue-powder",
      "groupId": "tonal",
      "name": "Xanh phấn cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Xanh phấn hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "blue-powder",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-sand",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-powder-accent-01",
      "anchorColorId": "blue-powder",
      "groupId": "accent",
      "name": "Xanh phấn tạo điểm nhấn",
      "description": "Giữ Xanh phấn cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "blue-powder",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-powder-pastel-01",
      "anchorColorId": "blue-powder",
      "groupId": "pastel",
      "name": "Xanh phấn pastel nhẹ nhàng",
      "description": "Phối Xanh phấn cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "blue-powder",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-powder-color-blocking-01",
      "anchorColorId": "blue-powder",
      "groupId": "color-blocking",
      "name": "Xanh phấn phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Xanh phấn, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "blue-powder",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-sky-monochromatic-01",
      "anchorColorId": "blue-sky",
      "groupId": "monochromatic",
      "name": "Xanh da trời đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh da trời, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "blue-sky",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-steel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-sky-analogous-01",
      "anchorColorId": "blue-sky",
      "groupId": "analogous",
      "name": "Xanh da trời phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh da trời hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "blue-sky",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-sky-complementary-01",
      "anchorColorId": "blue-sky",
      "groupId": "complementary",
      "name": "Xanh da trời bổ túc cân bằng",
      "description": "Ghép Xanh da trời với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "blue-sky",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-sky-split-complementary-01",
      "anchorColorId": "blue-sky",
      "groupId": "split-complementary",
      "name": "Xanh da trời bổ túc bộ ba",
      "description": "Kết hợp Xanh da trời với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "blue-sky",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-sky-triadic-01",
      "anchorColorId": "blue-sky",
      "groupId": "triadic",
      "name": "Xanh da trời phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh da trời, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "blue-sky",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-sky-neutral-01",
      "anchorColorId": "blue-sky",
      "groupId": "neutral",
      "name": "Xanh da trời phối trung tính",
      "description": "Kết hợp Xanh da trời cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "blue-sky",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-sky-tonal-01",
      "anchorColorId": "blue-sky",
      "groupId": "tonal",
      "name": "Xanh da trời cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Xanh da trời hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "blue-sky",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-sky-color-blocking-01",
      "anchorColorId": "blue-sky",
      "groupId": "color-blocking",
      "name": "Xanh da trời phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Xanh da trời, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "blue-sky",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-denim-light-monochromatic-01",
      "anchorColorId": "blue-denim-light",
      "groupId": "monochromatic",
      "name": "Xanh denim nhạt đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh denim nhạt, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "blue-denim-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-steel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-denim-light-complementary-01",
      "anchorColorId": "blue-denim-light",
      "groupId": "complementary",
      "name": "Xanh denim nhạt bổ túc cân bằng",
      "description": "Ghép Xanh denim nhạt với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "blue-denim-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-denim-light-split-complementary-01",
      "anchorColorId": "blue-denim-light",
      "groupId": "split-complementary",
      "name": "Xanh denim nhạt bổ túc bộ ba",
      "description": "Kết hợp Xanh denim nhạt với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "blue-denim-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-denim-light-triadic-01",
      "anchorColorId": "blue-denim-light",
      "groupId": "triadic",
      "name": "Xanh denim nhạt phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh denim nhạt, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "blue-denim-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-denim-light-neutral-01",
      "anchorColorId": "blue-denim-light",
      "groupId": "neutral",
      "name": "Xanh denim nhạt phối trung tính",
      "description": "Kết hợp Xanh denim nhạt cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "blue-denim-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-denim-light-tonal-01",
      "anchorColorId": "blue-denim-light",
      "groupId": "tonal",
      "name": "Xanh denim nhạt cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Xanh denim nhạt hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "blue-denim-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-denim-light-color-blocking-01",
      "anchorColorId": "blue-denim-light",
      "groupId": "color-blocking",
      "name": "Xanh denim nhạt phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Xanh denim nhạt, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "blue-denim-light",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-denim-monochromatic-01",
      "anchorColorId": "blue-denim",
      "groupId": "monochromatic",
      "name": "Xanh denim đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh denim, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "blue-denim",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-denim-analogous-01",
      "anchorColorId": "blue-denim",
      "groupId": "analogous",
      "name": "Xanh denim phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh denim hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "blue-denim",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-denim-complementary-01",
      "anchorColorId": "blue-denim",
      "groupId": "complementary",
      "name": "Xanh denim bổ túc cân bằng",
      "description": "Ghép Xanh denim với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "blue-denim",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-caramel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-tan",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-denim-split-complementary-01",
      "anchorColorId": "blue-denim",
      "groupId": "split-complementary",
      "name": "Xanh denim bổ túc bộ ba",
      "description": "Kết hợp Xanh denim với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "blue-denim",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-denim-triadic-01",
      "anchorColorId": "blue-denim",
      "groupId": "triadic",
      "name": "Xanh denim phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh denim, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "blue-denim",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-denim-neutral-01",
      "anchorColorId": "blue-denim",
      "groupId": "neutral",
      "name": "Xanh denim phối trung tính",
      "description": "Kết hợp Xanh denim cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "blue-denim",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-denim-tonal-01",
      "anchorColorId": "blue-denim",
      "groupId": "tonal",
      "name": "Xanh denim cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Xanh denim hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "blue-denim",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-brick",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "beige-camel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-denim-color-blocking-01",
      "anchorColorId": "blue-denim",
      "groupId": "color-blocking",
      "name": "Xanh denim phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Xanh denim, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "blue-denim",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-dusty-monochromatic-01",
      "anchorColorId": "blue-dusty",
      "groupId": "monochromatic",
      "name": "Xanh dusty đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh dusty, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "blue-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-steel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-dusty-complementary-01",
      "anchorColorId": "blue-dusty",
      "groupId": "complementary",
      "name": "Xanh dusty bổ túc cân bằng",
      "description": "Ghép Xanh dusty với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "blue-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-dusty-split-complementary-01",
      "anchorColorId": "blue-dusty",
      "groupId": "split-complementary",
      "name": "Xanh dusty bổ túc bộ ba",
      "description": "Kết hợp Xanh dusty với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "blue-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-dusty-triadic-01",
      "anchorColorId": "blue-dusty",
      "groupId": "triadic",
      "name": "Xanh dusty phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh dusty, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "blue-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-dusty-neutral-01",
      "anchorColorId": "blue-dusty",
      "groupId": "neutral",
      "name": "Xanh dusty phối trung tính",
      "description": "Kết hợp Xanh dusty cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "blue-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-dusty-tonal-01",
      "anchorColorId": "blue-dusty",
      "groupId": "tonal",
      "name": "Xanh dusty cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Xanh dusty hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "blue-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-mushroom",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "brown-tan",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-slate-monochromatic-01",
      "anchorColorId": "blue-slate",
      "groupId": "monochromatic",
      "name": "Xanh slate đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh slate, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "blue-slate",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-slate-complementary-01",
      "anchorColorId": "blue-slate",
      "groupId": "complementary",
      "name": "Xanh slate bổ túc cân bằng",
      "description": "Ghép Xanh slate với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "blue-slate",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-peach",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-slate-split-complementary-01",
      "anchorColorId": "blue-slate",
      "groupId": "split-complementary",
      "name": "Xanh slate bổ túc bộ ba",
      "description": "Kết hợp Xanh slate với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "blue-slate",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-slate-triadic-01",
      "anchorColorId": "blue-slate",
      "groupId": "triadic",
      "name": "Xanh slate phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh slate, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "blue-slate",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-slate-neutral-01",
      "anchorColorId": "blue-slate",
      "groupId": "neutral",
      "name": "Xanh slate phối trung tính",
      "description": "Kết hợp Xanh slate cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "blue-slate",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-slate-tonal-01",
      "anchorColorId": "blue-slate",
      "groupId": "tonal",
      "name": "Xanh slate cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Xanh slate hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "blue-slate",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-dark",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-steel-monochromatic-01",
      "anchorColorId": "blue-steel",
      "groupId": "monochromatic",
      "name": "Xanh thép đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh thép, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "blue-steel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-steel-complementary-01",
      "anchorColorId": "blue-steel",
      "groupId": "complementary",
      "name": "Xanh thép bổ túc cân bằng",
      "description": "Ghép Xanh thép với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "blue-steel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-peach",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-steel-split-complementary-01",
      "anchorColorId": "blue-steel",
      "groupId": "split-complementary",
      "name": "Xanh thép bổ túc bộ ba",
      "description": "Kết hợp Xanh thép với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "blue-steel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-steel-triadic-01",
      "anchorColorId": "blue-steel",
      "groupId": "triadic",
      "name": "Xanh thép phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh thép, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "blue-steel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-steel-neutral-01",
      "anchorColorId": "blue-steel",
      "groupId": "neutral",
      "name": "Xanh thép phối trung tính",
      "description": "Kết hợp Xanh thép cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "blue-steel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-steel-tonal-01",
      "anchorColorId": "blue-steel",
      "groupId": "tonal",
      "name": "Xanh thép cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Xanh thép hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "blue-steel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-dark",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-steel-accent-01",
      "anchorColorId": "blue-steel",
      "groupId": "accent",
      "name": "Xanh thép tạo điểm nhấn",
      "description": "Giữ Xanh thép cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "blue-steel",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-navy-monochromatic-01",
      "anchorColorId": "blue-navy",
      "groupId": "monochromatic",
      "name": "Xanh navy đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh navy, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "blue-navy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-navy-complementary-01",
      "anchorColorId": "blue-navy",
      "groupId": "complementary",
      "name": "Xanh navy bổ túc cân bằng",
      "description": "Ghép Xanh navy với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "blue-navy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-camel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-navy-split-complementary-01",
      "anchorColorId": "blue-navy",
      "groupId": "split-complementary",
      "name": "Xanh navy bổ túc bộ ba",
      "description": "Kết hợp Xanh navy với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "blue-navy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-classic",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-navy-triadic-01",
      "anchorColorId": "blue-navy",
      "groupId": "triadic",
      "name": "Xanh navy phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh navy, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "blue-navy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-navy-accent-01",
      "anchorColorId": "blue-navy",
      "groupId": "accent",
      "name": "Xanh navy tạo điểm nhấn",
      "description": "Giữ Xanh navy cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "blue-navy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-navy-color-blocking-01",
      "anchorColorId": "blue-navy",
      "groupId": "color-blocking",
      "name": "Xanh navy phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Xanh navy, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "blue-navy",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-midnight-monochromatic-01",
      "anchorColorId": "blue-midnight",
      "groupId": "monochromatic",
      "name": "Xanh midnight đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Xanh midnight, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "blue-midnight",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-midnight-analogous-01",
      "anchorColorId": "blue-midnight",
      "groupId": "analogous",
      "name": "Xanh midnight phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Xanh midnight hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "blue-midnight",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-midnight-complementary-01",
      "anchorColorId": "blue-midnight",
      "groupId": "complementary",
      "name": "Xanh midnight bổ túc cân bằng",
      "description": "Ghép Xanh midnight với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "blue-midnight",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-midnight-split-complementary-01",
      "anchorColorId": "blue-midnight",
      "groupId": "split-complementary",
      "name": "Xanh midnight bổ túc bộ ba",
      "description": "Kết hợp Xanh midnight với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "blue-midnight",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "red-brick",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-midnight-triadic-01",
      "anchorColorId": "blue-midnight",
      "groupId": "triadic",
      "name": "Xanh midnight phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Xanh midnight, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "blue-midnight",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "blue-midnight-neutral-01",
      "anchorColorId": "blue-midnight",
      "groupId": "neutral",
      "name": "Xanh midnight phối trung tính",
      "description": "Kết hợp Xanh midnight cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "blue-midnight",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "blue-midnight-accent-01",
      "anchorColorId": "blue-midnight",
      "groupId": "accent",
      "name": "Xanh midnight tạo điểm nhấn",
      "description": "Giữ Xanh midnight cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "blue-midnight",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "blue-midnight-color-blocking-01",
      "anchorColorId": "blue-midnight",
      "groupId": "color-blocking",
      "name": "Xanh midnight phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Xanh midnight, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "blue-midnight",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "purple-lilac-analogous-01",
      "anchorColorId": "purple-lilac",
      "groupId": "analogous",
      "name": "Tím lilac phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Tím lilac hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "purple-lilac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-lilac-complementary-01",
      "anchorColorId": "purple-lilac",
      "groupId": "complementary",
      "name": "Tím lilac bổ túc cân bằng",
      "description": "Ghép Tím lilac với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "purple-lilac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "purple-lilac-split-complementary-01",
      "anchorColorId": "purple-lilac",
      "groupId": "split-complementary",
      "name": "Tím lilac bổ túc bộ ba",
      "description": "Kết hợp Tím lilac với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "purple-lilac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "purple-lilac-triadic-01",
      "anchorColorId": "purple-lilac",
      "groupId": "triadic",
      "name": "Tím lilac phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Tím lilac, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "purple-lilac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-mustard",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "purple-lilac-neutral-01",
      "anchorColorId": "purple-lilac",
      "groupId": "neutral",
      "name": "Tím lilac phối trung tính",
      "description": "Kết hợp Tím lilac cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "purple-lilac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-lilac-tonal-01",
      "anchorColorId": "purple-lilac",
      "groupId": "tonal",
      "name": "Tím lilac cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Tím lilac hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "purple-lilac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "white-soft",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "grey-ice",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-lilac-accent-01",
      "anchorColorId": "purple-lilac",
      "groupId": "accent",
      "name": "Tím lilac tạo điểm nhấn",
      "description": "Giữ Tím lilac cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "purple-lilac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "purple-lilac-pastel-01",
      "anchorColorId": "purple-lilac",
      "groupId": "pastel",
      "name": "Tím lilac pastel nhẹ nhàng",
      "description": "Phối Tím lilac cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "purple-lilac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-lilac-color-blocking-01",
      "anchorColorId": "purple-lilac",
      "groupId": "color-blocking",
      "name": "Tím lilac phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Tím lilac, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "purple-lilac",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "orange-burnt",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "purple-lavender-analogous-01",
      "anchorColorId": "purple-lavender",
      "groupId": "analogous",
      "name": "Tím lavender phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Tím lavender hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "purple-lavender",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lilac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-lavender-complementary-01",
      "anchorColorId": "purple-lavender",
      "groupId": "complementary",
      "name": "Tím lavender bổ túc cân bằng",
      "description": "Ghép Tím lavender với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "purple-lavender",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "purple-lavender-split-complementary-01",
      "anchorColorId": "purple-lavender",
      "groupId": "split-complementary",
      "name": "Tím lavender bổ túc bộ ba",
      "description": "Kết hợp Tím lavender với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "purple-lavender",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-golden",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "purple-lavender-triadic-01",
      "anchorColorId": "purple-lavender",
      "groupId": "triadic",
      "name": "Tím lavender phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Tím lavender, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "purple-lavender",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "purple-lavender-neutral-01",
      "anchorColorId": "purple-lavender",
      "groupId": "neutral",
      "name": "Tím lavender phối trung tính",
      "description": "Kết hợp Tím lavender cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "purple-lavender",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-lavender-tonal-01",
      "anchorColorId": "purple-lavender",
      "groupId": "tonal",
      "name": "Tím lavender cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Tím lavender hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "purple-lavender",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-lavender-accent-01",
      "anchorColorId": "purple-lavender",
      "groupId": "accent",
      "name": "Tím lavender tạo điểm nhấn",
      "description": "Giữ Tím lavender cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "purple-lavender",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "purple-lavender-pastel-01",
      "anchorColorId": "purple-lavender",
      "groupId": "pastel",
      "name": "Tím lavender pastel nhẹ nhàng",
      "description": "Phối Tím lavender cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "purple-lavender",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-lavender-color-blocking-01",
      "anchorColorId": "purple-lavender",
      "groupId": "color-blocking",
      "name": "Tím lavender phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Tím lavender, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "purple-lavender",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "orange-burnt",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "red-classic",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "purple-mauve-analogous-01",
      "anchorColorId": "purple-mauve",
      "groupId": "analogous",
      "name": "Tím mauve phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Tím mauve hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "purple-mauve",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-mauve-complementary-01",
      "anchorColorId": "purple-mauve",
      "groupId": "complementary",
      "name": "Tím mauve bổ túc cân bằng",
      "description": "Ghép Tím mauve với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "purple-mauve",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "purple-mauve-split-complementary-01",
      "anchorColorId": "purple-mauve",
      "groupId": "split-complementary",
      "name": "Tím mauve bổ túc bộ ba",
      "description": "Kết hợp Tím mauve với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "purple-mauve",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "purple-mauve-triadic-01",
      "anchorColorId": "purple-mauve",
      "groupId": "triadic",
      "name": "Tím mauve phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Tím mauve, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "purple-mauve",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "purple-mauve-neutral-01",
      "anchorColorId": "purple-mauve",
      "groupId": "neutral",
      "name": "Tím mauve phối trung tính",
      "description": "Kết hợp Tím mauve cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "purple-mauve",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-mauve-tonal-01",
      "anchorColorId": "purple-mauve",
      "groupId": "tonal",
      "name": "Tím mauve cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Tím mauve hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "purple-mauve",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-greige",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-dusty-analogous-01",
      "anchorColorId": "purple-dusty",
      "groupId": "analogous",
      "name": "Tím khói phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Tím khói hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "purple-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-dusty-complementary-01",
      "anchorColorId": "purple-dusty",
      "groupId": "complementary",
      "name": "Tím khói bổ túc cân bằng",
      "description": "Ghép Tím khói với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "purple-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "purple-dusty-split-complementary-01",
      "anchorColorId": "purple-dusty",
      "groupId": "split-complementary",
      "name": "Tím khói bổ túc bộ ba",
      "description": "Kết hợp Tím khói với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "purple-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "yellow-lemon",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "purple-dusty-triadic-01",
      "anchorColorId": "purple-dusty",
      "groupId": "triadic",
      "name": "Tím khói phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Tím khói, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "purple-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-caramel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-tan",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "purple-dusty-neutral-01",
      "anchorColorId": "purple-dusty",
      "groupId": "neutral",
      "name": "Tím khói phối trung tính",
      "description": "Kết hợp Tím khói cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "purple-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-dusty-tonal-01",
      "anchorColorId": "purple-dusty",
      "groupId": "tonal",
      "name": "Tím khói cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Tím khói hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "purple-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "grey-greige",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-plum-monochromatic-01",
      "anchorColorId": "purple-plum",
      "groupId": "monochromatic",
      "name": "Tím mận đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Tím mận, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "purple-plum",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-plum-analogous-01",
      "anchorColorId": "purple-plum",
      "groupId": "analogous",
      "name": "Tím mận phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Tím mận hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "purple-plum",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-plum-complementary-01",
      "anchorColorId": "purple-plum",
      "groupId": "complementary",
      "name": "Tím mận bổ túc cân bằng",
      "description": "Ghép Tím mận với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "purple-plum",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "purple-plum-split-complementary-01",
      "anchorColorId": "purple-plum",
      "groupId": "split-complementary",
      "name": "Tím mận bổ túc bộ ba",
      "description": "Kết hợp Tím mận với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "purple-plum",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "purple-plum-triadic-01",
      "anchorColorId": "purple-plum",
      "groupId": "triadic",
      "name": "Tím mận phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Tím mận, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "purple-plum",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-olive",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-olive-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "purple-plum-neutral-01",
      "anchorColorId": "purple-plum",
      "groupId": "neutral",
      "name": "Tím mận phối trung tính",
      "description": "Kết hợp Tím mận cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "purple-plum",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "purple-plum-accent-01",
      "anchorColorId": "purple-plum",
      "groupId": "accent",
      "name": "Tím mận tạo điểm nhấn",
      "description": "Giữ Tím mận cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "purple-plum",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "orange-coral",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-blush-monochromatic-01",
      "anchorColorId": "pink-blush",
      "groupId": "monochromatic",
      "name": "Hồng phấn đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Hồng phấn, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "pink-blush",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-blush-analogous-01",
      "anchorColorId": "pink-blush",
      "groupId": "analogous",
      "name": "Hồng phấn phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Hồng phấn hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "pink-blush",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-cognac",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-blush-complementary-01",
      "anchorColorId": "pink-blush",
      "groupId": "complementary",
      "name": "Hồng phấn bổ túc cân bằng",
      "description": "Ghép Hồng phấn với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "pink-blush",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-blush-split-complementary-01",
      "anchorColorId": "pink-blush",
      "groupId": "split-complementary",
      "name": "Hồng phấn bổ túc bộ ba",
      "description": "Kết hợp Hồng phấn với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "pink-blush",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-steel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-blush-triadic-01",
      "anchorColorId": "pink-blush",
      "groupId": "triadic",
      "name": "Hồng phấn phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Hồng phấn, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "pink-blush",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "pink-blush-neutral-01",
      "anchorColorId": "pink-blush",
      "groupId": "neutral",
      "name": "Hồng phấn phối trung tính",
      "description": "Kết hợp Hồng phấn cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "pink-blush",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-blush-tonal-01",
      "anchorColorId": "pink-blush",
      "groupId": "tonal",
      "name": "Hồng phấn cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Hồng phấn hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "pink-blush",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-cream",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-blush-accent-01",
      "anchorColorId": "pink-blush",
      "groupId": "accent",
      "name": "Hồng phấn tạo điểm nhấn",
      "description": "Giữ Hồng phấn cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "pink-blush",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-blush-pastel-01",
      "anchorColorId": "pink-blush",
      "groupId": "pastel",
      "name": "Hồng phấn pastel nhẹ nhàng",
      "description": "Phối Hồng phấn cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "pink-blush",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-blush-color-blocking-01",
      "anchorColorId": "pink-blush",
      "groupId": "color-blocking",
      "name": "Hồng phấn phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Hồng phấn, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "pink-blush",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "pink-baby-monochromatic-01",
      "anchorColorId": "pink-baby",
      "groupId": "monochromatic",
      "name": "Hồng baby đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Hồng baby, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "pink-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-baby-analogous-01",
      "anchorColorId": "pink-baby",
      "groupId": "analogous",
      "name": "Hồng baby phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Hồng baby hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "pink-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-baby-complementary-01",
      "anchorColorId": "pink-baby",
      "groupId": "complementary",
      "name": "Hồng baby bổ túc cân bằng",
      "description": "Ghép Hồng baby với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "pink-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-baby-split-complementary-01",
      "anchorColorId": "pink-baby",
      "groupId": "split-complementary",
      "name": "Hồng baby bổ túc bộ ba",
      "description": "Kết hợp Hồng baby với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "pink-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-baby-triadic-01",
      "anchorColorId": "pink-baby",
      "groupId": "triadic",
      "name": "Hồng baby phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Hồng baby, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "pink-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "pink-baby-neutral-01",
      "anchorColorId": "pink-baby",
      "groupId": "neutral",
      "name": "Hồng baby phối trung tính",
      "description": "Kết hợp Hồng baby cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "pink-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "black-jet",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-medium",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-baby-tonal-01",
      "anchorColorId": "pink-baby",
      "groupId": "tonal",
      "name": "Hồng baby cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Hồng baby hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "pink-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "yellow-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "white-cream",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-peach",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "beige-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-baby-accent-01",
      "anchorColorId": "pink-baby",
      "groupId": "accent",
      "name": "Hồng baby tạo điểm nhấn",
      "description": "Giữ Hồng baby cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "pink-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-baby-pastel-01",
      "anchorColorId": "pink-baby",
      "groupId": "pastel",
      "name": "Hồng baby pastel nhẹ nhàng",
      "description": "Phối Hồng baby cùng các sắc pastel sáng, độ bão hòa thấp đến vừa mang lại cảm giác thanh thoát.",
      "colorItems": [
        {
          "colorId": "pink-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "pastel",
        "soft",
        "fresh"
      ],
      "occasions": [
        "spring",
        "weekend",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-baby-color-blocking-01",
      "anchorColorId": "pink-baby",
      "groupId": "color-blocking",
      "name": "Hồng baby phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Hồng baby, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "pink-baby",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "pink-dusty-monochromatic-01",
      "anchorColorId": "pink-dusty",
      "groupId": "monochromatic",
      "name": "Hồng dusty đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Hồng dusty, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "pink-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-dusty-complementary-01",
      "anchorColorId": "pink-dusty",
      "groupId": "complementary",
      "name": "Hồng dusty bổ túc cân bằng",
      "description": "Ghép Hồng dusty với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "pink-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-dusty-split-complementary-01",
      "anchorColorId": "pink-dusty",
      "groupId": "split-complementary",
      "name": "Hồng dusty bổ túc bộ ba",
      "description": "Kết hợp Hồng dusty với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "pink-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-dusty-triadic-01",
      "anchorColorId": "pink-dusty",
      "groupId": "triadic",
      "name": "Hồng dusty phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Hồng dusty, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "pink-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "pink-dusty-neutral-01",
      "anchorColorId": "pink-dusty",
      "groupId": "neutral",
      "name": "Hồng dusty phối trung tính",
      "description": "Kết hợp Hồng dusty cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "pink-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-dusty-tonal-01",
      "anchorColorId": "pink-dusty",
      "groupId": "tonal",
      "name": "Hồng dusty cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Hồng dusty hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "pink-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-main",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-pistachio",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-powder",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "orange-apricot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-dusty-color-blocking-01",
      "anchorColorId": "pink-dusty",
      "groupId": "color-blocking",
      "name": "Hồng dusty phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Hồng dusty, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "pink-dusty",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "pink-rose-monochromatic-01",
      "anchorColorId": "pink-rose",
      "groupId": "monochromatic",
      "name": "Hồng rose đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Hồng rose, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "pink-rose",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-earth",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-rose-analogous-01",
      "anchorColorId": "pink-rose",
      "groupId": "analogous",
      "name": "Hồng rose phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Hồng rose hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "pink-rose",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "orange-terracotta",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-rust",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-rose-complementary-01",
      "anchorColorId": "pink-rose",
      "groupId": "complementary",
      "name": "Hồng rose bổ túc cân bằng",
      "description": "Ghép Hồng rose với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "pink-rose",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-rose-split-complementary-01",
      "anchorColorId": "pink-rose",
      "groupId": "split-complementary",
      "name": "Hồng rose bổ túc bộ ba",
      "description": "Kết hợp Hồng rose với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "pink-rose",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-rose-triadic-01",
      "anchorColorId": "pink-rose",
      "groupId": "triadic",
      "name": "Hồng rose phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Hồng rose, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "pink-rose",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "pink-rose-neutral-01",
      "anchorColorId": "pink-rose",
      "groupId": "neutral",
      "name": "Hồng rose phối trung tính",
      "description": "Kết hợp Hồng rose cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "pink-rose",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-rose-tonal-01",
      "anchorColorId": "pink-rose",
      "groupId": "tonal",
      "name": "Hồng rose cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Hồng rose hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "pink-rose",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-caramel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-milk",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "brown-tan",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-rose-color-blocking-01",
      "anchorColorId": "pink-rose",
      "groupId": "color-blocking",
      "name": "Hồng rose phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Hồng rose, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "pink-rose",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "pink-earth-monochromatic-01",
      "anchorColorId": "pink-earth",
      "groupId": "monochromatic",
      "name": "Hồng đất đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Hồng đất, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "pink-earth",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-blush",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-earth-analogous-01",
      "anchorColorId": "pink-earth",
      "groupId": "analogous",
      "name": "Hồng đất phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Hồng đất hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "pink-earth",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "orange-peach",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-mocha",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "brown-coffee",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-earth-complementary-01",
      "anchorColorId": "pink-earth",
      "groupId": "complementary",
      "name": "Hồng đất bổ túc cân bằng",
      "description": "Ghép Hồng đất với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "pink-earth",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-earth-split-complementary-01",
      "anchorColorId": "pink-earth",
      "groupId": "split-complementary",
      "name": "Hồng đất bổ túc bộ ba",
      "description": "Kết hợp Hồng đất với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "pink-earth",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-slate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-earth-triadic-01",
      "anchorColorId": "pink-earth",
      "groupId": "triadic",
      "name": "Hồng đất phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Hồng đất, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "pink-earth",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "pink-earth-neutral-01",
      "anchorColorId": "pink-earth",
      "groupId": "neutral",
      "name": "Hồng đất phối trung tính",
      "description": "Kết hợp Hồng đất cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "pink-earth",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-earth-tonal-01",
      "anchorColorId": "pink-earth",
      "groupId": "tonal",
      "name": "Hồng đất cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Hồng đất hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "pink-earth",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "blue-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "brown-caramel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-mushroom",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "beige-khaki",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-earth-accent-01",
      "anchorColorId": "pink-earth",
      "groupId": "accent",
      "name": "Hồng đất tạo điểm nhấn",
      "description": "Giữ Hồng đất cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "pink-earth",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-earth-earth-tone-01",
      "anchorColorId": "pink-earth",
      "groupId": "earth-tone",
      "name": "Hồng đất hòa sắc đất",
      "description": "Kết hợp Hồng đất với các sắc độ tự nhiên của đất, gỗ và lá cây đầy ấm áp.",
      "colorItems": [
        {
          "colorId": "pink-earth",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "brown-chocolate",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-oat",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "earth-tone",
        "natural"
      ],
      "occasions": [
        "casual",
        "travel",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-earth-color-blocking-01",
      "anchorColorId": "pink-earth",
      "groupId": "color-blocking",
      "name": "Hồng đất phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Hồng đất, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "pink-earth",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "purple-lavender",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "pink-mauve-monochromatic-01",
      "anchorColorId": "pink-mauve",
      "groupId": "monochromatic",
      "name": "Hồng mauve đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Hồng mauve, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "pink-mauve",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-hot",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-mauve-analogous-01",
      "anchorColorId": "pink-mauve",
      "groupId": "analogous",
      "name": "Hồng mauve phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Hồng mauve hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "pink-mauve",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-brick",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "orange-coral",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-mauve-complementary-01",
      "anchorColorId": "pink-mauve",
      "groupId": "complementary",
      "name": "Hồng mauve bổ túc cân bằng",
      "description": "Ghép Hồng mauve với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "pink-mauve",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-mauve-split-complementary-01",
      "anchorColorId": "pink-mauve",
      "groupId": "split-complementary",
      "name": "Hồng mauve bổ túc bộ ba",
      "description": "Kết hợp Hồng mauve với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "pink-mauve",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-mauve-triadic-01",
      "anchorColorId": "pink-mauve",
      "groupId": "triadic",
      "name": "Hồng mauve phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Hồng mauve, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "pink-mauve",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "pink-mauve-neutral-01",
      "anchorColorId": "pink-mauve",
      "groupId": "neutral",
      "name": "Hồng mauve phối trung tính",
      "description": "Kết hợp Hồng mauve cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "pink-mauve",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-charcoal",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-mauve-tonal-01",
      "anchorColorId": "pink-mauve",
      "groupId": "tonal",
      "name": "Hồng mauve cùng tông dịu mắt",
      "description": "Các màu có độ sáng và độ bão hòa gần nhau giúp Hồng mauve hòa quyện nhẹ nhàng, ít tương phản.",
      "colorItems": [
        {
          "colorId": "pink-mauve",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "beige-taupe",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-eucalyptus",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "beige-mushroom",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "blue-denim-light",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 6
        }
      ],
      "styleTags": [
        "tonal",
        "minimal",
        "soft"
      ],
      "occasions": [
        "office",
        "daily",
        "date"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-hot-monochromatic-01",
      "anchorColorId": "pink-hot",
      "groupId": "monochromatic",
      "name": "Hồng fuchsia đơn sắc chuyển độ",
      "description": "Các sắc độ sáng tối cùng hướng hue với Hồng fuchsia, kết hợp trung tính tinh tế để dễ phối trang phục.",
      "colorItems": [
        {
          "colorId": "pink-hot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "pink-baby",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "pink-dusty",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "pink-rose",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "pink-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "elegant"
      ],
      "occasions": [
        "office",
        "daily"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-hot-analogous-01",
      "anchorColorId": "pink-hot",
      "groupId": "analogous",
      "name": "Hồng fuchsia phối tương đồng",
      "description": "Các gam màu có hue nằm liền kề trên vòng tròn màu giúp tổng thể quanh Hồng fuchsia hài hòa tự nhiên.",
      "colorItems": [
        {
          "colorId": "pink-hot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "purple-plum",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "red-pinkish",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "red-wine",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "purple-mauve",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "harmonious",
        "chic"
      ],
      "occasions": [
        "daily",
        "date",
        "weekend"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-hot-complementary-01",
      "anchorColorId": "pink-hot",
      "groupId": "complementary",
      "name": "Hồng fuchsia bổ túc cân bằng",
      "description": "Ghép Hồng fuchsia với gam màu có hue đối diện trên vòng tròn màu, cân bằng bằng sắc trung tính hỗ trợ.",
      "colorItems": [
        {
          "colorId": "pink-hot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-mint",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-forest",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "contrast",
        "modern"
      ],
      "occasions": [
        "date",
        "street-style",
        "casual"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-hot-split-complementary-01",
      "anchorColorId": "pink-hot",
      "groupId": "split-complementary",
      "name": "Hồng fuchsia bổ túc bộ ba",
      "description": "Kết hợp Hồng fuchsia với hai vùng hue nằm hai bên màu bổ túc, thêm trung tính giúp tổng thể dễ ứng dụng.",
      "colorItems": [
        {
          "colorId": "pink-hot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-pastel",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-mint-pale",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "green-teal",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-sky",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "creative",
        "modern"
      ],
      "occasions": [
        "weekend",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-hot-triadic-01",
      "anchorColorId": "pink-hot",
      "groupId": "triadic",
      "name": "Hồng fuchsia phối tam giác",
      "description": "Ba vùng hue phân bố đều trên vòng tròn màu quanh Hồng fuchsia, cân bằng bằng nền trung tính.",
      "colorItems": [
        {
          "colorId": "pink-hot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "green-sage",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 2
        },
        {
          "colorId": "green-moss",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 3
        },
        {
          "colorId": "blue-midnight",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 4
        },
        {
          "colorId": "blue-denim",
          "role": "supporting",
          "theoryRole": "formula",
          "order": 5
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "vibrant",
        "creative"
      ],
      "occasions": [
        "weekend",
        "travel",
        "party"
      ],
      "difficulty": "hard",
      "isActive": true
    },
    {
      "id": "pink-hot-neutral-01",
      "anchorColorId": "pink-hot",
      "groupId": "neutral",
      "name": "Hồng fuchsia phối trung tính",
      "description": "Kết hợp Hồng fuchsia cùng các gam trung tính làm màu hỗ trợ giúp trang phục an toàn và linh hoạt.",
      "colorItems": [
        {
          "colorId": "pink-hot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "white-ivory",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "brown-espresso",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 5
        },
        {
          "colorId": "blue-navy",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 6
        }
      ],
      "styleTags": [
        "minimal",
        "basic",
        "classic"
      ],
      "occasions": [
        "office",
        "daily",
        "casual"
      ],
      "difficulty": "easy",
      "isActive": true
    },
    {
      "id": "pink-hot-accent-01",
      "anchorColorId": "pink-hot",
      "groupId": "accent",
      "name": "Hồng fuchsia tạo điểm nhấn",
      "description": "Giữ Hồng fuchsia cùng các màu hỗ trợ trung tính làm nền để sắc màu tương phản tạo điểm nhấn có kiểm soát.",
      "colorItems": [
        {
          "colorId": "pink-hot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "grey-light",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 3
        },
        {
          "colorId": "black-soft",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 4
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        },
        {
          "colorId": "yellow-golden",
          "role": "accent",
          "theoryRole": "accent",
          "order": 6
        }
      ],
      "styleTags": [
        "statement",
        "modern"
      ],
      "occasions": [
        "party",
        "date",
        "street-style"
      ],
      "difficulty": "medium",
      "isActive": true
    },
    {
      "id": "pink-hot-color-blocking-01",
      "anchorColorId": "pink-hot",
      "groupId": "color-blocking",
      "name": "Hồng fuchsia phối mảng nổi bật",
      "description": "Các mảng màu tương phản mạnh rõ nét quanh Hồng fuchsia, có màu trung tính giúp cân bằng thị giác.",
      "colorItems": [
        {
          "colorId": "pink-hot",
          "role": "anchor",
          "theoryRole": "anchor",
          "order": 1
        },
        {
          "colorId": "white-pure",
          "role": "supporting",
          "theoryRole": "neutral-support",
          "order": 2
        },
        {
          "colorId": "green-emerald",
          "role": "accent",
          "theoryRole": "accent",
          "order": 3
        },
        {
          "colorId": "yellow-lemon",
          "role": "accent",
          "theoryRole": "accent",
          "order": 4
        },
        {
          "colorId": "blue-baby",
          "role": "accent",
          "theoryRole": "accent",
          "order": 5
        }
      ],
      "styleTags": [
        "bold",
        "street-style"
      ],
      "occasions": [
        "street-style",
        "party",
        "weekend"
      ],
      "difficulty": "hard",
      "isActive": true
    }
  ]
};
