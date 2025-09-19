import { NextResponse } from 'next/server';

// Mock data - in a real app, this would come from a database
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Homeowner',
    content: 'Amazing cleaning service! My house has never been cleaner. The team was professional and thorough.',
    rating: 5,
    image: '/images/testimonials/person1.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Business Owner',
    content: 'Reliable and efficient office cleaning. They always go above and beyond our expectations.',
    rating: 5,
    image: '/images/testimonials/person2.jpg'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Property Manager',
    content: 'Professional service with attention to detail. Our tenants are very satisfied with the cleaning quality.',
    rating: 4,
    image: '/images/testimonials/person3.jpg'
  }
];

export async function GET() {
  try {
    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real app, you would validate the input data here
    // and save it to a database
    
    const newTestimonial = {
      id: testimonials.length + 1,
      ...body,
      rating: parseInt(body.rating, 10) || 5
    };
    
    testimonials.push(newTestimonial);
    
    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create testimonial' },
      { status: 500 }
    );
  }
}
