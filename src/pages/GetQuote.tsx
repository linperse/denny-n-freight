import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Calculator, 
  Truck, 
  Ship, 
  Plane, 
  Train,
  Package,
  MapPin,
  Calendar,
  Clock,
  Shield,
  CheckCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const GetQuote = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  
  const getServiceValue = (param: string | null) => {
    switch(param) {
      case 'road': return 'road';
      case 'sea': return 'sea';
      case 'air': return 'air';
      case 'international': return 'courier';
      default: return '';
    }
  };

  const [formData, setFormData] = useState({
    serviceType: getServiceValue(serviceParam),
    cargoType: '',
    weight: '',
    dimensions: '',
    origin: '',
    destination: '',
    pickupDate: '',
    deliveryDate: '',
    insurance: false,
    urgentDelivery: false
  });

  const services = [
    { value: 'road', label: 'Road Transport', icon: Truck },
    { value: 'sea', label: 'Sea Freight', icon: Ship },
    { value: 'air', label: 'Air Freight', icon: Plane },
    { value: 'courier', label: 'Courier Service', icon: Package }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="freight-hero text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent-glow">
            <Calculator className="mr-2 h-4 w-4" />
            Free Quote Calculator
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your
            <span className="block text-accent">Instant Quote</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Fast, accurate pricing for all your freight and logistics needs. Get started in minutes.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="freight-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">Request Your Quote</CardTitle>
              <CardDescription className="text-lg">
                Fill out the details below and we'll provide you with a competitive quote within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Service Type Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Select Service Type</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <div
                          key={service.value}
                          className={`freight-card cursor-pointer transition-all duration-300 ${
                            formData.serviceType === service.value
                              ? 'border-accent bg-accent/10'
                              : 'hover:border-accent/50'
                          }`}
                          onClick={() => setFormData({...formData, serviceType: service.value})}
                        >
                          <div className="text-center p-4">
                            <IconComponent className="h-8 w-8 text-accent mx-auto mb-2" />
                            <p className="font-medium">{service.label}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Cargo Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="cargoType">Cargo Type</Label>
                    <Select value={formData.cargoType} onValueChange={(value) => setFormData({...formData, cargoType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select cargo type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Cargo</SelectItem>
                        <SelectItem value="hazardous">Hazardous Materials</SelectItem>
                        <SelectItem value="perishable">Perishable Goods</SelectItem>
                        <SelectItem value="oversized">Oversized Cargo</SelectItem>
                        <SelectItem value="fragile">Fragile Items</SelectItem>
                        <SelectItem value="documents">Documents</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="weight">Total Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Enter weight in kg"
                      value={formData.weight}
                      onChange={(e) => setFormData({...formData, weight: e.target.value})}
                    />
                  </div>
                </div>

                {/* Dimensions */}
                <div className="space-y-2">
                  <Label htmlFor="dimensions">Dimensions (L x W x H in cm)</Label>
                  <Input
                    id="dimensions"
                    placeholder="e.g., 100 x 50 x 30"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({...formData, dimensions: e.target.value})}
                  />
                </div>

                {/* Origin and Destination */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="origin">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Origin
                    </Label>
                    <Input
                      id="origin"
                      placeholder="Pickup location"
                      value={formData.origin}
                      onChange={(e) => setFormData({...formData, origin: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="destination">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Destination
                    </Label>
                    <Input
                      id="destination"
                      placeholder="Delivery location"
                      value={formData.destination}
                      onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    />
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="pickupDate">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Preferred Pickup Date
                    </Label>
                    <Input
                      id="pickupDate"
                      type="date"
                      value={formData.pickupDate}
                      onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="deliveryDate">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Required Delivery Date
                    </Label>
                    <Input
                      id="deliveryDate"
                      type="date"
                      value={formData.deliveryDate}
                      onChange={(e) => setFormData({...formData, deliveryDate: e.target.value})}
                    />
                  </div>
                </div>

                {/* Additional Options */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Additional Services</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="insurance"
                        checked={formData.insurance}
                        onCheckedChange={(checked) => setFormData({...formData, insurance: checked as boolean})}
                      />
                      <Label htmlFor="insurance" className="flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-accent" />
                        Cargo Insurance
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="urgentDelivery"
                        checked={formData.urgentDelivery}
                        onCheckedChange={(checked) => setFormData({...formData, urgentDelivery: checked as boolean})}
                      />
                      <Label htmlFor="urgentDelivery" className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-accent" />
                        Urgent Delivery (24-48 hours)
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button type="submit" size="lg" className="freight-button-accent px-12 py-4 text-lg">
                    <Calculator className="mr-2 h-5 w-5" />
                    Get My Quote
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Quote Service?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p className="text-muted-foreground">Get your quote within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate Pricing</h3>
              <p className="text-muted-foreground">Transparent, competitive rates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">All Services</h3>
              <p className="text-muted-foreground">Road, sea, air, and courier options</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;