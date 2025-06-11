'use client';
import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/HeroSection';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { motion, useScroll, useTransform, useViewportScroll, useSpring } from "framer-motion";
import ResizeObserver from "resize-observer-polyfill";

import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Interactive Walkthroughs (Unreal)',
    desc: 'Real-time navigable environments powered by Unreal Engine — perfect for sales or design validation.',
    icon: (
      <svg
        width="56"
        height="46"
        viewBox="0 0 56 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33 11L48 23L33 35L18 23L33 11Z"
          stroke="#F15A24"
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeDasharray="3 3"
        />
        <path
          d="M28 3L43 15L28 27L13 15L28 3Z"
          stroke="#F15A24"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M22 15H34M34 15L30 11M34 15L30 19"
          stroke="#F15A24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    className: 'lg:col-span-1',
  },
  {
    title: 'Architectural Stills',
    desc: 'High-resolution images that capture the essence of architectural design, focusing on light, material, and form.',
    icon: (
      <svg
        width="60"
        height="50"
        viewBox="0 0 60 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="10" y="10" width="40" height="30" rx="2" stroke="#F15A24" strokeWidth="2" />
        <circle cx="20" cy="20" r="3" stroke="#F15A24" strokeWidth="2" />
        <path
          d="M10 30L25 25L40 35L50 30"
          stroke="#F15A24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    className: 'lg:col-span-1',
  },
  {
    title: 'Interactive Walkthroughs (Unreal)',
    desc: 'Real-time navigable environments powered by Unreal Engine — perfect for sales or design validation.',
    icon: (
      <svg
        width="60"
        height="50"
        viewBox="0 0 60 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 20H45L38 15"
          stroke="#F15A24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 30H50L43 25"
          stroke="#F15A24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.7"
        />
      </svg>
    ),
    className: 'lg:col-span-1',
  },
  {
    title: 'Cinematic Animations',
    desc: 'Story-driven motion content that captures mood, light, and movement in architectural space.',
    icon: (
      <svg
        width="60"
        height="50"
        viewBox="0 0 60 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 5L55 25L30 45L5 25L30 5Z"
          stroke="#F15A24"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <path d="M39 25L27 18V32L39 25Z" stroke="#F15A24" strokeWidth="2" strokeLinejoin="round" />
        <path d="M28 25H20" stroke="#F15A24" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    className: 'lg:col-span-1',
  },
  {
    title: 'Branding & Marketing Assets',
    desc: 'Curated visuals and short form content to support your pitch decks, websites, and project marketing.',
    icon: (
      <svg
        width="60"
        height="50"
        viewBox="0 0 60 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 40H50" stroke="#F15A24" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M15 35L25 25L35 32L45 20"
          stroke="#F15A24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 30L25 20L35 27L45 15"
          stroke="#F15A24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.6"
        />
      </svg>
    ),
    className: 'lg:col-span-1',
  },
];

const projects = [
  {
    name: "Micasa Executive Suite",
    type: "Luxury Private Office",
    location: "Abu Dhabi, UAE",
    image: "/images/Micasa-Executive-Suite.jpg"
  },
  {
    name: "Micasa Executive Suite",
    type: "Luxury Private Office",
    location: "Abu Dhabi, UAE",
    image: "/images/Micasa-Executive-Suite.jpg"
  },
  {
    name: "Pineview Residence",
    type: "Modern Living Room – Residential Villa",
    location: "Whistler, Canada",
    image: "/images/Pineview-Residence.jpg"
  },
  {
    name: "Micasa Executive Suite",
    type: "Luxury Private Office",
    location: "Abu Dhabi, UAE",
    image: "/images/Micasa-Executive-Suite.jpg"
  },  
  {
    name: "Earthen Calm Master Bedroom",
    type: "Rustic Minimalism Interior Design",
    location: "Haldwani, Uttarakhand",
    image: "/images/Earthen-Calm.jpg"
  },
  {
    name: "Golden Hour Lounge",
    type: "Luxury Apartment Living Room",
    location: "New Delhi, India",
    image: "/images/Golden-Hour-Lounge.jpg"
  },
  {
    name: "The White Manor",
    type: "Colonial Revival – Private Residence",
    location: "New Delhi, India",
    image: "/images/The-White-Manor.jpg"
  },
  {
    name: "Legacy Heights",
    type: "Premium Mixed-Use Residential Complex",
    location: "Tashkent, Uzbekistan",
    image: "/images/Legacy-Heights.jpg"
  },
  {
    name: "Resideal Property",
    type: "Residential Home Office",
    location: "Kochi, India",
    image: "/images/HelloWorld.jpg"
  },
  {
    name: "Dubai Hills",
    type: "Residential Dining Space",
    location: "Dubai, UAE",
    image: "/images/Dubai-Hills.jpg"
  },
  {
    name: "Alibaug Luxury Villa",
    type: "Luxury Residential Villa",
    location: "Alibaug, Maharashtra, India",
    image: "/images/Alibaug-Luxury-Villa.jpg"
  },
  {
    name: "Limestone House",
    type: "High-End Residential Interior",
    location: "DIFC, Dubai, UAE",
    image: "/images/Limestone-House.jpg"
  },
  {
    name: "Private Residence",
    type: "Private Entertainment Space / Home Theater",
    location: "Mumbai, India",
    image: "/images/Private-Residence.jpg"
  },
  {
    name: "Grid Point Residences",
    type: "Mixed-Use Residential Development",
    location: "Toronto, Ontario, Canada",
    image: "/images/Grid-Point-Residences.jpg"
  },
  {
    name: "Private Residence",
    type: "Contemporary Luxury Villa",
    location: "Gurgaon, Haryana, India",
    image: "/images/Private-Residence1.jpg"
  },
  {
    name: "Skyline Plaza",
    type: "Mixed-Use High-Rise Development",
    location: "Abu Dhabi, UAE",
    image: "/images/Skyline-Plaza.jpg"
  }
  
];

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      setScrollRange(scrollRef.current.scrollWidth);
    }
  }, [scrollRef]);

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    if (!ghostRef.current) return;
    
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useViewportScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [0, -scrollRange + viewportW, -scrollRange + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 0.9, 1],
    [1, 1, 0, 0]
  );

  return (
    <section className="relative min-h-screen">
      {/* Fixed Header Container */}
      <motion.div 
        className="absolute top-0 left-0 right-0 z-50 bg-muva-cream"
        style={{ opacity: headerOpacity }}
      >
        <div className="px-4 sm:px-8 py-16">
          <h2 className="text-[36px] sm:text-[57px] font-light leading-[1.1] text-black">
            projects
          </h2>
        </div>
      </motion.div>

      {/* Spacer for Fixed Header */}
      <div className="h-[140px]" />

      {/* Projects Container */}
      <div className="relative z-10">
        <div className="sticky top-[140px] overflow-hidden">
          <motion.div
            ref={scrollRef}
            style={{ x: spring }}
            className="flex gap-6 min-w-max px-[5vw] py-8"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="group relative w-[min(500px,85vw)] h-[450px] rounded-[12px] overflow-hidden cursor-pointer flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.1 * index
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.image || ''}
                    alt={project.name || ''}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <motion.span 
                    className="text-muva-beige text-sm font-light mb-2 block"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (0.1 * index) }}
                  >
                    {project.type}
                  </motion.span>
                  <motion.h3 
                    className="text-white text-xl font-light mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (0.1 * index) }}
                  >
                    {project.name}
                  </motion.h3>
                  <motion.p 
                    className="text-white/80 text-sm font-light"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (0.1 * index) }}
                  >
                    {project.location}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div 
          ref={ghostRef} 
          style={{ height: Math.max(scrollRange * 1.5, 2000) }} 
          className="ghost" 
        />
      </div>
    </section>
  );
};

