// file: components/layout/Footer.tsx

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/image.png"
                alt="Yetix Cleaning - Best Cleaning Service Melbourne Logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full"
              />
              <div className="ml-3">
                <div className="text-xl font-bold">Yetix</div>
                <div className="text-sm text-blue-400">Professional Cleaning Melbourne</div> {/* Added Melbourne */}
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Yetix Cleaning is Melbourne's trusted cleaning service provider, delivering exceptional results for homes and businesses. We strive to be the **best cleaning service in Melbourne**.
            </p> {/* Integrated keywords */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Yetix Cleaning Quick Links</h3> {/* Added Yetix Cleaning */}
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Our Cleaning Services
                </Link> {/* More descriptive */}
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Yetix Cleaning
                </Link> {/* Added Yetix Cleaning */}
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Yetix Cleaning
                </Link> {/* Added Yetix Cleaning */}
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Client Testimonials
                </Link> {/* More descriptive */}
              </li>
              {/* If you add a blog, include it here */}
              {/* <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Cleaning Tips & Blog
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Yetix Cleaning Services in Melbourne</h3> {/* Added keywords */}
            <ul className="space-y-2 text-gray-400">
              <li>Residential Cleaning Melbourne</li> {/* Added Melbourne */}
              <li>Commercial Cleaning Melbourne</li> {/* Added Melbourne */}
              <li>End of Lease Cleaning Melbourne</li> {/* Added Melbourne */}
              <li>Deep Cleaning Melbourne</li> {/* Added Melbourne */}
              <li>Emergency Cleanup Melbourne</li> {/* Added Melbourne */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Yetix Cleaning Melbourne</h3> {/* Added keywords */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+61451161253" className="text-gray-400 hover:text-white hover:underline">Call Yetix: +61 451161253</a> {/* Added Yetix */}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">cleaning.yetix@hotmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">Serving all Melbourne Suburbs</span> {/* More descriptive */}
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">Yetix Cleaning Available 7 Days a Week</span> {/* Added company name */}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Yetix Cleaning. All rights reserved. | Melbourne's Professional Cleaning Service and the **Best Cleaning Service in Melbourne**.
          </p> 
        </div>
      </div>
    </footer>
  );
}