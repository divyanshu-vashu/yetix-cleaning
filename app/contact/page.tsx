import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Yetix Cleaning Melbourne',
  description: 'Get in touch with Yetix Cleaning for professional cleaning services in Melbourne. Call us to book your cleaning appointment today.',
};

const serviceAreas = [
  'CBD & Inner Melbourne',
  'South Melbourne',
  'North Melbourne',
  'East Melbourne',
  'West Melbourne',
  'Richmond',
  'Collingwood',
  'Fitzroy',
  'Carlton',
  'Southbank',
  'Docklands',
  'Port Melbourne'
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Ready to experience professional cleaning services? Contact us today to discuss 
                your needs and schedule your cleaning appointment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Ready to book? Give us a call!</p>
                  <a href="tel:+61451161253" className="w-full block">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full" size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      +61 451161253
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Send us your questions</p>
                  <p className="font-semibold text-blue-600">cleaning.yetix@hotmail.com</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Operating Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Mon - Fri:</span>
                      <span>7AM - 7PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>8AM - 6PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>9AM - 5PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Serving Greater Melbourne</p>
                  <p className="font-semibold text-blue-600">All Melbourne Suburbs</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Contact Section */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Ready to Book Your Cleaning?</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Getting started is easy! Simply give us a call to discuss your cleaning needs, 
                  get a free quote, and schedule your service at a time that works for you.
                </p>

                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-3 text-blue-900">📞 Quick Phone Booking</h3>
                    <p className="text-gray-700 mb-4">
                      Call us now for instant quotes and same-day booking availability.
                    </p>
                    <a href="tel:+61451161253" className="w-full block">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                      <Phone className="h-5 w-5 mr-2" />
                      Call +61 451161253
                    </Button>
                    </a>

                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-xl">What to Expect When You Call:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span>Discuss your specific cleaning requirements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span>Receive an instant, no-obligation quote</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span>Schedule your cleaning at your convenience</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span>Confirm all details and special requirements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Melbourne Service Areas</h2>
                <p className="text-gray-600 mb-6">
                  We proudly serve residential and commercial clients across Melbourne and surrounding suburbs.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-green-900">✅ Same-Day Service Available</h3>
                  <p className="text-gray-700 mb-4">
                    Need urgent cleaning? We offer same-day and next-day service for most areas across Melbourne.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Don't see your suburb? Call us anyway - we likely service your area!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="bg-red-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-red-900">Emergency Cleaning Services</h2>
            <p className="text-xl text-red-700 mb-6">
              Need urgent cleaning services? Flood, fire, or accident cleanup?
            </p>
            <a href="tel:+61451161253" className="w-full block">
            <Button className="bg-red-600 hover:bg-red-700 text-white" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              Emergency Line: +61 451161253
            </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}