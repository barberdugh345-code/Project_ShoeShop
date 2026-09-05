export interface Shoe_woman{
    id: number;
  title: string;
  brand: string;
  category: 'Running' | 'Casual' | 'Basketball' | 'Boots' | 'Heels' | 'Sandals' | 'Training';
  price: number;
  images: {
    img: string;
    img1: string;
    img2: string;
  };
  sizes: number[];
  inStock: boolean;
}

export const Woman_Type : Shoe_woman[] = [
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
  },
  {
    id: 3,
    title: "574 Core",
    brand: "New Balance",
    category: "Casual",
    price: 90,
    images: {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img1: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
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
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570"
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
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
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
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
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
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    sizes: [6, 7, 8, 9, 10, 11],
    inStock: true
  },
  {
    id: 8,
    title: "Air Jordan 1 Elevate Low",
    brand: "Jordan",
    category: "Casual",
    price: 135,
    images: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    inStock: true
  },
  {
    id: 9,
    title: "Metcon 9 Training",
    brand: "Nike",
    category: "Training",
    price: 150,
    images: {
      img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
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
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 11,
    title: "Classic Short II Boot",
    brand: "UGG",
    category: "Boots",
    price: 180,
    images: {
      img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
      img1: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
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
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
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
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9"
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
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: false
  },
  {
    id: 15,
    title: "Free Metcon 5",
    brand: "Nike",
    category: "Training",
    price: 120,
    images: {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 16,
    title: "Old Skool Stackform",
    brand: "Vans",
    category: "Casual",
    price: 80,
    images: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
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
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
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
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5],
    inStock: true
  },
  {
    id: 19,
    title: "Original 1460 Leather Boots",
    brand: "Dr. Martens",
    category: "Boots",
    price: 170,
    images: {
      img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      img1: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
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
      img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img2: "https://images.unsplash.com/photo-1552346154-21d32810aba3"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    inStock: true
  }
]