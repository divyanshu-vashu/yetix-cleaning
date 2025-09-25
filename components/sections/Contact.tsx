import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Clock, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Book Your Cleaning Service?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get in touch today for a free quote and to schedule your professional cleaning service. 
              We're available 7 days a week across Melbourne.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Call Us Now</div>
                  <a href="tel:+61451161253" className="text-blue-100 hover:underline">+61 451161253</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Operating Hours</div>
                  <div className="text-blue-100">7 Days a Week, 7AM - 7PM</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Service Areas</div>
                  <div className="text-blue-100">All Melbourne Suburbs</div>
                </div>
              </div>
            </div>

            <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              <a href="tel:+61451161253" className="hover:underline">Call Now: +61 451161253</a>
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="space-y-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  Same-Day Service Available
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Need urgent cleaning? We offer same-day service for most areas across Melbourne. 
                  Call us before 2PM for same-day availability.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  Free Quotes Over the Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Get an instant quote when you call. We'll discuss your cleaning needs and 
                  provide transparent pricing with no hidden fees.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  100% Satisfaction Guarantee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Not completely satisfied? We'll return within 24 hours to address any 
                  concerns at absolutely no extra charge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}