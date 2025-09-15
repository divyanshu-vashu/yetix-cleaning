import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'South Melbourne',
    rating: 5,
    text: 'Yetix Cleaning transformed my home! Their attention to detail is incredible, and the team is always professional and punctual. Highly recommend for anyone in Melbourne.',
    service: 'Weekly Residential Cleaning'
  },
  {
    name: 'Michael Chen',
    location: 'CBD Melbourne',
    rating: 5,
    text: 'Our office has never looked better since we started using Yetix. They work around our schedule and maintain the highest standards of cleanliness.',
    service: 'Commercial Office Cleaning'
  },
  {
    name: 'Emma Williams',
    location: 'Richmond',
    rating: 5,
    text: 'Got my full bond back thanks to their end-of-lease cleaning service! They were thorough, affordable, and guaranteed their work. Fantastic service!',
    service: 'End of Lease Cleaning'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers 
            across Melbourne who trust Yetix Cleaning for their cleaning needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-blue-200">
                  <Quote className="h-8 w-8" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Customer Info */}
                <div className="border-t pt-6">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  <div className="text-blue-600 text-sm font-medium mt-1">
                    {testimonial.service}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-700">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700">Satisfaction Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}