import { Card } from "@/components/ui/card";
import ROICalculator from "./ROICalculator";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import dollarIcon from "@/assets/optimized/dollar-icon.webp";
import rulerIcon from "@/assets/optimized/ruler-icon.webp";
import userIcon from "@/assets/optimized/user-icon.webp";
import decreaseIcon from "@/assets/optimized/decrease-icon.webp";
const savingsData = [
  {
    icon: userIcon,
    title: "Fewer Cashiers Needed",
    amount: "$30,000",
    description: "Average annual salary saved per cashier reduced",
    color: "primary",
    isImage: true,
  },
  {
    icon: rulerIcon,
    title: "Maximize Retail Space",
    amount: "10%",
    description: "Average increase in floor space for inventory instead of checkout counters",
    color: "accent",
    isImage: true,
  },
  {
    icon: decreaseIcon,
    title: "Reduced Checkout Time",
    amount: "67%",
    description: "Average decrease in time for customers to checkout",
    color: "primary",
    isImage: true,
  },
  {
    icon: dollarIcon,
    title: "Lower Costs",
    amount: "90%",
    description: "Average lower implementation and usage costs compared to traditional POS",
    color: "accent",
    isImage: true,
  },
];
const Savings = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className={`py-24 bg-primary/5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Save Money From <span className="text-primary">Day One</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            tillit pays for itself by eliminating costly checkout infrastructure and reducing labor expenses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {savingsData.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 bg-card border-2 hover:border-primary/30"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                <img src={item.icon} alt={item.title} className="w-11 h-11" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{item.amount}</div>

              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <ROICalculator />
      </div>
    </section>
  );
};
export default Savings;
