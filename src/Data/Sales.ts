export interface Shoe_Promotion{
    id: number;
    title: string;
    discount: string;
    code: string;
    category: string;
    badge: string;
    bannerUrl: string;
    description: string;
    active: boolean;
}

export const Promo_Type : Shoe_Promotion[]=[
    {
    id: 1,
    title: "End of Season Clearance",
    discount: "Up to 50% OFF",
    code: "SUMMER50",
    category: "Clearance",
    badge: "Limited Time",
    bannerUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
    description: "Save big on last season's top footwear and activewear items.",
    active: true
  },
  {
    id: 2,
    title: "Buy One Get One 30% Off Accessories",
    discount: "BOGO 30% OFF",
    code: "ACCBOGO",
    category: "Accessories",
    badge: "Popular",
    bannerUrl: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
    description: "Mix and match socks, hats, bags, and shoe care products.",
    active: true
  },
  {
    id: 3,
    title: "Sneaker Bundle Deal",
    discount: "Free Cleaner Kit",
    code: "CLEANKIT",
    category: "Footwear",
    badge: "Exclusive",
    bannerUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description: "Get a free Crep Protect kit when you buy any sneaker over $120.",
    active: true
  },
  {
    id: 4,
    title: "Student Discount Program",
    discount: "15% OFF",
    code: "STUDENT15",
    category: "Special",
    badge: "Always On",
    bannerUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    description: "Verified students get an extra discount on all full-price items.",
    active: true
  },
  {
    id: 5,
    title: "Weekend Flash Steal",
    discount: "30% OFF Flash Sale",
    code: "FLASH30",
    category: "Flash Sale",
    badge: "24 Hours Only",
    bannerUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    description: "Instant savings on select high-performance trainers this weekend only.",
    active: true
  },
  {
    id: 6,
    title: "Member Exclusive Early Access",
    discount: "Extra 20% OFF",
    code: "VIPMEMBER",
    category: "Members Only",
    badge: "VIP Access",
    bannerUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
    description: "Club members get an extra price drop on top of already discounted gear.",
    active: true
  },
  {
    id: 7,
    title: "Runners High Savings",
    discount: "25% OFF Marathon Gear",
    code: "RUN25",
    category: "Running",
    badge: "Trending",
    bannerUrl: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
    description: "Special pricing on professional road and trail running models.",
    active: true
  },
  {
    id: 8,
    title: "Back to Campus Kickoff",
    discount: "$20 OFF $100+",
    code: "CAMPUS20",
    category: "Lifestyle",
    badge: "Seasonal",
    bannerUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570",
    description: "Gear up for class with fresh streetwear kicks and everyday backpacks.",
    active: true
  },
  {
    id: 9,
    title: "Holiday Gift Bundle",
    discount: "Save $40 on Sets",
    code: "GIFTHOLIDAY",
    category: "Bundles",
    badge: "Best Value",
    bannerUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    description: "Buy any shoe plus two accessories and instantly receive $40 off total.",
    active: true
  },
  {
    id: 10,
    title: "Skate & Street Blowout",
    discount: "Flat $45 Deals",
    code: "SKATE45",
    category: "Skate",
    badge: "Price Drop",
    bannerUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    description: "Select vulcanized and skate canvas sneakers marked down to $45.",
    active: true
  },
  {
    id: 11,
    title: "Night Run Glow Promotion",
    discount: "15% OFF Reflectives",
    code: "NIGHTGLOW",
    category: "Running",
    badge: "Special Edition",
    bannerUrl: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
    description: "Discounts on high-visibility reflective apparel and night trainers.",
    active: true
  },
  {
    id: 12,
    title: "Free Express Shipping Event",
    discount: "FREE Shipping",
    code: "FREESHIPEX",
    category: "Shipping",
    badge: "No Minimum",
    bannerUrl: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
    description: "Complimentary priority shipping on all orders over $75.",
    active: true
  },
  {
    id: 13,
    title: "App Order Inaugural Discount",
    discount: "$10 OFF First Order",
    code: "FIRSTAPP10",
    category: "Mobile Only",
    badge: "App Perk",
    bannerUrl: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
    description: "Take $10 off your first purchase placed through our official app.",
    active: true
  },
  {
    id: 14,
    title: "Overstock Sock Spree",
    discount: "5 Pairs for $30",
    code: "5SOCKS30",
    category: "Accessories",
    badge: "Mega Deal",
    bannerUrl: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
    description: "Stock up on premium cushioned performance socks for a lower price.",
    active: true
  }
]


