import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Solutions",
      avatar: "SJ",
      rating: 5,
      text: "Wasi Marketing Solutions transformed our online presence completely. Our website traffic increased by 400% in just 6 months, and our lead quality has never been better. Their team is professional, responsive, and delivers real results.",
      results: "400% Traffic Increase",
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthLab",
      avatar: "MC",
      rating: 5,
      text: "The ROI we've seen from our digital marketing campaigns has been incredible. From SEO to PPC, every strategy they implemented exceeded our expectations. Our revenue has doubled since working with them.",
      results: "200% Revenue Growth",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, RetailPlus",
      avatar: "ER",
      rating: 5,
      text: "Working with Wasi Marketing has been a game-changer for our e-commerce business. Their data-driven approach and attention to detail helped us achieve our highest conversion rates ever.",
      results: "85% Conversion Rate",
    },
    {
      name: "David Thompson",
      role: "Owner, Local Fitness Studio",
      avatar: "DT",
      rating: 5,
      text: "As a local business owner, I was skeptical about digital marketing. But their local SEO strategies brought us to #1 on Google, and our membership has tripled. Incredible results!",
      results: "#1 Local Rankings",
    },
  ];

  const { count: satisfiedClients, ref: clientsRef } = useCountUp({ end: 98 });
  const { count: projectsCompleted, ref: projectsRef } = useCountUp({ end: 250 });

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/10 via-secondary/30 to-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don’t just take our word for it — see how Wasi Marketing Solutions
            helped businesses achieve remarkable growth and real results.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-10 mb-20 text-white shadow-lg shadow-purple-500/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div ref={clientsRef} className="transform hover:scale-105 transition">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {satisfiedClients}%
              </div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div ref={projectsRef} className="transform hover:scale-105 transition">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {projectsCompleted}+
              </div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="transform hover:scale-105 transition">
              <div className="text-4xl md:text-5xl font-bold mb-2">24hr</div>
              <div className="text-white/80">Response Time</div>
            </div>
            <div className="transform hover:scale-105 transition">
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-white/80">Results Guarantee</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:-translate-y-3 transition-all duration-500 border-0 bg-white/5 backdrop-blur-lg shadow-lg hover:shadow-2xl rounded-2xl"
            >
              <CardContent className="p-8">
                {/* Quote */}
                <Quote className="h-10 w-10 text-primary/30 mb-6 group-hover:scale-110 transition-transform" />

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                  “{testimonial.text}”
                </p>

                {/* Results */}
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-3 mb-6 text-center">
                  <div className="text-primary font-semibold">
                    {testimonial.results}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4 ring-2 ring-primary/50">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8">
            Trusted by leading businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
            <span className="text-xl font-bold">TechStart</span>
            <span className="text-xl font-bold">GrowthLab</span>
            <span className="text-xl font-bold">RetailPlus</span>
            <span className="text-xl font-bold">LocalFit</span>
            <span className="text-xl font-bold">StartupCo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
