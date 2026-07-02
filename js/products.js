/* =========================================================
   SECOND SKIN — Product Catalog
   "The Founding Five" — our launch capsule.
   Every image below has been visually verified to show real
   leather that matches the product it represents (Unsplash,
   free to use). Replace with your own studio photography as
   soon as it's shot — see README shot list.
   ========================================================= */

const PRODUCTS = [
  {
    id: "noir-biker",
    name: "The Noir Biker",
    category: "Biker",
    collection: "noir",
    price: 489,
    tag: "Founding Five",
    color: "Onyx Black",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "Our signature asymmetric biker in deep onyx. Full-grain leather, silver-tone hardware, quilted detailing and a tailored taper that breaks in to your exact shape within weeks. The jacket the house was founded on.",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    alt: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592158249887-ac6ae7921691?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "heritage-racer",
    name: "The Heritage Racer",
    category: "Café Racer",
    collection: "tan",
    price: 459,
    tag: "Founding Five",
    color: "Saddle Brown",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A pared-back racer in saddle-brown leather that deepens with every wear. Clean zip front, minimal hardware, built to earn its patina over decades — the jacket that ages like whiskey.",
    img: "https://images.unsplash.com/photo-1700993443774-306a87b16ae1?auto=format&fit=crop&w=800&q=80",
    alt: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1700993443774-306a87b16ae1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578198576866-7e0ba6078128?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "aviator-shearling",
    name: "The Aviator Shearling",
    category: "Aviator",
    collection: "shearling",
    price: 690,
    tag: "Shearling-Lined",
    color: "Cigar Brown",
    model: "Cut roomy for layering — size down for a closer fit.",
    desc: "A modern B-3 in cigar-brown leather with a real shearling collar. Built for genuine cold, cut slim enough for the city. Each hide is hand-selected for grain character.",
    img: "https://images.unsplash.com/photo-1700168077358-692db90c8b7f?auto=format&fit=crop&w=800&q=80",
    alt: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1700168077358-692db90c8b7f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1760533091973-1262bf57d244?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "cognac-classic",
    name: "The Cognac Classic",
    category: "Classic",
    collection: "tan",
    price: 445,
    tag: "Founding Five",
    color: "Aged Cognac",
    model: "Fits true to size — see the size guide before ordering.",
    desc: "A timeless straight-zip jacket in aged cognac. No tricks, no excess hardware — just clean lines and vegetable-tanned leather that looks better at year ten than day one.",
    img: "https://images.unsplash.com/photo-1623854156816-4c4fc355ffc7?auto=format&fit=crop&w=800&q=80",
    alt: "https://images.unsplash.com/photo-1619731428826-a535570610b1?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1623854156816-4c4fc355ffc7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1619731428826-a535570610b1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571829604981-ea159f94e5ad?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "moto-cropped",
    name: "The Moto Cropped",
    category: "Women's",
    collection: "noir",
    price: 439,
    tag: "Founding Five",
    color: "Onyx Black",
    model: "Cropped cut, lands at the waist — see the size guide.",
    desc: "A cropped moto in onyx leather with a diagonal zip and a shrunken fit that lands right at the waist. Cut for the female form, made to be lived in.",
    img: "https://images.unsplash.com/photo-1602370463198-086436840055?auto=format&fit=crop&w=800&q=80",
    alt: "https://images.unsplash.com/photo-1594803617043-2a5a0829fcd9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602370463198-086436840055?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1594803617043-2a5a0829fcd9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615397815341-bb06f6d55c94?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const SIZES = ["XS", "S", "M", "L", "XL"];

function getProduct(id) { return PRODUCTS.find(p => p.id === id); }
function formatPrice(n) { return "$" + n.toLocaleString(); }
