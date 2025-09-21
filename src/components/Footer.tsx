import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">BT</span>
              </div>
              <span className="text-xl font-bold">BusTrack Pro</span>
            </div>
            <p className="text-primary-foreground/90 max-w-sm">
              Leading bus transport management system helping companies optimize their fleet operations 
              and improve passenger services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Fleet Management</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Route Planning</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Passenger Services</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Analytics Dashboard</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Mobile Apps</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">News</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">System Status</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 BusTrack Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;