/* =========================================================
   SECOND SKIN — Product Catalog
   Images: Unsplash (free to use). Swap `img`/`alt` URLs with
   your own studio + on-body photography before launch.
   ========================================================= */

const PRODUCTS = [
  {
    id: "noir-biker",
    name: "The Noir Biker",
    category: "Biker",
    collection: "noir",
    price: 489,
    rating: 4.9,
    reviews: 412,
    tag: "Bestseller",
    color: "Onyx Black",
    model: "Marco is 6'1\", wearing size M.",
    desc: "Our signature asymmetric biker, cut from full-grain Italian calfskin in deep onyx. Hand-finished YKK Excella hardware, a quilted shoulder yoke, and a tailored taper that breaks in to your exact shape within weeks.",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    alt: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "heritage-cafe",
    name: "Heritage Café Racer",
    category: "Café Racer",
    collection: "tan",
    price: 459,
    rating: 4.8,
    reviews: 318,
    tag: "Bestseller",
    color: "Aged Cognac",
    model: "Elise is 5'9\", wearing size S.",
    desc: "A minimalist café racer in vegetable-tanned cognac that deepens with every wear. Snap-button collar, ribbed cuffs, and a clean band collar — the jacket that ages like whiskey.",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    alt: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "minimal-bomber",
    name: "The Minimalist Bomber",
    category: "Bomber",
    collection: "minimal",
    price: 425,
    rating: 4.9,
    reviews: 276,
    tag: "New",
    color: "Onyx Black",
    model: "Devon is 6'0\", wearing size M.",
    desc: "Zero hardware, pure line. A lambskin bomber with a knit collar, hidden placket, and a silhouette engineered to drape clean over a tee or a knit. The quiet luxury staple.",
    img: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80",
    alt: "https://images.unsplash.com/photo-1485218126466-34e6392ec754?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1485218126466-34e6392ec754?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "aviator-shearling",
    name: "The Aviator Shearling",
    category: "Aviator",
    collection: "tan",
    price: 690,
    rating: 4.9,
    reviews: 154,
    tag: "Limited",
    color: "Cigar Brown",
    model: "Aria is 5'7\", wearing size S.",
    desc: "A modern B-3 in cigar-brown leather lined with genuine Spanish shearling. Built for real cold, cut slim for the city. Each hide is hand-selected for grain character.",
    img: "https://images.unsplash.com/photo-1605908502724-9093a79a1b39?auto=format&fit=crop&w=800&q=80",
    alt: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605908502724-9093a79a1b39?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "noir-trench",
    name: "The Noir Trench",
    category: "Trench",
    collection: "noir",
    price: 720,
    rating: 4.8,
    reviews: 98,
    tag: "New",
    color: "Onyx Black",
    model: "Sofia is 5'10\", wearing size S.",
    desc: "A floor-grazing leather trench in supple onyx lambskin. Belted waist, storm flap, and a dramatic fall that moves like fabric. The statement piece of the Noir Edit.",
    img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80",
    alt: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "suede-trucker",
    name: "The Suede Trucker",
    category: "Trucker",
    collection: "tan",
    price: 398,
    rating: 4.7,
    reviews: 187,
    tag: null,
    color: "Warm Sand",
    model: "Leo is 5'11\", wearing size M.",
    desc: "A western-inspired trucker in buttery warm-sand suede. Chest snap pockets, a clean yoke, and an adjustable button waist. Throws over everything, season after season.",
    img: "https://images.unsplash.com/photo-1614093302611-8efc4de12407?auto=format&fit=crop&w=800&q=80",
    alt: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614093302611-8efc4de12407?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "minimal-blazer",
    name: "The Leather Blazer",
    category: "Blazer",
    collection: "minimal",
    price: 545,
    rating: 4.8,
    reviews: 132,
    tag: "New",
    color: "Espresso",
    model: "Naomi is 5'8\", wearing size S.",
    desc: "Tailoring meets leather. A single-breasted blazer in espresso lambskin with structured shoulders and a nipped waist. Dresses up denim, sharpens everything else.",
    img: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80",
    alt: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "noir-moto",
    name: "The Moto Cropped",
    category: "Biker",
    collection: "noir",
    price: 439,
    rating: 4.9,
    reviews: 241,
    tag: "Bestseller",
    color: "Onyx Black",
    model: "Yuki is 5'6\", wearing size XS.",
    desc: "A cropped moto in onyx calfskin with diagonal zip, snap lapels, and a shrunken fit that lands at the waist. The most-photographed jacket we make.",
    img: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?auto=format&fit=crop&w=800&q=80",
    alt: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1604644401890-0bd678c83788?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const SIZES = ["XS", "S", "M", "L", "XL"];

function getProduct(id) { return PRODUCTS.find(p => p.id === id); }
function formatPrice(n) { return "$" + n.toLocaleString(); }
