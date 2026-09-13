// src/data/Home.ts
// ==========================================
// 1. TYPE INTERFACES
// ==========================================

export type CategoryType =
  | 'Running'
  | 'Casual'
  | 'Basketball'
  | 'Formal'
  | 'Skate'
  | 'School'
  | 'Sandals'
  | 'Boots'
  | 'Training'
  | 'Socks'
  | 'Shoe Care'
  | 'Laces'
  | 'Bags'
  | 'Hats'
  | 'Insoles'
  | 'Heels';

export interface ImageUrls {
  img: string;
  img1: string;
  img2: string;
}

export interface Shoe_man {
  id: number;
  title: string;
  brand: string;
  category: 'Running' | 'Casual' | 'Basketball' | 'Formal' | 'Skate' | 'Training';
  price: number;
  imageUrl: ImageUrls;
  sizes: number[];
  inStock: boolean;
}

export interface Shoe_kids {
  id: number;
  title: string;
  brand: string;
  category: 'Running' | 'Casual' | 'Basketball' | 'School' | 'Sandals';
  price: number;
  imageUrl: ImageUrls;
  sizes: number[];
  inStock: boolean;
}

export interface Shoe_women {
  id: number;
  title: string;
  brand: string;
  category: 'Running' | 'Casual' | 'Basketball' | 'Boots' | 'Heels' | 'Sandals' | 'Training';
  price: number;
  imageUrl: ImageUrls;
  sizes: number[];
  inStock: boolean;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  logoUrl: {
    logo: string;
    icon?: string;
  };
  country: string;
  categories: CategoryType[];
  featured: boolean;
}

export interface Accessory {
  id: number;
  title: string;
  brand: string;
  category: 'Socks' | 'Shoe Care' | 'Laces' | 'Bags' | 'Hats' | 'Insoles';
  price: number;
  imageUrl: ImageUrls;
  inStock: boolean;
  featured?: boolean;
}

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  badge?: string;
}

export interface FeaturedCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  itemCount: number;
}

export interface PromoBanner {
  id: number;
  title: string;
  description: string;
  discountCode?: string;
  ctaText: string;
  ctaLink: string;
  bgImageUrl: string;
}

export interface Testimonial {
  id: number;
  author: string;
  avatarUrl: string;
  rating: number;
  comment: string;
  verifiedPurchase: boolean;
  productName: string;
}

export interface HomepageData {
  heroSlides: HeroSlide[];
  featuredCategories: FeaturedCategory[];
  promoBanners: PromoBanner[];
  spotlightBrandIds: number[];
  featuredProductIds: number[];
  testimonials: Testimonial[];
}

export interface FootwearStoreDatabase {
  menShoes: Shoe_man[];
  womenShoes: Shoe_women[];
  kidsShoes: Shoe_kids[];
  brands: Brand[];
  accessories: Accessory[];
  homepage: HomepageData;
}

// ==========================================
// 2. DATASETS
// ==========================================

const MEN_SHOES: Shoe_man[] = [
  {
    id: 1,
    title: "Air Force 1 '07",
    brand: "Nike",
    category: "Casual",
    price: 115,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11],
    inStock: true
  },
  {
    id: 2,
    title: "Ultraboost Light",
    brand: "Adidas",
    category: "Running",
    price: 190,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [7.5, 8, 9, 9.5, 10, 11, 12],
    inStock: true
  },
  {
    id: 3,
    title: "Air Jordan 1 Retro High",
    brand: "Nike",
    category: "Basketball",
    price: 180,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [8, 9, 10, 10.5, 11, 12],
    inStock: true
  },
  {
    id: 4,
    title: "SB Dunk Low Pro",
    brand: "Nike",
    category: "Skate",
    price: 115,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [8, 8.5, 9, 10, 11],
    inStock: true
  },
  {
    id: 5,
    title: "Classic Derby Leather",
    brand: "Clarks",
    category: "Formal",
    price: 150,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [8, 9, 10, 11, 12],
    inStock: true
  },
  {
    id: 6,
    title: "Metcon 9 Training",
    brand: "Nike",
    category: "Training",
    price: 150,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: false
  }
];

