import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { count: clientsCount, ref: clientsRef } = useCountUp({ end: 500 });
  const { count: roiCount, ref: roiRef } = useCountUp({ end: 300 });
  const { count: yearsCount, ref: yearsRef } = useCountUp({ end: 5 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Intersection Observer for stats animation
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  // Animation variants with proper TypeScript types
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 100 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
        duration: 1,
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 10,
        stiffness: 100,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring" as const,
        damping: 10,
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const statsVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  // Fixed floating animation with proper easing
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  // Alternative floating animations with proper easing
  const floatingAnimation2 = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 1,
    },
  };

  const floatingAnimation3 = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 2,
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 pb-10" // Increased top padding, added bottom padding
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-10">
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/70 to-black/90 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Floating particles with fixed animations */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-40"
          animate={floatingAnimation2}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full opacity-30"
          animate={floatingAnimation3}
        />

        {/* Video element */}
        <motion.video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          poster="/fallback-hero-image.jpg"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <source src="public/anime vide.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        {/* Loading state */}
        {!isVideoLoaded && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="text-white flex items-center gap-3"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" as const
              }}
            >
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Loading...
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Content - Centered with better spacing */}
      <motion.div 
        className="relative z-20 text-center text-white mx-auto px-6 max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading with adjusted spacing */}
        <motion.div 
          className="mb-6 md:mb-8" // Reduced margin
        >
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight" // Smaller text on mobile
            variants={titleVariants}
          >
            Transform Your
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={titleVariants}
          >
            Online Presence
          </motion.h2>
        </motion.div>

        {/* Description with adjusted spacing */}
        <motion.div 
          className="mb-8 md:mb-10 max-w-2xl mx-auto" // Reduced margin
          variants={itemVariants}
        >
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed" // Smaller text on mobile
          >
            DigitalSocialDreamss drives measurable growth through{" "}
            <motion.span 
              className="font-semibold text-blue-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              cutting-edge strategies
            </motion.span>
            , SEO optimization, and{" "}
            <motion.span 
              className="font-semibold text-purple-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              innovative web solutions
            </motion.span>{" "}
            that turn visitors into loyal customers.
          </motion.p>
        </motion.div>

        {/* CTA Buttons with adjusted spacing and sizing */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16" // Reduced margin
          variants={containerVariants}
        >
          <motion.div variants={buttonVariants}>
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl backdrop-blur-sm relative overflow-hidden group text-sm md:text-base" // Smaller on mobile
            >
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
              <span className="relative z-10 flex items-center">
                Start Growing Today
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </span>
            </Button>
          </motion.div>

          <motion.div variants={buttonVariants}>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#portfolio")}
              className="px-6 md:px-8 py-2.5 md:py-3 rounded-full border-2 border-white text-white bg-transparent hover:bg-white/10 transition-all duration-300 font-semibold backdrop-blur-sm relative overflow-hidden group text-sm md:text-base" // Smaller on mobile
            >
              <motion.span 
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
              <span className="relative z-10 flex items-center">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
                >
                  <Play className="mr-2 h-4 w-4" />
                </motion.span>
                View Our Work
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Section with adjusted spacing */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 md:pt-16 border-t border-white/20 max-w-3xl mx-auto backdrop-blur-sm bg-white/5 rounded-2xl p-4 md:p-6 mt-8" // Reduced padding and margins
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {[
            { count: clientsCount, label: "Clients Served", ref: clientsRef },
            { count: roiCount, label: "Avg ROI Increase", ref: roiRef },
            { count: "24/7", label: "Support Available" },
            { count: yearsCount, label: "Years Experience", ref: yearsRef },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center transform hover:scale-105 transition duration-300 group"
              variants={statsVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring" as const, stiffness: 300 }
              }}
            >
              <motion.div 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" // Smaller text
                ref={stat.ref}
                whileHover={{ scale: 1.1 }}
              >
                {stat.count}{index === 1 ? '%' : index !== 2 ? '+' : ''}
              </motion.div>
              <motion.div 
                className="text-gray-300 text-xs md:text-sm" // Smaller text
                whileHover={{ color: "#ffffff" }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;