import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { TrendingUp, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
import ScrollRevealText from "./ScrollRevealText";

export default function ROICalculator() {
  const [traffic, setTraffic] = useState<number>(25000);
  const [conversion, setConversion] = useState<number>(1.2);
  const [orderValue, setOrderValue] = useState<number>(8500);

  // High-performance sites average a 2.5x lift in conversions due to < 1.5s load times and elite UX
  const multiplier = 2.5;

  const currentRevenue = useMemo(() => {
    return Math.round(traffic * (conversion / 100) * orderValue);
  }, [traffic, conversion, orderValue]);

  const optimizedConversion = useMemo(() => {
    return Math.min(parseFloat((conversion * multiplier).toFixed(2)), 12);
  }, [conversion]);

  const optimizedRevenue = useMemo(() => {
    return Math.round(traffic * (optimizedConversion / 100) * orderValue);
  }, [traffic, optimizedConversion, orderValue]);

  const revenueLift = useMemo(() => {
    return optimizedRevenue - currentRevenue;
  }, [optimizedRevenue, currentRevenue]);

  // Format currency in Indian Rupees
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="roi-estimator" className="py-24 px-6 bg-[#f7f6f2] relative overflow-hidden border-t border-neutral-200">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a2e23]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-200/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-16 items-start">
          
          {/* Left Column: Context & Pitch */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a2e23]/70 mb-4 block">Interactive ROI Estimator</span>
            <ScrollRevealText>
              <h2 className="text-4xl md:text-5xl font-playfair font-normal text-neutral-900 mb-6 italic leading-tight text-reveal text-reveal-target">
                Measure the cost of a slow website.
              </h2>
              <p className="text-neutral-500 font-medium leading-relaxed mb-8 text-reveal text-reveal-target">
                Slow page load times and standard DIY template layouts leak up to 60% of potential conversions. Use our calculator to see how much revenue you are leaving on the table compared to a custom GDG-certified Xforge rebuild.
              </p>
            </ScrollRevealText>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="p-2.5 rounded-xl bg-[#1a2e23]/10 text-[#1a2e23]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">Under-1.5s Load Speed Impact</h4>
                  <p className="text-xs text-neutral-500 font-medium mt-1">Every 100ms delay in load time decreases conversion rates by 7% on mobile systems.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="p-2.5 rounded-xl bg-[#1a2e23]/10 text-[#1a2e23]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">Conversion Redesign Uplift</h4>
                  <p className="text-xs text-neutral-500 font-medium mt-1">Strategic, focused UX paths built with high-contrast display typography establish maximum credibility instantly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Widget */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.02)]">
            <div className="space-y-8">
              
              {/* Slider 1: Traffic */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-neutral-800 uppercase tracking-wider">Monthly Traffic</label>
                  <span className="font-mono text-base font-bold text-[#1a2e23] bg-[#1a2e23]/5 px-3 py-1 rounded-lg">
                    {traffic.toLocaleString()} visitors
                  </span>
                </div>
                <input 
                  type="range" 
                  min="2000" 
                  max="150000" 
                  step="1000"
                  value={traffic} 
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-[#1a2e23]"
                />
                <div className="flex justify-between text-[10px] font-bold text-neutral-400 mt-2 uppercase tracking-widest">
                  <span>2,000</span>
                  <span>150,000 visitors/mo</span>
                </div>
              </div>

              {/* Slider 2: Current Conversion */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-neutral-800 uppercase tracking-wider">Current Conversion Rate</label>
                  <span className="font-mono text-base font-bold text-[#1a2e23] bg-[#1a2e23]/5 px-3 py-1 rounded-lg">
                    {conversion}%
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0.2" 
                  max="5.0" 
                  step="0.1"
                  value={conversion} 
                  onChange={(e) => setConversion(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-[#1a2e23]"
                />
                <div className="flex justify-between text-[10px] font-bold text-neutral-400 mt-2 uppercase tracking-widest">
                  <span>0.2% (Low)</span>
                  <span>5.0% (Strong)</span>
                </div>
              </div>

              {/* Slider 3: Average Order Value */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-neutral-800 uppercase tracking-wider">Average Customer Value (AOV / CLV)</label>
                  <span className="font-mono text-base font-bold text-[#1a2e23] bg-[#1a2e23]/5 px-3 py-1 rounded-lg">
                    {formatCurrency(orderValue)}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="500"
                  value={orderValue} 
                  onChange={(e) => setOrderValue(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-[#1a2e23]"
                />
                <div className="flex justify-between text-[10px] font-bold text-neutral-400 mt-2 uppercase tracking-widest">
                  <span>Rs 1,000</span>
                  <span>Rs 50,000</span>
                </div>
              </div>

              {/* Results Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-neutral-100">
                <div className="p-6 rounded-2xl bg-neutral-50/50 border border-neutral-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">Current Estimate</span>
                  <div className="text-2xl font-bold text-neutral-700 font-mono mb-2">
                    {formatCurrency(currentRevenue)}
                  </div>
                  <span className="text-xs text-neutral-500 font-medium">At standard {conversion}% signup conversion rate.</span>
                </div>

                <div className="p-6 rounded-2xl bg-[#1a2e23]/[0.02] border border-[#1a2e23]/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 bg-[#1a2e23]/10 rounded-bl-2xl text-[#1a2e23]">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a2e23] block mb-1">Xforge Optimized</span>
                  <div className="text-2xl font-bold text-[#1a2e23] font-mono mb-2">
                    {formatCurrency(optimizedRevenue)}
                  </div>
                  <span className="text-xs text-neutral-600 font-medium">At {optimizedConversion}% conversion rate (2.5x lift guaranteed).</span>
                </div>
              </div>

              {/* Impact Callout Block */}
              <div className="bg-[#1a2e23] text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-12 -translate-y-12" />
                
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 block mb-1">Estimated Monthly Revenue Lift</span>
                  <div className="text-3xl md:text-4xl font-mono font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-8 h-8 text-[#5cb85c]" />
                    {formatCurrency(revenueLift)}
                  </div>
                  <p className="text-xs text-white/70 font-medium mt-2 max-w-sm">
                    Redesigning your portal or landing page pays for itself in just the first few weeks of increased performance.
                  </p>
                </div>

                <a 
                  href="#contact"
                  className="flex items-center gap-2 bg-white text-neutral-900 px-6 py-3.5 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all text-sm group whitespace-nowrap"
                >
                  Claim Your Uplift
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
