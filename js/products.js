/* =========================================================
   SECOND SKIN — Product Catalog
   Ready-to-wear: 10 men's + 10 women's designs.
   Every image below has been visually verified to show real
   leather that matches the product it represents (Unsplash,
   free to use). Replace with your own studio photography as
   soon as it's shot — see README shot list.
   ========================================================= */

const U = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const PRODUCTS = [
  /* ---------------- MEN ---------------- */
  {
    id: "noir-biker",
    name: "The Noir Biker",
    gender: "Men",
    category: "Biker",
    price: 489,
    tag: null,
    color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "Our signature asymmetric biker in deep onyx. Full-grain leather, silver-tone hardware, quilted detailing and a tailored taper that breaks in to your exact shape within weeks. The jacket the house was founded on.",
    img: U("1551028719-00167b16eac5", 800),
    alt: U("1521223890158-f9f7c3d5d504", 800),
    gallery: [U("1551028719-00167b16eac5", 1000), U("1521223890158-f9f7c3d5d504", 800), U("1592158249887-ac6ae7921691", 800)]
  },
  {
    id: "heritage-racer",
    name: "The Heritage Racer",
    gender: "Men",
    category: "Café Racer",
    price: 459,
    tag: null,
    color: "Saddle Brown",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A pared-back racer in saddle-brown leather that deepens with every wear. Clean zip front, minimal hardware, built to earn its patina over decades — the jacket that ages like whiskey.",
    img: U("1700993443774-306a87b16ae1", 800),
    alt: U("1487222477894-8943e31ef7b2", 800),
    gallery: [U("1700993443774-306a87b16ae1", 1000), U("1487222477894-8943e31ef7b2", 800), U("1578198576866-7e0ba6078128", 800)]
  },
  {
    id: "aviator-shearling",
    name: "The Aviator Shearling",
    gender: "Men",
    category: "Shearling",
    price: 690,
    tag: "Shearling-Lined",
    color: "Cigar Brown",
    model: "Cut roomy for layering — size down for a closer fit.",
    desc: "A modern B-3 in cigar-brown leather with a real shearling collar. Built for genuine cold, cut slim enough for the city. Each hide is hand-selected for grain character.",
    img: U("1700168077358-692db90c8b7f", 800),
    alt: U("1615908280461-d7a332579330", 800),
    gallery: [U("1700168077358-692db90c8b7f", 1000), U("1615908280461-d7a332579330", 800), U("1559551409-dadc959f76b8", 800)]
  },
  {
    id: "cognac-classic",
    name: "The Cognac Classic",
    gender: "Men",
    category: "Classic",
    price: 445,
    tag: null,
    color: "Aged Cognac",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A timeless straight-zip jacket in aged cognac. No tricks, no excess hardware — just clean lines and vegetable-tanned leather that looks better at year ten than day one.",
    img: U("1623854156816-4c4fc355ffc7", 800),
    alt: U("1620228922597-cca58f177310", 800),
    gallery: [U("1623854156816-4c4fc355ffc7", 1000), U("1620228922597-cca58f177310", 800), U("1571829604981-ea159f94e5ad", 800)]
  },
  {
    id: "slim-racer",
    name: "The Slim Racer",
    gender: "Men",
    category: "Café Racer",
    price: 429,
    tag: null,
    color: "Onyx Black",
    model: "Slim through the chest and arms — size up if between sizes.",
    desc: "A close-cut café racer in matte onyx leather. Band collar, single chest zip, no wasted lines — the minimalist's leather jacket, made to sit close to the body.",
    img: U("1553591589-2e96ef7eca65", 800),
    alt: U("1595390524211-e94e83d1ce64", 800),
    gallery: [U("1553591589-2e96ef7eca65", 1000), U("1595390524211-e94e83d1ce64", 800), U("1596832772762-78e213deff5f", 800)]
  },
  {
    id: "double-rider",
    name: "The Double Rider",
    gender: "Men",
    category: "Biker",
    price: 499,
    tag: null,
    color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "The archetype, done properly: wide lapels, asymmetric zip, belted hem. Heavyweight onyx leather with a structure that softens into your silhouette — never out of style since 1928.",
    img: U("1557177040-e73d9591e999", 800),
    alt: U("1562895367-8f6d066442d1", 800),
    gallery: [U("1557177040-e73d9591e999", 1000), U("1562895367-8f6d066442d1", 800), U("1727515546577-f7d82a47b51d", 800)]
  },
  {
    id: "city-biker",
    name: "The City Biker",
    gender: "Men",
    category: "Biker",
    price: 469,
    tag: null,
    color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A cleaned-up biker for everyday wear: slimmer lapels, tonal hardware, and a straight hem that works over a hoodie or a shirt. The one you'll reach for daily.",
    img: U("1675877879221-871aa9f7c314", 800),
    alt: U("1605268845395-15828acd992e", 800),
    gallery: [U("1675877879221-871aa9f7c314", 1000), U("1605268845395-15828acd992e", 800), U("1439893999115-e6213dd04e1d", 800)]
  },
  {
    id: "highway",
    name: "The Highway",
    gender: "Men",
    category: "Classic",
    price: 479,
    tag: null,
    color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A straight-collar road jacket in onyx full-grain — built like touring gear, styled like tailoring. Storm cuffs, deep pockets, and leather that shrugs off the miles.",
    img: U("1579452940721-1e4db65d413f", 800),
    alt: U("1551794840-8ae3b9c181f8", 800),
    gallery: [U("1579452940721-1e4db65d413f", 1000), U("1551794840-8ae3b9c181f8", 800), U("1520975661595-6453be3f7070", 800)]
  },
  {
    id: "ranch-suede",
    name: "The Ranch Suede",
    gender: "Men",
    category: "Suede",
    price: 455,
    tag: "Suede",
    color: "Tobacco Suede",
    model: "Relaxed fit — true to size for an easy drape.",
    desc: "Tobacco-brown suede with a soft hand and a western ease. Button front, patch pockets, and a nap that catches the light differently every hour of the day.",
    img: U("1744486347520-bd4bb0b6ac53", 800),
    alt: U("1716295177956-420a647c83ac", 800),
    gallery: [U("1744486347520-bd4bb0b6ac53", 1000), U("1716295177956-420a647c83ac", 800), U("1571829604981-ea159f94e5ad", 800)]
  },
  {
    id: "weekender",
    name: "The Weekender",
    gender: "Men",
    category: "Classic",
    price: 449,
    tag: null,
    color: "Chestnut Brown",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A chestnut-brown zip jacket with an unstructured shoulder and a lived-in temper from day one. The off-duty staple that dresses up or down without trying.",
    img: U("1760403315402-98a35c607029", 800),
    alt: U("1578198576866-7e0ba6078128", 800),
    gallery: [U("1760403315402-98a35c607029", 1000), U("1578198576866-7e0ba6078128", 800), U("1716295177956-420a647c83ac", 800)]
  },

  /* ---------------- WOMEN ---------------- */
  {
    id: "moto-cropped",
    name: "The Moto Cropped",
    gender: "Women",
    category: "Moto",
    price: 439,
    tag: null,
    color: "Onyx Black",
    model: "Cropped cut, lands at the waist — see the size guide.",
    desc: "A cropped moto in onyx leather with a diagonal zip and a shrunken fit that lands right at the waist. Cut for the female form, made to be lived in.",
    img: U("1602370463198-086436840055", 800),
    alt: U("1594803617043-2a5a0829fcd9", 800),
    gallery: [U("1602370463198-086436840055", 1000), U("1594803617043-2a5a0829fcd9", 800), U("1615397815341-bb06f6d55c94", 800)]
  },
  {
    id: "evening-moto",
    name: "The Evening Moto",
    gender: "Women",
    category: "Moto",
    price: 459,
    tag: null,
    color: "Onyx Black",
    model: "Tailored fit — true to size.",
    desc: "Polished enough for dinner, tough enough for the ride home. An onyx moto with a soft sheen, slim sleeves, and hardware kept quiet.",
    img: U("1648135141805-f754072c7328", 800),
    alt: U("1618324855210-fdc44d1a6e2a", 800),
    gallery: [U("1648135141805-f754072c7328", 1000), U("1618324855210-fdc44d1a6e2a", 800), U("1779212542813-00babf71ff02", 800)]
  },
  {
    id: "fringe-western",
    name: "The Fringe Western",
    gender: "Women",
    category: "Western",
    price: 529,
    tag: "Fringe",
    color: "Onyx Black",
    model: "Relaxed shoulder — size down for a closer fit.",
    desc: "Old-west swagger, modern cut. Hand-set fringe across the back yoke and sleeves, on supple onyx leather that moves when you do.",
    img: U("1771580425842-36380c98efc4", 800),
    alt: U("1511280303142-0051e93baeeb", 800),
    gallery: [U("1771580425842-36380c98efc4", 1000), U("1511280303142-0051e93baeeb", 800)]
  },
  {
    id: "boulevard",
    name: "The Boulevard",
    gender: "Women",
    category: "Biker",
    price: 449,
    tag: null,
    color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A straight-cut biker that walks as well as it rides. Mid-weight onyx leather, clean lapels, and a hem that sits perfectly over denim.",
    img: U("1611129368572-4e3b759469a3", 800),
    alt: U("1615397815341-bb06f6d55c94", 800),
    gallery: [U("1611129368572-4e3b759469a3", 1000), U("1615397815341-bb06f6d55c94", 800), U("1594803617043-2a5a0829fcd9", 800)]
  },
  {
    id: "signature-moto",
    name: "The Signature Moto",
    gender: "Women",
    category: "Moto",
    price: 435,
    tag: null,
    color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "The everyday moto: diagonal zip, snap lapels, and a matte onyx finish that goes with everything you already own. The first leather jacket, done right.",
    img: U("1584558620159-e749f0b19e8e", 800),
    alt: U("1757081791153-3f48cd8c67ac", 800),
    gallery: [U("1584558620159-e749f0b19e8e", 1000), U("1757081791153-3f48cd8c67ac", 800), U("1727515546577-f7d82a47b51d", 800)]
  },
  {
    id: "free-rider",
    name: "The Free Rider",
    gender: "Women",
    category: "Biker",
    price: 445,
    tag: null,
    color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "Built for open roads and long afternoons. A classic women's biker in onyx full-grain with a belted hem and shoulders that move freely.",
    img: U("1570740566605-49bf22d0d79c", 800),
    alt: U("1779212542813-00babf71ff02", 800),
    gallery: [U("1570740566605-49bf22d0d79c", 1000), U("1779212542813-00babf71ff02", 800), U("1618324855210-fdc44d1a6e2a", 800)]
  },
  {
    id: "dusk-biker",
    name: "The Dusk",
    gender: "Women",
    category: "Biker",
    price: 455,
    tag: null,
    color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A soft-shouldered biker in blackened leather with a low sheen that catches evening light. Understated hardware, unhurried attitude.",
    img: U("1568388532032-01e7e8380d36", 800),
    alt: U("1594803617043-2a5a0829fcd9", 800),
    gallery: [U("1568388532032-01e7e8380d36", 1000), U("1594803617043-2a5a0829fcd9", 800), U("1511280303142-0051e93baeeb", 800)]
  },
  {
    id: "tonal-moto",
    name: "The Tonal",
    gender: "Women",
    category: "Moto",
    price: 469,
    tag: null,
    color: "Onyx Black",
    model: "Slim fit — size up if between sizes.",
    desc: "Head-to-toe leather, one tone. A slim onyx moto designed to pair with leather trousers or sit sharp over black denim — monochrome, maximal effect.",
    img: U("1562751361-8839562e351b", 800),
    alt: U("1615397815341-bb06f6d55c94", 800),
    gallery: [U("1562751361-8839562e351b", 1000), U("1615397815341-bb06f6d55c94", 800)]
  },
  {
    id: "sienna-classic",
    name: "The Sienna",
    gender: "Women",
    category: "Classic",
    price: 465,
    tag: null,
    color: "Chestnut Brown",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A chestnut-brown classic with a feminine taper and warm undertones that flatter in any light. The brown leather jacket that makes black optional.",
    img: U("1619731428826-a535570610b1", 800),
    alt: U("1774949635744-c4bbd3670c1c", 800),
    gallery: [U("1619731428826-a535570610b1", 1000), U("1774949635744-c4bbd3670c1c", 800), U("1571829604981-ea159f94e5ad", 800)]
  },
  {
    id: "downtown",
    name: "The Downtown",
    gender: "Women",
    category: "Classic",
    price: 435,
    tag: null,
    color: "Onyx Black",
    model: "Relaxed fit through the body — true to size.",
    desc: "A straight-line city jacket in onyx leather — no lapels, no fuss, just clean geometry that works with a hat and jeans or over a dress.",
    img: U("1772449099705-e7ae7ba25773", 800),
    alt: U("1594803617043-2a5a0829fcd9", 800),
    gallery: [U("1772449099705-e7ae7ba25773", 1000), U("1594803617043-2a5a0829fcd9", 800), U("1615397815341-bb06f6d55c94", 800)]
  }
];

const SIZES = ["XS", "S", "M", "L", "XL"];

function getProduct(id) { return PRODUCTS.find(p => p.id === id); }
function formatPrice(n) { return "$" + n.toLocaleString(); }
