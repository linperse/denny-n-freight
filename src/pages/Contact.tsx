import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Truck,
  ArrowRight,
  Globe,
  FileText
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+27 (0) 123 456 789", "+27 (0) 987 654 321"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["deniszn@yahoo.co.uk", "info@dennynfreight.co.za"],
      description: "Send us your inquiries anytime"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Logistics Avenue", "Cape Town, 8001", "South Africa"],
      description: "Visit our main office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM", "Sun: Emergency Only"],
      description: "We're here when you need us"
    }
  ];

  const offices = [
    {
      city: "Cape Town",
      type: "Head Office",
      address: "123 Logistics Avenue, Cape Town, 8001",
      phone: "+27 (0) 21 123 4567",
      email: "capetown@dennynfreight.co.za"
    },
    {
      city: "Johannesburg",
      type: "Branch Office",
      address: "456 Industrial Road, Johannesburg, 2000",
      phone: "+27 (0) 11 987 6543",
      email: "johannesburg@dennynfreight.co.za"
    },
    {
      city: "Durban",
      type: "Port Office",
      address: "789 Harbor Street, Durban, 4000",
      phone: "+27 (0) 31 555 0123",
      email: "durban@dennynfreight.co.za"
    }
  ];

  const services = [
    "Road Freight",
    "Sea Freight",
    "Air Freight",
    "Rail Freight",
    "Warehousing",
    "Customs Clearance",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="freight-hero text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-accent">Our Team</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Ready to streamline your logistics? Our experts are here to help you find the perfect shipping solution.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a customized quote.
              </p>
              
              <Card className="freight-card">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" className="mt-1" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="john@company.com" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+27 123 456 789" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your Company Ltd." className="mt-1" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service">Service Needed</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service.toLowerCase().replace(' ', '-')}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Standard (5-7 days)</SelectItem>
                            <SelectItem value="medium">Urgent (2-3 days)</SelectItem>
                            <SelectItem value="high">Emergency (Same day)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please describe your shipping requirements, including origin, destination, cargo type, and any special handling needs..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>
                    
                    <Button className="freight-button-accent w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're here to help with all your logistics needs. Reach out through any of these channels.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="freight-card">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-accent-foreground" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-sm font-medium">{detail}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <Button className="freight-button-primary w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now for Immediate Quote
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Start Live Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit us at any of our strategically located offices across South Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="freight-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{office.city}</CardTitle>
                  <Badge className="bg-primary text-primary-foreground mx-auto">{office.type}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <p className="text-muted-foreground">{office.address}</p>
                    <div className="flex items-center justify-center space-x-1">
                      <Phone className="h-4 w-4 text-accent" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <Mail className="h-4 w-4 text-accent" />
                      <span>{office.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="freight-card">
              <CardHeader>
                <CardTitle className="text-lg">How do I get a shipping quote?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simply fill out our contact form above or call us directly. We'll need details about your cargo, origin, destination, and timeline to provide an accurate quote.
                </p>
              </CardContent>
            </Card>
            
            <Card className="freight-card">
              <CardHeader>
                <CardTitle className="text-lg">What areas do you serve?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We serve all of South Africa and neighboring SADC countries for road freight, plus international destinations via air and sea freight services.
                </p>
              </CardContent>
            </Card>
            
            <Card className="freight-card">
              <CardHeader>
                <CardTitle className="text-lg">Do you provide tracking?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, all shipments include real-time tracking. You'll receive tracking information once your cargo is dispatched.
                </p>
              </CardContent>
            </Card>
            
            <Card className="freight-card">
              <CardHeader>
                <CardTitle className="text-lg">What about insurance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer comprehensive cargo insurance options to protect your shipments. Insurance details will be discussed during the quote process.
                </p>
              </CardContent>
            </Card>
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
            Don't wait - get your personalized shipping quote today and experience the Denny N Freight difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg">
              <FileText className="mr-2 h-5 w-5" />
              Get Instant Quote
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call Expert Now
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

export default Contact;