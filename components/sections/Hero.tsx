import { Button } from '@/components/ui/button';
import { Phone, CheckCircle, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-80 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">500+ Happy Customers</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional 
              <span className="text-blue-600"> Cleaning </span>
              Services in Melbourne
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Experience the difference with Yetix Cleaning. We provide reliable, thorough cleaning services 
              for homes and businesses across Melbourne. Book your appointment today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 h-auto">
                <Phone className="h-6 w-6 mr-3" />
                Call Now: (03) 8888 1234
              </Button>
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 h-auto">
                Learn More About Our Services
              </Button>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Same Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">100% Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Eco-Friendly</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional cleaning service"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute top-4 -left-4 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            
            <div className="absolute bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-sm font-medium">Available Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}