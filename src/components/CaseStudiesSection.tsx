import React, { useState } from 'react';
import { 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Quote, 
  Sparkles, 
  X, 
  ExternalLink,
  Zap,
  BarChart3
} from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy } from '../types';

interface CaseStudiesSectionProps {
  onScrollToEnquiry: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onScrollToEnquiry }) => {
  const [selectedCaseModal, setSelectedCaseModal] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const industries = ['All', 'Commercial Construction', 'Sustainable E-Commerce', 'Healthcare'];

  const filteredCases = activeFilter === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(c => c.industry.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(c.industry.toLowerCase()));

  return (
    <section 
      id="case-studies" 
      aria-label="Client Case Studies & Verified Results" 
      className="py-16 md:py-24 bg-slate-950 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20">
            <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Proven Commercial Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real Revenue Growth. Real New Zealand Businesses.
          </h2>

          <p className="text-base text-slate-400 leading-relaxed font-normal">
            Take a look behind the scenes of our recent client campaigns. Here is how our custom WordPress engineering and growth funnels drive measurable enterprise ROI.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCases.map((study) => (
            <div
              key={study.id}
              id={`case-card-${study.id}`}
              className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl hover:border-indigo-500/40 hover:shadow-indigo-950/20 transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header & Highlight */}
              <div className="p-6 sm:p-7 space-y-5">
                
                {/* Client Logo / Industry Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-indigo-400">
                    {study.logoText}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {study.industry}
                  </span>
                </div>

                {/* Main Hero Metric Highlight */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-white space-y-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-indigo-400 block tracking-tight">
                    {study.heroMetric}
                  </span>
                  <span className="text-xs font-medium text-slate-300 block">
                    {study.heroMetricLabel}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {study.summary}
                </p>

                {/* Secondary Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-800/80">
                  {study.secondaryMetrics.map((sec, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-center">
                      <span className="text-xs font-bold text-white block">{sec.value}</span>
                      <span className="text-[10px] text-slate-400 block leading-tight">{sec.label}</span>
                    </div>
                  ))}
                </div>

                {/* Client Quote Highlight */}
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-slate-300 italic space-y-1">
                  <Quote className="w-3.5 h-3.5 text-indigo-400" />
                  <p className="line-clamp-2">"{study.testimonial.quote}"</p>
                  <div className="text-[10px] font-bold text-indigo-300 not-italic">
                    — {study.testimonial.author}
                  </div>
                </div>

              </div>

              {/* Card Footer CTA */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-800/80 mt-2">
                <button
                  id={`view-case-study-${study.id}`}
                  onClick={() => setSelectedCaseModal(study)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Detailed Modal */}
        {selectedCaseModal && (
          <div 
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
          >
            <div className="bg-slate-900 rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-slate-800 max-h-[90vh] overflow-y-auto space-y-6 relative text-slate-200">
              <button
                id="close-case-modal-btn"
                onClick={() => setSelectedCaseModal(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
                aria-label="Close case study modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-indigo-400">
                    {selectedCaseModal.logoText}
                  </span>
                  <span className="text-xs font-semibold text-indigo-300">
                    {selectedCaseModal.industry}
                  </span>
                </div>
                <h3 id="case-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {selectedCaseModal.client}: {selectedCaseModal.heroMetric} {selectedCaseModal.heroMetricLabel}
                </h3>
              </div>

              {/* Key Metrics Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white">
                <div className="p-3 text-center">
                  <span className="text-2xl font-extrabold text-indigo-400 block">{selectedCaseModal.heroMetric}</span>
                  <span className="text-xs text-slate-400">{selectedCaseModal.heroMetricLabel}</span>
                </div>
                {selectedCaseModal.secondaryMetrics.map((sec, i) => (
                  <div key={i} className="p-3 text-center border-t sm:border-t-0 sm:border-l border-slate-800">
                    <span className="text-2xl font-extrabold text-white block">{sec.value}</span>
                    <span className="text-xs text-slate-400">{sec.label}</span>
                  </div>
                ))}
              </div>

              {/* Challenge Breakdown */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  The Initial Challenge
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                  {selectedCaseModal.challenge}
                </p>
              </div>

              {/* Strategy & Execution */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Kickstart Digital Strategy & Execution
                </h4>
                <div className="space-y-2">
                  {selectedCaseModal.strategy.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Results */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Documented Commercial Results
                </h4>
                <div className="space-y-2">
                  {selectedCaseModal.results.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-indigo-200 p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 font-medium">
                      <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-white space-y-2">
                <Quote className="w-5 h-5 text-indigo-400" />
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "{selectedCaseModal.testimonial.quote}"
                </p>
                <div className="text-xs text-slate-400 font-semibold pt-1">
                  — {selectedCaseModal.testimonial.author}, {selectedCaseModal.testimonial.role}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-400">
                  Ready to replicate these results for your business?
                </span>
                <button
                  id="modal-get-results-plan-btn"
                  onClick={() => {
                    setSelectedCaseModal(null);
                    onScrollToEnquiry();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-lg shadow-indigo-600/25 transition-colors cursor-pointer"
                >
                  <span>Request a Custom Growth Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
