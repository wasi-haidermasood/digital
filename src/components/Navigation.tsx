import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, Home, User, Phone, Folder, BarChart } from "lucide-react";
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
      
      // If we're at the very top of the page, set home as active
      if (window.scrollY < 100) {
        setActiveItem("#home");
        return;
      }

      const currentSection = sections.find((section) => {
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
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setActiveItem(href);
  };

  const dockItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Services", href: "#services", icon: BarChart },
    { name: "Portfolio", href: "#portfolio", icon: Folder },
    { name: "About", href: "#about", icon: User },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Wrapper */}
      <motion.div
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        animate={{
          width: isScrolled ? "80%" : "100%",
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <motion.header
          className={`transition-all duration-300 backdrop-blur-lg border border-gray-200/60 rounded-2xl ${
            isScrolled ? "bg-white/95 shadow-lg" : "bg-white/90"
          } w-full`}
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
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="h-4 w-4 text-gray-900" />
                </motion.div>
                <span className="text-lg font-semibold text-gray-900">Digital Social Dreams</span>
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
                      <span className="relative z-10">{item.name}</span>
                      {activeItem === item.href && (
                        <motion.div
                          className="absolute bottom-0 left-1/2 w-1 h-1 bg-gray-900 rounded-full transform -translate-x-1/2"
                          layoutId="activeIndicator"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
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
                    className="relative bg-black text-white hover:bg-gray-800 border-0 shadow-sm text-xs h-8 px-3 rounded-lg"
                    size="sm"
                  >
                    <Rocket className="h-3 w-3 mr-1.5" />
                    Get Started
                  </Button>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="p-2 rounded-md border border-gray-300 hover:bg-gray-100"
                >
                  {menuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="md:hidden border-t border-gray-200 bg-white px-6 pb-4"
              >
                {dockItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.href);
                      setMenuOpen(false);
                    }}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      activeItem === item.href
                        ? "text-gray-900 font-medium"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}

                <Button
                  onClick={() => {
                    scrollToSection("#contact");
                    setMenuOpen(false);
                  }}
                  className="mt-3 w-full bg-black text-white text-sm"
                >
                  <Rocket className="h-3 w-3 mr-1.5" />
                  Get Started
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </motion.div>
    </>
  );
};

export default Navigation;