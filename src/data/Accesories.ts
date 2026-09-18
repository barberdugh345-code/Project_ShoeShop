
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
  {
    id: 1,
    title: "Essential Everyday Backpack",
    brand: "Nike",
    category: "Bags",
    price: 55,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img1: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
      img2: "https://images.unsplash.com/photo-1544816155-12df9643f363"
    },
    inStock: true,
    featured: true
  },
  {
    id: 2,
    title: "Classic Cotton Baseball Cap",
    brand: "Adidas",
    category: "Hats",
    price: 25,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
      img1: "https://images.unsplash.com/photo-1521369984180-86565a04d35f",
      img2: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9"
    },
    inStock: true,
    featured: true
  },
  {
    id: 3,
    title: "Premium Crew Socks Pack",
    brand: "Puma",
    category: "Socks",
    price: 18,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img1: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2",
      img2: "https://images.unsplash.com/photo-1582966772680-860e372bb558"
    },
    inStock: true,
    featured: false
  },
  {
    id: 4,
    title: "Professional Sneaker Cleaning Kit",
    brand: "Crep Protect",
    category: "Shoe Care",
    price: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
    },
    inStock: true,
    featured: true
  },
  {
    id: 5,
    title: "Flat Cotton Shoe Laces",
    brand: "Vans",
    category: "Laces",
    price: 9,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    inStock: true,
    featured: false
  },
  {
    id: 6,
    title: "Comfort Gel Shoe Insoles",
    brand: "Superfeet",
    category: "Insoles",
    price: 40,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    featured: false
  },
  {
    id: 7,
    title: "Performance Running Socks",
    brand: "New Balance",
    category: "Socks",
    price: 24,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2",
      img1: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img2: "https://images.unsplash.com/photo-1582966772680-860e372bb558"
    },
    inStock: true,
    featured: false
  },
  {
    id: 8,
    title: "Waterproof Shoe Protector",
    brand: "Jason Markk",
    category: "Shoe Care",
    price: 20,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
    },
    inStock: true,
    featured: false
  },
  {
    id: 9,
    title: "Urban Crossbody Shoulder Bag",
    brand: "Puma",
    category: "Bags",
    price: 38,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363",
      img1: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img2: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3"
    },
    inStock: true,
    featured: true
  },
  {
    id: 10,
    title: "Warm Ribbed Winter Beanie",
    brand: "Jordan",
    category: "Hats",
    price: 28,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img1: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
      img2: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9"
    },
    inStock: true,
    featured: false
  },
  {
    id: 11,
    title: "Premium Shoe Cleaning Brush",
    brand: "Reshoevn8r",
    category: "Shoe Care",
    price: 16,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
    },
    inStock: true,
    featured: false
  },
  {
    id: 12,
    title: "Memory Foam Comfort Insoles",
    brand: "Sof Sole",
    category: "Insoles",
    price: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    featured: false
  },
  {
    id: 13,
    title: "Classic Leather Backpack",
    brand: "Carhartt",
    category: "Bags",
    price: 65,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img1: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
      img2: "https://images.unsplash.com/photo-1544816155-12df9643f363"
    },
    inStock: true,
    featured: true
  },
  {
    id: 14,
    title: "Sport Performance Visor",
    brand: "ASICS",
    category: "Hats",
    price: 22,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
      img1: "https://images.unsplash.com/photo-1521369984180-86565a04d35f",
      img2: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9"
    },
    inStock: true,
    featured: false
  },
  {
    id: 15,
    title: "No-Show Athletic Socks",
    brand: "Nike",
    category: "Socks",
    price: 16,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1582966772680-860e372bb558",
      img1: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img2: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2"
    },
    inStock: true,
    featured: false
  },
  {
    id: 16,
    title: "Reflective Running Shoe Laces",
    brand: "Lace Lab",
    category: "Laces",
    price: 12,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    inStock: true,
    featured: true
  },
  {
    id: 17,
    title: "Sneaker Cleaning Foam",
    brand: "Crep Protect",
    category: "Shoe Care",
    price: 18,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
      img1: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    inStock: true,
    featured: false
  },
  {
    id: 18,
    title: "Mini Everyday Waist Bag",
    brand: "Adidas",
    category: "Bags",
    price: 32,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
      img1: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img2: "https://images.unsplash.com/photo-1544816155-12df9643f363"
    },
    inStock: true,
    featured: false
  },
  {
    id: 19,
    title: "Everyday Cotton Bucket Hat",
    brand: "New Era",
    category: "Hats",
    price: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9",
      img1: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
      img2: "https://images.unsplash.com/photo-1521369984180-86565a04d35f"
    },
    inStock: true,
    featured: false
  },
  {
    id: 20,
    title: "Premium Shoe Storage Bag",
    brand: "Vans",
    category: "Bags",
    price: 24,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363",
      img1: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img2: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3"
    },
    inStock: true,
    featured: false
  }
];