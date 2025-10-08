"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  // Scroll function from your old hero - EXACT SAME FUNCTION
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div
      ref={ref}
      className="h-[350vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-black" // Changed to black
    >
      <Header scrollToSection={scrollToSection} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="z-10"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Update Header component to accept scroll function
export const Header = ({ scrollToSection }: { scrollToSection: (href: string) => void }) => {
  // Button animation variants from your old hero - EXACT SAME ANIMATIONS
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

  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-20">
      <h1 className="text-2xl md:text-7xl font-bold text-white"> {/* Changed to white */}
        The Ultimate <br /> Development Agency
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-300"> {/* Changed to gray-300 */}
        We turn clicks into customers with next-gen digital marketing.
Let's build your brand, boost your traffic, and grow your business online.We're a team of creative strategists passionate about driving growth.
Using data, design, and innovation, we craft digital experiences that attract, engage, and convert.
      </p>
      
      {/* Buttons Section with EXACT SAME functionality as old hero */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 mt-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {/* Contact Us Button - Updated colors for dark background */}
        <motion.div variants={buttonVariants}>
          <motion.button 
            onClick={() => scrollToSection("#contact")}
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group" // Changed to white bg, black text
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-gray-300 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" // Updated gradient
              whileHover={{ scale: 1.1 }}
            />
            <span className="relative z-10 flex items-center">
              Contact Us
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
                className="ml-2"
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Learn More Button - Updated colors for dark background */}
        <motion.div variants={buttonVariants}>
          <motion.button 
            onClick={() => scrollToSection("#services")}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group" // Changed to white border, white text
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span 
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            />
            <span className="relative z-10 flex items-center">
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
                className="mr-2"
              >
                ↓
              </motion.span>
              Learn More
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl rounded-lg overflow-hidden"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={product.thumbnail}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-lg"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-semibold text-lg">
        {product.title}
      </h2>
    </motion.div>
  );
};