const WOMEN_SHOES: Shoe_women[] = [
  {
    id: 1,
    title: "Air Force 1 '07 Women",
    brand: "Nike",
    category: "Casual",
    price: 115,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 2,
    title: "Ultraboost Light Women",
    brand: "Adidas",
    category: "Running",
    price: 190,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    inStock: true
  },
  {
    id: 3,
    title: "Classic Canvas High Top",
    brand: "Converse",
    category: "Casual",
    price: 65,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 6, 7, 8, 9],
    inStock: true
  },
  {
    id: 4,
    title: "Chelsea Leather Boots",
    brand: "Dr. Martens",
    category: "Boots",
    price: 170,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [6, 7, 8, 9, 10],
    inStock: true
  },
  {
    id: 5,
    title: "Strappy Block Heels",
    brand: "Steve Madden",
    category: "Heels",
    price: 90,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8],
    inStock: true
  }
];

const KIDS_SHOES: Shoe_kids[] = [
  {
    id: 1,
    title: "Air Force 1 LE (Kids)",
    brand: "Nike",
    category: "Casual",
    price: 75,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [10, 11, 12, 13, 1, 2, 3],
    inStock: true
  },
  {
    id: 2,
    title: "Flex Runner 2 Kids",
    brand: "Nike",
    category: "Running",
    price: 50,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [11, 12, 13, 1, 2],
    inStock: true
  },
  {
    id: 3,
    title: "Kids Comfort Slide Sandals",
    brand: "Adidas",
    category: "Sandals",
    price: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [1, 2, 3, 4, 5],
    inStock: true
  },
  {
    id: 4,
    title: "Classic School Oxford",
    brand: "Clarks",
    category: "School",
    price: 60,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [12, 13, 1, 2, 3, 4],
    inStock: true
  }
];

const BRANDS: Brand[] = [
  {
    id: 1,
    name: "Nike",
    slug: "nike",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      icon: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    country: "United States",
    categories: ["Running", "Casual", "Basketball", "Skate", "Training"],
    featured: true
  },
  {
    id: 2,
    name: "Adidas",
    slug: "adidas",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      icon: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    },
    country: "Germany",
    categories: ["Running", "Casual", "Basketball", "Training"],
    featured: true
  },
  {
    id: 3,
    name: "Converse",
    slug: "converse",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      icon: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80"
    },
    country: "United States",
    categories: ["Casual", "Skate"],
    featured: true
  },
  {
    id: 4,
    name: "Puma",
    slug: "puma",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
      icon: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80"
    },
    country: "Germany",
    categories: ["Running", "Casual", "Training"],
    featured: true
  },
  {
    id: 5,
    name: "New Balance",
    slug: "new-balance",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
      icon: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80"
    },
    country: "United States",
    categories: ["Running", "Casual", "Training"],
    featured: true
  },
  {
    id: 6,
    name: "Vans",
    slug: "vans",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      icon: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },
    country: "United States",
    categories: ["Casual", "Skate"],
    featured: true
  },
  {
    id: 7,
    name: "Jordan",
    slug: "jordan",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      icon: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80"
    },
    country: "United States",
    categories: ["Basketball", "Casual"],
    featured: true
  },
  {
    id: 8,
    name: "Reebok",
    slug: "reebok",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
      icon: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"
    },
    country: "United States",
    categories: ["Training", "Casual", "Running"],
    featured: true
  },
  {
    id: 9,
    name: "Asics",
    slug: "asics",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      icon: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    },
    country: "Japan",
    categories: ["Running", "Training"],
    featured: true
  },
  {
    id: 10,
    name: "Under Armour",
    slug: "under-armour",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      icon: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80"
    },
    country: "United States",
    categories: ["Basketball", "Training", "Running"],
    featured: true
  }
];

