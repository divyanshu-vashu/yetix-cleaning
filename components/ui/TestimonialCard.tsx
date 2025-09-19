import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className = '' }: TestimonialCardProps) {
  return (
    <Card className={`relative hover:shadow-lg transition-shadow ${className}`}>
      <CardContent className="p-6">
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 text-blue-100">
          <Quote className="h-8 w-8" />
        </div>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} 
            />
          ))}
        </div>
        
        {/* Testimonial Text */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          "{testimonial.text}"
        </p>
        
        {/* Customer Info */}
        <div className="flex items-center gap-4 border-t pt-4">
          {testimonial.image && (
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <Image 
                src={testimonial.image} 
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <div className="font-semibold text-gray-900">{testimonial.name}</div>
            {testimonial.role && (
              <div className="text-sm text-gray-600">{testimonial.role}</div>
            )}
            <div className="text-sm text-gray-600">{testimonial.location}</div>
            <div className="text-blue-600 text-sm font-medium mt-1">
              {testimonial.service}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
