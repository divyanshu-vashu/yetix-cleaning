// file: app/contact/page.tsx

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Yetix Cleaning Melbourne - Get a Free Quote for Cleaning Services', // <<-- Stronger title
  description: 'Contact Yetix Cleaning, the best cleaning service in Melbourne, for professional residential, commercial, and end-of-lease cleaning. Call us for a free quote and book your cleaning appointment today across all Melbourne suburbs.', // <<-- More descriptive, integrated keywords
  keywords: 'contact yetix cleaning, cleaning service melbourne contact, yetix cleaning phone, melbourne cleaning quote, book cleaning melbourne, professional cleaners contact, best cleaning service quote', // Added keywords
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
  'Port Melbourne',
  // Consider adding more relevant suburbs if you serve them specifically
  'St Kilda', 'Prahran', 'Toorak', 'Hawthorn', 'Kew', 'Brunswick', 'Preston' 
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
                Contact Yetix Cleaning: Melbourne's Premier Cleaning Service
              </h1> {/* <<-- Stronger H1 with keywords */}
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Ready to experience the **best cleaning service in Melbourne**? Contact **Yetix Cleaning** today to discuss 
                your needs and schedule your professional cleaning appointment across all Melbourne suburbs.
              </p> {/* Integrated keywords */}
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
                  <CardTitle className="text-lg">Call Yetix Cleaning</CardTitle> {/* Added Yetix Cleaning */}
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Ready to book your **Yetix Cleaning service**? Give us a call!</p> {/* Added keywords */}
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
                  <CardTitle className="text-lg">Email Yetix Cleaning</CardTitle> {/* Added Yetix Cleaning */}
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Send us your questions about our **cleaning service in Melbourne**.</p> {/* Added keywords */}
                  <p className="font-semibold text-blue-600">cleaning.yetix@hotmail.com</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Yetix Cleaning Operating Hours</CardTitle> {/* Added Yetix Cleaning */}
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
                  <CardTitle className="text-lg">Yetix Cleaning Service Areas</CardTitle> {/* Added Yetix Cleaning */}
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Serving Greater Melbourne and all surrounding suburbs with our **best cleaning service**.</p> {/* Added keywords */}
                  <p className="font-semibold text-blue-600">All Melbourne Suburbs</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Contact Section */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Ready to Book Your Yetix Cleaning in Melbourne?</h2> {/* Added Yetix Cleaning and Melbourne */}
                <p className="text-gray-600 mb-8 text-lg">
                  Getting started with **Yetix Cleaning**, the **best cleaning service in Melbourne**, is easy! Simply give us a call to discuss your cleaning needs, 
                  get a free quote, and schedule your service at a time that works for you.
                </p> {/* Integrated keywords */}

                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-3 text-blue-900">📞 Quick Phone Booking for Yetix Cleaning Melbourne</h3> {/* Added keywords */}
                    <p className="text-gray-700 mb-4">
                      Call **Yetix Cleaning** now for instant quotes and same-day booking availability for your **cleaning service in Melbourne**.
                    </p> {/* Added keywords */}
                    <a href="tel:+61451161253" className="w-full block">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                      <Phone className="h-5 w-5 mr-2" />
                      Call +61 451161253
                    </Button>
                    </a>

                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-xl">What to Expect When You Call Yetix Cleaning:</h3> {/* Added Yetix Cleaning */}
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span>Discuss your specific **cleaning service in Melbourne** requirements</span> {/* Added keywords */}
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span>Receive an instant, no-obligation quote from **Yetix Cleaning**</span> {/* Added Yetix Cleaning */}
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span>Schedule your **Yetix cleaning service** at your convenience in Melbourne</span> {/* Added keywords */}
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span>Confirm all details and special requirements with **Yetix Cleaning**</span> {/* Added Yetix Cleaning */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Yetix Cleaning: Melbourne Service Areas</h2> {/* Added Yetix Cleaning */}
                <p className="text-gray-600 mb-6">
                  **Yetix Cleaning** proudly serves residential and commercial clients across Melbourne and surrounding suburbs, striving to be the **best cleaning service in Melbourne** for every area.
                </p> {/* Integrated keywords */}

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">Yetix Cleaning in {area}</span> {/* Added Yetix Cleaning in areas */}
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-green-900">✅ Same-Day Yetix Cleaning Service Available in Melbourne</h3> {/* Added keywords */}
                  <p className="text-gray-700 mb-4">
                    Need urgent **cleaning services in Melbourne**? **Yetix Cleaning** offers same-day and next-day service for most areas across Melbourne.
                  </p> {/* Added keywords */}
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Don't see your suburb for **Yetix Cleaning**? Call us anyway - we likely service your area!
                  </p> {/* Added Yetix Cleaning */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="bg-red-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-red-900">Emergency Cleaning Services by Yetix in Melbourne</h2> {/* Added keywords */}
            <p className="text-xl text-red-700 mb-6">
              Need urgent **Yetix cleaning services**? Flood, fire, or accident cleanup? We are the **best cleaning service in Melbourne** for emergencies!
            </p> {/* Added keywords */}
            <a href="tel:+61451161253" className="w-full block">
            <Button className="bg-red-600 hover:bg-red-700 text-white" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              Yetix Emergency Line: +61 451161253
            </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}