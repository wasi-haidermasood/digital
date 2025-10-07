import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Pointer, Layout, Search, Users, Code, BarChart3, Palette } from "lucide-react";
import { Feature108 } from "@/components/shadcnblocks-com-feature108";

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const servicesData = {
    badge: "Our Services",
    heading: "Comprehensive Digital Marketing Solutions",
    description: "We provide end-to-end digital marketing services to accelerate your business growth and establish your dominant online presence.",
    tabs: [
      {
        value: "seo",
        icon: <Search className="h-auto w-4 shrink-0" />,
        label: "SEO",
        content: {
          badge: "Search Engine Optimization",
          title: "Dominate search results with our proven SEO strategies",
          description: "We optimize your website to rank higher, drive organic traffic, and increase visibility for targeted keywords. Our comprehensive approach includes technical SEO, on-page optimization, and local SEO to ensure maximum visibility.",
          buttonText: "Learn More About SEO",
          imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
          imageAlt: "SEO Services",
        },
      },
      {
        value: "social-media",
        icon: <Users className="h-auto w-4 shrink-0" />,
        label: "Social Media",
        content: {
          badge: "Social Media Marketing",
          title: "Build engaged communities and drive conversions",
          description: "Maximize your social presence across all major platforms. From content creation to paid advertising and community management, we create strategies that build brand loyalty and drive measurable results.",
          buttonText: "Explore Social Media",
          imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
          imageAlt: "Social Media Marketing",
        },
      },
      {
        value: "web-development",
        icon: <Code className="h-auto w-4 shrink-0" />,
        label: "Web Development",
        content: {
          badge: "Web Development",
          title: "Create stunning, high-performance websites",
          description: "Mobile-responsive, SEO-optimized websites built for speed and user experience. We create digital experiences that convert visitors into customers with e-commerce solutions and CMS integration.",
          buttonText: "View Development",
          imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
          imageAlt: "Web Development",
        },
      },
      {
        value: "ppc",
        icon: <Zap className="h-auto w-4 shrink-0" />,
        label: "PPC Advertising",
        content: {
          badge: "Pay-Per-Click Advertising",
          title: "Maximize ROI with targeted PPC campaigns",
          description: "Drive immediate traffic and qualified leads with precision-targeted campaigns across Google Ads, Facebook, and other platforms. We focus on conversion optimization and ROI maximization.",
          buttonText: "Discover PPC",
          imageSrc: "https://images.unsplash.com/photo-1462045504115-6c1d931f07d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
          imageAlt: "PPC Advertising",
        },
      },
      {
        value: "analytics",
        icon: <BarChart3 className="h-auto w-4 shrink-0" />,
        label: "Analytics",
        content: {
          badge: "Analytics & Reporting",
          title: "Make data-driven decisions with comprehensive analytics",
          description: "Track performance, measure ROI, and optimize strategies for continuous growth. Our custom dashboards and monthly reports provide actionable insights to drive your business forward.",
          buttonText: "See Analytics",
          imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
          imageAlt: "Analytics & Reporting",
        },
      },
      {
        value: "branding",
        icon: <Palette className="h-auto w-4 shrink-0" />,
        label: "Branding",
        content: {
          badge: "Brand Strategy & Design",
          title: "Develop a compelling brand identity",
          description: "Create a brand that resonates with your target audience. From logo design to complete brand guidelines and marketing materials, we build identities that stand out and drive recognition.",
          buttonText: "Explore Branding",
          imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80",
          imageAlt: "Brand Strategy & Design",
        },
      },
    ],
  };

  return (
    <div id="services" className="min-h-screen bg-gradient-white ">
      <div className="container mx-auto px-6 xl:px-12">
        {/* Centered Header Section */}
      

        {/* Feature108 Tabs Component */}
        <Feature108 {...servicesData} />
      </div>
    </div>
  );
};

export default Services;