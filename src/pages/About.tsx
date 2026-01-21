import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Globe, 
  Clock, 
  Shield, 
  Target,
  CheckCircle,
  ArrowRight,
  Truck,
  Heart,
  Zap,
  Eye
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "5000+", label: "Shipments Delivered", icon: Truck },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "99.8%", label: "On-Time Delivery", icon: Target }
  ];

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We deliver on our promises with consistent, dependable service that you can count on."
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Streamlined processes and cutting-edge technology ensure fast, cost-effective solutions."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your success is our priority. We tailor our services to meet your unique needs."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication and real-time tracking keep you informed every step of the way."
    }
  ];

  const team = [
    {
      name: "Denis Ncube",
      role: "Founder & CEO",
      description: "With over 15 years in logistics, Denis leads our team with vision and expertise.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      description: "Sarah ensures smooth operations and exceptional customer service delivery.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&auto=format&fit=crop&q=80"
    },
    {
      name: "Michael Chen",
      role: "Logistics Coordinator",
      description: "Michael coordinates complex shipments with precision and attention to detail.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80"
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Denis Ncube established Denny N Freight with a vision to simplify logistics."
    },
    {
      year: "2012",
      title: "Regional Expansion",
      description: "Extended services to neighboring SADC countries, growing our network."
    },
    {
      year: "2016",
      title: "International Services",
      description: "Launched air and sea freight services for global shipping solutions."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented advanced tracking systems and digital customer portals."
    },
    {
      year: "2024",
      title: "Sustainable Logistics",
      description: "Committed to eco-friendly practices and carbon-neutral shipping options."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="freight-hero text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent-glow">
            About Denny N Freight
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Trusted <span className="text-accent">Logistics Partner</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Since 2009, we've been making logistics simple, reliable, and efficient for businesses across South Africa and beyond.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 -mt-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="freight-card text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2009 by Denis Ncube, Denny N Freight began with a simple mission: to make logistics simple, reliable, and efficient for businesses of all sizes. What started as a local freight service has grown into a comprehensive logistics solution provider serving clients across South Africa and internationally.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our commitment to excellence and customer satisfaction has driven our growth from a small startup to a trusted partner for hundreds of businesses. We've built our reputation on delivering promises, maintaining transparency, and continuously innovating our services.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we're proud to offer multi-modal transportation solutions, from road and rail to air and sea freight, backed by cutting-edge technology and a team of dedicated logistics professionals.
              </p>
              <Button className="freight-button-accent">
                Learn More About Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1565891741441-64926e441838?w=600&auto=format&fit=crop&q=80" 
                alt="Logistics warehouse operations"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="freight-card text-center group hover:border-accent">
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth and evolution as a logistics leader
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="freight-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-accent text-accent-foreground">{milestone.year}</Badge>
                        </div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                        <CardDescription className="text-base">
                          {milestone.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The dedicated professionals who make your logistics success possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="freight-card text-center">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge className="bg-accent text-accent-foreground mx-auto">{member.role}</Badge>
                  <CardDescription className="text-base mt-4">
                    {member.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of satisfied customers who trust Denny N Freight for their logistics needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-glow px-8 py-4 text-lg">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Logo size="md" showText={true} />
          </div>
          <p className="text-muted-foreground">
            &copy; 2024 Denny N Freight & Logistics Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;