export default function HomePage() {
  const handleScheduleCall = () => {
    window.open('https://wa.me/+919719222803', '_blank');
  };

  return (
    <div className="min-h-screen bg-muva-cream font-telegraf">
      <Header />
      <HeroSection />

      {/* Who We Are Section */}
      <section className="px-4 sm:px-8 py-16 sm:py-32">
        <div className="-mt-40">
          <h2 className="text-[48px] sm:text-[96px] font-light leading-[1] tracking-[-0.02em] text-black">
            who we are
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-24 mb-16 sm:mb-24">
          <div style={{ marginLeft: '10px' }}>
              <p className="text-base sm:text-xl font-light leading-relaxed text-black/75 mb-4">
              Muva crafts cinematic narratives for unbuilt architecture.
            </p>
            <p className="text-base sm:text-xl font-light leading-relaxed text-black/75">
              Founded by architects and visual storytellers, we create immersive experiences that communicate space.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          <div className="rounded-[20px] h-[400px] relative group cursor-pointer transition-all hover:bg-muva-orange">
            <video autoPlay loop muted className="w-full h-full object-cover rounded-[20px]">
              <source src="/videos/v1.mp4" type="video/mp4" />
            </video>
            <p className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-base sm:text-xl font-light text-white shadow-lg">
              Empathy in Design
            </p>
          </div>
          <div className="rounded-[20px] h-[300px] relative group cursor-pointer transition-all hover:bg-muva-orange">
            <video autoPlay loop muted className="w-full h-full object-cover rounded-[20px]">
              <source src="/videos/v2.mp4" type="video/mp4" />
            </video>
            <p className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-base sm:text-xl font-light text-white shadow-lg">
              Detail is Everything
            </p>
          </div>
          <div className="rounded-[20px] h-[450px] relative group cursor-pointer transition-all hover:bg-muva-orange">
            <video autoPlay loop muted className="w-full h-full object-cover rounded-[20px]">
              <source src="/videos/v3.mp4" type="video/mp4" />
            </video>
            <p className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-base sm:text-xl font-light text-white shadow-lg">
              Visuals that Persuade
            </p>
          </div>
          <div className="rounded-[20px] h-[350px] relative group cursor-pointer transition-all hover:bg-muva-orange">
            <video autoPlay loop muted className="w-full h-full object-cover rounded-[20px]">
              <source src="/videos/v4.mp4" type="video/mp4" />
            </video>
            <p className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-base sm:text-xl font-light text-white shadow-lg">
              Architecture is Storytelling
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 sm:px-8 py-16 sm:py-32 bg-[#f9f7f3]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 max-w-md mb-12 lg:mb-0">
            <h2 className="text-[36px] sm:text-[57px] font-light leading-[1] tracking-[-0.02em] text-black mb-8 lg:mb-12">
              services
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl font-light leading-relaxed text-black/75 mb-6">
              Light, shadow, material, and time — we translate architecture into stories. Through
              stills, films, and interactive experiences, we help buildings speak before they're
              built.
            </p>
            <div className="w-1/2 h-0.5 bg-[#FF5C1D] my-6"></div>
            <button 
              onClick={handleScheduleCall}
              className="bg-[#FF5C1D] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-sm font-medium hover:bg-[#e24e11] transition"
            >
              schedule a call
            </button>
          </div>

          {/* Right Column with Cards */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.slice(0, 2).map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-black/10 rounded-[20px] p-4 relative group cursor-pointer transition-colors duration-300 min-h-[240px] flex flex-col justify-between hover:border-[#FF5C1D]"
                >
                  <div>
                    <div className="absolute top-4 right-4 scale-75">{service.icon}</div>
                    <h3 className="text-base font-light text-black/90 w-2/3">{service.title}</h3>
                    <div className="w-12 h-0.5 bg-[#FF5C1D] my-3"></div>
                    <p className="text-sm font-light text-black/75 w-4/5">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(2, 5).map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-black/10 rounded-[20px] sm:rounded-[30px] p-4 sm:p-6 relative group cursor-pointer transition-colors duration-300 min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] flex flex-col justify-between hover:border-[#FF5C1D]"
                >
                  <div>
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 scale-75 sm:scale-100">{service.icon}</div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-light text-black/90 w-2/3">{service.title}</h3>
                    <div className="w-12 sm:w-16 h-0.5 bg-[#FF5C1D] my-3 sm:my-4"></div>
                    <p className="text-sm font-light text-black/75 w-4/5">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectsSection />

      {/* Work With Us Section */}
      <section className="px-4 sm:px-8 py-16">
        <h2 className="text-[36px] sm:text-[57px] font-light leading-[1.1] text-black mb-8">
          Our 4-Step Visualization Process
        </h2>
        <p className="text-base sm:text-lg font-light text-black/75 mb-8">
          At muva, we streamline complexity into a clear, efficient four-step process to bring your designs to life:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8 mb-8">
          <div className="relative">
            <div className="relative">
              <div className="w-[13px] h-[13px] bg-muva-beige rounded-full mb-4 relative z-10"></div>
              <div className="absolute top-[6px] left-[13px] h-[1px] w-[calc(100%-2rem)] bg-muva-beige block sm:hidden"></div>
              <div className="absolute top-[6px] left-[13px] h-[1px] w-[calc(100%+2rem)] bg-muva-beige hidden sm:block"></div>
            </div>
            <h3 className="text-base sm:text-[15px] font-light leading-[1.2] text-black/79 mb-2">
              Concept & Data Collection
            </h3>
            <p className="text-xs sm:text-[12px] font-light leading-[1.2] text-black/79">
              We start by understanding your vision and gathering all necessary project information—drawings, models, materials, and desired mood. This defines the project scope and sets the foundation.
            </p>
          </div>
          <div className="relative">
            <div className="relative">
              <div className="w-[13px] h-[13px] bg-muva-beige rounded-full mb-4 relative z-10"></div>
              <div className="absolute top-[6px] left-[13px] h-[1px] w-[calc(100%-2rem)] bg-muva-beige block sm:hidden"></div>
              <div className="absolute top-[6px] left-[13px] h-[1px] w-[calc(100%+2rem)] bg-muva-beige hidden sm:block"></div>
            </div>
            <h3 className="text-base sm:text-[15px] font-light leading-[1.2] text-black/79 mb-2">
              3D Scene Assembly & Draft Renders
            </h3>
            <p className="text-xs sm:text-[12px] font-light leading-[1.2] text-black/79">
              Our team builds or refines the 3D model, sets up the environment, and establishes initial camera angles. You'll receive draft renders for feedback on composition and overall layout.
            </p>
          </div>
          <div className="relative">
            <div className="relative">
              <div className="w-[13px] h-[13px] bg-muva-beige rounded-full mb-4 relative z-10"></div>
              <div className="absolute top-[6px] left-[13px] h-[1px] w-[calc(100%-2rem)] bg-muva-beige block sm:hidden"></div>
              <div className="absolute top-[6px] left-[13px] h-[1px] w-[calc(100%+2rem)] bg-muva-beige hidden sm:block"></div>
            </div>
            <h3 className="text-base sm:text-[15px] font-light leading-[1.2] text-black/79 mb-2">
              Material, Lighting & Refinement
            </h3>
            <p className="text-xs sm:text-[12px] font-light leading-[1.2] text-black/79">
              We meticulously apply realistic materials, craft the perfect lighting, and integrate detailed assets. We then provide refined renders for your comprehensive review and incorporate your revisions.
            </p>
          </div>
          <div className="relative">
            <div className="relative">
              <div className="w-[13px] h-[13px] bg-muva-beige rounded-full mb-4 relative z-10"></div>
              <div className="absolute top-[6px] left-[13px] h-[1px] w-[calc(100%-2rem)] bg-muva-beige block sm:hidden"></div>
              <div className="absolute top-[6px] left-[13px] h-[1px] w-[calc(100%+2rem)] bg-muva-beige hidden sm:block"></div>
            </div>
            <h3 className="text-base sm:text-[15px] font-light leading-[1.2] text-black/79 mb-2">
              Final Production & Delivery
            </h3>
            <p className="text-xs sm:text-[12px] font-light leading-[1.2] text-black/79">
              After approvals, we proceed with high-resolution rendering and expert post-production to achieve photorealistic results. The final, stunning visuals are then delivered to you in the required formats.
            </p>
          </div>
        </div>
        <Button
          variant="primary"
          className="bg-muva-orange text-white px-4 sm:px-6 py-2 sm:py-3 rounded-[5px]"
          onClick={handleScheduleCall}
        >
          schedule a call
        </Button>
      </section>

      <Footer />
    </div>
  );
}
