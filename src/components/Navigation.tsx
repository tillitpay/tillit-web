import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import GetStartedModal from "@/components/GetStartedModal";

const Navigation = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <GetStartedModal open={modalOpen} onOpenChange={setModalOpen} />
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-lg border-b border-primary-glow/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-1">
            <img src={logo} alt="tillit" className="w-16 h-16" />
            <span className="text-2xl font-display font-bold tracking-tight text-primary-foreground">tillit</span>
          </div>
          
          <div className="hidden md:flex items-center gap-14">
            <a href="#features" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium">
              Features
            </a>
            <a href="#pricing" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium">
              Pricing
            </a>
            <a href="#contact" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium">
              Contact
            </a>
          </div>
          
          <div className="flex items-center">
            <Button 
              onClick={() => setModalOpen(true)}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navigation;
