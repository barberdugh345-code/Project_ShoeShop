export interface Accessory {
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

export const Accessories: Accessory[] = [
  {
    id: 1,
    title: "Everyday Cushion Crew Socks (3 Pairs)",
    brand: "Nike",
    category: "Socks",
    price: 22,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img1: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2",
      img2: "https://images.unsplash.com/photo-1582966772680-860e372bb558"
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
      img1: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
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
      img2: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9"
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
      img2: "https://images.unsplash.com/photo-1544816155-12df9643f363"
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
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
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
      img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
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
      img: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2",
      img1: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img2: "https://images.unsplash.com/photo-1582966772680-860e372bb558"
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
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
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
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363",
      img1: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img2: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3"
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
      img1: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
      img2: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9"
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
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img2: "https://images.unsplash.com/photo-1585238342024-78d387f4a707"
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
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
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
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
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
      img: "https://images.unsplash.com/photo-1582966772680-860e372bb558",
      img1: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img2: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2"
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
      img: "https://images.unsplash.com/photo-1521369984180-86565a04d35f",
      img1: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
      img2: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9"
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
      img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
      img1: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img2: "https://images.unsplash.com/photo-1544816155-12df9643f363"
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
      img1: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
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
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
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
      img1: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
      img2: "https://images.unsplash.com/photo-1544816155-12df9643f363"
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
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    inStock: true,
    featured: false
  },
  {
    id: 21,
    title: "Cushioned Quarter Ankle Socks (3 Pairs)",
    brand: "Adidas",
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
    id: 22,
    title: "Sneaker Cleaning Travel Kit",
    brand: "Jason Markk",
    category: "Shoe Care",
    price: 28,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
    },
    inStock: true,
    featured: true
  },
  {
    id: 23,
    title: "Sportwear Utility Beanie",
    brand: "Nike",
    category: "Hats",
    price: 24,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9"
    },
    inStock: true,
    featured: false
  },
  {
    id: 24,
    title: "Essential Crossbody Bag",
    brand: "Puma",
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
    id: 25,
    title: "Fat Skate Replacement Laces",
    brand: "Vans",
    category: "Laces",
    price: 7,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    inStock: true,
    featured: false
  },
  {
    id: 26,
    title: "Orthotic Support Running Insoles",
    brand: "Superfeet",
    category: "Insoles",
    price: 48,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    featured: true
  },
  {
    id: 27,
    title: "Dri-FIT Everyday High Crew Socks (6 Pairs)",
    brand: "Nike",
    category: "Socks",
    price: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2",
      img1: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img2: "https://images.unsplash.com/photo-1582966772680-860e372bb558"
    },
    inStock: true,
    featured: true
  },
  {
    id: 28,
    title: "Quick Clean Sneaker Wipes (12 Pack)",
    brand: "Crep Protect",
    category: "Shoe Care",
    price: 14,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
      img1: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    inStock: true,
    featured: false
  },
  {
    id: 29,
    title: "Classic Canvas Tote Bag",
    brand: "Converse",
    category: "Bags",
    price: 25,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363",
      img1: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img2: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3"
    },
    inStock: true,
    featured: false
  },
  {
    id: 30,
    title: "Classic Curved Brim Snapback",
    brand: "New Era",
    category: "Hats",
    price: 34,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
      img1: "https://images.unsplash.com/photo-1521369984180-86565a04d35f",
      img2: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9"
    },
    inStock: true,
    featured: true
  },
  {
    id: 31,
    title: "Premium Horsehair Shoe Brush",
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
    id: 32,
    title: "Adjustable Shoe Trees (2 Pairs)",
    brand: "Crep Protect",
    category: "Shoe Care",
    price: 22,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
    },
    inStock: true,
    featured: false
  },
  {
    id: 33,
    title: "Round Rope Athletic Laces",
    brand: "Lace Lab",
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
    id: 34,
    title: "Lightweight Run Ankle Socks (3 Pairs)",
    brand: "ASICS",
    category: "Socks",
    price: 15,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1582966772680-860e372bb558",
      img1: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img2: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2"
    },
    inStock: true,
    featured: false
  },
  {
    id: 35,
    title: "Bucket Hat Originals",
    brand: "Adidas",
    category: "Hats",
    price: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9",
      img1: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
      img2: "https://images.unsplash.com/photo-1521369984180-86565a04d35f"
    },
    inStock: false,
    featured: false
  },
  {
    id: 36,
    title: "Heritage Gym Drawstring Sackpack",
    brand: "Nike",
    category: "Bags",
    price: 22,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img1: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
      img2: "https://images.unsplash.com/photo-1544816155-12df9643f363"
    },
    inStock: true,
    featured: false
  },
  {
    id: 37,
    title: "Gel Heel Comfort Cushion Pads",
    brand: "Sof Sole",
    category: "Insoles",
    price: 18,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    featured: false
  },
  {
    id: 38,
    title: "Foam Cleaner Refill Solution",
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
    id: 39,
    title: "Heavy Duty Tactical Backpack",
    brand: "Carhartt",
    category: "Bags",
    price: 75,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363",
      img1: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img2: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3"
    },
    inStock: true,
    featured: true
  },
  {
    id: 40,
    title: "Printed Patterned Flat Laces",
    brand: "Lace Lab",
    category: "Laces",
    price: 11,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    inStock: true,
    featured: false
  },
  {
    id: 41,
    title: "Retro Ribbed Crew Socks (3 Pairs)",
    brand: "Puma",
    category: "Socks",
    price: 16,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img1: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2",
      img2: "https://images.unsplash.com/photo-1582966772680-860e372bb558"
    },
    inStock: true,
    featured: false
  },
  {
    id: 42,
    title: "Microfiber Cleaning Towel Set",
    brand: "Reshoevn8r",
    category: "Shoe Care",
    price: 10,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img2: "https://images.unsplash.com/photo-1585238342024-78d387f4a707"
    },
    inStock: true,
    featured: false
  },
  {
    id: 43,
    title: "Performance Visor Cap",
    brand: "New Balance",
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
    id: 44,
    title: "Compact Travel Shoe Bag",
    brand: "Nike",
    category: "Bags",
    price: 28,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
      img1: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img2: "https://images.unsplash.com/photo-1544816155-12df9643f363"
    },
    inStock: true,
    featured: false
  },
  {
    id: 45,
    title: "Elastic No-Tie Shoelaces",
    brand: "Lace Lab",
    category: "Laces",
    price: 12,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    inStock: true,
    featured: false
  },
  {
    id: 46,
    title: "Athletic Performance Insoles",
    brand: "Superfeet",
    category: "Insoles",
    price: 45,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    featured: false
  },
  {
    id: 47,
    title: "Compression Running Socks (2 Pairs)",
    brand: "ASICS",
    category: "Socks",
    price: 26,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1631888206126-d62193e6c0c2",
      img1: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img2: "https://images.unsplash.com/photo-1582966772680-860e372bb558"
    },
    inStock: true,
    featured: false
  },
  {
    id: 48,
    title: "Waterproof Stain Repellent Pen",
    brand: "Crep Protect",
    category: "Shoe Care",
    price: 15,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img2: "https://images.unsplash.com/photo-1556228720-195a672e8a03"
    },
    inStock: true,
    featured: false
  },
  {
    id: 49,
    title: "Sport Duffel Training Bag",
    brand: "Champion",
    category: "Bags",
    price: 42,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      img1: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
      img2: "https://images.unsplash.com/photo-1544816155-12df9643f363"
    },
    inStock: true,
    featured: false
  },
  {
    id: 50,
    title: "Foldable Packable Bucket Hat",
    brand: "Carhartt",
    category: "Hats",
    price: 32,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9",
      img1: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
      img2: "https://images.unsplash.com/photo-1521369984180-86565a04d35f"
    },
    inStock: true,
    featured: true
  }
];