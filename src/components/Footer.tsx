import logo from "@/assets/optimized/logo.webp";
import { Facebook, Instagram } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
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

  return <footer id="contact" className="bg-secondary/30 border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-16 mb-6">
          <div>
            <div className="flex items-center gap-0 mb-4 cursor-pointer" onClick={handleLogoClick}>
              <img src={logo} alt="Tillit" className="w-24 h-24" />
              <span className="font-display font-bold text-3xl">Tillit</span>
            </div>
            
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a 
                  href="/#features" 
                  onClick={(e) => handleNavClick(e, 'features')}
                  className="hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="/#pricing" 
                  onClick={(e) => handleNavClick(e, 'pricing')}
                  className="hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-muted-foreground">
              For sales inquiries:
            </p>
            <a href="mailto:sales@tillitpay.com" className="text-primary hover:text-primary/80 transition-colors font-medium">
              sales@tillitpay.com
            </a>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://www.facebook.com/profile.php?id=61585614960823" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/tillitpay/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Tillit. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;