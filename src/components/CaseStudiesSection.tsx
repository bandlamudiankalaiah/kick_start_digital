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
      className="py-16 md:py-24 bg-zinc-50/60 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Proven Commercial Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Real Revenue Growth. Real New Zealand Businesses.
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed font-normal">
            Take a look behind the scenes of our recent client campaigns. Here is how our custom WordPress engineering and growth funnels drive measurable enterprise ROI.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCases.map((study) => (
            <div
              key={study.id}
              id={`case-card-${study.id}`}
              className="bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header & Highlight */}
              <div className="p-6 sm:p-7 space-y-5">
                
                {/* Client Logo / Industry Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded bg-zinc-950 text-white">
                    {study.logoText}
                  </span>
                  <span className="text-[11px] font-medium text-zinc-600">
                    {study.industry}
                  </span>
                </div>

                {/* Main Hero Metric Highlight */}
                <div className="p-4 rounded-xl bg-zinc-950 text-white space-y-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 block tracking-tight">
                    {study.heroMetric}
                  </span>
                  <span className="text-xs font-medium text-zinc-300 block">
                    {study.heroMetricLabel}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {study.summary}
                </p>

                {/* Secondary Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-2 pt-1 border-t border-zinc-100">
                  {study.secondaryMetrics.map((sec, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-zinc-50 border border-zinc-100 text-center">
                      <span className="text-xs font-bold text-zinc-900 block">{sec.value}</span>
                      <span className="text-[10px] text-zinc-600 block leading-tight">{sec.label}</span>
                    </div>
                  ))}
                </div>

                {/* Client Quote Highlight */}
                <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-zinc-700 italic space-y-1">
                  <Quote className="w-3.5 h-3.5 text-emerald-600" />
                  <p className="line-clamp-2">"{study.testimonial.quote}"</p>
                  <div className="text-[10px] font-bold text-zinc-900 not-italic">
                    — {study.testimonial.author}
                  </div>
                </div>

              </div>

              {/* Card Footer CTA */}
              <div className="p-6 sm:p-7 pt-0 border-t border-zinc-100 mt-2">
                <button
                  id={`view-case-study-${study.id}`}
                  onClick={() => setSelectedCaseModal(study)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold transition-colors cursor-pointer"
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
          >
            <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-zinc-200 max-h-[90vh] overflow-y-auto space-y-6 relative">
              <button
                id="close-case-modal-btn"
                onClick={() => setSelectedCaseModal(null)}
                className="absolute top-5 right-5 p-2 text-zinc-600 hover:text-zinc-900 rounded-xl hover:bg-zinc-100 transition-colors"
                aria-label="Close case study modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-zinc-950 text-white">
                    {selectedCaseModal.logoText}
                  </span>
                  <span className="text-xs font-semibold text-emerald-800">
                    {selectedCaseModal.industry}
                  </span>
                </div>
                <h3 id="case-modal-title" className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                  {selectedCaseModal.client}: {selectedCaseModal.heroMetric} {selectedCaseModal.heroMetricLabel}
                </h3>
              </div>

              {/* Key Metrics Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-950 text-white">
                <div className="p-3 text-center">
                  <span className="text-2xl font-extrabold text-emerald-400 block">{selectedCaseModal.heroMetric}</span>
                  <span className="text-xs text-zinc-400">{selectedCaseModal.heroMetricLabel}</span>
                </div>
                {selectedCaseModal.secondaryMetrics.map((sec, i) => (
                  <div key={i} className="p-3 text-center border-t sm:border-t-0 sm:border-l border-zinc-800">
                    <span className="text-2xl font-extrabold text-white block">{sec.value}</span>
                    <span className="text-xs text-zinc-400">{sec.label}</span>
                  </div>
                ))}
              </div>

              {/* Challenge Breakdown */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
                  The Initial Challenge
                </h4>
                <p className="text-sm text-zinc-700 leading-relaxed bg-zinc-50 p-4 rounded-xl border border-zinc-200">
                  {selectedCaseModal.challenge}
                </p>
              </div>

              {/* Strategy & Execution */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
                  Kickstart Digital Strategy & Execution
                </h4>
                <div className="space-y-2">
                  {selectedCaseModal.strategy.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Results */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
                  Documented Commercial Results
                </h4>
                <div className="space-y-2">
                  {selectedCaseModal.results.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800 p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 font-medium">
                      <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              <div className="p-5 rounded-2xl bg-zinc-900 text-white space-y-2">
                <Quote className="w-5 h-5 text-emerald-400" />
                <p className="text-sm text-zinc-200 italic leading-relaxed">
                  "{selectedCaseModal.testimonial.quote}"
                </p>
                <div className="text-xs text-zinc-400 font-semibold pt-1">
                  — {selectedCaseModal.testimonial.author}, {selectedCaseModal.testimonial.role}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-200">
                <span className="text-xs text-zinc-600">
                  Ready to replicate these results for your business?
                </span>
                <button
                  id="modal-get-results-plan-btn"
                  onClick={() => {
                    setSelectedCaseModal(null);
                    onScrollToEnquiry();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition-colors cursor-pointer"
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
