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
    title: 'Complete Home Makeover',
    subheader: 'South Melbourne Residence',
    date: '2023-08-15',
    category: 'residential',
    images: [
      { src: '/residental_cleaning.png', alt: 'Living room after cleaning' },
    ],
    beforeImages: [
      { src: '/demo1dirty.png', alt: 'Living room before cleaning' },
    ],
    afterImages: [
      { src: '/demo1clean.png', alt: 'Living room after cleaning' },
    ],
  },
];

// Helper function to get works by category
export const getWorksByCategory = (category?: string) => {
  if (!category) return ourWorks;
  return ourWorks.filter(work => work.category === category);
};

// Helper function to get a single work by ID
export const getWorkById = (id: string) => {
  return ourWorks.find(work => work.id === id);
};