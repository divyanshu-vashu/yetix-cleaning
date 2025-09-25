'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/image.png"
              alt="Yetix Cleaning"
              className="h-16 w-16 rounded-full"
            />
            <div className="ml-3">
              <div className="text-2xl font-bold text-gray-900">Yetix</div>
              <div className="text-sm text-blue-600">Professional Cleaning</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone Button - Desktop */}
          <a href="tel:+61451161253" className="w-full block">
          <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white" size="lg">
            <Phone className="h-5 w-5 mr-2" />
            <a href="tel:+61451161253" className="hover:underline">+61 451161253</a>
          </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a href="tel:+61451161253" className="w-full block">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              <a href="tel:+61451161253" className="hover:underline">Call +61 451161253</a>
            </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}