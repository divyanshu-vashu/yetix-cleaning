'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Search, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

// Data
import { testimonials } from '@/data/testimonials';
import { ourWorks, getWorksByCategory } from '@/data/ourworks';

// Components
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import WorkGallery from '@/components/sections/WorkGallery';

export default function TestimonialsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('all');
  const [selectedRating, setSelectedRating] = useState(0);
  const [filteredTestimonials, setFilteredTestimonials] = useState(testimonials);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredWorks, setFilteredWorks] = useState(ourWorks);

  // Get unique services and categories for filters
  const services = ['all', ...new Set(testimonials.map(t => t.service))];
  const categories = ['all', ...new Set(ourWorks.map(work => work.category))];

  // Filter testimonials based on search and filters
  useEffect(() => {
    let results = [...testimonials];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        testimonial =>
          testimonial.name.toLowerCase().includes(term) ||
          testimonial.text.toLowerCase().includes(term) ||
          testimonial.service.toLowerCase().includes(term) ||
          testimonial.location.toLowerCase().includes(term)
      );
    }

    if (selectedService !== 'all') {
      results = results.filter(
        testimonial => testimonial.service === selectedService
      );
    }

    if (selectedRating > 0) {
      results = results.filter(
        testimonial => testimonial.rating >= selectedRating
      );
    }

    setFilteredTestimonials(results);
  }, [searchTerm, selectedService, selectedRating]);

  // Filter works when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredWorks(ourWorks);
    } else {
      setFilteredWorks(getWorksByCategory(selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Work & Testimonials
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See the difference we make and hear from our satisfied customers across Melbourne.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Testimonials Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied customers across Melbourne.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search testimonials
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search by name, location, or service..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Service Filter */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Filter by service
                </label>
                <select
                  id="service"
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service === 'all' ? 'All Services' : service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Minimum rating
                </label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      className={`p-1 rounded-md ${
                        selectedRating === rating
                          ? 'bg-blue-100 text-yellow-500'
                          : 'text-gray-300 hover:text-yellow-400'
                      }`}
                      onClick={() => setSelectedRating(selectedRating === rating ? 0 : rating)}
                    >
                      <Star
                        className={`h-6 w-6 ${selectedRating >= rating ? 'fill-current' : ''}`}
                      />
                    </button>
                  ))}
                  {selectedRating > 0 && (
                    <button
                      type="button"
                      className="ml-2 text-sm text-blue-600 hover:text-blue-800"
                      onClick={() => setSelectedRating(0)}
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          {filteredTestimonials.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    className="h-full"
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No testimonials found</h3>
              <p className="mt-1 text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedService('all');
                    setSelectedRating(0);
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </section>
        
        {/* Our Work Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Work</h2>
              <p className="text-gray-600">Browse through our recent projects and see the transformation</p>
            </div>
            <div className="mt-4 md:mt-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.replace(/-/g, ' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredWorks.slice(0, 3).map((work) => (
              <WorkGallery key={work.id} work={work} />
            ))}
          </div>

          {filteredWorks.length > 3 && (
            <div className="mt-8 text-center">
              <Link 
                href="/gallery" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                View all projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          )}
        </section>

        

        {/* CTA Section */}
        <div className="mt-16 bg-blue-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to experience our service?</h3>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Join our growing list of satisfied customers and see why people in Melbourne trust Yetix Cleaning for all their cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+61451161253"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call 0451 161 253
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}