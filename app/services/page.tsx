import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Phone, Clock, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Yetix Cleaning Melbourne',
  description: 'Comprehensive cleaning services including residential, commercial, end-of-lease, and deep cleaning. Professional cleaners serving Melbourne.',
};

const services = [
  {
    title: 'Residential Cleaning',
    description: 'Complete home cleaning services tailored to your needs',
    price: 'From $149',
    features: ['Kitchen & bathrooms', 'Living areas', 'Bedrooms', 'Vacuuming & mopping', 'Dusting & wiping'],
    popular: true,
  },
  {
    title: 'Commercial Cleaning',
    description: 'Professional office and business cleaning solutions',
    price: 'From $99',
    features: ['Office spaces', 'Reception areas', 'Meeting rooms', 'Restrooms', 'Kitchen facilities'],
    popular: false,
  },
  {
    title: 'End of Lease Cleaning',
    description: 'Comprehensive cleaning to get your bond back',
    price: 'From $299',
    features: ['Bond back guarantee', 'Oven & rangehood', 'Cabinet interiors', 'Window cleaning', 'Carpet steam clean'],
    popular: false,
  },
  {
    title: 'Deep Cleaning',
    description: 'Thorough spring cleaning for homes and offices',
    price: 'From $199',
    features: ['Detailed cleaning', 'Hard-to-reach areas', 'Behind appliances', 'Window sills', 'Light fixtures'],
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
                Professional Cleaning Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                From regular home maintenance to deep commercial cleans, we provide comprehensive cleaning solutions across Melbourne
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-blue-600">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Serving All Melbourne</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">7 Days a Week</span>
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
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-lg">{service.description}</CardDescription>
                    <div className="text-3xl font-bold text-blue-600">{service.price}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                      <Phone className="h-5 w-5 mr-2" />
                      Call to Book: +61 451161253
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
                <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">100% satisfaction guarantee or we'll return to fix any issues at no extra cost.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">We work around your schedule with morning, afternoon, and weekend appointments.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
                <p className="text-gray-600">Simply call us to discuss your needs and schedule your cleaning service.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}