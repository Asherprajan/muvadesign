'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    // Use flexbox for vertical centering on mobile, revert to block for desktop.
    <section className="min-h-screen px-4 sm:px-8 pt-16 sm:pt-32 pb-16 relative flex flex-col justify-center sm:block">
      
      {/* Content wrapper: centered on mobile, left-aligned on desktop */}
      <div className="text-center sm:text-left">
        <h1 className="text-[80px] sm:text-[180px] font-light leading-[0.9] tracking-[-0.02em] text-black">
          designing<br />
          the unbuilt.
        </h1>
        
        {/* Button container: in-flow and centered on mobile, absolute on desktop */}
        <div className="mt-8 sm:absolute sm:bottom-32 sm:right-8 sm:mt-0">
          <Button variant="primary" className="text-sm sm:text-base bg-muva-orange text-white px-4 sm:px-6 py-2 sm:py-3 rounded-[5px]">
            schedule a call
          </Button> 
        </div>
      </div>

      {/* Scroll down indicator remains at the bottom */}
      <div className="sticky bottom-8 sm:bottom-16 w-full flex flex-col items-center animate-bounce">
        <Image 
          src="/images/img_vector_6.svg" 
          alt="Arrow" 
          width={24} 
          height={16} 
          className="mb-0"
        />
        <span className="sr-only">Scroll down</span>
      </div>
    </section>
  );
};

export default HeroSection;