export interface Shoe_ForSale{
    id: number;
    title: string;
    brand: string;
    originalPrice: number;
    salePrice: number;
    discountPercent: number;
    imageUrl: {
        img :string 
        img1:string
        img2:string
    };
    inStock: boolean;
    badge: string;
}

export const ForSales_Type :Shoe_ForSale[]=[
    {
    id: 101,
    title: "Air Max Pulse Street Edition",
    brand: "Nike",
    originalPrice: 150,
    salePrice: 99,
    discountPercent: 34,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    badge: "Sale"
  },
  {
    id: 102,
    title: "Ultraboost Light Running Shoes",
    brand: "Adidas",
    originalPrice: 190,
    salePrice: 129,
    discountPercent: 32,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570"
    },
    inStock: true,
    badge: "Hot Deal"
  },
  {
    id: 103,
    title: "Classic Leather Sneaker Cleaner Bundle",
    brand: "Crep Protect",
    originalPrice: 45,
    salePrice: 28,
    discountPercent: 37,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    badge: "Bundle Save"
  },
  {
    id: 104,
    title: "Retro High-Top Street Canvas",
    brand: "Vans",
    originalPrice: 85,
    salePrice: 55,
    discountPercent: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    badge: "Clearance"
  },
  {
    id: 105,
    title: "574 Core Heritage Classic",
    brand: "New Balance",
    originalPrice: 90,
    salePrice: 62,
    discountPercent: 31,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    inStock: true,
    badge: "Limited"
  },
  {
    id: 106,
    title: "GEL-KAYANO 29 Performance",
    brand: "ASICS",
    originalPrice: 160,
    salePrice: 110,
    discountPercent: 31,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    inStock: true,
    badge: "Steal"
  },
  {
    id: 107,
    title: "Clifton 8 Daily Cushion",
    brand: "Hoka",
    originalPrice: 140,
    salePrice: 95,
    discountPercent: 32,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    inStock: true,
    badge: "Outlet"
  },
  {
    id: 108,
    title: "Chuck 70 Vintage Canvas High",
    brand: "Converse",
    originalPrice: 80,
    salePrice: 49,
    discountPercent: 38,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    inStock: true,
    badge: "Popular"
  },
  {
    id: 109,
    title: "RS-X Efekt Urban Trainer",
    brand: "Puma",
    originalPrice: 110,
    salePrice: 69,
    discountPercent: 37,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    badge: "Sale"
  },
  {
    id: 110,
    title: "Cloudswift Urban Running Shoe",
    brand: "On Running",
    originalPrice: 150,
    salePrice: 105,
    discountPercent: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    inStock: true,
    badge: "Hot Deal"
  },
  {
    id: 111,
    title: "Air Jordan 1 Low Retro",
    brand: "Jordan",
    originalPrice: 120,
    salePrice: 84,
    discountPercent: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    inStock: true,
    badge: "Clearance"
  },
  {
    id: 112,
    title: "Classic Leather Waterproof Boot",
    brand: "Timberland",
    originalPrice: 180,
    salePrice: 125,
    discountPercent: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      img1: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    inStock: true,
    badge: "Price Drop"
  },
  {
    id: 113,
    title: "Ghost 14 Neutral Trainer",
    brand: "Brooks",
    originalPrice: 130,
    salePrice: 85,
    discountPercent: 34,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    inStock: true,
    badge: "Markdown"
  },
  {
    id: 114,
    title: "Arizona Buckle Slide Sandal",
    brand: "Birkenstock",
    originalPrice: 110,
    salePrice: 79,
    discountPercent: 28,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9"
    },
    inStock: true,
    badge: "Summer Sale"
  }
]