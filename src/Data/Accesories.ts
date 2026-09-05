export interface accesory{
    id: number;
    title: string;
    brand: string;
    category: 'Socks' | 'Shoe Care' | 'Laces' | 'Bags' | 'Hats' | 'Insoles';
    price: number;
    imageUrl: {
        img: string;
        img1: string;
        img2: string;
    };
    inStock: boolean;
    featured?: boolean;
}

export const Accesories : accesory[] = [
    {
    id: 1,
    title: "Everyday Cushion Crew Socks (3 Pairs)",
    brand: "Nike",
    category: "Socks",
    price: 22,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    featured: true
  },
  {
    id: 2,
    title: "Ultimate Shoe Care Kit",
    brand: "Crep Protect",
    category: "Shoe Care",
    price: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    featured: true
  },
  {
    id: 3,
    title: "Trefoil Baseball Cap",
    brand: "Adidas",
    category: "Hats",
    price: 26,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
      img1: "https://images.unsplash.com/photo-1521369984180-86565a04d35f",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    inStock: true,
    featured: false
  },
  {
    id: 4,
    title: "Heritage Crossbody Duffel Bag",
    brand: "Nike",
    category: "Bags",
    price: 45,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img1: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    inStock: true,
    featured: true
  },
  {
    id: 5,
    title: "Flat Replacement Sneaker Laces (2 Pairs)",
    brand: "Vans",
    category: "Laces",
    price: 8,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    featured: false
  },
  {
    id: 6,
    title: "Gel Comfort Arch Support Insoles",
    brand: "Superfeet",
    category: "Insoles",
    price: 40,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    inStock: true,
    featured: false
  },
  {
    id: 7,
    title: "Performance Ankle Socks (6 Pairs)",
    brand: "New Balance",
    category: "Socks",
    price: 24,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img1: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    inStock: true,
    featured: false
  },
  {
    id: 8,
    title: "Rain & Stain Shoe Protector Spray",
    brand: "Jason Markk",
    category: "Shoe Care",
    price: 18,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    featured: true
  },
  {
    id: 9,
    title: "Classic Canvas Backpack",
    brand: "Puma",
    category: "Bags",
    price: 38,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    inStock: true,
    featured: false
  },
  {
    id: 10,
    title: "Jumpman Pro Beanie",
    brand: "Jordan",
    category: "Hats",
    price: 28,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img1: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    inStock: false,
    featured: false
  },
  {
    id: 11,
    title: "Suede & Nubuck Cleaning Eraser Set",
    brand: "Jason Markk",
    category: "Shoe Care",
    price: 15,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9"
    },
    inStock: true,
    featured: false
  },
  {
    id: 12,
    title: "Aromatic Cedar Shoe Trees (Pair)",
    brand: "Reshoevn8r",
    category: "Shoe Care",
    price: 32,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    inStock: true,
    featured: true
  },
  {
    id: 13,
    title: "Reflective Oval Running Laces",
    brand: "Lace Lab",
    category: "Laces",
    price: 10,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    inStock: true,
    featured: false
  },
  {
    id: 14,
    title: "Pro-Training No-Show Socks (3 Pairs)",
    brand: "ASICS",
    category: "Socks",
    price: 16,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img1: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    inStock: true,
    featured: false
  },
  {
    id: 15,
    title: "Unstructured Washed Cotton Cap",
    brand: "Carhartt",
    category: "Hats",
    price: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1521369984180-86565a04d35f"
    },
    inStock: true,
    featured: false
  },
  {
    id: 16,
    title: "Mini Waist Hip Pack",
    brand: "Adidas",
    category: "Bags",
    price: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img1: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    inStock: true,
    featured: false
  },
  {
    id: 17,
    title: "High-Impact Memory Foam Insoles",
    brand: "Sof Sole",
    category: "Insoles",
    price: 25,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    inStock: true,
    featured: false
  },
  {
    id: 18,
    title: "Sneaker Deodorizer Pill Capsule (Pair)",
    brand: "Crep Protect",
    category: "Shoe Care",
    price: 12,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    inStock: true,
    featured: false
  },
  {
    id: 19,
    title: "Extra Thick Heavyweight Hoodie Bag",
    brand: "Champion",
    category: "Bags",
    price: 50,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3"
    },
    inStock: true,
    featured: false
  },
  {
    id: 20,
    title: "Waxed Cotton Boot Laces",
    brand: "Timberland",
    category: "Laces",
    price: 12,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    inStock: true,
    featured: false
  }
]