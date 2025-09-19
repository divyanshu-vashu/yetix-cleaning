import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/image.png"
                alt="Yetix Cleaning"
                className="h-12 w-12 rounded-full"
              />
              <div className="ml-3">
                <div className="text-xl font-bold">Yetix</div>
                <div className="text-sm text-blue-400">Professional Cleaning</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Melbourne's trusted cleaning service provider, delivering exceptional results for homes and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>End of Lease Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Emergency Cleanup</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+61 451161253</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">cleaning.yetix@hotmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">Melbourne</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">7 Days a Week</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Yetix Cleaning. All rights reserved. | Melbourne's Professional Cleaning Service
          </p>
        </div>
      </div>
    </footer>
  );
}