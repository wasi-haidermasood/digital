import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Users, Zap, ShoppingCart, Code, MessageCircle, Target, CheckCircle, Star, TrendingUp, Play, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Import local images
import seoImage from "@/assets/seo.jpg";
import socialMediaImage from "@/assets/social.jpg";
import metaAdsImage from "@/assets/meta.jpg";
import shopifyImage from "@/assets/shopify1.jpg";
import ecommerceImage from "@/assets/ecommerce.jpg";
import webDevImage from "@/assets/web.jpg";

// Grid Pattern Component for creating background grid
const GridPattern = ({ width, height, x, y, squares, ...props }: any) => {
  const patternId = `pattern-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, index: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
};

// Main Grid component
const Grid = ({ size = 25 }: { size?: number }) => {
  const pattern = [
    [1, 1], [2, 2], [3, 3], [4, 4], [5, 5]
  ];

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl">
      <GridPattern
        width={size}
        height={size}
        x="0"
        y="0"
        squares={pattern}
        className="absolute inset-0 h-full w-full stroke-gray-400/20 fill-gray-400/10"
      />
    </div>
  );
};

// Custom Services Tabs Component
const ServicesTabs = ({ badge, heading, description, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value || "");

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 lg:mb-12 px-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-500 text-white text-xs font-medium mb-4 shadow-lg shadow-gray-900/30"
        >
          <motion.div
            animate={{ rotate: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Zap className="h-3 w-3" />
          </motion.div>
          {badge}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl lg:text-4xl font-bold text-black mb-3 lg:mb-4 leading-tight"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base lg:text-lg text-black max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </motion.div>

      {/* Tabs Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center gap-2 mb-6 lg:mb-8 px-4 overflow-x-auto pb-3 scrollbar-hide"
      >
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300 border flex-shrink-0 ${
              activeTab === tab.value
                ? "bg-gradient-to-r from-gray-600 to-gray-400 text-white shadow-lg shadow-gray-900/40 border-gray-500"
                : "bg-gray-800/80 text-gray-200 hover:bg-gray-700 border-gray-600 hover:border-gray-500 hover:shadow-md"
            }`}
          >
            <motion.div
              animate={{ 
                rotate: activeTab === tab.value ? 180 : 0 
              }}
              transition={{ duration: 0.4 }}
            >
              {tab.icon}
            </motion.div>
            <span className="text-sm lg:text-base">{tab.label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Main Content Container */}
      <div className="relative px-4 lg:px-0">
        <Grid size={30} />
        
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-600/30 shadow-2xl overflow-hidden"
        >
          {tabs.map((tab) => (
            <div
              key={tab.value}
              className={`${activeTab === tab.value ? "block" : "hidden"}`}
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 p-4 lg:p-8">
                {/* Image Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center justify-center order-1 lg:order-2"
                >
                  <motion.div
                    className="w-full h-48 lg:h-80 rounded-2xl overflow-hidden shadow-2xl relative border border-gray-600/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.img
                      src={tab.content.image}
                      alt={tab.content.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    
                    <motion.div
                      className="absolute top-3 lg:top-4 right-3 lg:right-4 bg-gray-800/90 backdrop-blur-sm rounded-lg p-2 shadow-lg"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Award className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Text Content */}
                <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-700/50 text-gray-200 text-xs font-medium border border-gray-500/30"
                  >
                    {tab.content.icon}
                    {tab.content.badge}
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-xl lg:text-3xl font-bold text-white leading-tight"
                  >
                    {tab.content.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-base lg:text-lg text-gray-300 leading-relaxed font-medium"
                  >
                    {tab.content.description}
                  </motion.p>

                  {/* Features List - Consistent styling for all tabs */}
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="space-y-2 lg:space-y-3"
                  >
                    {tab.content.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200"
                        whileHover={{ x: 3, scale: 1.01 }}
                      >
                        {/* Consistent CheckCircle for all tabs including SEO */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        </motion.div>
                        <span className="text-sm text-gray-100 font-semibold">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Results/Stats Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="grid grid-cols-2 gap-3 lg:gap-4 pt-3 lg:pt-4"
                  >
                    {tab.content.results.map((result, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03, y: -2 }}
                        className="text-center p-3 lg:p-4 bg-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/30 shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        <div className={`font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent text-base lg:text-xl`}>
                          {result.value}
                        </div>
                        <div className="text-gray-300 mt-1 font-semibold uppercase tracking-wide text-xs">
                          {result.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-3 pt-4 lg:pt-6"
                  >
                    <Button className="bg-gradient-to-r from-gray-600 to-gray-400 text-white hover:from-gray-500 hover:to-gray-300 px-6 py-3 text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group w-full sm:w-auto justify-center">
                      <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                    <Button variant="outline" className="border-2 border-gray-400 text-gray-200 hover:bg-gray-600/30 hover:border-gray-300 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 group w-full sm:w-auto justify-center">
                      <Calendar className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                      View Case Study
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Main Services Component
const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Services data configuration with local images
  const servicesData = {
    badge: "Our Services",
    heading: "Complete Digital Marketing Solutions",
    description: "We drive growth and revenue through data-driven strategies across all digital channels.",
    tabs: [
      {
        value: "seo",
        icon: <Search className="h-3 w-3" />,
        label: "SEO",
        content: {
          icon: <TrendingUp className="h-3 w-3" />,
          badge: "Search Engine Optimization",
          title: "Dominate Search Rankings",
          description: "Increase your organic visibility and drive qualified traffic with our comprehensive SEO strategies.",
          features: [
            "Technical SEO audit & optimization",
            "Keyword research & content strategy",
            "Local SEO & Google My Business",
            "Ongoing performance monitoring"
          ],
          results: [
            { value: "300%+", label: "Traffic Growth" },
            { value: "24/7", label: "Monitoring" },
            { value: "Page 1", label: "Google Rankings" },
            { value: "90 Days", label: "Visible Results" }
          ],
          image: seoImage
        },
      },
      {
        value: "social-media",
        icon: <Users className="h-3 w-3" />,
        label: "Social Media",
        content: {
          icon: <MessageCircle className="h-3 w-3" />,
          badge: "Social Media Management",
          title: "Build Engaged Communities",
          description: "Create meaningful connections with your audience through strategic social media management.",
          features: [
            "Content strategy & calendar planning",
            "Community management & engagement",
            "Social media advertising",
            "Performance analytics & reporting"
          ],
          results: [
            { value: "5x", label: "Engagement Rate" },
            { value: "50%", label: "Cost Reduction" },
            { value: "10K+", label: "Followers Monthly" },
            { value: "Real-time", label: "Analytics" }
          ],
          image: socialMediaImage
        },
      },
      {
        value: "meta-ads",
        icon: <Target className="h-3 w-3" />,
        label: "Meta Ads",
        content: {
          icon: <Zap className="h-3 w-3" />,
          badge: "Facebook & Instagram Ads",
          title: "Precision Targeted Advertising",
          description: "Reach your ideal customers with laser-focused Meta advertising campaigns.",
          features: [
            "Audience research & segmentation",
            "Creative ad design & copywriting",
            "A/B testing & optimization",
            "ROI tracking & conversion analysis"
          ],
          results: [
            { value: "3-5x", label: "ROI Increase" },
            { value: "60%", label: "Lower CPC" },
            { value: "24/7", label: "Campaign Management" },
            { value: "Real-time", label: "Optimization" }
          ],
          image: metaAdsImage
        },
      },
      {
        value: "shopify",
        icon: <ShoppingCart className="h-3 w-3" />,
        label: "Shopify",
        content: {
          icon: <Star className="h-3 w-3" />,
          badge: "Shopify Development",
          title: "Convert More Store Visitors",
          description: "Transform your Shopify store into a conversion machine.",
          features: [
            "Custom Shopify theme development",
            "Conversion rate optimization",
            "App integration & customization",
            "Mobile-first responsive design"
          ],
          results: [
            { value: "40%", label: "Conversion Increase" },
            { value: "2x", label: "Average Order Value" },
            { value: "50%", label: "Faster Load Time" },
            { value: "24/7", label: "Support" }
          ],
          image: shopifyImage
        },
      },
      {
        value: "ecommerce",
        icon: <ShoppingCart className="h-3 w-3" />,
        label: "E-commerce",
        content: {
          icon: <TrendingUp className="h-3 w-3" />,
          badge: "E-commerce Solutions",
          title: "Scale Your Online Business",
          description: "Comprehensive e-commerce strategies that drive growth.",
          features: [
            "Multi-channel selling strategy",
            "Inventory & order management",
            "Customer retention programs",
            "Sales analytics & forecasting"
          ],
          results: [
            { value: "200%", label: "Revenue Growth" },
            { value: "35%", label: "Repeat Customers" },
            { value: "5-star", label: "Customer Rating" },
            { value: "30 Days", label: "Setup Time" }
          ],
          image: ecommerceImage
        },
      },
      {
        value: "web-development",
        icon: <Code className="h-3 w-3" />,
        label: "Web Development",
        content: {
          icon: <Code className="h-3 w-3" />,
          badge: "Web Development",
          title: "High-Performance Websites",
          description: "Build fast, responsive, and conversion-optimized websites.",
          features: [
            "Custom web application development",
            "Mobile-responsive design",
            "SEO-optimized architecture",
            "Ongoing maintenance & support"
          ],
          results: [
            { value: "<2s", label: "Load Time" },
            { value: "100%", label: "Mobile Optimized" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Security" }
          ],
          image: webDevImage
        },
      }
    ],
  };

  return (
    <div id="services" className="min-h-screen py-12 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-gray-700/10 to-gray-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-gray-600/10 to-gray-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ServicesTabs {...servicesData} />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center mt-12 lg:mt-20 bg-gradient-to-r from-gray-800 to-gray-500 rounded-2xl p-6 lg:p-12 text-white relative overflow-hidden mx-4 lg:mx-0"
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight"
          >
            Ready to Transform Your Digital Presence?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base lg:text-lg text-white mb-6 lg:mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how our digital marketing services can drive growth for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button 
              onClick={scrollToContact}
              className="bg-white text-white hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group w-full sm:w-auto justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base font-semibold rounded-xl transition-all duration-200 group w-full sm:w-auto justify-center"
            >
              <Calendar className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;