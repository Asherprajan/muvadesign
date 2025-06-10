'use client';

import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-8">
      <div className="flex items-center">
        <Image 
          src="/images/muva.png" 
          alt="Logo accent" 
          width={80} 
          height={96} 
          className="ml-1 sm:ml-2 bg-transparent"
        />
      </div>
      
      <div className="relative">
        <div className="w-[30px] h-[30px] sm:w-[37px] sm:h-[39px] bg-muva-orange rounded-[5px]"></div>
        <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-[30px] h-[30px] sm:w-[37px] sm:h-[39px] bg-muva-orange-light rounded-[5px]"></div>
      </div>
    </header>
  );
};

export default Header;