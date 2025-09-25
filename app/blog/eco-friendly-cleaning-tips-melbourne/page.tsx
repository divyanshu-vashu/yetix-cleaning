import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '5 Eco-Friendly Cleaning Tips for a Healthier Melbourne Home',
  description: 'Yetix Cleaning shares 5 simple, eco-friendly cleaning tips for Melbourne residents. Keep your home sparkling and safe for your family and the environment with these green cleaning solutions.',
};

export default function EcoFriendlyBlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose lg:prose-xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-gray-500">Green Cleaning | Yetix Cleaning</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                5 <span className="text-green-600">Eco-Friendly Cleaning Tips</span> for a Healthier Melbourne Home
              </h1>
            </div>

            <Image
              src="/deep_Clean.png"
              alt="A sparkling clean kitchen using eco-friendly products in Melbourne"
              width={1200}
              height={630}
              className="rounded-lg shadow-lg my-8 w-full h-auto"
            />

            <p>Creating a clean home doesn't have to mean using harsh chemicals. For Melbourne residents conscious about their health and the environment, eco-friendly cleaning is a powerful choice. At <strong>Yetix Cleaning</strong>, we incorporate green practices where possible and want to share some simple tips you can use at home.</p>

            <h2>1. Embrace Vinegar and Water</h2>
            <p>White vinegar is a fantastic all-purpose cleaner. Mix equal parts water and vinegar in a spray bottle to clean windows, surfaces, and floors. Its natural acidity cuts through grease and grime effectively. It's a cornerstone of any <strong>eco-friendly cleaning</strong> routine in Melbourne.</p>
            
            <h2>2. Use Baking Soda for Tough Scrubbing</h2>
            <p>Instead of abrasive chemical cleaners, make a paste with baking soda and water. It’s perfect for scrubbing stovetops, sinks, and bathtubs without scratching surfaces. It also acts as a natural deodorizer – sprinkle some in your bin or on carpets before vacuuming!</p>

            <h2>3. Lemons for Shine and Freshness</h2>
            <p>Lemon juice is a natural bleach and disinfectant. It's great for removing stains from cutting boards, shining taps, and leaving a fresh, clean scent. A half-lemon dipped in salt can make copper and brass shine beautifully. This is one of our favorite <strong>eco-friendly cleaning tips</strong>.</p>

            <h2>4. Switch to Microfiber Cloths</h2>
            <p>Reduce paper towel waste by investing in high-quality microfiber cloths. They can effectively remove dust, dirt, and bacteria with just water, reducing the need for chemical sprays. They are washable and reusable, making them a sustainable choice for any Melbourne home.</p>

            <h2>5. Let the Professionals Handle the Deep Clean</h2>
            <p>While DIY solutions are great for daily maintenance, a professional deep clean is sometimes necessary. When you hire a professional service, ask about their eco-friendly options. <strong>Yetix Cleaning</strong> offers <Link href="/services">deep cleaning services in Melbourne</Link> using effective, low-impact products upon request to ensure your home is both spotless and safe.</p>
            <blockquote>At Yetix Cleaning, we believe in a clean home and a clean planet. Ask us about our green cleaning options for your next service.</blockquote>

            <div className="mt-12 text-center bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold">Want a Professional Eco-Friendly Clean?</h3>
              <p className="mt-2 mb-4">Contact Yetix Cleaning to discuss our green cleaning services in Melbourne.</p>
              <Button className="bg-green-600 hover:bg-green-700 text-white" size="lg" asChild>
                <Link href="/contact">
                  <Phone className="h-5 w-5 mr-2" />
                  Get Your Green Cleaning Quote
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}