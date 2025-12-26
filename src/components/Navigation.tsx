import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/optimized/logo.webp";
import GetStartedModal from "@/components/GetStartedModal";

const Navigation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      // Navigate to home page with the section hash
      navigate(`/#${sectionId}`);
    } else {
      // Smooth scroll to section on the same page
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <GetStartedModal open={modalOpen} onOpenChange={setModalOpen} />
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-lg border-b border-primary-glow/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-1 cursor-pointer" onClick={handleLogoClick}>
            <img src={logo} alt="Tillit" className="w-16 h-16" />
            <span className="text-2xl font-display font-bold tracking-tight text-primary-foreground">Tillit</span>
          </div>
          
          <div className="hidden md:flex items-center gap-14">
            <a 
              href="/#features" 
              onClick={(e) => handleNavClick(e, 'features')}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
              Features
            </a>
            <a 
              href="/#pricing" 
              onClick={(e) => handleNavClick(e, 'pricing')}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
              Pricing
            </a>
            <a 
              href="/#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium"
            >
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
