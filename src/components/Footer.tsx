import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Grid } from "./ui/grid-pattern"; // Adjust import path as needed

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  const services = [{
    name: "Search Engine Optimization",
    href: "#services"
  }, {
    name: "Social Media Marketing",
    href: "#services"
  }, {
    name: "Web Development",
    href: "#services"
  }, {
    name: "Pay-Per-Click Advertising",
    href: "#services"
  }, {
    name: "Analytics & Reporting",
    href: "#services"
  }, {
    name: "Brand Strategy & Design",
    href: "#services"
  }];
  
  const company = [{
    name: "About Us",
    href: "#about"
  }, {
    name: "Our Portfolio",
    href: "#portfolio"
  }, {
    name: "Success Stories",
    href: "#portfolio"
  }, {
    name: "Contact Us",
    href: "#contact"
  }, {
    name: "Free Consultation",
    href: "#contact"
  }];
  
  const socialLinks = [{
    icon: Facebook,
    href: "https://facebook.com/digitalsocialdreams",
    label: "Facebook"
  }, {
    icon: Twitter,
    href: "https://twitter.com/wasimarketing",
    label: "Twitter"
  }, {
    icon: Instagram,
    href: "https://instagram.com/digitalsocialdreams",
    label: "Instagram"
  }, {
    icon: Linkedin,
    href: "https://linkedin.com/company/wasi-marketing-solutions",
    label: "LinkedIn"
  }];
  
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <Grid 
        size={25}
        pattern={[
          [8, 2],
          [6, 4],
          [10, 1],
          [7, 3],
          [9, 5]
        ]}
      />
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Digital Social Dreams
            </h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Transforming businesses through innovative digital marketing strategies. 
              Your success is our mission.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3" />
                <span className="text-sm">hello@digitalsocialdreams.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3" />
                <span className="text-sm">0328-5154250</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3" />
                <span className="text-sm">Lahore, Tajpura</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 border border-gray-700"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(service.href)} 
                    className="text-sm text-gray-300 hover:text-white transition-all duration-200 text-left hover:translate-x-1"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(item.href)} 
                    className="text-sm text-gray-300 hover:text-white transition-all duration-200 text-left hover:translate-x-1"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Stay Updated</h4>
            <p className="text-sm text-gray-300 mb-4">
              Get the latest digital marketing insights and growth strategies delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200"
              />
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border border-gray-600"
              >
                Subscribe
              </Button>
            </div>
            
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-xs text-gray-300 mb-2">🚀 Free Resources:</p>
              <ul className="text-xs space-y-1 text-gray-400">
                <li>• Digital Marketing Checklist</li>
                <li>• SEO Audit Template</li>
                <li>• Social Media Calendar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} DigitalSocialDreams. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </button>
              
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={scrollToTop} 
                className="text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;