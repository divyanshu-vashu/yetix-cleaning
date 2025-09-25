import { Button } from '@/components/ui/button';
import { Phone, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/cover_yetix.png"
          alt="Yetix Cleaning - Best Professional Cleaning Service in Melbourne"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left relative z-10 py-24 lg:py-0">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-200 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                100+ Happy Customers of Yetix Cleaning in Melbourne
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Yetix Cleaning: The <span className="text-blue-300">Best Cleaning Service</span> in Melbourne
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Experience the difference with Yetix Cleaning, proudly offering the best professional cleaning services for homes and businesses across Melbourne. We provide reliable, thorough, and top-rated residential and commercial cleaning. Book your appointment today and see why we're the preferred cleaning service in Melbourne!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* ===== FIX START: This button was incorrect ===== */}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 h-auto" asChild>
                <a href="tel:+61451161253">
                  <span className="flex items-center justify-center">
                    <Phone className="h-6 w-6 mr-3" />
                    Call Now: +61 451161253
                  </span>
                </a>
              </Button>
              {/* ===== FIX END ===== */}
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium text-white">Same Day Service</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium text-white">100% Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium text-white">Eco-Friendly</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 -translate-y-1/2 right-[60%] bg-white/90 p-6 rounded-xl shadow-2xl z-20 w-48">
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-sm text-gray-700">Happy Clients in Melbourne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}