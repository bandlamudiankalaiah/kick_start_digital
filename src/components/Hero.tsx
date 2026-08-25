import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  Star, 
  Zap, 
  Shield, 
  Calculator,
  Search
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface HeroProps {
  onOpenAudit: (initialUrl?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onScrollToSection }) => {
  const [quickAuditUrl, setQuickAuditUrl] = useState('');

  const handleQuickAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickAuditUrl.trim()) {
      onOpenAudit(quickAuditUrl.trim());
    } else {
      onOpenAudit();
    }
  };

  return (
    <section 
      id="hero" 
      aria-label="Kickstart Digital Hero Section"
      className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-slate-950 border-b border-slate-800"
    >
      {/* Subtle Ambient Background */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Category Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-slate-300">New Zealand’s Revenue-First Growth Agency</span>
            <span className="text-slate-700">|</span>
            <span className="text-indigo-400 font-semibold flex items-center gap-1">
              <Zap className="w-3 h-3" /> Core Web Vitals 95+
            </span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & High-Intent CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.15]">
              Turn Search & Ad Traffic Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200 underline decoration-indigo-500 decoration-4 underline-offset-4">Profitable Revenue</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              We design custom, sub-second <strong className="text-slate-200 font-semibold">WordPress websites</strong> and execute high-ROAS <strong className="text-slate-200 font-semibold">Google & Paid Media campaigns</strong> engineered with one ruthless objective: predictable, compounding bottom-line growth.
            </p>

            {/* Live Instant Website Quick Audit Input Bar */}
            <div className="pt-2">
              <form 
                onSubmit={handleQuickAuditSubmit} 
                className="max-w-xl mx-auto lg:mx-0 bg-slate-900 p-2 rounded-2xl border border-slate-700 shadow-xl hover:border-slate-600 focus-within:border-indigo-500 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <div className="relative flex-1 w-full">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      id="hero-quick-audit-input"
                      type="text"
                      value={quickAuditUrl}
                      onChange={(e) => setQuickAuditUrl(e.target.value)}
                      placeholder="Enter your website URL (e.g. mybusiness.co.nz)"
                      className="w-full pl-10 pr-3 py-2.5 text-sm bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    id="hero-run-quick-audit-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20 cursor-pointer whitespace-nowrap"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Run Free Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="px-2 pt-2 pb-0.5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>⚡ Instant analysis of speed, SEO & conversion leaks</span>
                  <span className="hidden sm:inline font-medium text-emerald-400">100% Free · No obligation</span>
                </div>
              </form>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                id="hero-get-proposal-btn"
                onClick={() => onScrollToSection('enquiry-form')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all group cursor-pointer"
              >
                <span>Get Free Growth Proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-roi-calc-btn"
                onClick={() => onScrollToSection('roi-calculator')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 shadow-sm transition-colors cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-indigo-400" />
                <span>Calculate Your ROI</span>
              </button>
            </div>

            {/* Confidence & Risk-Reversal Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-left">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No Lock-In Retainers</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sub-Second Page Loads</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Senior NZ Specialists</span>
              </div>
            </div>

          </div>

          {/* Right Column: Commercial Proof Card & Verified Metrics */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Card Framing */}
              <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-2xl border border-slate-800 space-y-6 relative overflow-hidden">
                
                {/* Background Accent Glow */}
                <div 
                  aria-hidden="true" 
                  className="absolute -right-16 -top-16 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" 
                />

                {/* Header of Proof Card */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Verified Client Performance
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    Live Data
                  </span>
                </div>

                {/* Main Metric Spotlight */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {AGENCY_INFO.stats.averageLeadIncrease}
                    </span>
                    <span className="text-xs font-semibold text-indigo-400 flex items-center gap-0.5">
                      <TrendingUp className="w-3.5 h-3.5" /> High Intent
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Average qualified lead increase within 90 days of new custom WordPress + Search deployment.
                  </p>
                </div>

                {/* Secondary Key Metric Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-2xl font-bold text-white block">
                      {AGENCY_INFO.stats.averageRoas}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 block">
                      Average Return on Ad Spend
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-2xl font-bold text-indigo-400 block">
                      {AGENCY_INFO.stats.totalRevenueGenerated}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 block">
                      Client Pipeline Generated
                    </span>
                  </div>
                </div>

                {/* Micro Review / Proof Snippet */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Google Review 4.9/5
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 italic">
                    "Our corporate quote requests doubled in the first month alone. PageSpeed went from 38 to 98."
                  </p>
                  <div className="text-[11px] text-slate-400 font-medium">
                    — David H., CEO at Vanguard Logistics NZ
                  </div>
                </div>

                {/* Mini Trust Footer */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-indigo-400" />
                    Google Premier Partner 2026
                  </span>
                  <span>Auckland · Christchurch</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
