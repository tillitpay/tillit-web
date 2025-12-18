import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import storeIcon from "@/assets/store-icon.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import GetStartedModal from "@/components/GetStartedModal";
const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <GetStartedModal open={modalOpen} onOpenChange={setModalOpen} />
      <section
        ref={ref}
        className={`py-24 bg-secondary/30 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        id="pricing"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">
              No hidden fees. No surprise charges. Just straightforward pricing that scales with your business.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-8 md:p-10 border-2 hover:border-primary/50 transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Platform Fee</h3>
                <div className="mb-2">
                  <div className="text-5xl font-bold text-primary mb-1">$99</div>
                  <div className="text-lg text-muted-foreground">per month / per store</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <span>Mobile self-checkout POS system</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <span>Store associate POS system</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <span>Unlimited users and devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <span>Inventory management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <span>Customer insights & marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <span>AI-powered sales analytics & reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <span>White-glove implementation support</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 md:p-10 border-2 hover:border-primary/50 transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Transaction Fees</h3>
                <div className="space-y-5">
                  <div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold text-primary">2.70%</span>
                      <span className="text-2xl font-bold text-primary">+ 15¢</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Tap with Card</div>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold text-primary">2.90%</span>
                      <span className="text-2xl font-bold text-primary">+ 30¢</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Scan & Pay</div>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold text-primary">5.99%</span>
                      <span className="text-2xl font-bold text-primary">+ 30¢</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Buy Now Pay Later</div>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <span>Accepts all major credit & debit cards</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <span>Accepts digital wallets (Apple Pay, Google Pay)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <span>Supports next-day deposits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <span>PCI compliant & secure</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="max-w-5xl mx-auto mt-8 p-6 md:p-8 bg-primary/10 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                <img src={storeIcon} alt="Store" className="w-20 h-20" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold mb-2">Are you an enterprise or large business?</h4>
                <p className="text-muted-foreground">Reach out to us for custom pricing and solutions.</p>
              </div>
              <Button size="lg" onClick={() => setModalOpen(true)} className="bg-primary hover:bg-primary/90">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" strokeWidth={2.5} />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};
export default Pricing;
