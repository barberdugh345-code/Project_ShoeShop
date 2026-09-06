export type Category =
  | 'Running'
  | 'Casual'
  | 'Basketball'
  | 'Formal'
  | 'Skate'
  | 'School'
  | 'Sandals'
  | 'Boots'
  | 'Training'
  | 'Trail Running'
  | 'Hiking'
  | 'Outdoor'
  | 'Luxury'
  | 'Golf'
  | 'Volleyball'
  | 'Walking';

export interface ShoeBrand {
  id: number;
  name: string;
  slug: string;
  logoUrl: {
    logo: string;
    icon?: string;
  };
  country: string;
  categories: Category[];
  featured: boolean;
}

export const BRANDS_DATA: ShoeBrand[] = [
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
  },
  {
    id: 3,
    name: "Jordan",
    slug: "jordan",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      icon: "https://images.unsplash.com/photo-1579338559194-a162d19bf842"
    },
    country: "United States",
    categories: ["Basketball", "Casual"],
    featured: true
  },
  {
    id: 4,
    name: "New Balance",
    slug: "new-balance",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      icon: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    country: "United States",
    categories: ["Running", "Casual"],
    featured: true
  },
  {
    id: 5,
    name: "Puma",
    slug: "puma",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      icon: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9"
    },
    country: "Germany",
    categories: ["Running", "Casual", "Training"],
    featured: false
  },
  {
    id: 6,
    name: "Vans",
    slug: "vans",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      icon: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    country: "United States",
    categories: ["Skate", "Casual"],
    featured: true
  },
  {
    id: 7,
    name: "Converse",
    slug: "converse",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      icon: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    country: "United States",
    categories: ["Casual", "Basketball"],
    featured: false
  },
  {
    id: 8,
    name: "ASICS",
    slug: "asics",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      icon: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    country: "Japan",
    categories: ["Running", "Training"],
    featured: true
  },
  {
    id: 9,
    name: "Hoka",
    slug: "hoka",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      icon: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    country: "France",
    categories: ["Running"],
    featured: true
  },
  {
    id: 10,
    name: "On Running",
    slug: "on-running",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      icon: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    country: "Switzerland",
    categories: ["Running", "Casual"],
    featured: true
  },
  {
    id: 11,
    name: "Clarks",
    slug: "clarks",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      icon: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4"
    },
    country: "United Kingdom",
    categories: ["Formal", "School"],
    featured: false
  },
  {
    id: 12,
    name: "Dr. Martens",
    slug: "dr-martens",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      icon: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4"
    },
    country: "United Kingdom",
    categories: ["Boots", "Casual"],
    featured: false
  },
  {
    id: 13,
    name: "Birkenstock",
    slug: "birkenstock",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      icon: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    country: "Germany",
    categories: ["Sandals", "Casual"],
    featured: false
  },
  {
    id: 14,
    name: "Crocs",
    slug: "crocs",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      icon: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    country: "United States",
    categories: ["Sandals", "Casual"],
    featured: false
  },
  {
    id: 15,
    name: "UGG",
    slug: "ugg",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
      icon: "https://images.unsplash.com/photo-1533867617858-e7b97e060509"
    },
    country: "United States",
    categories: ["Boots", "Casual"],
    featured: false
  },
  {
    id: 16,
    name: "Timberland",
    slug: "timberland",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      icon: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    country: "United States",
    categories: ["Boots", "Casual"],
    featured: true
  },
  {
    id: 17,
    name: "Reebok",
    slug: "reebok",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
      icon: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
    },
    country: "United States",
    categories: ["Running", "Training", "Casual"],
    featured: false
  },
  {
    id: 18,
    name: "Salomon",
    slug: "salomon",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      icon: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    country: "France",
    categories: ["Trail Running", "Hiking", "Casual"],
    featured: true
  },
  {
    id: 19,
    name: "Skechers",
    slug: "skechers",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
      icon: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    country: "United States",
    categories: ["Casual", "Walking", "Running"],
    featured: false
  },
  {
    id: 20,
    name: "Under Armour",
    slug: "under-armour",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      icon: "https://images.unsplash.com/photo-1579338559194-a162d19bf842"
    },
    country: "United States",
    categories: ["Training", "Basketball", "Running"],
    featured: true
  },
  {
    id: 21,
    name: "Brooks",
    slug: "brooks",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      icon: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    country: "United States",
    categories: ["Running", "Walking"],
    featured: false
  },
  {
    id: 22,
    name: "Saucony",
    slug: "saucony",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1539185441755-769473a23570",
      icon: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    country: "United States",
    categories: ["Running", "Casual"],
    featured: false
  },
  {
    id: 23,
    name: "Mizuno",
    slug: "mizuno",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      icon: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    country: "Japan",
    categories: ["Running", "Training", "Volleyball"],
    featured: false
  },
  {
    id: 24,
    name: "Merrell",
    slug: "merrell",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      icon: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    country: "United States",
    categories: ["Hiking", "Trail Running", "Casual"],
    featured: false
  },
  {
    id: 25,
    name: "Keen",
    slug: "keen",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      icon: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    country: "United States",
    categories: ["Sandals", "Hiking", "Casual"],
    featured: false
  },
  {
    id: 26,
    name: "Columbia",
    slug: "columbia",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
      icon: "https://images.unsplash.com/photo-1521369984180-86565a04d35f"
    },
    country: "United States",
    categories: ["Hiking", "Boots", "Outdoor"],
    featured: false
  },
  {
    id: 27,
    name: "DC Shoes",
    slug: "dc-shoes",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      icon: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    country: "United States",
    categories: ["Skate", "Casual"],
    featured: false
  },
  {
    id: 28,
    name: "Etnies",
    slug: "etnies",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      icon: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    country: "United States",
    categories: ["Skate", "Casual"],
    featured: false
  },
  {
    id: 29,
    name: "Suicoke",
    slug: "suicoke",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      icon: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    country: "Japan",
    categories: ["Sandals", "Casual"],
    featured: false
  },
  {
    id: 30,
    name: "Teva",
    slug: "teva",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      icon: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    },
    country: "United States",
    categories: ["Sandals", "Hiking", "Casual"],
    featured: false
  },
  {
    id: 31,
    name: "Camper",
    slug: "camper",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      icon: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4"
    },
    country: "Spain",
    categories: ["Casual", "Formal"],
    featured: false
  },
  {
    id: 32,
    name: "ECCO",
    slug: "ecco",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      icon: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4"
    },
    country: "Denmark",
    categories: ["Casual", "Formal", "Golf"],
    featured: false
  },
  {
    id: 33,
    name: "Balenciaga",
    slug: "balenciaga",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      icon: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    country: "Spain",
    categories: ["Luxury", "Casual"],
    featured: true
  },
  {
    id: 34,
    name: "Gucci",
    slug: "gucci",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      icon: "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
    },
    country: "Italy",
    categories: ["Luxury", "Casual"],
    featured: true
  },
  {
    id: 35,
    name: "Prada",
    slug: "prada",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      icon: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4"
    },
    country: "Italy",
    categories: ["Luxury", "Casual", "Formal"],
    featured: false
  },
  {
    id: 36,
    name: "Maison Margiela",
    slug: "maison-margiela",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      icon: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    country: "France",
    categories: ["Luxury", "Casual"],
    featured: false
  },
  {
    id: 37,
    name: "Alexander McQueen",
    slug: "alexander-mcqueen",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      icon: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
    },
    country: "United Kingdom",
    categories: ["Luxury", "Casual"],
    featured: false
  },
  {
    id: 38,
    name: "Common Projects",
    slug: "common-projects",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      icon: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    country: "United States",
    categories: ["Luxury", "Casual"],
    featured: false
  },
  {
    id: 39,
    name: "Off-White",
    slug: "off-white",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      icon: "https://images.unsplash.com/photo-1579338559194-a162d19bf842"
    },
    country: "Italy",
    categories: ["Luxury", "Casual", "Skate"],
    featured: true
  },
  {
    id: 40,
    name: "Fear of God",
    slug: "fear-of-god",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      icon: "https://images.unsplash.com/photo-1579338559194-a162d19bf842"
    },
    country: "United States",
    categories: ["Luxury", "Casual", "Basketball"],
    featured: false
  },
  {
    id: 41,
    name: "BAPE",
    slug: "bape",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      icon: "https://images.unsplash.com/photo-1579338559194-a162d19bf842"
    },
    country: "Japan",
    categories: ["Casual", "Skate"],
    featured: false
  },
  {
    id: 42,
    name: "Yeezy",
    slug: "yeezy",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      icon: "https://images.unsplash.com/photo-1579338559194-a162d19bf842"
    },
    country: "United States",
    categories: ["Casual", "Running"],
    featured: true
  },
  {
    id: 43,
    name: "Superga",
    slug: "superga",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      icon: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    country: "Italy",
    categories: ["Casual"],
    featured: false
  },
  {
    id: 44,
    name: "Keds",
    slug: "keds",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      icon: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
    },
    country: "United States",
    categories: ["Casual"],
    featured: false
  },
  {
    id: 45,
    name: "Red Wing Heritage",
    slug: "red-wing-heritage",
    logoUrl: {
      logo: "https://images.unsplash.com/photo-1533867617858-e7b97e060509",
      icon: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4"
    },
    country: "United States",
    categories: ["Boots", "Casual"],
    featured: false
  }
];