const ACCESSORIES: Accessory[] = [
  {
    id: 1,
    title: "Everyday Cushion Crew Socks (3 Pairs)",
    brand: "Nike",
    category: "Socks",
    price: 22,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  },
  {
    id: 2,
    title: "Sneaker Cleaning Kit",
    brand: "Shoe Care Co.",
    category: "Shoe Care",
    price: 18,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 3,
    title: "Premium Reflective Laces",
    brand: "LaceLab",
    category: "Laces",
    price: 10,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: false
  },
  {
    id: 4,
    title: "Athletic Duffle Bag",
    brand: "Nike",
    category: "Bags",
    price: 55,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    inStock: true,
    featured: true
  }
];

const HOMEPAGE_DATA: HomepageData = {
  heroSlides: [
    {
      id: 1,
      title: "Step Into the Next Generation",
      subtitle: "Discover the latest performance footwear and street-ready drops.",
      ctaText: "Shop New Arrivals",
      ctaLink: "/category/new-arrivals",
      imageUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
      badge: "Fall 2026 Collection"
    },
    {
      id: 2,
      title: "Run Beyond Your Limits",
      subtitle: "Lightweight, responsive running shoes built for maximum speed.",
      ctaText: "Explore Running",
      ctaLink: "/category/running",
      imageUrl: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      badge: "Performance"
    },
    {
      id: 3,
      title: "Streetwear Essentials",
      subtitle: "Timeless silhouettes designed for everyday urban style.",
      ctaText: "Shop Casual",
      ctaLink: "/category/casual",
      imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
      badge: "Trending Now"
    }
  ],
  featuredCategories: [
    {
      id: 1,
      name: "Men's Sneakers",
      slug: "mens",
      description: "Performance running, basketball, and lifestyle pairs.",
      imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      itemCount: 120
    },
    {
      id: 2,
      name: "Women's Collection",
      slug: "womens",
      description: "Trending silhouettes, training shoes, and everyday comfort.",
      imageUrl: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      itemCount: 95
    },
    {
      id: 3,
      name: "Kids' Footwear",
      slug: "kids",
      description: "Durable, comfortable, and stylish kicks for growing feet.",
      imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      itemCount: 60
    },
    {
      id: 4,
      name: "Shoe Care & Accessories",
      slug: "accessories",
      description: "Keep your sneakers clean and fresh with specialized gear.",
      imageUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      itemCount: 45
    }
  ],
  promoBanners: [
    {
      id: 1,
      title: "End of Season Sale",
      description: "Get up to 40% off selected basketball and training footwear.",
      discountCode: "SEASON2026",
      ctaText: "Shop Sale Items",
      ctaLink: "/sale",
      bgImageUrl: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "Member Exclusive Offer",
      description: "Sign up today and take 15% off your very first order.",
      discountCode: "WELCOME15",
      ctaText: "Join Free",
      ctaLink: "/register",
      bgImageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  spotlightBrandIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  featuredProductIds: [1, 2, 3, 4],
  testimonials: [
    {
      id: 1,
      author: "Alex Rivers",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      comment: "Fast shipping and 100% authentic sneakers.",
      verifiedPurchase: true,
      productName: "Nike Air Max 270"
    },
    {
      id: 2,
      author: "Sarah Chen",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      comment: "Super comfortable for daily running! Sizing was spot on.",
      verifiedPurchase: true,
      productName: "Adidas Ultraboost Light"
    },
    {
      id: 3,
      author: "Marcus Vance",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 4,
      comment: "Great customer service when I needed a size exchange.",
      verifiedPurchase: true,
      productName: "Air Jordan 1 Retro High"
    }
  ]
};

// ==========================================
// 3. SINGLE CENTRALIZED EXPORT
// ==========================================

export const STORE_DATABASE: FootwearStoreDatabase = {
  menShoes: MEN_SHOES,
  womenShoes: WOMEN_SHOES,
  kidsShoes: KIDS_SHOES,
  brands: BRANDS,
  accessories: ACCESSORIES,
  homepage: HOMEPAGE_DATA
};

export default STORE_DATABASE;