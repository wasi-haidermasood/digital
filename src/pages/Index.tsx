import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LogoCarouselDemo } from "@/components/ui/logo-carousel-demo";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
          <LogoCarouselDemo />
        <Portfolio />
        <Testimonials />
        <CtaBanner />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;