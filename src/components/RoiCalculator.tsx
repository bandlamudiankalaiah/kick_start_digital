import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  DollarSign, 
  Users, 
  Percent, 
  Zap,
  CheckCircle2
} from 'lucide-react';

interface RoiCalculatorProps {
  onApplyCalculatedPlan: (details: {
    visitors: number;
    conversionRate: number;
    dealValue: number;
    projectedGain: number;
  }) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onApplyCalculatedPlan }) => {
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(8500);
  const [currentConversionRate, setCurrentConversionRate] = useState<number>(1.8);
  const [averageDealValue, setAverageDealValue] = useState<number>(650);

  // Calculations
  const currentLeads = Math.round((monthlyVisitors * currentConversionRate) / 100);
  const currentRevenue = currentLeads * averageDealValue;

  // With Kickstart Digital: conservative +65% conversion rate lift via custom WordPress & CRO
  const optimizedConversionRate = Number((currentConversionRate * 1.65).toFixed(1));
  const optimizedLeads = Math.round((monthlyVisitors * optimizedConversionRate) / 100);
  const optimizedRevenue = optimizedLeads * averageDealValue;

  const monthlyRevenueGain = optimizedRevenue - currentRevenue;
  const annualRevenueGain = monthlyRevenueGain * 12;
  const leadIncrease = optimizedLeads - currentLeads;

  const handleClaimPlan = () => {
    onApplyCalculatedPlan({
      visitors: monthlyVisitors,
      conversionRate: currentConversionRate,
      dealValue: averageDealValue,
      projectedGain: annualRevenueGain,
    });
  };

  return (
    <section 
      id="roi-calculator" 
      aria-label="Interactive ROI & Growth Calculator"
      className="py-16 md:py-24 bg-gradient-to-b from-zinc-50 to-white border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Growth Forecasting Tool</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Calculate Your Revenue Upside With Kickstart Digital
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed font-normal">
            See how much additional revenue your business could unlock by upgrading from a slow legacy site to our high-converting custom WordPress architecture and performance funnels.
          </p>
        </div>

        {/* Calculator Widget Container */}
        <div className="bg-white rounded-3xl border-2 border-zinc-200 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Interactive Sliders */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <span className="text-sm font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-600" />
                  Your Current Website Metrics
                </span>
                <span className="text-xs text-zinc-600 font-medium">
                  Adjust sliders to match your traffic
                </span>
              </div>

              {/* Slider 1: Monthly Visitors */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="roi-visitors-slider" className="text-sm font-semibold text-zinc-800 flex items-center gap-2">
                    <Users className="w-4 h-4 text-zinc-600" />
                    Monthly Website Visitors
                  </label>
                  <span className="text-base font-bold text-zinc-950 bg-zinc-100 px-3 py-1 rounded-lg">
                    {monthlyVisitors.toLocaleString()} /mo
                  </span>
                </div>
                <input
                  id="roi-visitors-slider"
                  type="range"
                  min="1000"
                  max="100000"
                  step="500"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-zinc-600 font-medium">
                  <span>1,000</span>
                  <span>50,000</span>
                  <span>100,000+</span>
                </div>
              </div>

              {/* Slider 2: Conversion Rate */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="roi-conversion-slider" className="text-sm font-semibold text-zinc-800 flex items-center gap-2">
                    <Percent className="w-4 h-4 text-zinc-600" />
                    Current Website Conversion Rate
                  </label>
                  <span className="text-base font-bold text-zinc-950 bg-zinc-100 px-3 py-1 rounded-lg">
                    {currentConversionRate}%
                  </span>
                </div>
                <input
                  id="roi-conversion-slider"
                  type="range"
                  min="0.5"
                  max="6.0"
                  step="0.1"
                  value={currentConversionRate}
                  onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-zinc-600 font-medium">
                  <span>0.5% (Low)</span>
                  <span>2.0% (Average NZ)</span>
                  <span>6.0% (High)</span>
                </div>
              </div>

              {/* Slider 3: Average Deal / Order Value */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="roi-deal-value-slider" className="text-sm font-semibold text-zinc-800 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-zinc-600" />
                    Average Deal / Order Value (NZD)
                  </label>
                  <span className="text-base font-bold text-zinc-950 bg-zinc-100 px-3 py-1 rounded-lg">
                    ${averageDealValue.toLocaleString()}
                  </span>
                </div>
                <input
                  id="roi-deal-value-slider"
                  type="range"
                  min="50"
                  max="10000"
                  step="50"
                  value={averageDealValue}
                  onChange={(e) => setAverageDealValue(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-zinc-600 font-medium">
                  <span>$50 (E-com)</span>
                  <span>$2,500 (Trades/Services)</span>
                  <span>$10,000+ (Enterprise)</span>
                </div>
              </div>

              {/* Real-time comparison snapshot */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
                  <span className="text-[11px] text-zinc-600 font-medium">Current Monthly Leads/Orders</span>
                  <span className="text-lg font-bold text-zinc-800 block">{currentLeads}</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
                  <span className="text-[11px] text-zinc-600 font-medium">Current Monthly Revenue</span>
                  <span className="text-lg font-bold text-zinc-800 block">${currentRevenue.toLocaleString()}</span>
                </div>
              </div>

            </div>

            {/* Right Column: Projected ROI Output & High-Conversion CTA */}
            <div className="lg:col-span-5 bg-zinc-950 text-white p-6 sm:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Kickstart Projected Impact
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Projected Revenue Growth
                  </h3>
                </div>

                {/* Big Hero Projected Gain Number */}
                <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                    Estimated Annual Revenue Surge
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">
                    +${annualRevenueGain.toLocaleString()}{' '}
                    <span className="text-xs text-zinc-400 font-normal">NZD / yr</span>
                  </div>
                  <div className="text-xs text-zinc-300 flex items-center gap-1.5 pt-1">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>+${monthlyRevenueGain.toLocaleString()} extra revenue every single month</span>
                  </div>
                </div>

                {/* Breakdown Stats */}
                <div className="space-y-2.5 text-xs text-zinc-300">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                    <span className="text-zinc-400">Optimized Conversion Rate:</span>
                    <span className="font-bold text-white">{optimizedConversionRate}% (+65% lift)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                    <span className="text-zinc-400">Projected Extra Leads/Month:</span>
                    <span className="font-bold text-emerald-400">+{leadIncrease} qualified inquiries</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                    <span className="text-zinc-400">Core Web Vitals Target:</span>
                    <span className="font-bold text-white">&lt; 1.0s LCP (Green)</span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="space-y-3 pt-4 border-t border-zinc-800">
                <button
                  id="claim-roi-plan-btn"
                  onClick={handleClaimPlan}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-xs tracking-wide transition-all shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
                >
                  <span>Claim This Custom Growth Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-zinc-400">
                  Free audit & 30-min strategy session included with no obligation.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
