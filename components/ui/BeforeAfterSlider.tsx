'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  width = 600,
  height = 400,
}: {
  beforeImage: string;
  afterImage: string;
  width?: number;
  height?: number;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !isDragging) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - containerRect.left, containerRect.width));
    const percent = Math.max(0, Math.min((x / containerRect.width) * 100, 100));
    
    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add event listeners for mouse up outside the component
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      className="relative w-full overflow-hidden rounded-lg shadow-lg"
      style={{ width: `${width}px`, height: `${height}px` }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* After Image (behind) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt="After"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Before Image (on top, clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={beforeImage}
          alt="Before"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10"
        style={{ left: `calc(${sliderPosition}% - 1px)` }}
        onMouseDown={handleMouseDown}
      >
        {/* Slider Handle */}
        <div className="absolute -left-3 -top-8 bottom-0 m-auto w-8 h-16 bg-white rounded-full shadow-lg flex items-center justify-center cursor-col-resize">
          <div className="w-1 h-8 bg-blue-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}
