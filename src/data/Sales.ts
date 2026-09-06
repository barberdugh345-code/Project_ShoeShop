export interface Shoe_Promotion{
    id: number;
  title: string;
  brand: string;
  category: string;
  originalPrice: number;
  promoPrice: number;
  discountPercent: number;
  promoCode: string;
  startDate: string;
  endDate: string;
  imageUrl: {
    img: string;
    img1: string;
    img2: string;
  };
  inStock: boolean;
  promoTag: string;
  description: string;
}

export const Promo_Type : Shoe_Promotion[]=[
    {
    id: 1,
    title: "Air Force 1 '07 LV8",
    brand: "Nike",
    category: "Casual",
    originalPrice: 130,
    promoPrice: 91,
    discountPercent: 30,
    promoCode: "NIKE30",
    startDate: "2026-09-01",
    endDate: "2026-09-15",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    inStock: true,
    promoTag: "Flash Sale",
    description: "Get an extra 30% off with promo code NIKE30 at checkout."
  },
  {
    id: 2,
    title: "Ultraboost Light GTX",
    brand: "Adidas",
    category: "Running",
    originalPrice: 200,
    promoPrice: 140,
    discountPercent: 30,
    promoCode: "BOOST30",
    startDate: "2026-09-01",
    endDate: "2026-09-20",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    promoTag: "Member Exclusive",
    description: "Exclusive member deal. Apply BOOST30 during checkout."
  },
  {
    id: 3,
    title: "574 Core Back To School Edition",
    brand: "New Balance",
    category: "Casual",
    originalPrice: 95,
    promoPrice: 66,
    discountPercent: 30,
    promoCode: "BTS2026",
    startDate: "2026-08-25",
    endDate: "2026-09-12",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    inStock: true,
    promoTag: "Back to School",
    description: "Special seasonal drop for students and educators."
  },
  {
    id: 4,
    title: "GEL-KAYANO 30 Anniversary Pack",
    brand: "ASICS",
    category: "Running",
    originalPrice: 170,
    promoPrice: 119,
    discountPercent: 30,
    promoCode: "ASICS30",
    startDate: "2026-09-05",
    endDate: "2026-09-25",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    inStock: true,
    promoTag: "Anniversary Deal",
    description: "Limited-time price drop for ASICS anniversary celebration."
  },
  {
    id: 5,
    title: "Air Jordan 1 Low Craft",
    brand: "Jordan",
    category: "Basketball",
    originalPrice: 140,
    promoPrice: 98,
    discountPercent: 30,
    promoCode: "JORDAN30",
    startDate: "2026-09-01",
    endDate: "2026-09-18",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    inStock: true,
    promoTag: "Weekly Special",
    description: "Save $42 with code JORDAN30 at checkout."
  },
  {
    id: 6,
    title: "Clifton 9 All-Weather",
    brand: "Hoka",
    category: "Running",
    originalPrice: 155,
    promoPrice: 108,
    discountPercent: 30,
    promoCode: "RUNHOKA",
    startDate: "2026-09-03",
    endDate: "2026-09-17",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570"
    },
    inStock: true,
    promoTag: "Runner Choice",
    description: "Use code RUNHOKA for special runner discounts."
  },
  {
    id: 7,
    title: "Old Skool Pro Skate Pack",
    brand: "Vans",
    category: "Skate",
    originalPrice: 80,
    promoPrice: 56,
    discountPercent: 30,
    promoCode: "SKATE2026",
    startDate: "2026-08-30",
    endDate: "2026-09-14",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    promoTag: "Bundle Promo",
    description: "Includes extra laces and shoe cleaner set."
  },
  {
    id: 8,
    title: "Suede Classic XXI Special Edition",
    brand: "Puma",
    category: "Casual",
    originalPrice: 85,
    promoPrice: 59,
    discountPercent: 30,
    promoCode: "PUMA30",
    startDate: "2026-09-02",
    endDate: "2026-09-16",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    promoTag: "Limited Drop",
    description: "Autumn promo special. Apply PUMA30."
  },
  // {
  //   id: 9,
  //   title: "Chuck 70 Plus Canvas High",
  //   brand: "Converse",
  //   originalPrice: 90,
  //   promoPrice: 63,
  //   discountPercent: 30,
  //   promoCode: "CHUCK30",
  //   startDate: "2026-09-01",
  //   endDate: "2026-09-30",
  //   imageUrl: {
  //     img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
  //     img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
  //     img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
  //   },
  //   inStock: true,
  //   promoTag: "Trend Deal",
  //   description: "Monthly promotional offer for high-top canvas series."
  // },
  {
    id: 10,
    title: "Cloud 5 Waterproof",
    brand: "On Running",
    category: "Running",
    originalPrice: 160,
    promoPrice: 112,
    discountPercent: 30,
    promoCode: "CLOUD30",
    startDate: "2026-09-04",
    endDate: "2026-09-19",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    inStock: true,
    promoTag: "Seasonal Promo",
    description: "Waterproof lineup flash promo using code CLOUD30."
  },
  {
    id: 11,
    title: "Pegasus Trail 4 GORE-TEX",
    brand: "Nike",
    category: "Running",
    originalPrice: 160,
    promoPrice: 112,
    discountPercent: 30,
    promoCode: "TRAIL30",
    startDate: "2026-09-01",
    endDate: "2026-09-22",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    inStock: true,
    promoTag: "Outdoor Promo",
    description: "Special outdoor running promotion with TRAIL30 code."
  },
  {
    id: 12,
    title: "Samba OG Decon",
    brand: "Adidas",
    category: "Casual",
    originalPrice: 120,
    promoPrice: 84,
    discountPercent: 30,
    promoCode: "SAMBA30",
    startDate: "2026-09-05",
    endDate: "2026-09-20",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    inStock: true,
    promoTag: "Hot Coupon",
    description: "Save big on original Samba silhouettes."
  },
  {
    id: 13,
    title: "990v6 Made in USA Seasonal",
    brand: "New Balance",
    category: "Running",
    originalPrice: 210,
    promoPrice: 147,
    discountPercent: 30,
    promoCode: "USA30",
    startDate: "2026-09-02",
    endDate: "2026-09-18",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img1: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    inStock: true,
    promoTag: "Premium Deal",
    description: "Premium Made in USA collection promo code."
  },
  {
    id: 14,
    title: "RS-X 3D Cyber Edition",
    brand: "Puma",
    category: "Casual",
    originalPrice: 120,
    promoPrice: 84,
    discountPercent: 30,
    promoCode: "CYBER30",
    startDate: "2026-09-01",
    endDate: "2026-09-15",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    inStock: true,
    promoTag: "Tech Style",
    description: "Futuristic street style promo drop."
  },
  {
    id: 15,
    title: "Ghost 15 Performance Edition",
    brand: "Brooks",
    category: "Running",
    originalPrice: 140,
    promoPrice: 98,
    discountPercent: 30,
    promoCode: "BROOKS30",
    startDate: "2026-08-28",
    endDate: "2026-09-15",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    inStock: true,
    promoTag: "Marathon Prep",
    description: "Special promotion for marathon training season."
  },
  {
    id: 16,
    title: "Classic Leather Legacy AZ",
    brand: "Reebok",
    category: "Casual",
    originalPrice: 85,
    promoPrice: 59,
    discountPercent: 30,
    promoCode: "REEBOK30",
    startDate: "2026-09-01",
    endDate: "2026-09-30",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    promoTag: "Heritage Deal",
    description: "Heritage silhouette promotional price drop."
  },
  {
    id: 17,
    title: "Endorphin Pro 3 Carbon",
    brand: "Saucony",
    category: "Running",
    originalPrice: 225,
    promoPrice: 157,
    discountPercent: 30,
    promoCode: "SPEED30",
    startDate: "2026-09-06",
    endDate: "2026-09-25",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    inStock: true,
    promoTag: "Carbon Racing",
    description: "Discount code SPEED30 for elite marathon racing shoes."
  },
  {
    id: 18,
    title: "Curry Flow 10 Splash",
    brand: "Under Armour",
    category: "Basketball",
    originalPrice: 160,
    promoPrice: 112,
    discountPercent: 30,
    promoCode: "CURRY30",
    startDate: "2026-09-03",
    endDate: "2026-09-21",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    inStock: true,
    promoTag: "Hoop Special",
    description: "Limited promo discount on signature Curry sneakers."
  },
  {
    id: 19,
    title: "GEL-NIMBUS 25 SE",
    brand: "ASICS",
    category: "Running",
    originalPrice: 160,
    promoPrice: 112,
    discountPercent: 30,
    promoCode: "NIMBUS30",
    startDate: "2026-09-01",
    endDate: "2026-09-17",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    inStock: true,
    promoTag: "Max Cushion",
    description: "Plush running promo code available for 2 weeks."
  },
  {
    id: 20,
    title: "Metcon 9 Amp",
    brand: "Nike",
    category: "Training",
    originalPrice: 150,
    promoPrice: 105,
    discountPercent: 30,
    promoCode: "METCON30",
    startDate: "2026-09-02",
    endDate: "2026-09-16",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    promoTag: "Gym & Fitness",
    description: "Cross-training promotion code for active fitness enthusiasts."
  },
  {
    id: 21,
    title: "Adizero Boston 12",
    brand: "Adidas",
    category: "Running",
    originalPrice: 160,
    promoPrice: 112,
    discountPercent: 30,
    promoCode: "ADI30",
    startDate: "2026-09-01",
    endDate: "2026-09-24",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    promoTag: "Tempo Run",
    description: "Performance tempo shoe discount code ADI30."
  },
  {
    id: 22,
    title: "1906R Protection Tech",
    brand: "New Balance",
    category: "Casual",
    originalPrice: 155,
    promoPrice: 108,
    discountPercent: 30,
    promoCode: "TECH30",
    startDate: "2026-09-05",
    endDate: "2026-09-20",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    inStock: true,
    promoTag: "Street Trend",
    description: "Tech runner promotional price code."
  },
  {
    id: 23,
    title: "Bondi SR Slip-Resistant",
    brand: "Hoka",
    category: "Work & Duty",
    originalPrice: 175,
    promoPrice: 122,
    discountPercent: 30,
    promoCode: "WORK30",
    startDate: "2026-09-01",
    endDate: "2026-09-30",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570"
    },
    inStock: true,
    promoTag: "Work Comfort",
    description: "Special monthly promotion for healthcare and service workers."
  },
  {
    id: 24,
    title: "Sk8-Hi MTE-2 Winter",
    brand: "Vans",
    category: "Skate",
    originalPrice: 115,
    promoPrice: 80,
    discountPercent: 30,
    promoCode: "WINTER30",
    startDate: "2026-09-01",
    endDate: "2026-09-18",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    promoTag: "All-Weather",
    description: "Early seasonal promo on water-resistant high tops."
  },
  {
    id: 25,
    title: "GEL-QUANTUM 360 VII",
    brand: "ASICS",
    category: "Casual",
    originalPrice: 150,
    promoPrice: 105,
    discountPercent: 30,
    promoCode: "GEL30",
    startDate: "2026-09-04",
    endDate: "2026-09-19",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    inStock: true,
    promoTag: "360 Comfort",
    description: "Full-length GEL technology promotional event."
  },
  {
    id: 26,
    title: "Palermo Leather Terrace",
    brand: "Puma",
    category: "Casual",
    originalPrice: 90,
    promoPrice: 63,
    discountPercent: 30,
    promoCode: "TERRACE30",
    startDate: "2026-09-01",
    endDate: "2026-09-15",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    promoTag: "Retro Promo",
    description: "Classic terrace sneaker special promotion."
  },
  {
    id: 27,
    title: "Weapon CX Mid Vintage",
    brand: "Converse",
    category: "Basketball",
    originalPrice: 120,
    promoPrice: 84,
    discountPercent: 30,
    promoCode: "WEAPON30",
    startDate: "2026-09-03",
    endDate: "2026-09-17",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    inStock: true,
    promoTag: "Hoop Vintage",
    description: "Retro basketball icon promotion with WEAPON30 code."
  },
  {
    id: 28,
    title: "Cloudmonster Hyper",
    brand: "On Running",
    category: "Running",
    originalPrice: 220,
    promoPrice: 154,
    discountPercent: 30,
    promoCode: "MONSTER30",
    startDate: "2026-09-06",
    endDate: "2026-09-27",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    inStock: true,
    promoTag: "Max Energy",
    description: "High-rebound cushioning promo code MONSTER30."
  },
  {
    id: 29,
    title: "Dunk Low Retro SE",
    brand: "Nike",
    category: "Casual",
    originalPrice: 125,
    promoPrice: 87,
    discountPercent: 30,
    promoCode: "DUNK30",
    startDate: "2026-09-01",
    endDate: "2026-09-14",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img2: "https://images.unsplash.com/photo-1552346154-21d32810aba3"
    },
    inStock: true,
    promoTag: "Icon Drop",
    description: "Limited stock promotional code DUNK30."
  },
  {
    id: 30,
    title: "Forum Low CL Vintage",
    brand: "Adidas",
    category: "Casual",
    originalPrice: 110,
    promoPrice: 77,
    discountPercent: 30,
    promoCode: "FORUM30",
    startDate: "2026-09-02",
    endDate: "2026-09-16",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    promoTag: "Street Classic",
    description: "Save 30% on Forum Low styles during promotional week."
  },
  {
    id: 31,
    title: "Mach 5 Lightweight Road",
    brand: "Hoka",
    category: "Running",
    originalPrice: 140,
    promoPrice: 98,
    discountPercent: 30,
    promoCode: "MACH30",
    startDate: "2026-09-01",
    endDate: "2026-09-20",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570"
    },
    inStock: true,
    promoTag: "Speed Day",
    description: "Lightweight trainer promo code MACH30."
  },
  {
    id: 32,
    title: "880v13 Fresh Foam X",
    brand: "New Balance",
    category: "Running",
    originalPrice: 140,
    promoPrice: 98,
    discountPercent: 30,
    promoCode: "FF880",
    startDate: "2026-09-04",
    endDate: "2026-09-18",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    inStock: true,
    promoTag: "Daily Trainer",
    description: "Daily runner favorite promotional pricing."
  },
  {
    id: 33,
    title: "Tatum 2 Vortex",
    brand: "Jordan",
    category: "Basketball",
    originalPrice: 125,
    promoPrice: 87,
    discountPercent: 30,
    promoCode: "TATUM30",
    startDate: "2026-09-01",
    endDate: "2026-09-15",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    inStock: true,
    promoTag: "Signature Series",
    description: "Save 30% on Jayson Tatum's signature performance shoe."
  },
  {
    id: 34,
    title: "Velocity Nitro 3",
    brand: "Puma",
    category: "Running",
    originalPrice: 135,
    promoPrice: 94,
    discountPercent: 30,
    promoCode: "NITRO30",
    startDate: "2026-09-03",
    endDate: "2026-09-21",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    inStock: true,
    promoTag: "Nitro Cushion",
    description: "Nitrogen-infused foam promo offer."
  },
  {
    id: 35,
    title: "Authentic VR3 Eco Canvas",
    brand: "Vans",
    category: "Casual",
    originalPrice: 70,
    promoPrice: 49,
    discountPercent: 30,
    promoCode: "ECO30",
    startDate: "2026-09-01",
    endDate: "2026-09-30",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    promoTag: "Eco Friendly",
    description: "Sustainable footwear promotion month."
  },
  {
    id: 36,
    title: "GEL-CUMULUS 25 SE",
    brand: "ASICS",
    category: "Running",
    originalPrice: 140,
    promoPrice: 98,
    discountPercent: 30,
    promoCode: "CUMULUS30",
    startDate: "2026-09-02",
    endDate: "2026-09-18",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    inStock: true,
    promoTag: "Soft Ride",
    description: "Everyday running promo using coupon CUMULUS30."
  },
  {
    id: 37,
    title: "Triumph 21 Max Cushion",
    brand: "Saucony",
    category: "Running",
    originalPrice: 160,
    promoPrice: 112,
    discountPercent: 30,
    promoCode: "TRIUMPH30",
    startDate: "2026-09-05",
    endDate: "2026-09-22",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    inStock: true,
    promoTag: "Plush Comfort",
    description: "Maximum cushioning promotional code."
  },
  {
    id: 38,
    title: "Club C 85 Vintage Premium",
    brand: "Reebok",
    category: "Casual",
    originalPrice: 90,
    promoPrice: 63,
    discountPercent: 30,
    promoCode: "CLUB30",
    startDate: "2026-09-01",
    endDate: "2026-09-15",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    promoTag: "Clean Classic",
    description: "Vintage white sneaker seasonal promotion."
  },
  {
    id: 39,
    title: "UA SlipSpeed Mega",
    brand: "Under Armour",
    category: "Training",
    originalPrice: 150,
    promoPrice: 105,
    discountPercent: 30,
    promoCode: "SLIP30",
    startDate: "2026-09-04",
    endDate: "2026-09-19",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    inStock: true,
    promoTag: "Versatile Trainer",
    description: "Convertible training shoe promotional offer."
  },
  {
    id: 40,
    title: "Star Player 76 Suede",
    brand: "Converse",
    category: "Casual",
    originalPrice: 85,
    promoPrice: 59,
    discountPercent: 30,
    promoCode: "STAR30",
    startDate: "2026-09-01",
    endDate: "2026-09-16",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    inStock: true,
    promoTag: "Retro Casual",
    description: "Vintage star logo sneaker promo deal."
  },
  {
    id: 41,
    title: "Vomero 17 Premium",
    brand: "Nike",
    category: "Running",
    originalPrice: 160,
    promoPrice: 112,
    discountPercent: 30,
    promoCode: "VOMERO30",
    startDate: "2026-09-03",
    endDate: "2026-09-17",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    promoTag: "Cushion King",
    description: "High-mileage road running shoe discount."
  },
  {
    id: 42,
    title: "Supernova Rise",
    brand: "Adidas",
    category: "Running",
    originalPrice: 140,
    promoPrice: 98,
    discountPercent: 30,
    promoCode: "RISE30",
    startDate: "2026-09-02",
    endDate: "2026-09-18",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    promoTag: "Daily Comfort",
    description: "Comfort-focused daily trainer promotional coupon."
  },
  {
    id: 43,
    title: "Fresh Foam X More v4",
    brand: "New Balance",
    category: "Running",
    originalPrice: 165,
    promoPrice: 115,
    discountPercent: 30,
    promoCode: "MORE30",
    startDate: "2026-09-01",
    endDate: "2026-09-20",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img1: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    inStock: true,
    promoTag: "Max Cushion",
    description: "Extra soft cushioning promotional code."
  },
  {
    id: 44,
    title: "Speedgoat 5 Trail GTX",
    brand: "Hoka",
    category: "Running",
    originalPrice: 170,
    promoPrice: 119,
    discountPercent: 30,
    promoCode: "GOAT30",
    startDate: "2026-09-05",
    endDate: "2026-09-25",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570"
    },
    inStock: true,
    promoTag: "Trail Master",
    description: "GORE-TEX trail runner limited promotional price."
  },
  {
    id: 45,
    title: "Knu Skunk Chunky 90s",
    brand: "Vans",
    category: "Casual",
    originalPrice: 75,
    promoPrice: 52,
    discountPercent: 30,
    promoCode: "KNU30",
    startDate: "2026-09-01",
    endDate: "2026-09-15",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    promoTag: "90s Retro",
    description: "Puffy 90s skate shoe style promo discount."
  },
  {
    id: 46,
    title: "GEL-NYC Heritage Mesh",
    brand: "ASICS",
    category: "Casual",
    originalPrice: 130,
    promoPrice: 91,
    discountPercent: 30,
    promoCode: "NYC30",
    startDate: "2026-09-03",
    endDate: "2026-09-21",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    inStock: true,
    promoTag: "Lifestyle Deal",
    description: "New York street style promotional coupon."
  },
  {
    id: 47,
    title: "Slipstream Leather Low",
    brand: "Puma",
    category: "Casual",
    originalPrice: 95,
    promoPrice: 66,
    discountPercent: 30,
    promoCode: "SLIP30",
    startDate: "2026-09-01",
    endDate: "2026-09-17",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    promoTag: "Court Legacy",
    description: "Classic basketball heritage low-top promo offer."
  },
  {
    id: 48,
    title: "Guide 16 Stability Trainer",
    brand: "Saucony",
    category: "Running",
    originalPrice: 140,
    promoPrice: 98,
    discountPercent: 30,
    promoCode: "GUIDE30",
    startDate: "2026-09-02",
    endDate: "2026-09-19",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    inStock: true,
    promoTag: "Stability Support",
    description: "Structured support running shoe promotional deal."
  },
  {
    id: 49,
    title: "Nano X3 Adventure",
    brand: "Reebok",
    category: "Training",
    originalPrice: 150,
    promoPrice: 105,
    discountPercent: 30,
    promoCode: "NANO30",
    startDate: "2026-09-04",
    endDate: "2026-09-22",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    promoTag: "Outdoor Fitness",
    description: "Outdoor workout cross-trainer promotional campaign."
  },
  {
    id: 50,
    title: "Cloudsurfer Next Gen",
    brand: "On Running",
    category: "Running",
    originalPrice: 160,
    promoPrice: 112,
    discountPercent: 30,
    promoCode: "SURF30",
    startDate: "2026-09-01",
    endDate: "2026-09-20",
    imageUrl: {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    inStock: true,
    promoTag: "Next Gen",
    description: "CloudTec Phase cushion launch promotional code SURF30."
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
  },
  {
    id: 15,
    title: "Pegasus 39 Road Running Shoe",
    brand: "Nike",
    originalPrice: 130,
    salePrice: 89,
    discountPercent: 32,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    inStock: true,
    badge: "Sale"
  },
  {
    id: 16,
    title: "Stan Smith Sustainable Classic",
    brand: "Adidas",
    originalPrice: 100,
    salePrice: 65,
    discountPercent: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    badge: "Clearance"
  },
  {
    id: 17,
    title: "Suede Triplex Street Sneaker",
    brand: "Puma",
    originalPrice: 80,
    salePrice: 48,
    discountPercent: 40,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    inStock: true,
    badge: "Mega Deal"
  },
  {
    id: 18,
    title: "Old Skool Stackform Platform",
    brand: "Vans",
    originalPrice: 75,
    salePrice: 52,
    discountPercent: 31,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    badge: "Price Drop"
  },
  {
    id: 19,
    title: "GEL-CUMULUS 24 Running Shoe",
    brand: "ASICS",
    originalPrice: 130,
    salePrice: 84,
    discountPercent: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    inStock: true,
    badge: "Outlet"
  },
  {
    id: 20,
    title: "Fresh Foam Roav V2",
    brand: "New Balance",
    originalPrice: 85,
    salePrice: 59,
    discountPercent: 31,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img1: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    inStock: true,
    badge: "Hot Deal"
  },
  {
    id: 21,
    title: "Rincon 3 Lightweight Trainer",
    brand: "Hoka",
    originalPrice: 125,
    salePrice: 88,
    discountPercent: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    inStock: true,
    badge: "Steal"
  },
  {
    id: 22,
    title: "Club C Revenge Vintage",
    brand: "Reebok",
    originalPrice: 90,
    salePrice: 58,
    discountPercent: 36,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    badge: "Sale"
  },
  {
    id: 23,
    title: "Charged Assert 9 Trainer",
    brand: "Under Armour",
    originalPrice: 75,
    salePrice: 49,
    discountPercent: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    inStock: true,
    badge: "Clearance"
  },
  {
    id: 24,
    title: "Kinvara 13 Speed Trainer",
    brand: "Saucony",
    originalPrice: 120,
    salePrice: 78,
    discountPercent: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    inStock: true,
    badge: "Markdown"
  },
  {
    id: 25,
    title: "Classic Lined Clog",
    brand: "Crocs",
    originalPrice: 60,
    salePrice: 39,
    discountPercent: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    inStock: true,
    badge: "Hot Deal"
  },
  {
    id: 26,
    title: "Air Max 90 Essential",
    brand: "Nike",
    originalPrice: 130,
    salePrice: 89,
    discountPercent: 32,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    badge: "Clearance"
  },
  {
    id: 27,
    title: "NMD_R1 V2 Refined",
    brand: "Adidas",
    originalPrice: 150,
    salePrice: 95,
    discountPercent: 37,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    badge: "Steal"
  },
  {
    id: 28,
    title: "2002R Protection Pack",
    brand: "New Balance",
    originalPrice: 160,
    salePrice: 115,
    discountPercent: 28,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    inStock: true,
    badge: "Limited"
  },
  {
    id: 29,
    title: "Speedcross 5 Trail Runner",
    brand: "Salomon",
    originalPrice: 140,
    salePrice: 98,
    discountPercent: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    inStock: true,
    badge: "Outdoor"
  },
  {
    id: 30,
    title: "One Take 4 Basketball",
    brand: "Jordan",
    originalPrice: 100,
    salePrice: 68,
    discountPercent: 32,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    inStock: true,
    badge: "Price Drop"
  },
  {
    id: 31,
    title: "Cali Sport Clean Sneaker",
    brand: "Puma",
    originalPrice: 90,
    salePrice: 54,
    discountPercent: 40,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    badge: "Mega Deal"
  },
  {
    id: 32,
    title: "Sk8-Hi Tapered Canvas",
    brand: "Vans",
    originalPrice: 80,
    salePrice: 52,
    discountPercent: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    badge: "Outlet"
  },
  {
    id: 33,
    title: "GEL-NIMBUS 25 Plush Runner",
    brand: "ASICS",
    originalPrice: 160,
    salePrice: 112,
    discountPercent: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    inStock: true,
    badge: "Hot Deal"
  },
  {
    id: 34,
    title: "Bondi 7 Max Cushion",
    brand: "Hoka",
    originalPrice: 160,
    salePrice: 109,
    discountPercent: 31,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570"
    },
    inStock: true,
    badge: "Sale"
  },
  {
    id: 35,
    title: "One Star Pro Suede",
    brand: "Converse",
    originalPrice: 75,
    salePrice: 48,
    discountPercent: 36,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    inStock: true,
    badge: "Skate Deal"
  },
  {
    id: 36,
    title: "1460 Mono Leather Boots",
    brand: "Dr. Martens",
    originalPrice: 170,
    salePrice: 119,
    discountPercent: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      img1: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    inStock: true,
    badge: "Price Drop"
  },
  {
    id: 37,
    title: "Endorphin Speed 2",
    brand: "Saucony",
    originalPrice: 160,
    salePrice: 99,
    discountPercent: 38,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    inStock: true,
    badge: "Markdown"
  },
  {
    id: 38,
    title: "Wave Rider 26 Performance",
    brand: "Mizuno",
    originalPrice: 140,
    salePrice: 89,
    discountPercent: 36,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    inStock: true,
    badge: "Outlet"
  },
  {
    id: 39,
    title: "Curry Hovr Splash",
    brand: "Under Armour",
    originalPrice: 110,
    salePrice: 72,
    discountPercent: 34,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    inStock: true,
    badge: "Steal"
  },
  {
    id: 40,
    title: "Floatride Energy 4",
    brand: "Reebok",
    originalPrice: 110,
    salePrice: 69,
    discountPercent: 37,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    badge: "Sale"
  },
  {
    id: 41,
    title: "Moab 2 Waterproof Hiker",
    brand: "Merrell",
    originalPrice: 135,
    salePrice: 89,
    discountPercent: 34,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570"
    },
    inStock: true,
    badge: "Outdoor"
  },
  {
    id: 42,
    title: "Purecat Slide Sandals",
    brand: "Puma",
    originalPrice: 35,
    salePrice: 21,
    discountPercent: 40,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9"
    },
    inStock: true,
    badge: "Summer Sale"
  },
  {
    id: 43,
    title: "Court Graffik SE Skate Shoe",
    brand: "DC Shoes",
    originalPrice: 70,
    salePrice: 45,
    discountPercent: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    badge: "Skate Deal"
  },
  {
    id: 44,
    title: "Go Walk 6 Stretch Fit",
    brand: "Skechers",
    originalPrice: 85,
    salePrice: 55,
    discountPercent: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    inStock: true,
    badge: "Clearance"
  },
  {
    id: 45,
    title: "Hurricane Drift Light Sandal",
    brand: "Teva",
    originalPrice: 45,
    salePrice: 29,
    discountPercent: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    inStock: true,
    badge: "Hot Deal"
  },
  {
    id: 46,
    title: "Marana Tough Rubber Skate",
    brand: "Etnies",
    originalPrice: 85,
    salePrice: 55,
    discountPercent: 35,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    badge: "Outlet"
  },
  {
    id: 47,
    title: "Adilette Comfort Slides",
    brand: "Adidas",
    originalPrice: 40,
    salePrice: 25,
    discountPercent: 37,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    inStock: true,
    badge: "Summer Sale"
  },
  {
    id: 48,
    title: "Air Max Excee Classic",
    brand: "Nike",
    originalPrice: 90,
    salePrice: 59,
    discountPercent: 34,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    inStock: true,
    badge: "Price Drop"
  },
  {
    id: 49,
    title: "Classic Mini II Boot",
    brand: "UGG",
    originalPrice: 160,
    salePrice: 112,
    discountPercent: 30,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
      img1: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    inStock: true,
    badge: "Clearance"
  },
  {
    id: 50,
    title: "GEL-EXCITE 9 Everyday Runner",
    brand: "ASICS",
    originalPrice: 75,
    salePrice: 49,
    discountPercent: 34,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    inStock: true,
    badge: "Mega Deal"
  }
]