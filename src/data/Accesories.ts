export interface Accessory {
  id: number;
  title: string;
  brand: string;
  category: string;
  price: number;
  imageUrl: {
    img: string;
    img1: string;
    img2: string;
  };
  inStock: boolean;
  featured: boolean;
}

export const Accessories: Accessory[] = [
  // ===== BAGS =====
  {
    id: 1,
    title: "Everyday Rolltop Backpack",
    brand: "Nike",
    category: "Bags",
    price: 59,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 2,
    title: "Minimal Crossbody Bag",
    brand: "Adidas",
    category: "Bags",
    price: 42,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1590874103328-eac38a67437a?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 3,
    title: "Compact Fanny Pack",
    brand: "Herschel",
    category: "Bags",
    price: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1590874103328-eac38a67437a?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 4,
    title: "Leather Laptop Backpack",
    brand: "Coach",
    category: "Bags",
    price: 95,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 5,
    title: "Sport Duffel Bag",
    brand: "Under Armour",
    category: "Bags",
    price: 48,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1590874103328-eac38a67437a?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },

  // ===== HATS =====
  {
    id: 6,
    title: "Classic Dad Cap",
    brand: "New Era",
    category: "Hats",
    price: 28,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1521369984180-86565a04d35f?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1575428652377-a0d1d6d8f3e3?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 7,
    title: "Trucker Mesh Cap",
    brand: "Goorin Bros",
    category: "Hats",
    price: 34,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1521369984180-86565a04d35f?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1575428652377-a0d1d6d8f3e3?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 8,
    title: "Wool Beanie",
    brand: "Carhartt",
    category: "Hats",
    price: 26,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1575428652377-a0d1d6d8f3e3?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 9,
    title: "Bucket Hat",
    brand: "Stussy",
    category: "Hats",
    price: 38,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1575428652377-a0d1d6d8f3e3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1521369984180-86565a04d35f?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 10,
    title: "Performance Visor",
    brand: "ASICS",
    category: "Hats",
    price: 24,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1521369984180-86565a04d35f?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1575428652377-a0d1d6d8f3e3?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },

  // ===== SOCKS =====
  {
    id: 11,
    title: "Everyday Crew Socks (3-Pack)",
    brand: "Nike",
    category: "Socks",
    price: 22,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 12,
    title: "No-Show Athletic Socks",
    brand: "Bombas",
    category: "Socks",
    price: 18,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 13,
    title: "Merino Wool Hiking Socks",
    brand: "Smartwool",
    category: "Socks",
    price: 29,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 14,
    title: "Compression Running Socks",
    brand: "CEP",
    category: "Socks",
    price: 32,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 15,
    title: "Cushioned Quarter Socks",
    brand: "Stance",
    category: "Socks",
    price: 20,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },

  // ===== SHOE CARE =====
  {
    id: 16,
    title: "Premium Sneaker Cleaning Kit",
    brand: "Crep Protect",
    category: "Shoe Care",
    price: 39,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 17,
    title: "Suede & Nubuck Cleaner",
    brand: "Jason Markk",
    category: "Shoe Care",
    price: 18,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 18,
    title: "Shoe Deodorizer Spray",
    brand: "Reshoevn8r",
    category: "Shoe Care",
    price: 16,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 19,
    title: "Waterproof Protector Spray",
    brand: "Crep Protect",
    category: "Shoe Care",
    price: 22,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 20,
    title: "Premium Cleaning Brush Set",
    brand: "Jason Markk",
    category: "Shoe Care",
    price: 24,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },

  // ===== LACES =====
  {
    id: 21,
    title: "Flat Cotton Laces (White)",
    brand: "Lace Lab",
    category: "Laces",
    price: 10,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 22,
    title: "Round Waxed Laces",
    brand: "Red Wing",
    category: "Laces",
    price: 12,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 23,
    title: "Reflective Running Laces",
    brand: "Lace Lab",
    category: "Laces",
    price: 14,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 24,
    title: "Premium Leather Laces",
    brand: "Vans",
    category: "Laces",
    price: 11,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 25,
    title: "Colored Flat Laces Pack",
    brand: "Lace Lab",
    category: "Laces",
    price: 15,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },

  // ===== INSOLES =====
  {
    id: 26,
    title: "Memory Foam Insoles",
    brand: "Sof Sole",
    category: "Insoles",
    price: 28,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 27,
    title: "Arch Support Insoles",
    brand: "Superfeet",
    category: "Insoles",
    price: 45,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 28,
    title: "Gel Heel Cushions",
    brand: "Dr. Scholl's",
    category: "Insoles",
    price: 16,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 29,
    title: "Full Length Orthotic Insoles",
    brand: "Superfeet",
    category: "Insoles",
    price: 55,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 30,
    title: "Cushioned Everyday Insoles",
    brand: "Sof Sole",
    category: "Insoles",
    price: 22,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },

  // ===== MORE BAGS =====
  {
    id: 31,
    title: "Travel Shoe Bag",
    brand: "Vans",
    category: "Bags",
    price: 25,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 32,
    title: "Minimalist Tote Bag",
    brand: "Adidas",
    category: "Bags",
    price: 38,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1590874103328-eac38a67437a?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 33,
    title: "Gym Drawstring Bag",
    brand: "Nike",
    category: "Bags",
    price: 28,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1590874103328-eac38a67437a?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 34,
    title: "Premium Leather Messenger",
    brand: "Coach",
    category: "Bags",
    price: 110,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 35,
    title: "Everyday Sling Bag",
    brand: "Herschel",
    category: "Bags",
    price: 40,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1590874103328-eac38a67437a?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },

  // ===== MORE HATS =====
  {
    id: 36,
    title: "Snapback Cap",
    brand: "Mitchell & Ness",
    category: "Hats",
    price: 36,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1521369984180-86565a04d35f?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1575428652377-a0d1d6d8f3e3?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 37,
    title: "Corduroy Bucket Hat",
    brand: "Stussy",
    category: "Hats",
    price: 42,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1575428652377-a0d1d6d8f3e3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1521369984180-86565a04d35f?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 38,
    title: "Ribbed Beanie",
    brand: "Carhartt",
    category: "Hats",
    price: 24,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1575428652377-a0d1d6d8f3e3?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 39,
    title: "Golf Visor",
    brand: "Titleist",
    category: "Hats",
    price: 26,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1521369984180-86565a04d35f?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1575428652377-a0d1d6d8f3e3?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 40,
    title: "Fleece Beanie",
    brand: "The North Face",
    category: "Hats",
    price: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1575428652377-a0d1d6d8f3e3?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },

  // ===== MORE SOCKS & CARE =====
  {
    id: 41,
    title: "Ankle Cushion Socks",
    brand: "Balega",
    category: "Socks",
    price: 19,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 42,
    title: "Thermal Winter Socks",
    brand: "Smartwool",
    category: "Socks",
    price: 27,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 43,
    title: "Midsole Cleaning Solution",
    brand: "Reshoevn8r",
    category: "Shoe Care",
    price: 17,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 44,
    title: "Sneaker Cleaning Wipes",
    brand: "Jason Markk",
    category: "Shoe Care",
    price: 14,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 45,
    title: "Premium Foam Cleaner",
    brand: "Crep Protect",
    category: "Shoe Care",
    price: 20,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },

  // ===== FINAL MIX =====
  {
    id: 46,
    title: "Flat Black Laces",
    brand: "Vans",
    category: "Laces",
    price: 9,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 47,
    title: "Orthotic Support Insoles",
    brand: "Superfeet",
    category: "Insoles",
    price: 49,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 48,
    title: "Everyday Crossbody",
    brand: "Puma",
    category: "Bags",
    price: 36,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1590874103328-eac38a67437a?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 49,
    title: "Classic Baseball Cap",
    brand: "New Era",
    category: "Hats",
    price: 29,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1521369984180-86565a04d35f?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1575428652377-a0d1d6d8f3e3?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 50,
    title: "Performance Crew Socks",
    brand: "New Balance",
    category: "Socks",
    price: 21,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  }
];