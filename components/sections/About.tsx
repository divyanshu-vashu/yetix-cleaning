import { Award, Users, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Professional Excellence',
    description: 'Trained professionals using industry-standard equipment and eco-friendly products.'
  },
  {
    icon: Users,
    title: 'Trusted Team',
    description: 'Fully insured, vetted staff members you can trust in your home or business.'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Available 7 days a week with same-day service options across Melbourne.'
  },
  {
    icon: Shield,
    title: '100% Satisfaction',
    description: 'Complete satisfaction guarantee - we\'ll return to fix any issues at no cost.'
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
              Why Choose Yetix Cleaning?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              With over 5 years of experience serving Melbourne residents and businesses, 
              we've built our reputation on reliability, quality, and exceptional customer service.
            </p>
            
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
            <img
              src="https://images.pexels.com/photos/4099139/pexels-photo-4099139.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Professional cleaning team"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}