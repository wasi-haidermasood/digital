import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const CtaBanner = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent)] animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8 shadow-lg shadow-blue-500/30 animate-bounce">
            <Zap className="h-10 w-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Dominate
            </span>{" "}
            Your Market?
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Stop watching competitors grow while you fall behind. Join the
            businesses winning with{" "}
            <span className="font-semibold text-blue-200">proven strategies</span>{" "}
            and ROI-focused campaigns.
          </p>

          {/* Features */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-10 shadow-inner border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="hover:scale-105 transition">
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-semibold">Fast Implementation</div>
              </div>
              <div className="hover:scale-105 transition">
                <div className="text-3xl mb-2">📈</div>
                <div className="font-semibold">Guaranteed Results</div>
              </div>
              <div className="hover:scale-105 transition">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-semibold">ROI-Focused</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get Your Free Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="text-white/80 text-sm text-left sm:text-center">
              <div>✅ No long-term contracts</div>
              <div>✅ 30-day money-back guarantee</div>
            </div>
          </div>

          {/* Urgency Badge */}
          <div className="mt-10 inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-sm font-semibold shadow-md animate-pulse">
            ⏰ Limited Time: Free consultation + strategy blueprint worth $500
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
