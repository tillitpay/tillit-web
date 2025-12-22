import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import GetStartedModal from "@/components/GetStartedModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  const products = [{
    id: 1,
    name: "Apple",
    emoji: "🍎",
    price: "$2.99"
  }, {
    id: 2,
    name: "Banana",
    emoji: "🍌",
    price: "$1.49"
  }, {
    id: 3,
    name: "Milk",
    emoji: "🥛",
    price: "$3.99"
  }, {
    id: 4,
    name: "Bread",
    emoji: "🍞",
    price: "$2.49"
  }, {
    id: 5,
    name: "Eggs",
    emoji: "🥚",
    price: "$4.99"
  }, {
    id: 6,
    name: "Coffee",
    emoji: "☕",
    price: "$5.99"
  }, {
    id: 7,
    name: "Orange",
    emoji: "🍊",
    price: "$3.49"
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % products.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [products.length]);
  return <>
      <GetStartedModal open={modalOpen} onOpenChange={setModalOpen} />
      <section ref={ref} className={`relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Staggered Wave Background */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          {/* Bottom wave - darkest */}
          <path d="M0,400 Q300,500 600,400 T1200,400 L1200,800 L0,800 Z" 
            fill="hsl(var(--primary))" 
            opacity="0.25"
            className="mix-blend-multiply" />
          
          {/* Middle-bottom wave */}
          <path d="M0,450 Q250,350 500,450 T1000,450 T1500,450 L1200,800 L0,800 Z" 
            fill="hsl(var(--primary))" 
            opacity="0.22"
            className="mix-blend-multiply" />
          
          {/* Middle wave */}
          <path d="M0,350 Q200,450 400,350 T800,350 T1200,350 L1200,800 L0,800 Z" 
            fill="hsl(var(--secondary))" 
            opacity="0.18"
            className="mix-blend-multiply" />
          
          {/* Middle-top wave */}
          <path d="M0,300 Q350,400 700,300 T1400,300 L1200,800 L0,800 Z" 
            fill="hsl(var(--accent))" 
            opacity="0.15"
            className="mix-blend-multiply" />
          
          {/* Top wave - lightest */}
          <path d="M0,250 Q300,350 600,250 T1200,250 L1200,800 L0,800 Z" 
            fill="hsl(var(--muted))" 
            opacity="0.12"
            className="mix-blend-multiply" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12 text-center lg:text-left pt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" strokeWidth={2.5} />
              The Future of Retail
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight pt-8">Say hello to <span className="text-primary">Tillit.</span>
            </h1>
            
            <div className="space-y-8 pt-12">
              <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl py-0">Eliminate checkout lines and expensive hardware, reduce labor costs, and maximize retail space with Tillit's all-in-one mobile POS solution.</p>
              
              <div className="flex justify-center lg:justify-start">
                <Button size="lg" onClick={() => setModalOpen(true)} className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" strokeWidth={2.5} />
                </Button>
              </div>
            </div>
            
            
          </div>
          
          <div className="relative h-[600px] flex items-center justify-center">
            {/* iPhone Mockup */}
            <div className="relative z-20">
              <div className="relative w-[280px] h-[560px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-3xl z-10"></div>
                
                {/* Screen */}
                <div className="relative w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Camera View Background */}
                  <div className="absolute inset-0 bg-muted rounded-[2.5rem]"></div>
                  
                  {/* Carousel Items - Inside the phone screen */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-visible">
                    {products.map((product, index) => {
                      let position = index - currentIndex;

                      // Handle wrap-around for seamless loop
                      if (position > products.length / 2) {
                        position -= products.length;
                      } else if (position < -products.length / 2) {
                        position += products.length;
                      }
                      const offset = position * 280;
                      const centerDistance = Math.abs(position);
                      const scale = centerDistance === 0 ? 1 : Math.max(0.4, 0.7 - centerDistance * 0.15);
                      const opacity = centerDistance === 0 ? 1 : Math.max(0, 0.3 - centerDistance * 0.15);
                      const rotation = position * 15;
                      return <div key={product.id} className="absolute transition-all duration-700 ease-in-out" style={{
                        transform: `translateX(${offset}px) scale(${scale}) rotateY(${rotation}deg)`,
                        opacity: opacity,
                        zIndex: centerDistance === 0 ? 15 : Math.max(1, 10 - centerDistance)
                      }}>
                          <div className="bg-card border-2 border-border rounded-2xl p-4 shadow-lg backdrop-blur-sm w-24 h-32 flex flex-col items-center justify-center">
                            <div className="text-5xl mb-1">{product.emoji}</div>
                            <p className="text-xs font-semibold text-foreground text-center">
                              {product.name}
                            </p>
                            <p className="text-xs text-primary font-bold mt-1">
                              {product.price}
                            </p>
                          </div>
                        </div>;
                    })}
                  </div>
                  
                  {/* Scanner Overlay - On top of items */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <div className="relative w-48 h-48">
                      {/* Corner brackets */}
                      <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
                    </div>
                  </div>

                  {/* Scan instruction text */}
                  <div className="absolute bottom-8 left-0 right-0 text-center z-20">
                    <p className="text-sm font-medium text-foreground/80">
                      Position item in frame
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>;
};
export default Hero;