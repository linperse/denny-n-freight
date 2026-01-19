import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Truck, Plane, Ship, Package, Globe, Clock } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Ship,
      title: "Sea Exports and Imports",
      description: "Comprehensive ocean freight services for international shipping with competitive rates and reliable delivery."
    },
    {
      icon: Plane,
      title: "Air Exports and Imports",
      description: "Fast and secure air cargo services for time-sensitive shipments worldwide."
    },
    {
      icon: Package,
      title: "Customs Clearing",
      description: "Expert customs clearance services to ensure smooth and compliant international trade."
    },
    {
      icon: Truck,
      title: "Forwarding",
      description: "Professional freight forwarding services connecting global supply chains efficiently."
    },
    {
      icon: Package,
      title: "Domestic Courier",
      description: "Reliable domestic delivery services for local and nationwide shipping needs."
    },
    {
      icon: Globe,
      title: "International Courier",
      description: "Express international courier services for documents and packages worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Global Freight & Logistics Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your trusted partner for comprehensive shipping services worldwide. 
              From sea to air, domestic to international - we deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive logistics solutions tailored to meet your shipping needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Denny N Freight?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">
                Extensive worldwide network ensuring your cargo reaches any destination efficiently.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
              <p className="text-gray-600">
                Committed to on-time delivery and exceptional customer service every step of the way.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Handling</h3>
              <p className="text-gray-600">
                Advanced tracking and secure handling ensure your shipments are safe throughout transit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
