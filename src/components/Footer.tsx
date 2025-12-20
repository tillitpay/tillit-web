import logo from "@/assets/optimized/logo.webp";
const Footer = () => {
  return <footer id="contact" className="bg-secondary/30 border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-16 mb-6">
          <div>
            <div className="flex items-center gap-0 mb-4">
              <img src={logo} alt="tillit" className="w-24 h-24" />
              <span className="font-display font-bold text-3xl">tillit</span>
            </div>
            
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
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
        </div>
        
        <div className="pt-6 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; 2025 tillit. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;