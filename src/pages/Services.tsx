import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, Plane, Ship, Package, Globe, FileCheck, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: "Sea Exports and Imports",
      description: "Comprehensive ocean freight services for international shipping with competitive rates and reliable delivery.",
      features: [
        "Full Container Load (FCL) and Less Container Load (LCL)",
        "Door-to-door and port-to-port services",
        "Competitive ocean freight rates",
        "Real-time shipment tracking",
        "Documentation and compliance support"
      ]
    },
    {
      icon: Plane,
      title: "Air Exports and Imports",
      description: "Fast and secure air cargo services for time-sensitive shipments worldwide.",
      features: [
        "Express and standard air freight options",
        "Temperature-controlled cargo handling",
        "Dangerous goods certification",
        "Same-day and next-day delivery options",
        "Global airport network coverage"
      ]
    },
    {
      icon: FileCheck,
      title: "Customs Clearing",
      description: "Expert customs clearance services to ensure smooth and compliant international trade.",
      features: [
        "Import and export documentation",
        "Duty and tax calculation",
        "Compliance with international regulations",
        "Expedited clearance processes",
        "Customs bond and insurance services"
      ]
    },
    {
      icon: Truck,
      title: "Forwarding",
      description: "Professional freight forwarding services connecting global supply chains efficiently.",
      features: [
        "Multi-modal transportation solutions",
        "Supply chain optimization",
        "Warehousing and distribution",
        "Cargo consolidation services",
        "Project cargo handling"
      ]
    },
    {
      icon: Package,
      title: "Domestic Courier",
      description: "Reliable domestic delivery services for local and nationwide shipping needs.",
      features: [
        "Same-day and next-day delivery",
        "Nationwide coverage",
        "Package tracking and notifications",
        "Signature confirmation services",
        "Bulk shipping discounts"
      ]
    },
    {
      icon: Globe,
      title: "International Courier",
      description: "Express international courier services for documents and packages worldwide.",
      features: [
        "Express international delivery",
        "Document and package services",
        "Customs clearance included",
        "Insurance coverage options",
        "Delivery confirmation and tracking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to meet your shipping and freight needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3 text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
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

      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Ship with Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get a personalized quote for your shipping needs or contact our team for expert advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;