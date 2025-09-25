// file: components/sections/About.tsx

import { Award, Users, Clock, Shield } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Award,
    title: 'Professional Excellence',
    description: 'Yetix Cleaning uses trained professionals, industry-standard equipment, and eco-friendly products for top results in Melbourne.' // Added Yetix Cleaning and Melbourne
  },
  {
    icon: Users,
    title: 'Trusted Team',
    description: 'Our Yetix Cleaning staff are fully insured, vetted, and trustworthy for your home or business in Melbourne.' // Added Yetix Cleaning and Melbourne
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Yetix Cleaning is available 7 days a week with same-day service options across all of Melbourne.' // Added Yetix Cleaning and Melbourne
  },
  {
    icon: Shield,
    title: '100% Satisfaction',
    description: 'Yetix Cleaning offers a complete satisfaction guarantee in Melbourne - we\'ll return to fix any issues at no cost.' // Added Yetix Cleaning and Melbourne
  }
];

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Yetix Cleaning is the <span className="text-blue-600">Best Cleaning Service in Melbourne</span>
            </h2> {/* <<-- Stronger H2 with keywords */}
            <p className="text-xl text-gray-600 mb-8">
            Yetix Cleaning, a leading **cleaning service in Melbourne**, stands out with a simple promise: show up on time, clean like it’s our own home or business, and guarantee your satisfaction. Experience true professional cleaning with Yetix.
            </p> {/* Integrated keywords */}
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Image */}
          <div className="relative">
            <div className="relative w-full h-96">
              <Image
                src="/image.png"
                alt="Yetix Cleaning team providing best cleaning service in Melbourne"
                fill
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-600">Happy Yetix Cleaning Clients</div> {/* Added Yetix Cleaning */}
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction with Yetix Cleaning</div> {/* Added Yetix Cleaning */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}