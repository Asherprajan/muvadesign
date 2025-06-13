'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const handleScheduleCall = () => {
    window.open('https://wa.me/+919719222803', '_blank');
  };

  return (
    // Reduced height to under 70vh
    <section className="h-[90vh] px-4 sm:px-8 pt-16 sm:pt-32 pb-16 relative flex flex-col justify-center sm:block">
      
      {/* Content wrapper: centered on mobile, left-aligned on desktop */}
      <div className="text-left">
        <h1 className="text-[80px] sm:text-[180px] font-light leading-[0.9] tracking-[-0.02em] text-black">
          designing<br />
          the unbuilt.
        </h1>
        
        {/* Button container: in-flow and centered on mobile, absolute on desktop */}
        <div className="mt-8 sm:absolute sm:bottom-32 sm:right-8 sm:mt-0">
          <Button 
            variant="primary" 
            className="text-sm sm:text-base bg-muva-orange text-white px-4 sm:px-6 py-2 sm:py-3 rounded-[5px]"
            onClick={handleScheduleCall}
          >
            schedule a call
          </Button> 
        </div>
      </div>

      {/* Scroll down indicator remains at the bottom */}
      <div className="hidden sm:hidden absolute left-1/2 bottom-4 sm:bottom-12 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
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