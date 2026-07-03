/* =========================================================
   SECOND SKIN — Product Catalog
   Four sections: Men (10) · Women (10) · Kids (6) · Accessories (12)
   Every image below has been visually verified to show real
   leather that matches the product it represents (Unsplash,
   free to use). Replace with your own studio photography as
   soon as it's shot — see README shot list.
   ========================================================= */

const U = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/* Size systems differ per section. Products may override with
   their own `sizes` array (belts, gloves, one-size goods). */
const SIZES_BY_SECTION = {
  "Men":         ["XS", "S", "M", "L", "XL", "XXL"],
  "Women":       ["XS", "S", "M", "L", "XL"],
  "Kids":        ["4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"],
  "Accessories": ["One Size"]
};

const PRODUCTS = [
  /* ---------------- MEN ---------------- */
  {
    id: "noir-biker", name: "The Noir Biker", section: "Men", category: "Biker",
    price: 489, tag: null, color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "Our signature asymmetric biker in deep onyx. Full-grain leather, silver-tone hardware, quilted detailing and a tailored taper that breaks in to your exact shape within weeks. The jacket the house was founded on.",
    img: U("1551028719-00167b16eac5", 800), alt: U("1521223890158-f9f7c3d5d504", 800),
    gallery: [U("1551028719-00167b16eac5", 1000), U("1521223890158-f9f7c3d5d504", 800), U("1592158249887-ac6ae7921691", 800)]
  },
  {
    id: "heritage-racer", name: "The Heritage Racer", section: "Men", category: "Café Racer",
    price: 459, tag: null, color: "Saddle Brown",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A pared-back racer in saddle-brown leather that deepens with every wear. Clean zip front, minimal hardware, built to earn its patina over decades — the jacket that ages like whiskey.",
    img: U("1700993443774-306a87b16ae1", 800), alt: U("1487222477894-8943e31ef7b2", 800),
    gallery: [U("1700993443774-306a87b16ae1", 1000), U("1487222477894-8943e31ef7b2", 800), U("1578198576866-7e0ba6078128", 800)]
  },
  {
    id: "aviator-shearling", name: "The Aviator Shearling", section: "Men", category: "Shearling",
    price: 690, tag: "Shearling-Lined", color: "Cigar Brown",
    model: "Cut roomy for layering — size down for a closer fit.",
    desc: "A modern B-3 in cigar-brown leather with a real shearling collar. Built for genuine cold, cut slim enough for the city. Each hide is hand-selected for grain character.",
    img: U("1700168077358-692db90c8b7f", 800), alt: U("1615908280461-d7a332579330", 800),
    gallery: [U("1700168077358-692db90c8b7f", 1000), U("1615908280461-d7a332579330", 800), U("1559551409-dadc959f76b8", 800)]
  },
  {
    id: "cognac-classic", name: "The Cognac Classic", section: "Men", category: "Classic",
    price: 445, tag: null, color: "Aged Cognac",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A timeless straight-zip jacket in aged cognac. No tricks, no excess hardware — just clean lines and vegetable-tanned leather that looks better at year ten than day one.",
    img: U("1623854156816-4c4fc355ffc7", 800), alt: U("1620228922597-cca58f177310", 800),
    gallery: [U("1623854156816-4c4fc355ffc7", 1000), U("1620228922597-cca58f177310", 800), U("1571829604981-ea159f94e5ad", 800)]
  },
  {
    id: "slim-racer", name: "The Slim Racer", section: "Men", category: "Café Racer",
    price: 429, tag: null, color: "Onyx Black",
    model: "Slim through the chest and arms — size up if between sizes.",
    desc: "A close-cut café racer in matte onyx leather. Band collar, single chest zip, no wasted lines — the minimalist's leather jacket, made to sit close to the body.",
    img: U("1553591589-2e96ef7eca65", 800), alt: U("1595390524211-e94e83d1ce64", 800),
    gallery: [U("1553591589-2e96ef7eca65", 1000), U("1595390524211-e94e83d1ce64", 800), U("1596832772762-78e213deff5f", 800)]
  },
  {
    id: "double-rider", name: "The Double Rider", section: "Men", category: "Biker",
    price: 499, tag: null, color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "The archetype, done properly: wide lapels, asymmetric zip, belted hem. Heavyweight onyx leather with a structure that softens into your silhouette — never out of style since 1928.",
    img: U("1557177040-e73d9591e999", 800), alt: U("1562895367-8f6d066442d1", 800),
    gallery: [U("1557177040-e73d9591e999", 1000), U("1562895367-8f6d066442d1", 800), U("1727515546577-f7d82a47b51d", 800)]
  },
  {
    id: "city-biker", name: "The City Biker", section: "Men", category: "Biker",
    price: 469, tag: null, color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A cleaned-up biker for everyday wear: slimmer lapels, tonal hardware, and a straight hem that works over a hoodie or a shirt. The one you'll reach for daily.",
    img: U("1675877879221-871aa9f7c314", 800), alt: U("1605268845395-15828acd992e", 800),
    gallery: [U("1675877879221-871aa9f7c314", 1000), U("1605268845395-15828acd992e", 800), U("1439893999115-e6213dd04e1d", 800)]
  },
  {
    id: "highway", name: "The Highway", section: "Men", category: "Classic",
    price: 479, tag: null, color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A straight-collar road jacket in onyx full-grain — built like touring gear, styled like tailoring. Storm cuffs, deep pockets, and leather that shrugs off the miles.",
    img: U("1579452940721-1e4db65d413f", 800), alt: U("1551794840-8ae3b9c181f8", 800),
    gallery: [U("1579452940721-1e4db65d413f", 1000), U("1551794840-8ae3b9c181f8", 800), U("1520975661595-6453be3f7070", 800)]
  },
  {
    id: "ranch-suede", name: "The Ranch Suede", section: "Men", category: "Suede",
    price: 455, tag: "Suede", color: "Tobacco Suede",
    model: "Relaxed fit — true to size for an easy drape.",
    desc: "Tobacco-brown suede with a soft hand and a western ease. Button front, patch pockets, and a nap that catches the light differently every hour of the day.",
    img: U("1744486347520-bd4bb0b6ac53", 800), alt: U("1716295177956-420a647c83ac", 800),
    gallery: [U("1744486347520-bd4bb0b6ac53", 1000), U("1716295177956-420a647c83ac", 800), U("1571829604981-ea159f94e5ad", 800)]
  },
  {
    id: "weekender", name: "The Weekender", section: "Men", category: "Classic",
    price: 449, tag: null, color: "Chestnut Brown",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A chestnut-brown zip jacket with an unstructured shoulder and a lived-in temper from day one. The off-duty staple that dresses up or down without trying.",
    img: U("1760403315402-98a35c607029", 800), alt: U("1578198576866-7e0ba6078128", 800),
    gallery: [U("1760403315402-98a35c607029", 1000), U("1578198576866-7e0ba6078128", 800), U("1716295177956-420a647c83ac", 800)]
  },

  /* ---------------- WOMEN ---------------- */
  {
    id: "moto-cropped", name: "The Moto Cropped", section: "Women", category: "Moto",
    price: 439, tag: null, color: "Onyx Black",
    model: "Cropped cut, lands at the waist — see the size guide.",
    desc: "A cropped moto in onyx leather with a diagonal zip and a shrunken fit that lands right at the waist. Cut for the female form, made to be lived in.",
    img: U("1602370463198-086436840055", 800), alt: U("1594803617043-2a5a0829fcd9", 800),
    gallery: [U("1602370463198-086436840055", 1000), U("1594803617043-2a5a0829fcd9", 800), U("1615397815341-bb06f6d55c94", 800)]
  },
  {
    id: "evening-moto", name: "The Evening Moto", section: "Women", category: "Moto",
    price: 459, tag: null, color: "Onyx Black",
    model: "Tailored fit — true to size.",
    desc: "Polished enough for dinner, tough enough for the ride home. An onyx moto with a soft sheen, slim sleeves, and hardware kept quiet.",
    img: U("1648135141805-f754072c7328", 800), alt: U("1618324855210-fdc44d1a6e2a", 800),
    gallery: [U("1648135141805-f754072c7328", 1000), U("1618324855210-fdc44d1a6e2a", 800), U("1779212542813-00babf71ff02", 800)]
  },
  {
    id: "fringe-western", name: "The Fringe Western", section: "Women", category: "Western",
    price: 529, tag: "Fringe", color: "Onyx Black",
    model: "Relaxed shoulder — size down for a closer fit.",
    desc: "Old-west swagger, modern cut. Hand-set fringe across the back yoke and sleeves, on supple onyx leather that moves when you do.",
    img: U("1771580425842-36380c98efc4", 800), alt: U("1511280303142-0051e93baeeb", 800),
    gallery: [U("1771580425842-36380c98efc4", 1000), U("1511280303142-0051e93baeeb", 800)]
  },
  {
    id: "boulevard", name: "The Boulevard", section: "Women", category: "Biker",
    price: 449, tag: null, color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A straight-cut biker that walks as well as it rides. Mid-weight onyx leather, clean lapels, and a hem that sits perfectly over denim.",
    img: U("1611129368572-4e3b759469a3", 800), alt: U("1615397815341-bb06f6d55c94", 800),
    gallery: [U("1611129368572-4e3b759469a3", 1000), U("1615397815341-bb06f6d55c94", 800), U("1594803617043-2a5a0829fcd9", 800)]
  },
  {
    id: "signature-moto", name: "The Signature Moto", section: "Women", category: "Moto",
    price: 435, tag: null, color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "The everyday moto: diagonal zip, snap lapels, and a matte onyx finish that goes with everything you already own. The first leather jacket, done right.",
    img: U("1584558620159-e749f0b19e8e", 800), alt: U("1757081791153-3f48cd8c67ac", 800),
    gallery: [U("1584558620159-e749f0b19e8e", 1000), U("1757081791153-3f48cd8c67ac", 800), U("1727515546577-f7d82a47b51d", 800)]
  },
  {
    id: "free-rider", name: "The Free Rider", section: "Women", category: "Biker",
    price: 445, tag: null, color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "Built for open roads and long afternoons. A classic women's biker in onyx full-grain with a belted hem and shoulders that move freely.",
    img: U("1570740566605-49bf22d0d79c", 800), alt: U("1779212542813-00babf71ff02", 800),
    gallery: [U("1570740566605-49bf22d0d79c", 1000), U("1779212542813-00babf71ff02", 800), U("1618324855210-fdc44d1a6e2a", 800)]
  },
  {
    id: "dusk-biker", name: "The Dusk", section: "Women", category: "Biker",
    price: 455, tag: null, color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A soft-shouldered biker in blackened leather with a low sheen that catches evening light. Understated hardware, unhurried attitude.",
    img: U("1568388532032-01e7e8380d36", 800), alt: U("1594803617043-2a5a0829fcd9", 800),
    gallery: [U("1568388532032-01e7e8380d36", 1000), U("1594803617043-2a5a0829fcd9", 800), U("1511280303142-0051e93baeeb", 800)]
  },
  {
    id: "tonal-moto", name: "The Tonal", section: "Women", category: "Moto",
    price: 469, tag: null, color: "Onyx Black",
    model: "Slim fit — size up if between sizes.",
    desc: "Head-to-toe leather, one tone. A slim onyx moto designed to pair with leather trousers or sit sharp over black denim — monochrome, maximal effect.",
    img: U("1562751361-8839562e351b", 800), alt: U("1615397815341-bb06f6d55c94", 800),
    gallery: [U("1562751361-8839562e351b", 1000), U("1615397815341-bb06f6d55c94", 800)]
  },
  {
    id: "sienna-classic", name: "The Sienna", section: "Women", category: "Classic",
    price: 465, tag: null, color: "Chestnut Brown",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A chestnut-brown classic with a feminine taper and warm undertones that flatter in any light. The brown leather jacket that makes black optional.",
    img: U("1619731428826-a535570610b1", 800), alt: U("1774949635744-c4bbd3670c1c", 800),
    gallery: [U("1619731428826-a535570610b1", 1000), U("1774949635744-c4bbd3670c1c", 800), U("1571829604981-ea159f94e5ad", 800)]
  },
  {
    id: "downtown", name: "The Downtown", section: "Women", category: "Classic",
    price: 435, tag: null, color: "Onyx Black",
    model: "Relaxed fit through the body — true to size.",
    desc: "A straight-line city jacket in onyx leather — no lapels, no fuss, just clean geometry that works with a hat and jeans or over a dress.",
    img: U("1772449099705-e7ae7ba25773", 800), alt: U("1594803617043-2a5a0829fcd9", 800),
    gallery: [U("1772449099705-e7ae7ba25773", 1000), U("1594803617043-2a5a0829fcd9", 800), U("1615397815341-bb06f6d55c94", 800)]
  },

  /* ---------------- KIDS ---------------- */
  {
    id: "mini-biker", name: "The Mini Biker", section: "Kids", category: "Biker",
    price: 249, tag: null, color: "Onyx Black",
    model: "Sized by age — add one size for growing room.",
    desc: "The Noir Biker, shrunk to size. Soft, lightweight lambskin, snag-safe zips and a roomy cut through the shoulders so it lasts more than one season. Built for playgrounds, styled for the paddock.",
    img: U("1658262105817-ee44e0f5a05e", 800), alt: U("1727519366940-fd9b926e362e", 800),
    gallery: [U("1658262105817-ee44e0f5a05e", 1000), U("1727519366940-fd9b926e362e", 800), U("1596832772762-78e213deff5f", 800)]
  },
  {
    id: "first-leather", name: "The First Leather", section: "Kids", category: "Moto",
    price: 229, tag: null, color: "Onyx Black",
    model: "Sized by age — add one size for growing room.",
    desc: "Every jacket obsession starts somewhere. A featherweight kids' moto in butter-soft lambskin with low-profile hardware and a lining that feels like pyjamas.",
    img: U("1648009847493-db3a2f961bce", 800), alt: U("1727524366429-27de8607d5f6", 800),
    gallery: [U("1648009847493-db3a2f961bce", 1000), U("1727524366429-27de8607d5f6", 800)]
  },
  {
    id: "junior-moto", name: "The Junior Moto", section: "Kids", category: "Moto",
    price: 259, tag: null, color: "Onyx Black",
    model: "Sized by age — add one size for growing room.",
    desc: "For the kid with more attitude than everyone else in the room. A proper moto silhouette scaled down, with soft edges where it counts and hardware that won't scratch.",
    img: U("1668803417104-7b14a07e608e", 800), alt: U("1727517016634-6fdfc18525c1", 800),
    gallery: [U("1668803417104-7b14a07e608e", 1000), U("1727517016634-6fdfc18525c1", 800)]
  },
  {
    id: "little-racer", name: "The Little Racer", section: "Kids", category: "Racer",
    price: 219, tag: null, color: "Onyx Black",
    model: "Sized by age — add one size for growing room.",
    desc: "A clean-lined café racer for small humans: band collar, single zip, zero fuss. Light enough for school runs, tough enough for everything after.",
    img: U("1727515192207-3dc860bfd773", 800), alt: U("1622274153478-2de530145ae2", 800),
    gallery: [U("1727515192207-3dc860bfd773", 1000), U("1622274153478-2de530145ae2", 800)]
  },
  {
    id: "mini-bomber", name: "The Mini Bomber", section: "Kids", category: "Bomber",
    price: 239, tag: null, color: "Onyx Black",
    model: "Sized by age — add one size for growing room.",
    desc: "A soft lambskin bomber cut for climbing frames and long car rides. Ribbed cuffs that stay put, pockets deep enough for treasures.",
    img: U("1727516299214-c4d54704b045", 800), alt: U("1727517855674-f0c95d41d1be", 800),
    gallery: [U("1727516299214-c4d54704b045", 1000), U("1727517855674-f0c95d41d1be", 800)]
  },
  {
    id: "young-rider", name: "The Young Rider", section: "Kids", category: "Biker",
    price: 269, tag: null, color: "Onyx Black",
    model: "Older-kids cut (8–13Y) — see the size guide.",
    desc: "For the almost-teenager who's already picked out their first motorbike. A scaled-down rider with the same full-grain attitude as the grown-up version.",
    img: U("1643653857344-fcf9e0538ba7", 800), alt: U("1727518154538-59e7dc479f8f", 800),
    gallery: [U("1643653857344-fcf9e0538ba7", 1000), U("1727518154538-59e7dc479f8f", 800)]
  },

  /* ---------------- ACCESSORIES ---------------- */
  {
    id: "bifold-wallet", name: "The Bifold Wallet", section: "Accessories", category: "Wallets",
    price: 89, tag: null, color: "Onyx Black",
    model: "8 card slots · 2 note sleeves · slim profile.",
    desc: "A slim bifold in onyx full-grain with hand-painted edges. Eight card slots, two note sleeves, and a profile that disappears into a front pocket.",
    img: U("1612023395494-1c4050b68647", 800), alt: U("1601592996763-f05c9c80a7f1", 800),
    gallery: [U("1612023395494-1c4050b68647", 1000), U("1601592996763-f05c9c80a7f1", 800)]
  },
  {
    id: "heritage-wallet", name: "The Heritage Wallet", section: "Accessories", category: "Wallets",
    price: 95, tag: null, color: "Distressed Brown",
    model: "8 card slots · 2 note sleeves · ages beautifully.",
    desc: "Vegetable-tanned brown that scars, darkens and tells on you. The wallet equivalent of a favourite jacket — better at year five than day one.",
    img: U("1620109176813-e91290f6c795", 800), alt: U("1614330316567-11d8e572db16", 800),
    gallery: [U("1620109176813-e91290f6c795", 1000), U("1614330316567-11d8e572db16", 800)]
  },
  {
    id: "card-holder", name: "The Card Holder", section: "Accessories", category: "Wallets",
    price: 59, tag: null, color: "Onyx Black",
    model: "4 card slots · centre pocket for folded notes.",
    desc: "For the pocket minimalist: four slots, one centre pocket, zero bulk. Cut from the same onyx full-grain as our jackets.",
    img: U("1601592996763-f05c9c80a7f1", 800), alt: U("1612023395494-1c4050b68647", 800),
    gallery: [U("1601592996763-f05c9c80a7f1", 1000), U("1612023395494-1c4050b68647", 800)]
  },
  {
    id: "classic-belt", name: "The Classic Belt", section: "Accessories", category: "Belts",
    price: 75, tag: null, color: "Saddle Tan",
    sizes: ["30\"", "32\"", "34\"", "36\"", "38\"", "40\""],
    model: "Order your trouser size — the belt is cut to match.",
    desc: "One strap of full-grain saddle tan, one solid brass buckle, no stitching to fail. The belt you buy once.",
    img: U("1624222247344-550fb60583dc", 800), alt: U("1611937685025-8d1df67a80b6", 800),
    gallery: [U("1624222247344-550fb60583dc", 1000), U("1611937685025-8d1df67a80b6", 800)]
  },
  {
    id: "braided-belt", name: "The Braided Belt", section: "Accessories", category: "Belts",
    price: 79, tag: null, color: "Chestnut Brown",
    sizes: ["30\"", "32\"", "34\"", "36\"", "38\"", "40\""],
    model: "Order your trouser size — the belt is cut to match.",
    desc: "Hand-braided chestnut leather that pins anywhere — no holes, no exact science. Relaxed enough for linen, sharp enough for denim.",
    img: U("1705493655920-20c572928501", 800), alt: U("1611937685025-8d1df67a80b6", 800),
    gallery: [U("1705493655920-20c572928501", 1000), U("1611937685025-8d1df67a80b6", 800)]
  },
  {
    id: "weekender-duffel", name: "The Weekender Duffel", section: "Accessories", category: "Bags",
    price: 320, tag: null, color: "Chestnut Brown",
    model: "Fits a long weekend · cabin-friendly dimensions.",
    desc: "A chestnut duffel built for two nights away and a lifetime of them. Full-grain body, reinforced base, and handles that soften to your grip.",
    img: U("1525103504173-8dc1582c7430", 800), alt: U("1571829604981-ea159f94e5ad", 800),
    gallery: [U("1525103504173-8dc1582c7430", 1000), U("1571829604981-ea159f94e5ad", 800)]
  },
  {
    id: "city-satchel", name: "The City Satchel", section: "Accessories", category: "Bags",
    price: 280, tag: null, color: "Aged Cognac",
    model: "Fits a 13\" laptop · adjustable shoulder strap.",
    desc: "An aged-cognac satchel with buckled straps and room for a 13-inch laptop. Office by day, gets better looking on the way home.",
    img: U("1473188588951-666fce8e7c68", 800), alt: U("1716295177956-420a647c83ac", 800),
    gallery: [U("1473188588951-666fce8e7c68", 1000), U("1716295177956-420a647c83ac", 800)]
  },
  {
    id: "day-backpack", name: "The Day Pack", section: "Accessories", category: "Bags",
    price: 260, tag: null, color: "Dark Brown",
    model: "Fits a 15\" laptop · drawstring main compartment.",
    desc: "A dark-brown leather backpack with a flap top, drawstring throat and a back panel that won't soak your shirt. Carries the day without looking like luggage.",
    img: U("1549943872-f7ff0b2b51be", 800), alt: U("1716295177956-420a647c83ac", 800),
    gallery: [U("1549943872-f7ff0b2b51be", 1000), U("1716295177956-420a647c83ac", 800)]
  },
  {
    id: "city-pack", name: "The City Pack", section: "Accessories", category: "Bags",
    price: 255, tag: null, color: "Rosewood Tan",
    model: "Fits a 14\" laptop · front zip pocket.",
    desc: "A structured rosewood-tan backpack with a front pocket for the small stuff and a silhouette clean enough for client meetings.",
    img: U("1622560257067-108402fcedc0", 800), alt: U("1622560480605-d83c853bc5c3", 800),
    gallery: [U("1622560257067-108402fcedc0", 1000), U("1622560480605-d83c853bc5c3", 800)]
  },
  {
    id: "woven-tote", name: "The Woven Tote", section: "Accessories", category: "Bags",
    price: 240, tag: "Hand-Woven", color: "Aged Cognac",
    model: "Hand-woven panels · chain-detail strap.",
    desc: "Hand-woven cognac panels with a chain-detail strap — structured enough to stand on its own, soft enough to carry everywhere.",
    img: U("1598532163257-ae3c6b2524b6", 800), alt: U("1571829604981-ea159f94e5ad", 800),
    gallery: [U("1598532163257-ae3c6b2524b6", 1000), U("1571829604981-ea159f94e5ad", 800)]
  },
  {
    id: "crossbody", name: "The Crossbody", section: "Accessories", category: "Bags",
    price: 190, tag: null, color: "Saddle Tan",
    model: "Adjustable strap · fits phone, wallet, keys + more.",
    desc: "A saddle-tan crossbody with a flap closure and just enough room — phone, wallet, keys, and the thing you swore you wouldn't buy.",
    img: U("1600857062241-98e5dba7f214", 800), alt: U("1716295177956-420a647c83ac", 800),
    gallery: [U("1600857062241-98e5dba7f214", 1000), U("1716295177956-420a647c83ac", 800)]
  },
  {
    id: "driving-gloves", name: "The Driving Gloves", section: "Accessories", category: "Gloves",
    price: 85, tag: null, color: "Onyx Black",
    sizes: ["S", "M", "L"],
    model: "Snug fit — measure around your palm to size.",
    desc: "Unlined onyx lambskin with a snap wrist and enough feel to leave on. For steering wheels, cold mornings and looking slightly like a getaway driver.",
    img: U("1643650374762-196c86358df3", 800), alt: U("1643650374762-196c86358df3", 800),
    gallery: [U("1643650374762-196c86358df3", 1000)]
  }
];

function sizesFor(p) { return p.sizes || SIZES_BY_SECTION[p.section] || ["One Size"]; }
function getProduct(id) { return PRODUCTS.find(p => p.id === id); }
function formatPrice(n) { return "$" + n.toLocaleString(); }
