import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Award, Users, Clock } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Yetix Cleaning Melbourne',
  description: 'Learn about Yetix Cleaning, Melbourne\'s trusted cleaning service provider with years of experience serving residential and commercial clients.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About Yetix Cleaning
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Melbourne's trusted cleaning professionals, dedicated to providing exceptional service 
                  and maintaining the highest standards of cleanliness for your home or business.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Today: (03) 8888 1234
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4099266/pexels-photo-4099266.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional cleaning team"
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Founded with a simple mission to provide Melbourne residents and businesses with 
                  reliable, professional cleaning services, Yetix Cleaning has grown to become one 
                  of the city's most trusted cleaning companies.
                </p>
                <p className="text-gray-600 mb-6">
                  We understand that your time is precious, and a clean environment is essential 
                  for productivity, health, and peace of mind. That's why we've built our reputation 
                  on delivering consistent, high-quality cleaning services that exceed expectations.
                </p>
                <p className="text-gray-600">
                  Our team of experienced professionals uses eco-friendly products and proven 
                  techniques to ensure your space is not just clean, but healthy and welcoming. 
                  From regular maintenance cleaning to specialized deep cleans, we're here to 
                  help you maintain the perfect environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-blue-600 py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-100">Cleanings Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Yetix Cleaning?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Professional Excellence</h3>
                <p className="text-gray-600">
                  Our trained professionals use industry-standard equipment and techniques 
                  to deliver superior results every time.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Trusted Team</h3>
                <p className="text-gray-600">
                  All our staff are thoroughly vetted, insured, and trained to provide 
                  reliable service you can count on.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  We work around your schedule with convenient appointment times 
                  including evenings and weekends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Yetix Difference?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers across Melbourne who trust Yetix Cleaning 
              for their residential and commercial cleaning needs.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              Call Now: (03) 8888 1234
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}