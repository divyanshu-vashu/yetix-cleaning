// file: app/services/page.tsx

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Phone, Clock, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link'; // Import Link

export const metadata: Metadata = {
  title: 'Yetix Cleaning Services Melbourne - Best Residential, Commercial & End-of-Lease', // <<-- Stronger title with "Best"
  description: 'Yetix Cleaning offers comprehensive and best-in-class cleaning services in Melbourne, including residential cleaning, commercial office cleaning, end-of-lease cleaning, and deep cleaning. Trust our professional cleaners for a sparkling result. We are dedicated to being the best cleaning service in Melbourne.', // <<-- More descriptive, integrated keywords
  keywords: 'cleaning services melbourne, yetix cleaning services, residential cleaning melbourne, commercial cleaning melbourne, end of lease cleaning melbourne, deep cleaning melbourne, best cleaning service options, professional cleaners melbourne', // Added keywords
};

const services = [
  {
    title: 'Residential Cleaning',
    description: 'Complete home cleaning services tailored to your needs for residents in Melbourne.', // Added location
    price: 'From $149',
    features: ['Kitchen & bathrooms thoroughly cleaned', 'Living areas & bedrooms pristine', 'Vacuuming & mopping for sparkling floors', 'Dusting & wiping all surfaces'], // More descriptive features
    popular: true,
  },
  {
    title: 'Commercial Cleaning',
    description: 'Professional office and business cleaning solutions for a productive work environment in Melbourne.', // Added location
    price: 'From $99',
    features: ['Spotless office spaces', 'Clean reception areas', 'Sanitized meeting rooms', 'Sparkling restrooms', 'Hygienic kitchen facilities'], // More descriptive features
    popular: false,
  },
  {
    title: 'End of Lease Cleaning',
    description: 'Comprehensive cleaning to get your full bond back, guaranteed by Yetix Cleaning in Melbourne.', // Added company name, guarantee, and location
    price: 'From $299',
    features: ['Bond back guarantee included', 'Oven & rangehood deep clean', 'Cabinet interiors wiped clean', 'Streak-free window cleaning', 'Professional carpet steam clean'], // More descriptive features
    popular: false,
  },
  {
    title: 'Deep Cleaning',
    description: 'Thorough spring cleaning for homes and offices across Melbourne, reaching every corner.', // Added location
    price: 'From $199',
    features: ['Detailed cleaning of all areas', 'Hard-to-reach areas addressed', 'Behind appliances cleaned', 'Window sills & frames wiped', 'Light fixtures & fans dusted'], // More descriptive features
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Yetix Cleaning: <span className="text-blue-600">Best Professional Cleaning Services</span> in Melbourne
              </h1> {/* <<-- Stronger H1 with keywords */}
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                As the **best cleaning service in Melbourne**, **Yetix Cleaning** provides comprehensive 
                cleaning solutions tailored to your specific needs across all Melbourne suburbs.
              </p> {/* Integrated keywords */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-blue-600">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Serving All Melbourne Suburbs</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Yetix Cleaning Available 7 Days a Week</span> {/* Added company name */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className={`relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-6 bg-blue-500 text-white">
                      Yetix Cleaning: Most Popular Service
                    </Badge> // Added company name
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title} by Yetix Cleaning</CardTitle> {/* Added by Yetix Cleaning */}
                    <CardDescription className="text-lg">
                      {service.title === 'Residential Cleaning' && 'Experience the best residential cleaning service in Melbourne. Our tailored services cover kitchens, bathrooms, living areas, and bedrooms for a spotless home.'}
                      {service.title === 'Commercial Cleaning' && 'Premier commercial cleaning service in Melbourne. We offer professional office and business cleaning solutions to ensure a pristine and productive work environment.'}
                      {service.title === 'End of Lease Cleaning' && 'Guaranteed end of lease cleaning in Melbourne to help you get your full bond back. Includes deep oven cleaning, rangehood, and complete property sanitization by Yetix Cleaning.'}
                      {service.title === 'Deep Cleaning' && 'Our comprehensive deep cleaning service in Melbourne provides a thorough spring cleaning for homes and offices, tackling every hard-to-reach area, making us the best cleaning service for deep cleans.'}
                    </CardDescription> {/* <<-- More specific descriptions with keywords */}
                    <div className="text-3xl font-bold text-blue-600">{service.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link href="/contact">Get a Free Quote...</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Yetix Cleaning: Satisfaction Guaranteed</h3> {/* Added Yetix Cleaning */}
                <p className="text-gray-600">**Yetix Cleaning** offers a 100% satisfaction guarantee or we'll return to fix any issues at no extra cost, ensuring we remain the **best cleaning service in Melbourne**.</p> {/* Added keywords */}
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Yetix Cleaning Scheduling</h3> {/* Added Yetix Cleaning */}
                <p className="text-gray-600">We work around your schedule with morning, afternoon, and weekend appointments for your **cleaning service in Melbourne**.</p> {/* Added keywords */}
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Easy Yetix Cleaning Booking</h3> {/* Added Yetix Cleaning */}
                <p className="text-gray-600">Simply call us to discuss your needs and schedule your **Yetix cleaning service** in Melbourne.</p> {/* Added keywords */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}