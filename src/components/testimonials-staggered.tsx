// components/testimonials-staggered.tsx
"use client"

import React from 'react';
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Users, Target, Clock } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

export const TestimonialsStaggered = () => {
  const { count: satisfiedClients, ref: clientsRef } = useCountUp({ end: 98 });
  const { count: projectsCompleted, ref: projectsRef } = useCountUp({ end: 250 });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            Client Success Stories
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">
            What Our{" "}
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it — see how DigitalSocialDreamss 
            helped businesses achieve remarkable growth and real results.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-8 mb-16 text-white shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div ref={clientsRef} className="transform hover:scale-105 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {satisfiedClients}%
              </div>
              <div className="text-gray-300 text-sm">Client Satisfaction</div>
            </div>
            <div ref={projectsRef} className="transform hover:scale-105 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {projectsCompleted}+
              </div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="transform hover:scale-105 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold mb-2">24hr</div>
              <div className="text-gray-300 text-sm">Response Time</div>
            </div>
            <div className="transform hover:scale-105 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-300 text-sm">Results Guarantee</div>
            </div>
          </div>
        </div>

        {/* Staggered Testimonials */}
        <div className="mb-20">
          <StaggerTestimonials />
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-gray-600 mb-8 text-lg">
            Trusted by leading businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
            {["TechStart", "GrowthLab", "RetailPlus", "LocalFit", "ScaleFast", "InnovateCo"].map((company, index) => (
              <div 
                key={index}
                className="text-gray-700 font-semibold text-lg hover:text-gray-900 transition-colors duration-300"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-12 text-white relative overflow-hidden">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their digital presence 
              and achieved remarkable growth with our proven strategies.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-white hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Success Story
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};