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
  | 'Insoles';

export interface ImageUrls {
  img: string;
  img1: string;
  img2: string;
}

export interface Shoe_man {
  id: number;
  title: string;
  brand: string;
  category: 'Running' | 'Casual' | 'Basketball' | 'Formal' | 'Skate';
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
  images: ImageUrls;
  sizes: number[];
  inStock: boolean;
}

export interface Shoe_women {
  id: number;
  title: string;
  brand: string;
  category: 'Running' | 'Casual' | 'Basketball' | 'Boots' | 'Heels' | 'Sandals' | 'Training';
  price: number;
  images: ImageUrls;
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
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
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
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    sizes: [7.5, 8, 9, 9.5, 10, 11, 12],
    inStock: true
  }
];

const WOMEN_SHOES: Shoe_women[] = [
  {
    id: 1,
    title: "Air Force 1 '07",
    brand: "Nike",
    category: "Casual",
    price: 115,
    images: {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 2,
    title: "Ultraboost Light",
    brand: "Adidas",
    category: "Running",
    price: 190,
    images: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
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
    images: {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    sizes: [10, 11, 12, 13, 1, 2, 3],
    inStock: true
  }
];

const BRANDS: Brand[] = [
  {
    id: 1,
    name: "Nike",
    slug: "nike",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      icon: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
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
      logo: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      icon: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    country: "Germany",
    categories: ["Running", "Casual", "Basketball", "Training"],
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
      img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
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
      imageUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      badge: "Fall 2026 Collection"
    }
  ],
  featuredCategories: [
    {
      id: 1,
      name: "Men's Sneakers",
      slug: "mens",
      description: "Performance running, basketball, and lifestyle pairs.",
      imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      itemCount: 120
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
      bgImageUrl: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    }
  ],
  spotlightBrandIds: [1, 2],
  featuredProductIds: [1, 2],
  testimonials: [
    {
      id: 1,
      author: "Alex Rivers",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      rating: 5,
      comment: "Fast shipping and 100% authentic.",
      verifiedPurchase: true,
      productName: "Nike Air Max 270"
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