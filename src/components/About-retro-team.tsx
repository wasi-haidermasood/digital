// components/about-retro-team.tsx
"use client";

import React from 'react';
import { Carousel, TeamCard } from "@/components/ui/retro-team";
import { iTeamMember } from "@/components/ui/retro-team";
import { Target, Lightbulb, Heart, Shield, Zap, Users } from "lucide-react";

// Team data based on your original About section
const teamData = {
  ids: [
    "team-1",
    "team-2", 
    "team-3",
    "team-4",
  ],
  details: {
    "team-1": {
      id: "team-1",
      name: "Wasi Haider",
      role: "Founder & CEO",
      expertise: "Digital Strategy & Growth",
      description: "Leading digital transformation for 5+ years with expertise in scaling businesses from startup to enterprise. Specialized in data-driven marketing strategies that deliver measurable ROI and sustainable growth.",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      icon: Zap
    },
    "team-2": {
      id: "team-2",
      name: "Usman Asif",
      role: "SEO Director", 
      expertise: "Search Engine Optimization",
      description: "SEO specialist with proven track record of achieving #1 rankings and driving organic growth. Expert in technical SEO, content strategy, and local search optimization for maximum visibility.",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      icon: Target
    },
    "team-3": {
      id: "team-3",
      name: "Saim Gohar",
      role: "Creative Director",
      expertise: "Brand & Design",
      description: "Award-winning designer creating compelling visual identities that resonate with target audiences. Combines artistic vision with strategic thinking to build memorable brand experiences.",
      profileImage: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      icon: Lightbulb
    },
    "team-4": {
      id: "team-4",
      name: "Ali Haider",
      role: "Analytics Manager",
      expertise: "Data & Performance",
      description: "Data scientist turning complex analytics into actionable insights that drive strategic decisions. Expert in performance tracking, conversion optimization, and ROI measurement.",
      profileImage: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      icon: Shield
    },
  },
};

// Values section from your original About
const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy we implement is designed with one goal: measurable results that grow your business."
  },
  {
    icon: Lightbulb,
    title: "Innovation First", 
    description: "We stay ahead of digital trends and leverage cutting-edge technologies to give you a competitive advantage."
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We build long-term partnerships based on trust, transparency, and results."
  },
  {
    icon: Shield,
    title: "Proven Expertise",
    description: "Years of experience across industries, backed by certifications and a track record of success."
  }
];

const TeamSection = () => {
  const cards = teamData.ids.map((teamId: string, index: number) => {
    const details = teamData.details as Record<string, iTeamMember>;
    return (
      <TeamCard
        key={teamId}
        teamMember={details[teamId]}
        index={index}
        backgroundImage=""
      />
    );
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            About <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At DigitalSocialDreamss, we're more than just a digital marketing agency. 
              We're your growth partners, dedicated to transforming your business through 
              innovative strategies and proven results.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                  <Zap className="h-6 w-6 text-gray-700 mr-3" />
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses of all sizes to achieve unprecedented digital growth 
                  through cutting-edge marketing strategies, innovative technologies, and 
                  data-driven decision making.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                  <Users className="h-6 w-6 text-gray-700 mr-3" />
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading digital marketing partner that businesses trust to 
                  navigate the ever-evolving digital landscape and achieve sustainable, 
                  long-term growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Drives <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Us</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section with Retro Carousel */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Meet Our <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Team</span>
          </h3>
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
};

export { TeamSection };