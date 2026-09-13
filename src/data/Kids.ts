export interface Shoe_kids {
  id: number;
  title: string;
  brand: string;
  category: 'Running' | 'Casual' | 'Basketball' | 'School' | 'Sandals';
  price: number;
  images: {
    img: string;
    img1: string;
    img2: string;
  };
  sizes: number[] | string;
  inStock: boolean;
}

export const Kids_Types: Shoe_kids[] = [
  {
    id: 1,
    title: "Air Force 1 '07",
    brand: "Nike",
    category: "Casual",
    price: 115,
    images: {
      img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&w=800&q=80"
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
      img: "https://images.unsplash.com/photo-1584590039416-81da9ed27568?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    inStock: true
  },
  {
    id: 3,
    title: "574 Core",
    brand: "New Balance",
    category: "Casual",
    price: 90,
    images: {
      img: "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10],
    inStock: true
  },
  {
    id: 4,
    title: "Clifton 9",
    brand: "Hoka",
    category: "Running",
    price: 145,
    images: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5],
    inStock: true
  },
  {
    id: 5,
    title: "Cloud 5",
    brand: "On Running",
    category: "Running",
    price: 140,
    images: {
      img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 6,
    title: "Cali Star Sneaker",
    brand: "Puma",
    category: "Casual",
    price: 80,
    images: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5],
    inStock: true
  },
  {
    id: 7,
    title: "Classic Platform Clog",
    brand: "Crocs",
    category: "Sandals",
    price: 60,
    images: {
      img: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [6, 7, 8, 9, 10, 11],
    inStock: true
  },
  {
    id: 8,
    title: "Air Jordan 1 Elevate Low",
    brand: "Jordan",
    category: "Basketball",
    price: 135,
    images: {
      img: "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    inStock: true
  },
  {
    id: 9,
    title: "Metcon 9 Training",
    brand: "Nike",
    category: "Running",
    price: 150,
    images: {
      img: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 10,
    title: "GEL-KAYANO 30",
    brand: "ASICS",
    category: "Running",
    price: 160,
    images: {
      img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1579446565308-427218a2c60e?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1628253747716-0ce4f5c69f6a?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 11,
    title: "Classic Short II Boot",
    brand: "UGG",
    category: "School",
    price: 180,
    images: {
      img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 6, 7, 8, 9, 10, 11],
    inStock: true
  },
  {
    id: 12,
    title: "Chuck Taylor All Star Platform",
    brand: "Converse",
    category: "Casual",
    price: 75,
    images: {
      img: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1463100099107-fe0980185a68?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1528701800487-ba01fea498c0?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 13,
    title: "Arizona Soft Footbed Sandal",
    brand: "Birkenstock",
    category: "Sandals",
    price: 140,
    images: {
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 14,
    title: "Samba OG Shoes",
    brand: "Adidas",
    category: "Casual",
    price: 100,
    images: {
      img: "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: false
  },
  {
    id: 15,
    title: "Free Metcon 5",
    brand: "Nike",
    category: "Running",
    price: 120,
    images: {
      img: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 16,
    title: "Old Skool Stackform",
    brand: "Vans",
    category: "School",
    price: 80,
    images: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    inStock: true
  },
  {
    id: 17,
    title: "Ghost 15",
    brand: "Brooks",
    category: "Running",
    price: 140,
    images: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    inStock: true
  },
  {
    id: 18,
    title: "Nizza Platform",
    brand: "Adidas",
    category: "Casual",
    price: 75,
    images: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5],
    inStock: true
  },
  {
    id: 19,
    title: "Original 1460 Leather Boots",
    brand: "Dr. Martens",
    category: "School",
    price: 170,
    images: {
      img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 6, 7, 8, 9, 10, 11],
    inStock: true
  },
  {
    id: 20,
    title: "Dunk Low Next Nature",
    brand: "Nike",
    category: "Casual",
    price: 115,
    images: {
      img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    inStock: true
  }
];