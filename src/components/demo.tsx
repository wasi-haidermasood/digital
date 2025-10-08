'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Lenis from '@studio-freight/lenis'
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { motion } from 'framer-motion';

export default function SuccessStories() {

	React.useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])


	const images = [
		{
			src: 'public/google search console.jpg',
			alt: 'Google Search Console Analytics Dashboard',
		},
		{
			src: 'public/Order Sales Report.jpg',
			alt: 'E-commerce Sales Performance Dashboard',
		},
		{
			src: 'public/Dashboard ui_ux _ Finance Management _ Дашборд - Kristi Kamlykova.jpg',
			alt: 'Financial Management Dashboard',
		},
		{
			src: 'public/I will manage and setup your facebook ads campaign efficiently.jpg',
			alt: 'Facebook Ads Campaign Management',
		},
		{
			src: 'public/Shopify sales Dashboard.jpg',
			alt: 'Shopify Sales Analytics Dashboard',
		},
		{
			src: 'public/SmartSheet Dashboard & Reporting Template - Professional Service + Templates.jpg',
			alt: 'Professional Service Reporting Dashboard',
		},
		{
			src: 'public/Order Sales Report.jpg',
			alt: 'Sales Performance Metrics',
		},
	];

	return (
		<main className="min-h-screen w-full">
			<div className="relative flex h-[50vh] items-center justify-center">
				{/* Radial spotlight */}
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
				
				{/* Heading and Text Only */}
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
						See how our data-driven strategies have transformed businesses and delivered 
						measurable growth across all digital channels with proven ROI and client success stories.
					</motion.p>
				</div>
			</div>
			
			<ZoomParallax images={images} />
			<div className="h-[50vh]"/>
		</main>
	);
}