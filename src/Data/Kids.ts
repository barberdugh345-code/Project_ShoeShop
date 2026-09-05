export interface Shoe_kids{
    id:number
    title: string;
    brand: string;
    category: 'Running' | 'Casual' | 'Basketball' | 'School' | 'Sandals';
    price: number;
    images: {
        img:string
        img1:string
        img2:string
    }; 
    sizes: number[];
    inStock: boolean;
}

export const Kids_Types:Shoe_kids[]=[
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
  },
  {
    id: 2,
    title: "Grand Court 2.0 Elastic Lace",
    brand: "Adidas",
    category: "Casual",
    price: 45,
    images: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    sizes: [9, 10, 11, 12, 13, 1],
    inStock: true
  },
  {
    id: 3,
    title: "Jordan 1 Mid SE (GS)",
    brand: "Jordan",
    category: "Basketball",
    price: 110,
    images: {
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    sizes: [3.5, 4, 4.5, 5, 5.5, 6],
    inStock: true
  },
  {
    id: 4,
    title: "Rave Run v2 Hook & Loop",
    brand: "New Balance",
    category: "Running",
    price: 55,
    images: {
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img1: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    sizes: [10, 11, 12, 13, 1, 2],
    inStock: true
  },
  {
    id: 5,
    title: "Suede Classic XXI Kids",
    brand: "Puma",
    category: "Casual",
    price: 50,
    images: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img2: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    sizes: [10, 11, 12, 13, 1, 2, 3],
    inStock: true
  },
  {
    id: 6,
    title: "Old Skool V Strap",
    brand: "Vans",
    category: "Casual",
    price: 42,
    images: {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img1: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img2: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    sizes: [8, 9, 10, 11, 12, 13],
    inStock: true
  },
  {
    id: 7,
    title: "Chuck Taylor All Star Easy-On",
    brand: "Converse",
    category: "Casual",
    price: 40,
    images: {
      img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    sizes: [9, 10, 11, 12, 13, 1],
    inStock: true
  },
  {
    id: 8,
    title: "GEL-NOOSA TRI 15 GS",
    brand: "ASICS",
    category: "Running",
    price: 70,
    images: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    sizes: [1, 2, 3, 4, 5],
    inStock: true
  },
  {
    id: 9,
    title: "Clifton 9 Junior",
    brand: "Hoka",
    category: "Running",
    price: 110,
    images: {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img1: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img2: "https://images.unsplash.com/photo-1539185441755-769473a23570"
    },
    sizes: [3.5, 4, 4.5, 5, 5.5, 6],
    inStock: true
  },
  {
    id: 10,
    title: "Classic Leather School Uniform",
    brand: "Clarks",
    category: "School",
    price: 65,
    images: {
      img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
      img1: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    sizes: [10, 11, 12, 13, 1, 2],
    inStock: true
  },
  {
    id: 11,
    title: "Flex Runner 2",
    brand: "Nike",
    category: "Running",
    price: 50,
    images: {
      img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img2: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    sizes: [8, 9, 10, 11, 12, 13, 1],
    inStock: true
  },
  {
    id: 12,
    title: "FortaRun 2.0 Cloudfoam",
    brand: "Adidas",
    category: "Running",
    price: 55,
    images: {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      img1: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    sizes: [11, 12, 13, 1, 2, 3],
    inStock: true
  },
  {
    id: 13,
    title: "Team Hustle D 11",
    brand: "Nike",
    category: "Basketball",
    price: 60,
    images: {
      img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img1: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      img2: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    sizes: [11, 12, 13, 1, 2, 3],
    inStock: true
  },
  {
    id: 14,
    title: "574 Bungee Lace",
    brand: "New Balance",
    category: "Casual",
    price: 60,
    images: {
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      img1: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      img2: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    },
    sizes: [9, 10, 11, 12, 13, 1],
    inStock: true
  },
  {
    id: 15,
    title: "Softride Enzo NXT Kids",
    brand: "Puma",
    category: "Running",
    price: 55,
    images: {
      img: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      img1: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img2: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    sizes: [10, 11, 12, 13, 1, 2],
    inStock: true
  },
  {
    id: 16,
    title: "Uniform T-Bar Shoe",
    brand: "Clarks",
    category: "School",
    price: 60,
    images: {
      img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      img1: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
      img2: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    sizes: [8, 9, 10, 11, 12],
    inStock: true
  },
  {
    id: 17,
    title: "Dunk Low (GS)",
    brand: "Nike",
    category: "Casual",
    price: 90,
    images: {
      img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634",
      img1: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      img2: "https://images.unsplash.com/photo-1552346154-21d32810aba3"
    },
    sizes: [3.5, 4, 4.5, 5, 5.5, 6, 6.5],
    inStock: false
  },
  {
    id: 18,
    title: "Giannis Immortality 3 Kids",
    brand: "Nike",
    category: "Basketball",
    price: 65,
    images: {
      img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2",
      img1: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      img2: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    sizes: [1, 2, 3, 4, 5],
    inStock: true
  },
  {
    id: 19,
    title: "Cloud Sky Kids",
    brand: "On Running",
    category: "Running",
    price: 100,
    images: {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      img1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      img2: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    sizes: [1, 2, 3, 4, 5, 6],
    inStock: true
  },
  {
    id: 20,
    title: "Waterproof Sport Sandal",
    brand: "Keen",
    category: "Sandals",
    price: 50,
    images: {
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      img1: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      img2: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9"
    },
    sizes: [8, 9, 10, 11, 12, 13],
    inStock: true
  }
]