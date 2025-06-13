'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="px-4 sm:px-8 py-8">
      <div className="w-full h-[1px] bg-black mb-8"></div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8">
          <a href="mailto:contact@muvadesign.in" className="text-sm sm:text-[15px] font-light leading-[16px] text-black hover:text-gray-600 transition-colors">contact@muvadesign.in</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="https://www.linkedin.com/company/muva-design/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={13} />
          </Link>
          <Link href="https://www.instagram.com/muva.visuals/" target="_blank" rel="noopener noreferrer">
            <Instagram size={13} />
          </Link>
          <Link href="https://x.com/muvadesign" target="_blank" rel="noopener noreferrer">
            <Twitter size={13} />
          </Link>
        </div>
      </div>
      
      <div className="mt-8 sm:mt-8">
        <Image
          src="/images/muva.png"
          alt="Muva"
          width={200}
          height={71}
          className="w-[120px] sm:w-[200px] h-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;