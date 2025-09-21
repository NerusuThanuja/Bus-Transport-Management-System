import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Clock, 
  Users, 
  BarChart3, 
  Shield, 
  Smartphone,
  Route,
  Bell,
  CreditCard
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    description: "Track your entire fleet in real-time with precise GPS location data and route monitoring."
  },
  {
    icon: Route,
    title: "Route Optimization",
    description: "AI-powered route planning to minimize fuel costs and reduce travel time for maximum efficiency."
  },
  {
    icon: Users,
    title: "Passenger Management",
    description: "Complete passenger database with booking history, preferences, and communication tools."
  },
  {
    icon: Clock,
    title: "Schedule Management",
    description: "Dynamic scheduling system with automated adjustments based on traffic and conditions."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Comprehensive analytics dashboard with detailed reports on performance and operations."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Automated alerts for delays, maintenance needs, and important operational updates."
  },
  {
    icon: Smartphone,
    title: "Mobile App Integration",
    description: "Native mobile apps for drivers and passengers with offline capability."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Advanced security features with full compliance to transportation regulations."
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Seamless payment processing with multiple payment methods and digital ticketing."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern Transport
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your bus fleet efficiently and provide excellent service to your passengers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-card transition-all duration-300 group hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;