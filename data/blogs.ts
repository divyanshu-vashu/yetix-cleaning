export interface BlogPost {
    slug: string;
    title: string;
    description: string; 
    excerpt: string;
    date: string;
    imageUrl: string;
    author: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      slug: 'how-to-choose-the-best-end-of-lease-cleaning-service-in-melbourne',
      title: 'How to Choose the Best End of Lease Cleaning Service in Melbourne',
      description: 'A complete guide by Yetix Cleaning on selecting the best end of lease cleaning service in Melbourne. Learn what to look for, key questions to ask, and how to ensure you get your bond back.',
      excerpt: 'Getting your bond back is crucial. Our guide breaks down everything you need to know to choose the best end of lease cleaning service in Melbourne, from checklists to red flags.',
      date: 'September 26, 2025',
      imageUrl: '/end_of_lease.png', 
      author: 'Yetix Cleaning Team',
    },
    {
      slug: 'eco-friendly-cleaning-tips-melbourne',
      title: '5 Eco-Friendly Cleaning Tips for a Healthier Melbourne Home',
      description: 'Yetix Cleaning shares 5 simple, eco-friendly cleaning tips for Melbourne residents. Keep your home sparkling and safe for your family and the environment with these green cleaning solutions.',
      excerpt: 'Go green with your cleaning routine! Discover 5 effective and eco-friendly tips from the experts at Yetix Cleaning to maintain a healthy, spotless home in Melbourne.',
      date: 'September 20, 2025',
      imageUrl: '/deep_Clean.png',
      author: 'Yetix Cleaning Team',
    },
  ];