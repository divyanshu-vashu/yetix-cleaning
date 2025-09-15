import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building, Sparkles, Calendar, Phone } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    description: 'Complete home cleaning services including kitchens, bathrooms, living areas, and bedrooms.',
    features: ['Regular weekly/fortnightly cleaning', 'One-off deep cleaning', 'Move-in/move-out cleaning'],
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    icon: Building,
    title: 'Commercial Cleaning',
    description: 'Professional office and business cleaning solutions to maintain a productive work environment.',
    features: ['Daily office cleaning', 'Reception & meeting rooms', 'Restroom sanitization'],
    image: 'https://images.pexels.com/photos/4099092/pexels-photo-4099092.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'Thorough spring cleaning service covering every corner of your property.',
    features: ['Behind appliance cleaning', 'Window cleaning', 'Carpet deep cleaning'],
    image: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    icon: Calendar,
    title: 'End of Lease Cleaning',
    description: 'Comprehensive cleaning service to ensure you get your full bond back.',
    features: ['Bond back guarantee', 'Oven & rangehood cleaning', 'Complete property sanitization'],
    image: 'https://images.pexels.com/photos/4108128/pexels-photo-4108128.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From regular house cleaning to specialized commercial services, we provide comprehensive 
            cleaning solutions tailored to your specific needs across Melbourne.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
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
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Cleaning Solution?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every space is different. Call us to discuss your specific cleaning requirements and 
            we'll create a customized service plan that fits your needs and budget.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
            <Phone className="h-5 w-5 mr-2" />
            Call for Custom Quote: (03) 8888 1234
          </Button>
        </div>
      </div>
    </section>
  );
}