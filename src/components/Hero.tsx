import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBus from "@/assets/hero-bus.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-16 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 lg:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Smart Bus Transport
              <span className="block text-accent-light">Management System</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
              Streamline your fleet operations with real-time tracking, route optimization, 
              and passenger management in one comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroBus} 
                alt="Modern bus transport system"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-card">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Active Routes</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-card">
              <div className="text-2xl font-bold text-accent">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;