import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Fleet Management",
    description: "Complete vehicle fleet oversight with maintenance scheduling and performance monitoring.",
    features: [
      "Vehicle tracking & monitoring",
      "Maintenance scheduling",
      "Fuel management",
      "Driver performance analytics",
      "Compliance reporting"
    ],
    popular: false
  },
  {
    title: "Route Planning",
    description: "Advanced route optimization with real-time traffic data and passenger demand analysis.",
    features: [
      "AI-powered route optimization",
      "Traffic-aware planning",
      "Dynamic route adjustments",
      "Passenger demand forecasting",
      "Multi-modal integration"
    ],
    popular: true
  },
  {
    title: "Passenger Services",
    description: "Enhanced passenger experience with booking, tracking, and communication tools.",
    features: [
      "Online booking system",
      "Real-time bus tracking",
      "Mobile ticketing",
      "Passenger notifications",
      "Feedback management"
    ],
    popular: false
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Transport Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From fleet management to passenger services, we provide end-to-end solutions for your transport business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative border-border hover:shadow-elegant transition-all duration-300 ${
                service.popular ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <Button 
                    variant={service.popular ? "default" : "outline"} 
                    className="w-full group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;