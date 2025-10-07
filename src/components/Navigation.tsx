import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, Home, Briefcase, User, Phone, Folder, BarChart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("#home");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleActiveSection = () => {
      const sections = ["#home", "#services", "#portfolio", "#about", "#contact"];
      const currentSection = sections.find(section => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveItem(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleActiveSection);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveItem(href);
  };

  // Dock items for the compact view - removed Get Started, different icons
  const dockItems = [
    { 
      name: "Home", 
      href: "#home",
      icon: Home
    },
    { 
      name: "Services", 
      href: "#services",
      icon: BarChart
    },
    { 
      name: "Portfolio", 
      href: "#portfolio",
      icon: Folder
    },
    { 
      name: "About", 
      href: "#about",
      icon: User
    },
    { 
      name: "Contact", 
      href: "#contact",
      icon: Phone
    }
  ];

  return (
    <>
      {/* Full Navigation - Shows when not scrolled */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 w-full z-50 flex justify-center px-4"
          >
            <motion.header
              className="transition-all duration-300 w-full max-w-6xl bg-white/90 backdrop-blur-lg border border-gray-200/60 rounded-2xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <nav className="px-6 py-3">
                <div className="flex items-center justify-between">
                  
                  {/* Logo */}
                  <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Sparkles className="h-4 w-4 text-gray-900" />
                    </motion.div>
                    <span className="text-lg font-semibold text-gray-900">
                      Wasi
                    </span>
                  </motion.div>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center space-x-1">
                    {dockItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 group ${
                            activeItem === item.href
                              ? "text-gray-900 bg-gray-100/80 border border-gray-300/50"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                          }`}
                        >
                          <span className="relative z-10">
                            {item.name}
                          </span>

                          {activeItem === item.href && (
                            <motion.div
                              className="absolute bottom-0 left-1/2 w-1 h-1 bg-gray-900 rounded-full transform -translate-x-1/2"
                              layoutId="activeIndicator"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                        </button>
                      </motion.div>
                    ))}
                    
                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Button
                        onClick={() => scrollToSection("#contact")}
                        className="relative bg-gray-900 text-white hover:bg-gray-800 border-0 shadow-sm text-xs h-8 px-3 rounded-lg"
                        size="sm"
                      >
                        <Rocket className="h-3 w-3 mr-1.5" />
                        Get Started
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </nav>
            </motion.header>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slim Icon-Only Top Left Dock - Shows when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed left-4 top-4 z-40" // z-40 to ensure it's below modals but above content
          >
            <TooltipProvider delayDuration={100}>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col gap-1 p-2 rounded-xl border bg-white/95 backdrop-blur-xl shadow-lg"
              >
                {/* Compact Logo */}
                <motion.div
                  className="flex items-center justify-center mb-1 p-1"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="h-3 w-3 text-gray-900" />
                  </motion.div>
                </motion.div>

                {/* Divider */}
                <div className="w-6 h-px bg-gray-200 mx-auto mb-1" />

                {/* Navigation Items - Icon Only */}
                {dockItems.map((item, index) => {
                  const isActive = activeItem === item.href;
                  const isHovered = hoveredItem === index;
                  const IconComponent = item.icon;

                  return (
                    <Tooltip key={item.name}>
                      <TooltipTrigger asChild>
                        <motion.div
                          onMouseEnter={() => setHoveredItem(index)}
                          onMouseLeave={() => setHoveredItem(null)}
                          animate={{
                            scale: isHovered ? 1.15 : 1,
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          className="relative flex justify-center"
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className={`rounded-lg relative transition-all duration-200 h-7 w-7 ${
                              isHovered && "shadow-md shadow-blue-500/15"
                            } ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:text-gray-900"}`}
                            onClick={() => scrollToSection(item.href)}
                          >
                            <IconComponent className="h-3 w-3" />
                            
                            {/* Glowing ring effect */}
                            {isHovered && (
                              <motion.span
                                className="absolute inset-0 rounded-lg border border-blue-400/30"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              />
                            )}
                          </Button>

                          {/* Active indicator - subtle dot */}
                          {isActive && (
                            <motion.div
                              className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-600"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="text-xs">
                        {item.name}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </motion.div>
            </TooltipProvider>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;