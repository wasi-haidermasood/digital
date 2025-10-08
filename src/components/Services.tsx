import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Users, Zap, ShoppingCart, Code, MessageCircle, Target, CheckCircle, Star, TrendingUp, Play, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Custom Services Tabs Component
const ServicesTabs = ({ badge, heading, description, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value || "");

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header with Compact Styling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white text-xs font-medium mb-4 shadow-lg shadow-gray-900/20"
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
          className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </motion.div>

      {/* Compact Tabs Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-2 mb-8"
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
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 border ${
              activeTab === tab.value
                ? "bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg shadow-gray-900/30 border-transparent"
                : "bg-white/80 text-gray-700 hover:bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
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
            {tab.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Compact Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg overflow-hidden"
      >
        {tabs.map((tab) => (
          <div
            key={tab.value}
            className={`${activeTab === tab.value ? "block" : "hidden"}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              {/* Left Content */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-300/50"
                >
                  {tab.content.icon}
                  {tab.content.badge}
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight"
                >
                  {tab.content.title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-base text-gray-600 leading-relaxed"
                >
                  {tab.content.description}
                </motion.p>

                {/* Compact Features List */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="space-y-2"
                >
                  {tab.content.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-3 p-2 rounded-lg bg-white/50 border border-gray-200/50 hover:border-gray-300 transition-all duration-200"
                      whileHover={{ x: 3, scale: 1.01 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      </motion.div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Compact Results Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="grid grid-cols-2 gap-3 pt-3"
                >
                  {tab.content.results.map((result, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="text-center p-3 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <div className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {result.value}
                      </div>
                      <div className="text-xs text-gray-600 mt-1 font-medium">
                        {result.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Compact Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex flex-wrap gap-3 pt-4"
                >
                  <Button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 px-5 py-2 text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group">
                    <Play className="h-3 w-3 mr-2 group-hover:scale-110 transition-transform" />
                    Get Started
                    <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                  <Button variant="outline" className="border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 group">
                    <Calendar className="h-3 w-3 mr-2 group-hover:scale-110 transition-transform" />
                    View Case Study
                  </Button>
                </motion.div>
              </div>

              {/* Compact Right Content - Service Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center justify-center"
              >
                <motion.div
                  className="w-full h-48 lg:h-64 rounded-xl overflow-hidden shadow-lg relative"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.img
                    src={tab.content.image}
                    alt={tab.content.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200" />
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Award className="h-3 w-3 text-yellow-500" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

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
            { value: "Page 1", label: "Google Rankings" },
            { value: "24/7", label: "Monitoring" },
            { value: "90 Days", label: "Visible Results" }
          ],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
          image: "https://images.unsplash.com/photo-1563017300-5a1d6b092e83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
      }
    ],
  };

  return (
    <div id="services" className="min-h-screen py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Compact Spacing */}
      <div className="absolute top-0 left-0 w-full h-16 bg-transparent"></div>
      
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-64 h-64 bg-gradient-to-r from-gray-600/5 to-gray-800/5 rounded-full blur-2xl"
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
          className="absolute -bottom-40 -left-40 w-64 h-64 bg-gradient-to-r from-gray-500/5 to-gray-700/5 rounded-full blur-2xl"
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
        {/* Services Tabs Component */}
        <ServicesTabs {...servicesData} />
        
        {/* Compact Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center mt-16 bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-8 text-white relative overflow-hidden"
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl lg:text-3xl font-bold mb-4 leading-tight"
          >
            Ready to Transform Your Digital Presence?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-300 mb-6 max-w-md mx-auto"
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
              className="bg-white text-white hover:bg-gray-100 px-6 py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 text-base font-semibold rounded-xl transition-all duration-200 group"
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