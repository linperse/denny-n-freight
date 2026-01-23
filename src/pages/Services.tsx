import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Truck, 
  Plane, 
  Ship, 
  Train, 
  Package, 
  Clock, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Warehouse,
  FileText,
  Globe
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Truck,
      title: "Road Freight Services",
      description: "Comprehensive trucking solutions across South Africa and neighboring countries",
      image: "https://images.unsplash.com/photo-1597266833335-ccd08f703654?w=600&auto=format&fit=crop&q=80",
      features: [
        "Full Truckload (FTL) - Dedicated vehicles for large shipments",
        "Less Than Truckload (LTL) - Cost-effective for smaller loads",
        "Express Delivery - Same-day and next-day services",
        "Temperature Controlled - Refrigerated transport for sensitive goods",
        "Oversized Cargo - Specialized equipment for heavy machinery",
        "Cross-border Transport - SADC region coverage"
      ]
    },
    {
      icon: Ship,
      title: "Sea Freight Services",
      description: "International ocean shipping with competitive rates and reliable schedules",
      image: "https://images.unsplash.com/photo-1604506522146-316c8bedd874?w=600&auto=format&fit=crop&q=80",
      features: [
        "Full Container Load (FCL) - Exclusive container usage",
        "Less Container Load (LCL) - Shared container for smaller shipments",
        "Port-to-Port Services - Terminal to terminal delivery",
        "Door-to-Door Services - Complete logistics solution",
        "Break Bulk Cargo - Non-containerized freight handling",
        "Project Cargo - Specialized handling for large projects"
      ]
    },
    {
      icon: Plane,
      title: "Air Freight Services",
      description: "Fast and secure air cargo services for time-sensitive shipments worldwide",
      image: "https://images.unsplash.com/photo-1718365960352-6c07fc217ae8?w=600&auto=format&fit=crop&q=80",
      features: [
        "Express Air Freight - Priority handling for urgent cargo",
        "Standard Air Freight - Cost-effective for regular shipments",
        "Charter Services - Dedicated aircraft for special requirements",
        "Dangerous Goods - Certified handling of hazardous materials",
        "Perishables - Temperature-controlled air transport",
        "Hand Carry Services - Personal courier for critical items"
      ]
    },
    {
      icon: Package,
title: "International & Domestic Courier",
description: "Fast and reliable courier services for packages and documents, locally and abroad",
image: "https://images.unsplash.com/photo-1763752194641-3c5638aec65e?w=600&auto=format&fit=crop&q=80",
features: [
  "Same-Day Delivery",
  "Next-Day Delivery",
  "International Shipping",
  "Package Tracking",
  "Document Delivery",
  "Reliable & Secure Handling"
]

    }
  ];

  const additionalServices = [
    {
      icon: Warehouse,
      title: "Warehousing & Distribution",
      description: "Secure storage and distribution facilities with inventory management"
    },
    {
      icon: Globe,
      title: "Supply Chain Management",
      description: "End-to-end supply chain optimization and consulting"
    },
    {
      icon: Clock,
      title: "Tracking & Monitoring",
      description: "Real-time cargo tracking and status updates"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="freight-hero text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent-glow">
            Comprehensive Logistics Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-accent">Freight Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            From local deliveries to international shipping, we provide complete freight and logistics solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="h-8 w-8 text-accent-foreground" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">{service.title}</h2>
                        <p className="text-muted-foreground mt-2">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="freight-button-accent" asChild>
                      <Link to={`/get-quote?service=${service.title.split(' ')[0].toLowerCase()}`}>
                        Get Quote for {service.title.split(' ')[0]} Freight
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="relative rounded-lg overflow-hidden shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete your logistics needs with our comprehensive support services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
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
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Logistics Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our logistics experts are ready to design a tailored solution for your specific shipping requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-glow px-8 py-4 text-lg" asChild>
              <Link to="/get-quote">
                Request Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg" asChild>
              <Link to="/contact">
                Speak with Expert
              </Link>
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

export default Services;