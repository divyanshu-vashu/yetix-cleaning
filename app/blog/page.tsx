import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, type BlogPost } from '@/data/blogs';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Yetix Cleaning Blog - Professional Cleaning Tips for Melbourne',
  description: 'Explore the Yetix Cleaning blog for expert tips on residential, commercial, and end-of-lease cleaning in Melbourne. Learn how to maintain a spotless space from the city\'s best cleaning service.',
  keywords: 'cleaning blog melbourne, yetix cleaning blog, cleaning tips, professional cleaning advice, end of lease cleaning tips melbourne, eco-friendly cleaning',
};

export default function BlogDashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The <span className="text-blue-600">Yetix Cleaning</span> Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice, cleaning hacks, and industry insights from Melbourne's trusted cleaning professionals. Your guide to a cleaner, healthier home and workspace.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.map((post: BlogPost) => (
                <div key={post.slug} className="group hover:shadow-xl transition-all duration-300 flex flex-col border rounded-lg overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={`Blog post image for ${post.title}`}
                      width={600}
                      height={336}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500">{post.date} by {post.author}</p>
                    </div>
                    <div className="text-base text-gray-600 mb-6 flex-grow">
                      {post.excerpt}
                    </div>
                    <Button className="mt-6 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white self-start" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}