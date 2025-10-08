// components/ui/retro-team.tsx
"use client";

import React, {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ArrowLeft, ArrowRight, Quote, X, Target, Lightbulb, Heart, Shield, Zap, Users} from "lucide-react";
import {cn} from "@/lib/utils";

// ===== Types and Interfaces =====
export interface iTeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string;
  description: string;
  profileImage: string;
  icon?: React.ComponentType<any>;
}

interface iCarouselProps {
  items: React.ReactElement<{
    teamMember: iTeamMember;
    index: number;
    layout?: boolean;
    onCardClose: () => void;
  }>[];
  initialScroll?: number;
}

// ===== Custom Hooks =====
const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  onOutsideClick: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      onOutsideClick();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

// ===== Components =====
const Carousel = ({items, initialScroll = 0}: iCarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const {scrollLeft, scrollWidth, clientWidth} = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({left: -300, behavior: "smooth"});
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({left: 300, behavior: "smooth"});
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  return (
    <div className="relative w-full mt-10">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-5"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div
          className={cn(
            "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l from-gray-50 to-transparent",
          )}
        />
        <div
          className={cn(
            "flex flex-row justify-start gap-4 pl-3",
            "max-w-5xl mx-auto",
          )}
        >
          {items.map((item, index) => {
            return (
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                }}
                key={`card-${index}`}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              >
                {React.cloneElement(item, {
                  onCardClose: () => {
                    return handleCardClose(index);
                  },
                })}
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center disabled:opacity-50 hover:bg-gray-800 transition-colors duration-200"
          onClick={handleScrollLeft}
          disabled={!canScrollLeft}
        >
          <ArrowLeft className="h-6 w-6 text-white" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center disabled:opacity-50 hover:bg-gray-800 transition-colors duration-200"
          onClick={handleScrollRight}
          disabled={!canScrollRight}
        >
          <ArrowRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

const TeamCard = ({
  teamMember,
  index,
  layout = false,
  onCardClose = () => {},
  backgroundImage = "https://images.unsplash.com/photo-1686806372726-388d03ff49c8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}: {
  teamMember: iTeamMember;
  index: number;
  layout?: boolean;
  onCardClose?: () => void;
  backgroundImage?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => {
    return setIsExpanded(true);
  };
  const handleCollapse = () => {
    setIsExpanded(false);
    onCardClose();
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCollapse();
      }
    };

    if (isExpanded) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.dataset.scrollY = scrollY.toString();
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo({top: scrollY, behavior: "instant"});
    }

    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      return window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isExpanded]);

  useOutsideClick(containerRef, handleCollapse);

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 h-screen overflow-hidden z-50">
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              ref={containerRef}
              layoutId={layout ? `card-${teamMember.name}` : undefined}
              className="max-w-5xl mx-auto bg-gradient-to-b from-gray-50 to-white h-full z-[60] p-4 md:p-10 rounded-3xl relative md:mt-10 overflow-y-auto"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto rounded-full flex items-center justify-center bg-gray-900 z-50"
                onClick={handleCollapse}
              >
                <X className="h-6 w-6 text-white absolute" />
              </button>
              
              {/* Expanded View Content */}
              <div className="px-0 md:px-20">
                <motion.div
                  layoutId={layout ? `category-${teamMember.name}` : undefined}
                  className="flex items-center gap-3 mb-4"
                >
                  {teamMember.icon && <teamMember.icon className="h-6 w-6 text-gray-700" />}
                  <span className="text-gray-600 text-lg font-medium underline underline-offset-8">
                    {teamMember.role}
                  </span>
                </motion.div>
                
                <motion.h3
                  layoutId={layout ? `title-${teamMember.name}` : undefined}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6"
                >
                  {teamMember.name}
                </motion.h3>

                <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 py-2 rounded-lg inline-block mb-6">
                  <span className="text-sm font-semibold">{teamMember.expertise}</span>
                </div>

                <div className="text-gray-700 text-xl leading-relaxed mb-8">
                  <Quote className="h-8 w-8 text-gray-400 mb-4" />
                  {teamMember.description}
                </div>

                {/* Additional team member details */}
                <div className="grid md:grid-cols-2 gap-6 text-gray-600">
                  <div>
                    <h4 className="font-semibold mb-2">Areas of Expertise</h4>
                    <p>Digital Strategy • Growth Marketing • Team Leadership</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Experience</h4>
                    <p>5+ Years in Digital Marketing</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <motion.button
        layoutId={layout ? `card-${teamMember.name}` : undefined}
        onClick={handleExpand}
        className="focus:outline-none"
        whileHover={{
          rotateX: 2,
          rotateY: 2,
          rotate: 3,
          scale: 1.02,
          transition: {duration: 0.3, ease: "easeOut"},
        }}
      >
        <div
          className={`${index % 2 === 0 ? "rotate-0" : "-rotate-0"} rounded-3xl bg-gradient-to-b from-gray-50 to-white h-[500px] md:h-[550px] w-80 md:w-96 overflow-hidden flex flex-col items-center justify-center relative z-10 shadow-lg border border-gray-200`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{backgroundImage: `url(${backgroundImage})`}}
          />
          
          {/* Team Member Profile Image */}
          <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border-4 border-gray-300 aspect-[1/1] flex-none relative shadow-lg mb-4">
            <img
              className={cn(
                "w-full h-full object-cover transition duration-300",
                imageLoaded ? "blur-0" : "blur-sm"
              )}
              src={teamMember.profileImage}
              alt={teamMember.name}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          
          {/* Role Icon */}
          {teamMember.icon && (
            <div className="w-12 h-12 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full flex items-center justify-center mt-2">
              <teamMember.icon className="h-6 w-6 text-white" />
            </div>
          )}

          <motion.h3
            layoutId={layout ? `title-${teamMember.name}` : undefined}
            className="text-gray-900 text-2xl font-bold text-center mt-4 px-4"
          >
            {teamMember.name}
          </motion.h3>

          <motion.p
            layoutId={layout ? `category-${teamMember.name}` : undefined}
            className="text-gray-600 text-lg font-medium text-center mt-2 px-4"
          >
            {teamMember.role}
          </motion.p>

          <motion.p
            layoutId={layout ? `category-${teamMember.name}` : undefined}
            className="text-gray-700 text-base text-center mt-3 px-6 leading-relaxed"
          >
            {teamMember.description.length > 120
              ? `${teamMember.description.slice(0, 120)}...`
              : teamMember.description}
          </motion.p>

          <motion.div
            className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium mt-4"
          >
            {teamMember.expertise}
          </motion.div>
        </div>
      </motion.button>
    </>
  );
};

// Export the components
export {Carousel, TeamCard };