import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Radio, ArrowRight, ShoppingBag, TrendingUp, User } from "lucide-react";
import GetStartedModal from "@/components/GetStartedModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const PaymentFlexibility = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragStartX.current = clientX;
    dragCurrentX.current = clientX;
  };
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragCurrentX.current = clientX;
  };
  const handleDragEnd = () => {
    if (!isDragging) return;
    const diff = dragCurrentX.current - dragStartX.current;
    if (Math.abs(diff) > 50) {
      // Swipe left (negative diff) = go to next screen
      if (diff < 0 && currentScreen === 0) {
        setCurrentScreen(1);
      }
      // Swipe right (positive diff) = go to previous screen
      else if (diff > 0 && currentScreen === 1) {
        setCurrentScreen(0);
      }
    }
    setIsDragging(false);
  };
  return <>
      <GetStartedModal open={modalOpen} onOpenChange={setModalOpen} />
      <section ref={ref} className={`py-24 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Empower</span> Your Employees
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* iPhone Mockup - Left Column */}
            <div className="relative flex flex-col items-center justify-center gap-6">
              <div className="text-center">
                
                <p className="text-lg font-medium text-foreground">← Swipe to explore →</p>
              </div>
              <div className="relative z-20">
                <div className="relative w-[280px] h-[560px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-3xl z-10"></div>
                  
                  {/* Screen - Swipeable */}
                  <div className="relative w-full h-full bg-background rounded-[2.5rem] overflow-hidden cursor-grab active:cursor-grabbing select-none" onMouseDown={handleDragStart} onMouseMove={handleDragMove} onMouseUp={handleDragEnd} onMouseLeave={handleDragEnd} onTouchStart={handleDragStart} onTouchMove={handleDragMove} onTouchEnd={handleDragEnd}>
                    <div className="flex h-full transition-transform duration-300 ease-out" style={{
                    width: '200%',
                    transform: `translateX(-${currentScreen * 50}%)`
                  }}>
                      {/* Screen 1: Payment Interface */}
                      <div className="w-1/2 h-full flex-shrink-0 relative">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-primary/5 to-background">
                          <div className="absolute top-12 left-0 right-0 text-center px-6">
                            <p className="text-xs text-muted-foreground mb-2">Amount Due</p>
                            <p className="text-4xl font-bold text-foreground">$24.97</p>
                          </div>

                          <div className="relative">
                            <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center animate-pulse">
                              <Radio className="w-14 h-14 text-primary-foreground" strokeWidth={2.5} />
                            </div>
                            <div className="absolute inset-0 w-28 h-28 border-4 border-primary/30 rounded-full animate-ping"></div>
                          </div>

                          <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                            <p className="text-xs text-muted-foreground">
                              Tap card or hold phone near device
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Screen 2: Customer Profile */}
                      <div className="w-1/2 h-full flex-shrink-0 flex flex-col items-center justify-center p-5 bg-background">
                        <div className="w-full max-w-[240px] space-y-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-6 h-6 text-primary" />
                            </div>
                            <div className="min-w-0">
                              <h3 className="font-semibold text-sm text-foreground truncate">Sarah Johnson</h3>
                              <p className="text-xs text-muted-foreground">Gold Member</p>
                            </div>
                          </div>

                          <div className="bg-card border border-border rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <ShoppingBag className="w-4 h-4 text-primary flex-shrink-0" />
                              <h4 className="text-xs font-semibold text-foreground">Recent Purchases</h4>
                            </div>
                            <div className="space-y-1 text-xs text-muted-foreground">
                              <p>• Organic Coffee Beans - $18.99</p>
                              <p>• Almond Milk - $4.50</p>
                              <p>• Dark Chocolate - $6.25</p>
                            </div>
                          </div>

                          <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                              <h4 className="text-xs font-semibold text-foreground">AI Recommendations</h4>
                            </div>
                            <div className="space-y-1 text-xs text-foreground/80">
                              <p>• New seasonal blend available</p>
                              <p>• Upsell on premium dark chocolate</p>
                              <p>• Bundle discount on coffee + milk</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Both Sections Stacked */}
            <div className="space-y-6">
              {/* Section 1: Quick Payment */}
              <Card className="p-6 border-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4">Process Payments From Anywhere</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Customers can't pay with their own device? Sales associates can scan items with the tillit store app, enabling customers to pay in seconds using tap-to-pay with contactless cards or mobile wallets so you can keep your lines moving.
                </p>
                
              </Card>

              {/* Section 2: Customer Insights */}
              <Card className="p-6 border-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4">AI-Powered Customer Insights</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  View detailed customer profiles with purchase history and AI-driven predictions about what they might want next. Empower your team with intelligent recommendations to increase sales and provide personalized service.
                </p>
                
              </Card>

              <div className="flex justify-end mt-8">
                <Button onClick={() => setModalOpen(true)} size="lg" className="group w-full">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default PaymentFlexibility;