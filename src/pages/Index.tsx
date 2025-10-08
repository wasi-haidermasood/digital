
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
// import Portfolio from "@/components/portfolio-gradient";
// import Testimonials from "@/components/testimonials-staggered";
// import CtaBanner from "@/components/CtaBanner";
import {TeamSection} from "@/components/About-retro-team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LogoCarouselDemo } from "@/components/ui/logo-carousel-demo";
import { HeroParallaxDemo } from "@/components/hero-parallax-demo";
import ZoomParallax from "@/components/demo"
import { PortfolioWithCardGradient } from "@/components/portfolio-gradient";
import { TestimonialsStaggered } from "@/components/testimonials-staggered";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
      <HeroParallaxDemo />
        <Services />
          {/* <LogoCarouselDemo /> */}
          <ZoomParallax/>
        {/* <Portfolio /> */}
              <PortfolioWithCardGradient />
        {/* <Testimonials /> */}
              <TestimonialsStaggered />
        {/* <CtaBanner /> */}
        <TeamSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;