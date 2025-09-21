import { Card, CardContent } from "@/components/ui/card";
import { Award, Users2, Globe, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users2,
    number: "10,000+",
    label: "Happy Customers",
    description: "Transport companies trust our platform"
  },
  {
    icon: Globe,
    number: "50+",
    label: "Cities Served",
    description: "Operating across multiple regions"
  },
  {
    icon: TrendingUp,
    number: "99.9%",
    label: "System Uptime",
    description: "Reliable service you can count on"
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Industry expertise and innovation"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Leading the Future of Transport Management
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 15 years of experience in the transportation industry, we understand the challenges 
              faced by fleet operators. Our comprehensive platform combines cutting-edge technology with 
              practical solutions to streamline operations and improve efficiency.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From small local operators to large transport corporations, our system scales to meet your 
              needs while maintaining the highest standards of reliability and security.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-primary p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary-foreground">24/7</div>
                <div className="text-sm text-primary-foreground/90">Support Available</div>
              </div>
              <div className="bg-gradient-accent p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-accent-foreground">ISO</div>
                <div className="text-sm text-accent-foreground/90">Certified Platform</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;