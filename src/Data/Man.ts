export interface Shoe_man{
    id:number
    title : string 
    brand:string
    category: 'Running' | 'Casual' | 'Basketball' | 'Formal' | 'Skate';
    price :number
    imageUrl: {
        img:string
        img1 :string
        img2:string
    };
    sizes: number[];
    inStock: boolean;
}

export const Man_Type : Shoe_man[] = [
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
  },
  {
    id: 3,
    title: "Air Jordan 1 Retro High OG",
    brand: "Jordan",
    category: "Basketball",
    price: 180,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    sizes: [8, 9, 10, 10.5, 11, 12],
    inStock: true
  },
  {
    id: 4,
    title: "574 Core",
    brand: "New Balance",
    category: "Casual",
    price: 90,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    sizes: [8, 8.5, 9, 9.5, 10, 11],
    inStock: true
  },
  {
    id: 5,
    title: "Suede Classic XXI",
    brand: "Puma",
    category: "Casual",
    price: 75,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    sizes: [7, 8, 8.5, 9, 10, 10.5],
    inStock: true
  },
  {
    id: 6,
    title: "Old Skool Core Classics",
    brand: "Vans",
    category: "Skate",
    price: 70,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    sizes: [8, 8.5, 9, 9.5, 10, 11, 12],
    inStock: true
  },
  {
    id: 7,
    title: "Chuck Taylor All Star High Top",
    brand: "Converse",
    category: "Casual",
    price: 65,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    sizes: [7, 8, 9, 10, 11, 12],
    inStock: true
  },
  {
    id: 8,
    title: "GEL-Kayano 30",
    brand: "ASICS",
    category: "Running",
    price: 160,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    sizes: [8.5, 9, 9.5, 10, 10.5, 11],
    inStock: true
  },
  {
    id: 9,
    title: "Clifton 9",
    brand: "Hoka",
    category: "Running",
    price: 145,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570"
    },
    sizes: [8, 9, 9.5, 10, 11, 12],
    inStock: true
  },
  {
    id: 10,
    title: "Classic Oxford Leather",
    brand: "Cole Haan",
    category: "Formal",
    price: 150,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
      img1: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    sizes: [8, 8.5, 9, 10, 10.5, 11],
    inStock: false
  },
  {
    id: 11,
    title: "Pegasus 40",
    brand: "Nike",
    category: "Running",
    price: 130,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    sizes: [8, 8.5, 9, 9.5, 10, 11, 12],
    inStock: true
  },
  {
    id: 12,
    title: "Samba OG",
    brand: "Adidas",
    category: "Casual",
    price: 100,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    sizes: [7.5, 8, 8.5, 9, 10, 10.5],
    inStock: true
  },
  {
    id: 13,
    title: "LeBron XXI",
    brand: "Nike",
    category: "Basketball",
    price: 200,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img1: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    sizes: [9, 9.5, 10, 10.5, 11, 12, 13],
    inStock: true
  },
  {
    id: 14,
    title: "990v6 Made in USA",
    brand: "New Balance",
    category: "Running",
    price: 200,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img1: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    sizes: [8, 8.5, 9, 10, 10.5, 11],
    inStock: true
  },
  {
    id: 15,
    title: "RS-X Efekt",
    brand: "Puma",
    category: "Casual",
    price: 110,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    sizes: [8, 9, 9.5, 10, 11],
    inStock: true
  },
  {
    id: 16,
    title: "Derby Wingtip Dress Shoes",
    brand: "Clarks",
    category: "Formal",
    price: 130,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      img1: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    sizes: [8, 8.5, 9, 9.5, 10],
    inStock: true
  },
  {
    id: 17,
    title: "SB Dunk Low Pro",
    brand: "Nike",
    category: "Skate",
    price: 115,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img2: "https://images.unsplash.com/photo-1552346154-21d32810aba3"
    },
    sizes: [8, 8.5, 9, 10, 10.5, 11],
    inStock: false
  },
  {
    id: 18,
    title: "Luka 2",
    brand: "Jordan",
    category: "Basketball",
    price: 130,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    sizes: [8.5, 9, 9.5, 10, 11, 12],
    inStock: true
  },
  {
    id: 19,
    title: "Cloud 5",
    brand: "On Running",
    category: "Running",
    price: 140,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11],
    inStock: true
  },
  {
    id: 20,
    title: "Chelsea Boot Suede",
    brand: "Steve Madden",
    category: "Formal",
    price: 120,
    imageUrl: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9"
    },
    sizes: [8, 9, 10, 10.5, 11],
    inStock: true
  }
]