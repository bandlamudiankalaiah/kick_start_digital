import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  FileCode2, 
  Star,
  Zap,
  Globe
} from 'lucide-react';
import { AGENCY_INFO, SERVICES } from '../data/agencyData';

interface FooterProps {
  onOpenAudit: () => void;
  onOpenDossier: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAudit,
  onOpenDossier,
  onScrollToSection,
}) => {
  return (
    <footer 
      id="main-footer" 
      aria-label="Kickstart Digital Footer" 
      className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800"
    >
      {/* Top CTA Banner in Footer */}
      <div className="border-b border-slate-800 py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Ready to Accelerate Your Digital Growth?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Speak directly with our senior New Zealand strategists and developers.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              id="footer-open-audit-btn"
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors border border-slate-700 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-indigo-400" />
              <span>Instant Site Audit</span>
            </button>
            <button
              id="footer-get-proposal-btn"
              onClick={() => onScrollToSection('enquiry-form')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-lg shadow-indigo-600/25 cursor-pointer"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-600/30">
                <span className="font-extrabold text-base text-white">
                  K
                </span>
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight block">
                  KICKSTART<span className="text-indigo-400">.</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 block">
                  Digital Marketing & Web Agency
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We design custom high-converting WordPress websites and engineer high-ROAS Google & Meta paid media funnels for ambitious brands across New Zealand and Australasia.
            </p>

            {/* Direct Contacts */}
            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{AGENCY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {AGENCY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white transition-colors">
                  {AGENCY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-dossier-link"
                onClick={onOpenDossier}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-950/40 hover:bg-indigo-900/60 text-indigo-300 border border-indigo-800/60 transition-colors text-xs font-semibold cursor-pointer"
              >
                <FileCode2 className="w-4 h-4 text-indigo-400" />
                <span>Developer Assessment Dossier (Jana & Lakshmi)</span>
              </button>
            </div>
          </div>

          {/* Growth Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onScrollToSection('services')}
                    className="text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Proof Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company & Proof
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onScrollToSection('why-us')} className="text-slate-400 hover:text-white transition-colors">
                  Why Choose Kickstart
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('case-studies')} className="text-slate-400 hover:text-white transition-colors">
                  Client Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('process')} className="text-slate-400 hover:text-white transition-colors">
                  Our 4-Step Process
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('roi-calculator')} className="text-slate-400 hover:text-white transition-colors">
                  Interactive ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('testimonials')} className="text-slate-400 hover:text-white transition-colors">
                  Google Reviews (4.9★)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('faq')} className="text-slate-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Assessment & Direct Reviewers */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Hiring Team Contacts
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-[11px] text-slate-400">Assessment Submitted for:</div>
              <div className="text-xs font-bold text-white">Jana & Lakshmi</div>
              <div className="text-[11px] text-indigo-400 font-semibold">
                Kickstart Digital New Zealand
              </div>
              <div className="pt-1 text-[11px] text-slate-400 border-t border-slate-800 space-y-1">
                <div>• Option 1: Conversion Landing Page</div>
                <div>• Built with React 19 + TypeScript</div>
                <div>• Custom WordPress Parity Architected</div>
              </div>
            </div>
          </div>

        </div>

        {/* Accreditations Strip */}
        <div className="pt-10 mt-10 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            {AGENCY_INFO.accreditations.map((acc, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                <span>{acc}</span>
              </span>
            ))}
          </div>

          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Kickstart Digital Ltd. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
