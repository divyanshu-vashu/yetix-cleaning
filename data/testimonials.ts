export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  image?: string;
  role?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    location: 'South Melbourne',
    rating: 5,
    text: 'Yetix Cleaning transformed my home! Their attention to detail is incredible, and the team is always professional and punctual. Highly recommend for anyone in Melbourne.',
    service: 'Weekly Residential Cleaning',
    image: '/images/testimonials/person1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    location: 'CBD Melbourne',
    rating: 5,
    text: 'Our office has never looked better since we started using Yetix. They work around our schedule and maintain the highest standards of cleanliness.',
    service: 'Commercial Office Cleaning',
    image: '/images/testimonials/person2.jpg'
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Renter',
    location: 'Richmond',
    rating: 5,
    text: 'Got my full bond back thanks to their end-of-lease cleaning service! They were thorough, affordable, and guaranteed their work. Fantastic service!',
    service: 'End of Lease Cleaning',
    image: '/images/testimonials/person3.jpg'
  }
];
