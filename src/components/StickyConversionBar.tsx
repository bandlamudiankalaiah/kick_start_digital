import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Phone, 
  FileCode2, 
  X, 
  ChevronUp 
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface StickyConversionBarProps {
  onOpenAudit: () => void;
  onOpenDossier: () => void;
  onScrollToEnquiry: () => void;
}

export const StickyConversionBar: React.FC<StickyConversionBarProps> = ({
  onOpenAudit,
  onOpenDossier,
  onScrollToEnquiry,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <aside 
      id="sticky-conversion-bar"
      aria-label="Quick Conversion Floating Bar"
      className="fixed bottom-4 left-4 right-4 z-40 max-w-5xl mx-auto animate-in slide-in-from-bottom-5 fade-in duration-300 pointer-events-auto"
    >
      <div className="bg-zinc-950/95 backdrop-blur-md text-white px-4 py-3 sm:px-6 sm:py-3.5 rounded-2xl border border-zinc-800 shadow-2xl flex items-center justify-between gap-4">
        
        {/* Left Value Prompt */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <span className="text-xs font-bold text-white block truncate">
              Claim Your Free $1,200 Growth & Performance Audit
            </span>
            <span className="text-[11px] text-zinc-400 hidden sm:block">
              Zero lock-in contracts · Dedicated senior NZ strategists
            </span>
          </div>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            id="sticky-audit-btn"
            onClick={onOpenAudit}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-semibold border border-zinc-700 transition-colors cursor-pointer"
          >
            <span>Run Site Audit</span>
          </button>

          <button
            id="sticky-get-proposal-btn"
            onClick={onScrollToEnquiry}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-extrabold transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            <span>Get Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            id="sticky-dossier-btn"
            onClick={onOpenDossier}
            className="hidden lg:inline-flex items-center gap-1 px-2.5 py-2 rounded-xl bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 text-xs font-medium border border-amber-800 transition-colors cursor-pointer"
            title="Reviewer Assessment Dossier"
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span>Dossier</span>
          </button>

          <button
            id="sticky-dismiss-btn"
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-zinc-600 hover:text-zinc-300 rounded-lg hover:bg-zinc-800 transition-colors ml-1"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
};
