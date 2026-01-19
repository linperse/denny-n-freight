import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Globe, Clock, Shield, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We ensure your cargo reaches its destination safely and on time, every time."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Our extensive network spans across continents, connecting businesses worldwide."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional service quality in every aspect of our operations."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your success is our priority. We tailor solutions to meet your unique needs."
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "50+", label: "Countries Served" },
    { number: "10,000+", label: "Shipments Delivered" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Denny N Freight & Logistics Solutions
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted partner in global logistics, connecting businesses worldwide with reliable and efficient freight solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to simplify global trade, Denny N Freight & Logistics Solutions has grown 
                from a small freight forwarding company to a comprehensive logistics provider serving businesses 
                across the globe.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in the industry, we have built strong relationships with 
                carriers, customs authorities, and logistics partners worldwide. Our expertise spans across 
                sea freight, air cargo, customs clearance, and courier services.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to innovate and expand our services to meet the evolving needs of 
                international trade, always maintaining our commitment to reliability, transparency, and 
                customer satisfaction.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/2.png" 
                alt="Denny N Freight & Logistics Solutions" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl">Numbers that reflect our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="h-10 w-10 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            To provide reliable, efficient, and cost-effective logistics solutions that enable businesses 
            to thrive in the global marketplace. We are committed to building lasting partnerships through 
            exceptional service, innovative solutions, and unwavering integrity.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Partner with Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;