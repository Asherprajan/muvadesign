'use client';

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="px-4 sm:px-8 py-8">
      <div className="w-full h-[1px] bg-black mb-8"></div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8">
          <span className="text-sm sm:text-[15px] font-light leading-[16px] text-black">+91 97192 22803</span>
          <span className="text-sm sm:text-[15px] font-light leading-[16px] text-black">contact@muvavisuals.com</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Image 
            src="/images/img_basilfacebooksolid.svg" 
            alt="Facebook" 
            width={13} 
            height={13}
          />
          <Image 
            src="/images/img_circumlinkedin.svg" 
            alt="LinkedIn" 
            width={13} 
            height={13}
          />
          <Image 
            src="/images/img_iconoirinstagram.svg" 
            alt="Instagram" 
            width={13} 
            height={13}
          />
        </div>
      </div>
      
      <div className="mt-8 sm:mt-8">
        <h2 className="text-[96px] sm:text-[285px] font-extrabold leading-[1] text-black">muva</h2>
        <Image 
          src="/images/logo.png" 
          alt="Logo accent large" 
          width={35} 
          height={42} 
          className="ml-2 sm:ml-4"
        />
      </div>
    </footer>
  );
};

export default Footer;