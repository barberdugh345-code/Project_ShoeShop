export interface Shoe_woman {
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

export const Woman_Type: Shoe_woman[] = [
  {
    id: 1,
    title: "Air Force 1 Shadow",
    brand: "Nike",
    category: "Casual",
    price: 130,
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
    title: "Ultraboost Light W",
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
    title: "574 Core Women's",
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
    title: "Clifton 9 Women's",
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
    title: "Cloud 5 Push W",
    brand: "On Running",
    category: "Running",
    price: 150,
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
    title: "Cali Star Metallic",
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
    title: "Classic Mega Crush Clog",
    brand: "Crocs",
    category: "Sandals",
    price: 75,
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
    title: "Metcon 9 Women's",
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
    title: "GEL-KAYANO 30 Women's",
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
    title: "Classic Mini II Boot",
    brand: "UGG",
    category: "Boots",
    price: 160,
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
    title: "Run Star Hike Platform",
    brand: "Converse",
    category: "Casual",
    price: 110,
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
    title: "Arizona Big Buckle Sandal",
    brand: "Birkenstock",
    category: "Sandals",
    price: 160,
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
    title: "Samba OG Women's",
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
    title: "Free Metcon 5 Women's",
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
    title: "Old Skool Stackform Platform",
    brand: "Vans",
    category: "Casual",
    price: 85,
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
    title: "Ghost 15 Women's",
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
    title: "Nizza Platform Shoes",
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
    title: "Sinclair Floral Boot",
    brand: "Dr. Martens",
    category: "Boots",
    price: 200,
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
    title: "Dunk Low Disrupt 2",
    brand: "Nike",
    category: "Casual",
    price: 120,
    images: {
      img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img2: "https://images.unsplash.com/photo-1552346154-21d32810aba3"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    inStock: true
  },
  {
    id: 21,
    title: "Pegasus 40 Women's",
    brand: "Nike",
    category: "Running",
    price: 130,
    images: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5],
    inStock: true
  },
  {
    id: 22,
    title: "Gazelle Bold Platform",
    brand: "Adidas",
    category: "Casual",
    price: 120,
    images: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 23,
    title: "327 Women's Lifestyle",
    brand: "New Balance",
    category: "Casual",
    price: 100,
    images: {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img1: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 24,
    title: "Bondi 8 Women's",
    brand: "Hoka",
    category: "Running",
    price: 165,
    images: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 25,
    title: "Cloudmonster Women's",
    brand: "On Running",
    category: "Running",
    price: 170,
    images: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    inStock: true
  },
  {
    id: 26,
    title: "Suede Mayu Slip-On",
    brand: "Puma",
    category: "Casual",
    price: 85,
    images: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10],
    inStock: true
  },
  {
    id: 27,
    title: "Classic Lined Clog W",
    brand: "Crocs",
    category: "Sandals",
    price: 60,
    images: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    sizes: [6, 7, 8, 9, 10, 11, 12],
    inStock: true
  },
  {
    id: 28,
    title: "Air Jordan 1 Mid SE W",
    brand: "Jordan",
    category: "Casual",
    price: 135,
    images: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5],
    inStock: true
  },
  {
    id: 29,
    title: "GEL-NIMBUS 25 Women's",
    brand: "ASICS",
    category: "Running",
    price: 160,
    images: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 30,
    title: "Ultra Mini Platform Boot",
    brand: "UGG",
    category: "Boots",
    price: 160,
    images: {
      img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
      img1: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    sizes: [5, 6, 7, 8, 9, 10],
    inStock: false
  },
  {
    id: 31,
    title: "Chuck 70 Marquis High Top",
    brand: "Converse",
    category: "Casual",
    price: 95,
    images: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 32,
    title: "Boston Shearling Clog",
    brand: "Birkenstock",
    category: "Sandals",
    price: 175,
    images: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9"
    },
    sizes: [5, 6, 7, 8, 9, 10, 11],
    inStock: true
  },
  {
    id: 33,
    title: "Sk8-Hi Tapered Stackform",
    brand: "Vans",
    category: "Casual",
    price: 90,
    images: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    inStock: true
  },
  {
    id: 34,
    title: "Adilette Ayoon Slides",
    brand: "Adidas",
    category: "Sandals",
    price: 60,
    images: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    sizes: [5, 6, 7, 8, 9, 10, 11],
    inStock: true
  },
  {
    id: 35,
    title: "Jadon Platform Boot",
    brand: "Dr. Martens",
    category: "Boots",
    price: 210,
    images: {
      img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      img1: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    sizes: [5, 6, 7, 8, 9, 10],
    inStock: true
  },
  {
    id: 36,
    title: "990v6 Women's Made in USA",
    brand: "New Balance",
    category: "Running",
    price: 200,
    images: {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img1: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    inStock: true
  },
  {
    id: 37,
    title: "VaporMax 2023 Flyknit W",
    brand: "Nike",
    category: "Running",
    price: 210,
    images: {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 38,
    title: "Adizero Adios Pro 3 W",
    brand: "Adidas",
    category: "Running",
    price: 250,
    images: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 39,
    title: "RS-X Efekt Women's",
    brand: "Puma",
    category: "Casual",
    price: 110,
    images: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 40,
    title: "Glycerin 20 Women's",
    brand: "Brooks",
    category: "Running",
    price: 160,
    images: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 41,
    title: "Air Max 270 Women's",
    brand: "Nike",
    category: "Casual",
    price: 160,
    images: {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img1: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 42,
    title: "Forum Bonega Platform",
    brand: "Adidas",
    category: "Casual",
    price: 120,
    images: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 43,
    title: "550 Women's Sneaker",
    brand: "New Balance",
    category: "Casual",
    price: 110,
    images: {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img1: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: false
  },
  {
    id: 44,
    title: "Mach 5 Women's",
    brand: "Hoka",
    category: "Running",
    price: 140,
    images: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    inStock: true
  },
  {
    id: 45,
    title: "Cloud 5 Waterproof W",
    brand: "On Running",
    category: "Running",
    price: 170,
    images: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 46,
    title: "Mayze Platform Sneaker",
    brand: "Puma",
    category: "Casual",
    price: 90,
    images: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8],
    inStock: true
  },
  {
    id: 47,
    title: "Echo Clog Women's",
    brand: "Crocs",
    category: "Sandals",
    price: 80,
    images: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    sizes: [6, 7, 8, 9, 10, 11],
    inStock: true
  },
  {
    id: 48,
    title: "Air Jordan 1 Elevate High",
    brand: "Jordan",
    category: "Casual",
    price: 145,
    images: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5],
    inStock: true
  },
  {
    id: 49,
    title: "GEL-CUMULUS 25 W",
    brand: "ASICS",
    category: "Running",
    price: 140,
    images: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    inStock: true
  },
  {
    id: 50,
    title: "Tazz Platform Slipper",
    brand: "UGG",
    category: "Casual",
    price: 130,
    images: {
      img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
      img1: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    sizes: [5, 6, 7, 8, 9, 10],
    inStock: true
  }
];