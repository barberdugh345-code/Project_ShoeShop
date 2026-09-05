export interface Shoe_Brands{
    id: number;
  name: string;
  slug: string;
  logoUrl: {
    logo: string;
    icon?: string;
  };
  country: string;
  categories: Array<'Running' | 'Casual' | 'Basketball' | 'Formal' | 'Skate' | 'School' | 'Sandals' | 'Boots' | 'Training'>;
  featured: boolean;
}

export const Brands_Type:Shoe_Brands[]=[
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
  }
]