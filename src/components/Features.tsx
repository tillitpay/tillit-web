import { Card } from "@/components/ui/card";
import TypingAnimation from "./TypingAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import phoneIcon from "@/assets/phone-icon.png";
import packageIcon from "@/assets/package-icon.png";
import cardIcon from "@/assets/card-icon.png";
import megaphoneIcon from "@/assets/megaphone-icon.png";
import growthIcon from "@/assets/growth-icon.png";
import userIcon from "@/assets/user-icon.png";
const features = [{
  icon: phoneIcon,
  title: "Mobile POS",
  description: "Customers scan and pay instantly from either their phones or on your store's device. No checkout lines, no waiting.",
  isImage: true
}, {
  icon: packageIcon,
  title: "Inventory Management",
  description: "Real-time stock tracking and inventory management. Always know what's on your shelves.",
  isImage: true
}, {
  icon: cardIcon,
  title: "Payment Processing",
  description: "Accept all major cards, mobile wallets like Apple Pay and Google Pay, and buy-now-pay-later options.",
  isImage: true
}, {
  icon: growthIcon,
  title: "Sales Analytics",
  description: "View comprehensive reporting and insights within your own custom dashboard. Make data-driven and AI-powered decisions for your business.",
  isImage: true
}, {
  icon: userIcon,
  title: "Customer Engagement",
  description: "Build customer profiles with purchase history, preferences, and loyalty programs to maximize in-store conversions.",
  isImage: true
}, {
  icon: megaphoneIcon,
  title: "Targeted Advertising",
  description: "Engage customers on their devices in-store by reaching out to them with personalized offers based on shopping behavior and preferences.",
  isImage: true
}];
const Features = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return <section ref={ref} className={`py-24 bg-secondary/30 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Your Next{" "}
            <TypingAnimation words={["Cashier", "Sales Associate", "Merchandiser", "Accountant", "Marketer"]} typingSpeed={120} deletingSpeed={80} delayBetweenWords={2000} />
          </h2>
          <p className="text-xl text-muted-foreground">
            tillit combines all of the essential retail tools you need into one seamless, intuitive platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 bg-card">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <img src={feature.icon} alt={feature.title} className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Features;