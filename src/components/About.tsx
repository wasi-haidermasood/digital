import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Shield,
  Heart,
  Zap
} from "lucide-react";

const About = () => {
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

  const team = [
    {
      name: "Wasi Haider",
      role: "Founder & CEO",
      expertise: "Digital Strategy & Growth",
      description: "Leading digital transformation for 5+ years with expertise in scaling businesses from startup to enterprise."
    },
    {
      name: "Usman Asif",
      role: "SEO Director",
      expertise: "Search Engine Optimization",
      description: "SEO specialist with proven track record of achieving #1 rankings and driving organic growth."
    },
    {
      name: "Saim Gohar",
      role: "Creative Director",
      expertise: "Brand & Design",
      description: "Award-winning designer creating compelling visual identities that resonate with target audiences."
    },
    {
      name: "Ali Haider",
      role: "Analytics Manager",
      expertise: "Data & Performance",
      description: "Data scientist turning complex analytics into actionable insights that drive strategic decisions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-text-gradient bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Wasi Marketing Solutions, we're more than just a digital marketing agency. 
              We're your growth partners, dedicated to transforming your business through 
              innovative strategies and proven results.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-primary mr-3" />
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes to achieve unprecedented digital growth 
                  through cutting-edge marketing strategies, innovative technologies, and 
                  data-driven decision making.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
          <h3 className="text-3xl font-bold text-center mb-12">
            What Drives <span className="bg-text-gradient bg-clip-text text-transparent">Us</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-0 bg-card-gradient text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-card-foreground">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Meet Our <span className="bg-text-gradient bg-clip-text ">Team</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-0 bg-card-gradient text-center"
              >
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-1 text-card-foreground">
                    {member.name}
                  </h4>
                  <Badge variant="secondary" className="mb-2">
                    {member.role}
                  </Badge>
                  <p className="text-primary font-medium text-sm mb-3">
                    {member.expertise}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;