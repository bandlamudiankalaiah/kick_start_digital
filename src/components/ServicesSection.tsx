import React, { useState } from 'react';
import { 
  Code2, 
  Target, 
  Search, 
  Megaphone, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ChevronRight,
  Zap,
  X
} from 'lucide-react';
import { SERVICES } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
  onOpenAudit: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEnquiry,
  onOpenAudit,
}) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section 
      id="services" 
      aria-label="Kickstart Digital Growth Services" 
      className="py-16 md:py-24 bg-slate-950 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full-Funnel Commercial Capabilities</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Integrated Growth Services Built to Maximize ROI
          </h2>
          
          <p className="text-base text-slate-400 leading-relaxed font-normal">
            We do not sell isolated vanity tactics. We connect high-converting custom website architecture with ruthless paid acquisition and technical SEO to build a scalable revenue engine.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-lg hover:border-indigo-500/50 hover:shadow-indigo-950/30 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-5">
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 text-indigo-400 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-indigo-500/40 transition-all">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-indigo-400">
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Deliverables Checklist (first 3) */}
                <div className="pt-2 border-t border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Core Deliverables:
                  </span>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Metric Highlight Box */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">
                      Target Outcome
                    </span>
                    <span className="text-sm font-extrabold text-white block">
                      {service.metricsHighlight}
                    </span>
                  </div>
                  {service.startingFrom && (
                    <span className="text-xs font-semibold text-slate-400">
                      {service.startingFrom}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center gap-2">
                <button
                  id={`service-detail-btn-${service.id}`}
                  onClick={() => setSelectedServiceModal(service)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  id={`service-enquire-btn-${service.id}`}
                  onClick={() => onSelectServiceForEnquiry(service.title)}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                  title="Enquire about this service"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Hook */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Not sure which service mix will drive the fastest ROI?
            </h4>
            <p className="text-sm text-slate-400">
              Request a free 360° digital presence audit. We will analyze your website, keywords, and competitors.
            </p>
          </div>
          <button
            id="services-bottom-audit-cta"
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/25 whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Claim Free Digital Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-800 max-h-[90vh] overflow-y-auto space-y-6 relative text-slate-200">
            <button
              id="close-service-modal-btn"
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 text-indigo-400 flex items-center justify-center">
                {getIcon(selectedServiceModal.icon)}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  {selectedServiceModal.badge}
                </span>
                <h3 id="service-modal-title" className="text-2xl font-bold text-white tracking-tight">
                  {selectedServiceModal.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {selectedServiceModal.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Ideal Client Profile
              </span>
              <p className="text-xs text-slate-300 font-medium">
                {selectedServiceModal.idealFor}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Full Deliverables & Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedServiceModal.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study Snippet */}
            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-start gap-3">
              <Zap className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white block">
                  Proven Case Proof: {selectedServiceModal.caseStudySnippet.client}
                </span>
                <p className="text-xs text-indigo-300 mt-0.5">
                  {selectedServiceModal.caseStudySnippet.result}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div>
                <span className="text-xs text-slate-400 block">Investment Guide</span>
                <span className="text-base font-bold text-white">
                  {selectedServiceModal.startingFrom || 'Custom Quote'}
                </span>
              </div>
              <button
                id="modal-enquire-this-service-btn"
                onClick={() => {
                  onSelectServiceForEnquiry(selectedServiceModal.title);
                  setSelectedServiceModal(null);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-lg shadow-indigo-600/25 transition-colors cursor-pointer"
              >
                <span>Enquire About This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
