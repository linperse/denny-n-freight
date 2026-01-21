import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Plane, 
  Ship, 
  Train, 
  Clock, 
  Shield, 
  Globe, 
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Truck,
      title: "Road Import & Export",
      description: "Reliable trucking services across South Africa and neighboring countries",
      features: ["Full Truckload (FTL)", "Less Than Truckload (LTL)", "Express Delivery"]
    },
    {
      icon: Ship,
      title: "Sea Import & Export",
      description: "Cost-effective ocean shipping for international cargo",
      features: ["FCL & LCL Services", "Port-to-Port", "Door-to-Door"]
    },
    {
      icon: Plane,
      title: "Air Import & Export",
      description: "Fast and secure air cargo services worldwide",
      features: ["Express Air", "Standard Air", "Charter Services"]
    },
    {
  icon: Train,
  title: "International & Domestic Courier",
  description: "Fast and reliable courier services for local and international deliveries",
  features: ["Door-to-Door Delivery", "Express Shipping", "Worldwide Coverage"]
    }

  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service and cargo tracking"
    },
    {
      icon: Shield,
      title: "Secure & Insured",
      description: "Full insurance coverage and secure handling of your cargo"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Worldwide partnerships for seamless international shipping"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="freight-hero text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent-glow">
            Logistics Made Simple, Reliable, and Efficient
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Trusted Partner in
            <span className="block text-accent">Freight & Logistics</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            From road to rail, sea to sky - we deliver your cargo safely and on time across South Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-glow px-8 py-4 text-lg">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              Track Shipment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive freight and logistics solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="freight-card group hover:border-accent">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Denny N Freight?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional logistics services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ship with Confidence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch with our logistics experts for a customized shipping solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-glow px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Logo size="md" showText={true} className="mb-4" />
              <p className="text-muted-foreground mb-4">
                Logistics Made Simple, Reliable, and Efficient. Your trusted partner for all freight and logistics needs across South Africa and beyond.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Track Shipment</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  deniszn@yahoo.co.uk
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +27 (0) 123 456 789
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Cape Town, South Africa
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Denny N Freight & Logistics Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
