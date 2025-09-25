// file: components/sections/WorkGallery.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { WorkItem } from '@/data/ourworks';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';

interface WorkGalleryProps {
  work: WorkItem;
  className?: string;
}

export default function WorkGallery({ work, className = '' }: WorkGalleryProps) {
  const [activeTab, setActiveTab] = useState<'gallery' | 'beforeAfter'>('gallery');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter out images that don't have a source or before/after pair if needed
  const allImages = [
    ...work.images.map(img => ({ ...img, type: 'gallery' as const })),
    ...work.afterImages.map((img, i) => ({
      ...img,
      type: 'after' as const,
      beforeImage: work.beforeImages[i]?.src || '' // Add beforeImage for context
    }))
  ].filter(img => {
    return (
      img.src &&
      (img.type === 'gallery' ||
      (img.type === 'after' && img.beforeImage)) // Only include after images if a before image exists
    );
  });

  const currentImage = allImages[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{work.title} by Yetix Cleaning</h3> {/* Added company name */}
        <p className="text-gray-600 mb-6">{work.subheader} - Yetix Cleaning Melbourne</p> {/* Added company name and location */}
        
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'gallery'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Yetix Cleaning Gallery
            </button> {/* Added Yetix Cleaning */}
            <button
              onClick={() => setActiveTab('beforeAfter')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'beforeAfter'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              disabled={work.beforeImages.length === 0}
            >
              Yetix Cleaning Before & After
            </button> {/* Added Yetix Cleaning */}
          </nav>
        </div>

        <div className="relative">
          {activeTab === 'gallery' ? (
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={currentImage.src}
                alt={`${currentImage.alt} - Yetix Cleaning Project in Melbourne`} // <<-- Improved alt text
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Previous image of Yetix Cleaning work" // Improved aria-label
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Next image of Yetix Cleaning work" // Improved aria-label
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {work.beforeImages.map((beforeImg, index) => {
                const afterImg = work.afterImages[index];
                if (!afterImg) return null;
                
                return (
                  <div key={index} className="space-y-2">
                    <h4 className="text-lg font-medium text-gray-900">
                      Yetix Cleaning: {beforeImg.alt.replace('before', '')}
                    </h4> {/* Added Yetix Cleaning */}
                    <div className="aspect-video">
                      <BeforeAfterSlider
                        beforeImage={beforeImg.src}
                        afterImage={afterImg.src}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}