import React, { useState } from 'react';
import { 
  Search, 
  Layout, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

interface ProcessSectionProps {
  onScrollToEnquiry: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onScrollToEnquiry }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5" />;
      case 1:
        return <Layout className="w-5 h-5" />;
      case 2:
        return <Code2 className="w-5 h-5" />;
      case 3:
        return <Rocket className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section 
      id="process" 
      aria-label="How We Work / Our Proven Process" 
      className="py-16 md:py-24 bg-white border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold border border-zinc-200">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>The 4-Step Revenue Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            How We Take You From Stagnant Traffic to Scalable Revenue
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed font-normal">
            No guesswork, no vague promises. We follow an agile, battle-tested 4-phase deployment system designed for rapid execution and measurable commercial impact.
          </p>
        </div>

        {/* Interactive Step Switcher for Mobile & Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={idx}
              id={`process-step-tab-${idx}`}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                activeStepIndex === idx
                  ? 'bg-zinc-950 text-white border-zinc-950 shadow-md ring-2 ring-emerald-500/30'
                  : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-800 border-zinc-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                  activeStepIndex === idx ? 'bg-zinc-800 text-emerald-400' : 'bg-zinc-200 text-zinc-700'
                }`}>
                  STEP {step.step}
                </span>
                <span className={`text-[11px] font-medium ${
                  activeStepIndex === idx ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {step.timeframe}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tight line-clamp-1">
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="bg-zinc-50 rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 text-emerald-400 flex items-center justify-center shadow-xs">
                  {getStepIcon(activeStepIndex)}
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                    Phase {PROCESS_STEPS[activeStepIndex].step} · {PROCESS_STEPS[activeStepIndex].timeframe}
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                    {PROCESS_STEPS[activeStepIndex].title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-zinc-700 leading-relaxed">
                {PROCESS_STEPS[activeStepIndex].description}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-600">
                  Key Deliverables in this Phase:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PROCESS_STEPS[activeStepIndex].deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-zinc-800 p-2.5 rounded-lg bg-white border border-zinc-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Summary Box / CTA */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 shadow-sm space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 block">
                  Kickstart Quality Standard
                </span>
                <h4 className="text-base font-bold text-zinc-950">
                  Zero Developer Hand-Off Surprises
                </h4>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed">
                Every project is tracked in a transparent real-time client board with weekly video briefings so you are never left wondering what is happening with your investment.
              </p>

              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-1.5 text-xs text-zinc-700">
                <div className="font-semibold text-zinc-900">What happens on Day 1?</div>
                <div>We schedule your 60-min Deep Dive Strategy Call and begin your complete competitive teardown within 24 hours.</div>
              </div>

              <button
                id="process-start-project-cta"
                onClick={onScrollToEnquiry}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <span>Start Your Phase 1 Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
