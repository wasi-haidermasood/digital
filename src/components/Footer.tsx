import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
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
    href: "https://facebook.com/wasimarketingsolutions",
    label: "Facebook"
  }, {
    icon: Twitter,
    href: "https://twitter.com/wasimarketing",
    label: "Twitter"
  }, {
    icon: Instagram,
    href: "https://instagram.com/wasimarketingsolutions",
    label: "Instagram"
  }, {
    icon: Linkedin,
    href: "https://linkedin.com/company/wasi-marketing-solutions",
    label: "LinkedIn"
  }];
  return <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Wasi Marketing Solutions
            </h3>
            <p className="mb-6 opacity-90 leading-relaxed">
              Transforming businesses through innovative digital marketing strategies. 
              Your success is our mission.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 opacity-75" />
                <span className="text-sm">hello@wasimarketingsolutions.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 opacity-75" />
                <span className="text-sm">0328-5154250</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 opacity-75" />
                <span className="text-sm">Lahore, Tajpura</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200" aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>)}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => <li key={index}>
                  <button onClick={() => scrollToSection(service.href)} className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200 text-left">
                    {service.name}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => <li key={index}>
                  <button onClick={() => scrollToSection(item.href)} className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200 text-left">
                    {item.name}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-sm opacity-90 mb-4">
              Get the latest digital marketing insights and growth strategies delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent" />
              <Button size="sm" variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>
            
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-xs opacity-90 mb-2">🚀 Free Resources:</p>
              <ul className="text-xs space-y-1 opacity-75">
                <li>• Digital Marketing Checklist</li>
                <li>• SEO Audit Template</li>
                <li>• Social Media Calendar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm opacity-75 mb-4 md:mb-0">
              © {new Date().getFullYear()} Wasi Marketing Solutions. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="text-sm opacity-75 hover:opacity-100 transition-opacity duration-200">
                Privacy Policy
              </button>
              <button className="text-sm opacity-75 hover:opacity-100 transition-opacity duration-200">
                Terms of Service
              </button>
              <button className="text-sm opacity-75 hover:opacity-100 transition-opacity duration-200">
                Sitemap
              </button>
              
              <Button size="sm" variant="ghost" onClick={scrollToTop} className="text-white hover:bg-white/10">
                <ArrowUp className="h-4 w-4 mr-1" />
                Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;