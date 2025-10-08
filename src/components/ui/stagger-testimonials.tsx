// components/ui/stagger-testimonials.tsx
"use client"

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SQRT_5000 = Math.sqrt(5000);

// Convert your testimonials data to match the template structure
const testimonialsData = [
  {
    tempId: 0,
    testimonial: "DigitalSocialDreamss transformed our online presence completely. Our website traffic increased by 400% in just 6 months, and our lead quality has never been better.",
    by: "Sarah Johnson, CEO at TechStart Solutions",
    imgSrc: "https://i.pravatar.cc/150?img=1",
    results: "400% Traffic Increase",
    rating: 5
  },
  {
    tempId: 1,
    testimonial: "The ROI we've seen from our digital marketing campaigns has been incredible. From SEO to PPC, every strategy they implemented exceeded our expectations.",
    by: "Michael Chen, Founder at GrowthLab",
    imgSrc: "https://i.pravatar.cc/150?img=2",
    results: "200% Revenue Growth",
    rating: 5
  },
  {
    tempId: 2,
    testimonial: "Working with Wasi Marketing has been a game-changer for our e-commerce business. Their data-driven approach helped us achieve our highest conversion rates ever.",
    by: "Emily Rodriguez, Marketing Director at RetailPlus",
    imgSrc: "https://i.pravatar.cc/150?img=3",
    results: "85% Conversion Rate",
    rating: 5
  },
  {
    tempId: 3,
    testimonial: "As a local business owner, I was skeptical about digital marketing. But their local SEO strategies brought us to #1 on Google, and our membership has tripled.",
    by: "David Thompson, Owner at Local Fitness Studio",
    imgSrc: "https://i.pravatar.cc/150?img=4",
    results: "#1 Local Rankings",
    rating: 5
  },
  {
    tempId: 4,
    testimonial: "The team at Wasi Marketing delivered exceptional results that surpassed all our expectations. Their strategic approach to digital marketing is truly remarkable.",
    by: "Jennifer Martinez, CMO at InnovateCo",
    imgSrc: "https://i.pravatar.cc/150?img=5",
    results: "300% ROI Achieved",
    rating: 5
  },
  {
    tempId: 5,
    testimonial: "From day one, Wasi Marketing demonstrated deep expertise and commitment to our success. The growth we've experienced is nothing short of phenomenal.",
    by: "Robert Williams, Director at ScaleFast",
    imgSrc: "https://i.pravatar.cc/150?img=6",
    results: "5x Lead Generation",
    rating: 5
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonialsData[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 transition-all duration-500 ease-in-out rounded-lg",
        isCenter 
          ? "z-10 bg-gradient-to-br from-gray-900 to-gray-700 text-white border-gray-600 shadow-2xl" 
          : "z-0 bg-white/80 backdrop-blur-sm text-gray-900 border-gray-200/60 hover:border-gray-400 shadow-lg"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 32px rgba(0, 0, 0, 0.3)" : "0px 4px 20px rgba(0, 0, 0, 0.1)"
      }}
    >
      {/* Avatar */}
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-12 w-12 ring-2 ring-gray-300">
          <AvatarImage src={testimonial.imgSrc} alt={testimonial.by.split(',')[0]} />
          <AvatarFallback className="bg-gray-600 text-white">
            {testimonial.by.split(',')[0].split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className={cn(
            "font-semibold text-sm",
            isCenter ? "text-white" : "text-gray-900"
          )}>
            {testimonial.by.split(',')[0]}
          </div>
          <div className={cn(
            "text-xs",
            isCenter ? "text-gray-300" : "text-gray-600"
          )}>
            {testimonial.by.split(',')[1]}
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              isCenter ? "text-yellow-300 fill-yellow-300" : "text-yellow-400 fill-yellow-400"
            )}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <h3 className={cn(
        "text-sm leading-relaxed mb-4 italic",
        isCenter ? "text-gray-100" : "text-gray-700"
      )}>
        "{testimonial.testimonial}"
      </h3>

      {/* Results Badge */}
      <div className={cn(
        "text-center py-2 px-3 rounded-lg text-xs font-semibold mt-auto",
        isCenter 
          ? "bg-white/20 text-white border border-white/30" 
          : "bg-gradient-to-r from-gray-900/10 to-gray-700/10 text-gray-900 border border-gray-200"
      )}>
        {testimonial.results}
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonialsData);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 380 : 320);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center transition-all duration-300 rounded-lg",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900",
            "shadow-lg hover:shadow-xl"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center transition-all duration-300 rounded-lg",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900",
            "shadow-lg hover:shadow-xl"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};