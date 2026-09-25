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
    title: "Air Force 1 Kids",
    brand: "Nike",
    category: "Casual",
    price: 90,
    images: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 2,
    title: "Ultraboost Kids",
    brand: "Adidas",
    category: "Running",
    price: 110,
    images: {
      img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5],
    inStock: true
  },
  {
    id: 3,
    title: "574 Kids",
    brand: "New Balance",
    category: "Casual",
    price: 75,
    images: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 4,
    title: "Clifton 9 Kids",
    brand: "Hoka",
    category: "Running",
    price: 100,
    images: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 5,
    title: "Cloud 5 Kids",
    brand: "On Running",
    category: "Running",
    price: 95,
    images: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5],
    inStock: true
  },
  {
    id: 6,
    title: "Cali Star Kids",
    brand: "Puma",
    category: "Casual",
    price: 65,
    images: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8],
    inStock: true
  },
  {
    id: 7,
    title: "Classic Clog Kids",
    brand: "Crocs",
    category: "Sandals",
    price: 45,
    images: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 6, 7, 8, 9, 10, 11],
    inStock: true
  },
  {
    id: 8,
    title: "Jordan 1 Low Kids",
    brand: "Jordan",
    category: "Basketball",
    price: 100,
    images: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 9,
    title: "Revolution 7 Kids",
    brand: "Nike",
    category: "Running",
    price: 60,
    images: {
      img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 10,
    title: "GEL-Contend 8 Kids",
    brand: "ASICS",
    category: "Running",
    price: 70,
    images: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 11,
    title: "Classic Mini Boot Kids",
    brand: "UGG",
    category: "School",
    price: 120,
    images: {
      img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 6, 7, 8, 9, 10],
    inStock: true
  },
  {
    id: 12,
    title: "Chuck Taylor Kids",
    brand: "Converse",
    category: "Casual",
    price: 50,
    images: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 13,
    title: "Arizona Kids Sandal",
    brand: "Birkenstock",
    category: "Sandals",
    price: 80,
    images: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 14,
    title: "Samba Kids",
    brand: "Adidas",
    category: "Casual",
    price: 70,
    images: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 15,
    title: "Free Run Kids",
    brand: "Nike",
    category: "Running",
    price: 75,
    images: {
      img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 16,
    title: "Old Skool Kids",
    brand: "Vans",
    category: "School",
    price: 55,
    images: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 17,
    title: "Ghost 15 Kids",
    brand: "Brooks",
    category: "Running",
    price: 85,
    images: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    inStock: true
  },
  {
    id: 18,
    title: "Nizza Kids",
    brand: "Adidas",
    category: "Casual",
    price: 55,
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
    title: "1460 Kids Boot",
    brand: "Dr. Martens",
    category: "School",
    price: 110,
    images: {
      img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 6, 7, 8, 9, 10],
    inStock: true
  },
  {
    id: 20,
    title: "Dunk Low Kids",
    brand: "Nike",
    category: "Casual",
    price: 85,
    images: {
      img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },

  // ===== EXTRA 30 ITEMS =====
  {
    id: 21,
    title: "Air Max 90 Kids",
    brand: "Nike",
    category: "Casual",
    price: 95,
    images: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 22,
    title: "Gazelle Kids",
    brand: "Adidas",
    category: "Casual",
    price: 70,
    images: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5],
    inStock: true
  },
  {
    id: 23,
    title: "Jordan 4 Kids",
    brand: "Jordan",
    category: "Basketball",
    price: 120,
    images: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: false
  },
  {
    id: 24,
    title: "Fresh Foam Kids",
    brand: "New Balance",
    category: "Running",
    price: 80,
    images: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 25,
    title: "Suede Kids",
    brand: "Puma",
    category: "Casual",
    price: 60,
    images: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8],
    inStock: true
  },
  {
    id: 26,
    title: "Sk8-Hi Kids",
    brand: "Vans",
    category: "School",
    price: 60,
    images: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5],
    inStock: true
  },
  {
    id: 27,
    title: "Chuck 70 Kids",
    brand: "Converse",
    category: "Casual",
    price: 65,
    images: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 28,
    title: "GEL-Excite Kids",
    brand: "ASICS",
    category: "Running",
    price: 65,
    images: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 29,
    title: "Bondi Kids",
    brand: "Hoka",
    category: "Running",
    price: 90,
    images: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 30,
    title: "Chelsea Boot Kids",
    brand: "Steve Madden",
    category: "School",
    price: 75,
    images: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 6, 7, 8, 9],
    inStock: true
  },
  {
    id: 31,
    title: "Pegasus Kids",
    brand: "Nike",
    category: "Running",
    price: 80,
    images: {
      img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 32,
    title: "Forum Low Kids",
    brand: "Adidas",
    category: "Casual",
    price: 75,
    images: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5],
    inStock: true
  },
  {
    id: 33,
    title: "LeBron Kids",
    brand: "Nike",
    category: "Basketball",
    price: 100,
    images: {
      img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 34,
    title: "990 Kids",
    brand: "New Balance",
    category: "Running",
    price: 110,
    images: {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 35,
    title: "RS-X Kids",
    brand: "Puma",
    category: "Casual",
    price: 70,
    images: {
      img: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8],
    inStock: true
  },
  {
    id: 36,
    title: "Authentic Kids",
    brand: "Vans",
    category: "Casual",
    price: 45,
    images: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 37,
    title: "One Star Kids",
    brand: "Converse",
    category: "Casual",
    price: 55,
    images: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5],
    inStock: true
  },
  {
    id: 38,
    title: "Gel-Pulse Kids",
    brand: "ASICS",
    category: "Running",
    price: 70,
    images: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 39,
    title: "Rincon Kids",
    brand: "Hoka",
    category: "Running",
    price: 85,
    images: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 40,
    title: "Oxford Kids",
    brand: "Clarks",
    category: "School",
    price: 70,
    images: {
      img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 6, 7, 8, 9],
    inStock: true
  },
  {
    id: 41,
    title: "Air Max SC Kids",
    brand: "Nike",
    category: "Casual",
    price: 70,
    images: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 42,
    title: "Grand Court Kids",
    brand: "Adidas",
    category: "Casual",
    price: 50,
    images: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5],
    inStock: true
  },
  {
    id: 43,
    title: "Court Borough Kids",
    brand: "Nike",
    category: "Casual",
    price: 55,
    images: {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 44,
    title: "Hurricane Kids Sandal",
    brand: "Teva",
    category: "Sandals",
    price: 40,
    images: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 6, 7, 8, 9, 10],
    inStock: true
  },
  {
    id: 45,
    title: "Classic Clog Lined Kids",
    brand: "Crocs",
    category: "Sandals",
    price: 50,
    images: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 6, 7, 8, 9, 10, 11],
    inStock: true
  },
  {
    id: 46,
    title: "Speedcross Kids",
    brand: "Salomon",
    category: "Running",
    price: 80,
    images: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 47,
    title: "Ultra Flex Kids",
    brand: "Skechers",
    category: "Casual",
    price: 55,
    images: {
      img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 48,
    title: "Curry Kids",
    brand: "Under Armour",
    category: "Basketball",
    price: 90,
    images: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  },
  {
    id: 49,
    title: "Ghost Max Kids",
    brand: "Brooks",
    category: "Running",
    price: 90,
    images: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    inStock: true
  },
  {
    id: 50,
    title: "Endorphin Kids",
    brand: "Saucony",
    category: "Running",
    price: 85,
    images: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80"
    },
    sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    inStock: true
  }
];