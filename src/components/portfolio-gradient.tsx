// components/portfolio-gradient.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, Award } from "lucide-react";
import { Grid } from "@/components/ui/grid-pattern";

export function PortfolioWithCardGradient() {
  const projects = [
    {
      title: "E-commerce Growth Strategy",
      category: "SEO & PPC",
      results: "450% ROI Increase",
      description: "Transformed an online retailer's digital presence through comprehensive SEO optimization and targeted PPC campaigns, resulting in 300% increase in organic traffic.",
      metrics: ["300% Organic Traffic", "450% ROI", "85% Lead Quality"],
      tags: ["SEO", "Google Ads", "Conversion Optimization"]
    },
    {
      title: "SaaS Lead Generation",
      category: "Content Marketing",
      results: "5x Lead Generation",
      description: "Developed and executed a content marketing strategy for B2B SaaS company, generating qualified leads through thought leadership and SEO-optimized content.",
      metrics: ["500% Lead Increase", "40% Conversion Rate", "200k+ Impressions"],
      tags: ["Content Strategy", "Lead Generation", "B2B Marketing"]
    },
    {
      title: "Local Business Domination",
      category: "Local SEO",
      results: "#1 Local Rankings",
      description: "Achieved #1 local search rankings for multiple keywords, increased foot traffic by 200%, and established dominant local online presence.",
      metrics: ["#1 Local Rankings", "200% Foot Traffic", "50+ Reviews"],
      tags: ["Local SEO", "Google My Business", "Reputation Management"]
    },
    {
      title: "Social Media Revolution",
      category: "Social Media",
      results: "1M+ Engagement",
      description: "Built engaged community of 100k+ followers, generated viral content campaigns, and drove significant brand awareness and sales through social platforms.",
      metrics: ["100k+ Followers", "1M+ Engagement", "25% Sales Increase"],
      tags: ["Social Media", "Community Building", "Viral Marketing"]
    },
    {
      title: "Brand Awareness Campaign",
      category: "Brand Strategy",
      results: "3x Brand Recognition",
      description: "Developed comprehensive brand strategy that increased market recognition and established strong brand identity across digital channels.",
      metrics: ["300% Recognition", "50% Recall", "10M+ Reach"],
      tags: ["Brand Strategy", "Awareness", "Market Positioning"]
    },
    {
      title: "Conversion Rate Optimization",
      category: "CRO",
      results: "220% Conversion Boost",
      description: "Implemented data-driven CRO strategies that significantly improved website conversion rates and customer acquisition efficiency.",
      metrics: ["220% Conversions", "35% Lower CPA", "60% Faster Load"],
      tags: ["CRO", "UX Optimization", "A/B Testing"]
    },
    {
      title: "Email Marketing Automation",
      category: "Email Marketing",
      results: "8x ROI Achieved",
      description: "Created automated email marketing funnels that nurtured leads and drove consistent revenue through personalized customer journeys.",
      metrics: ["800% ROI", "45% Open Rate", "15% Click Rate"],
      tags: ["Email Automation", "Lead Nurturing", "Personalization"]
    },
    {
      title: "Influencer Partnership Program",
      category: "Influencer Marketing",
      results: "15x Social ROI",
      description: "Built and managed influencer partnership program that generated massive social proof and drove qualified traffic to client websites.",
      metrics: ["1500% Social ROI", "500+ Influencers", "2M+ Reach"],
      tags: ["Influencer Marketing", "Partnerships", "Social Proof"]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-20 lg:py-40 bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Success <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Stories</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real results for real businesses. See how we've helped companies like yours 
          achieve breakthrough growth and dominate their markets.
        </p>
      </div>

      {/* Projects Grid - Matching Template Structure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-950 p-6 rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50"
          >
            {/* Grid Background */}
            <Grid size={20} />
            
            {/* Category Badge */}
            <Badge variant="secondary" className="mb-3 relative z-20">
              {project.category}
            </Badge>

            {/* Results with Icon */}
            <div className="flex items-center text-gray-900 dark:text-white font-bold text-sm mb-3 relative z-20">
              <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
              {project.results}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 relative z-20 leading-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed relative z-20">
              {project.description}
            </p>

            {/* Metrics */}
            <div className="space-y-2 mb-4 relative z-20">
              {project.metrics.map((metric, metricIndex) => (
                <div key={metricIndex} className="text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md text-center">
                  {metric}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 relative z-20">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-20 px-4">
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          {/* Grid Background for CTA */}
          <Grid size={25} />
          
          <Award className="h-12 w-12 mx-auto mb-6 opacity-90 relative z-20" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-20">
            Ready to Be Our Next Success Story?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto relative z-20">
            Join hundreds of businesses that have transformed their digital presence 
            and achieved remarkable growth with our proven strategies.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-white text-white hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative z-20"
          >
            Start Your Success Story
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}