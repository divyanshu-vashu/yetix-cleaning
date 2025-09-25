// file: data/ourworks.ts

export interface WorkImage {
  src: string;
  alt: string;
}

export interface WorkItem {
  id: string;
  title: string;
  subheader: string;
  images: WorkImage[];
  beforeImages: WorkImage[];
  afterImages: WorkImage[];
  date: string;
  category: 'residential' | 'commercial' | 'end-of-lease' | 'carpet' | 'other';
}

export const ourWorks: WorkItem[] = [
  {
    id: '1',
    title: 'Complete Home Makeover by Yetix Cleaning', // Added Yetix Cleaning
    subheader: 'South Melbourne Residential Property', // More descriptive
    date: '2023-08-15',
    category: 'residential',
    images: [
      { src: '/residental_cleaning.png', alt: 'Yetix Cleaning residential clean in South Melbourne after service' }, // <<-- Improved alt text
    ],
    beforeImages: [
      { src: '/demo1dirty.png', alt: 'Living room before Yetix Cleaning service in South Melbourne' }, // <<-- Improved alt text
    ],
    afterImages: [
      { src: '/demo1clean.png', alt: 'Living room after professional Yetix Cleaning in South Melbourne' }, // <<-- Improved alt text
    ],
  },
];


export const getWorksByCategory = (category?: string) => {
  if (!category) return ourWorks;
  return ourWorks.filter(work => work.category === category);
};


export const getWorkById = (id: string) => {
  return ourWorks.find(work => work.id === id);
};