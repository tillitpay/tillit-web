import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
const ROICalculator = () => {
  const [cashiers, setCashiers] = useState(2);
  const [spaceFreed, setSpaceFreed] = useState(300);

  // Fixed values
  const yearlySalaryPerCashier = 30000;
  const revenuePerSqFt = 300;

  // Calculate savings
  const laborSavings = cashiers * yearlySalaryPerCashier;
  const spaceSavings = spaceFreed * revenuePerSqFt;
  const totalSavings = laborSavings + spaceSavings;
  return <div className="mt-16 max-w-6xl mx-auto">
      <Card className="p-8 md:p-12 bg-muted border-2 border-primary/20">
        <div className="text-center mb-10">
          <h3 className="font-sans text-3xl md:text-4xl font-bold mb-4">
            ROI Calculator
          </h3>
          <p className="text-lg text-muted-foreground">
            Adjust the sliders to see your potential savings
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="cashiers" className="text-base font-semibold">
                Cashiers Reduced
              </Label>
              <span className="text-2xl font-bold text-primary">{cashiers}</span>
            </div>
            <Slider id="cashiers" min={0} max={10} step={1} value={[cashiers]} onValueChange={value => setCashiers(value[0])} className="w-full" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="spaceFreed" className="text-base font-semibold">
                Space Freed (sq ft)
              </Label>
              <span className="text-2xl font-bold text-primary">{spaceFreed}</span>
            </div>
            <Slider id="spaceFreed" min={0} max={1000} step={50} value={[spaceFreed]} onValueChange={value => setSpaceFreed(value[0])} className="w-full" />
          </div>
        </div>

        <div className="border-t-2 border-primary/20 pt-8">
          <div className="bg-primary p-8 rounded-xl text-primary-foreground">
            <div className="text-center">
              <div className="text-lg opacity-90 mb-2">Total Estimated Annual Savings</div>
              <div className="text-5xl md:text-6xl font-bold">
                ${totalSavings.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>;
};
export default ROICalculator;