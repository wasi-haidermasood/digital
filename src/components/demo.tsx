'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Lenis from '@studio-freight/lenis';
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { motion } from 'framer-motion';

// ✅ Import images from /src/assets/
import googleImg from '@/assets/google-search-console.jpg';
import orderSalesImg from '@/assets/Order-Sales-Report.jpg';
import dashboardImg from '@/assets/dashborad.jpg';
import facebookImg from '@/assets/facebook.jpg';
import shopifyImg from '@/assets/shopify.jpg';
import smartsheetImg from '@/assets/smartsheet.jpg';

export default function SuccessStories() {
  // Smooth scroll
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // ✅ Images imported above — Vite will optimize automatically
  const images = [
    { src: googleImg, alt: 'Google Search Console Analytics Dashboard' },
    { src: orderSalesImg, alt: 'E-commerce Sales Performance Dashboard' },
    { src: dashboardImg, alt: 'Financial Management Dashboard' },
    { src: facebookImg, alt: 'Facebook Ads Campaign Management' },
    { src: shopifyImg, alt: 'Shopify Sales Analytics Dashboard' },
    { src: smartsheetImg, alt: 'Professional Service Reporting Dashboard' },
    { src: orderSalesImg, alt: 'Sales Performance Metrics' },
  ];

  return (
    <main className="min-h-screen w-full">
      <div className="relative flex h-[50vh] items-center justify-center">
        {/* Radial spotlight */}
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
            'bg-[radial-gradient(ellipse_at_center,var(--color-foreground)/.1,transparent_50%)]',
            'blur-[30px]',
          )}
        />

        {/* Heading and text */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Real Results,
            <span className="block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Real Success
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-600 leading-relaxed"
          >
            See how our data-driven strategies have transformed businesses and delivered measurable growth across all digital channels with proven ROI and client success stories.
          </motion.p>
        </div>
      </div>

      {/* ✅ Pass imported images to ZoomParallax */}
      <ZoomParallax images={images} />

      <div className="h-[50vh]" />
    </main>
  );
}
