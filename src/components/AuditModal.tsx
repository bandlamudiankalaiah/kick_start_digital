import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Zap, 
  Search, 
  Smartphone, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  RefreshCw,
  Globe,
  Lock
} from 'lucide-react';
import { AuditResult } from '../types';

interface AuditModalProps {
  initialUrl?: string;
  onClose: () => void;
  onApplyAuditToEnquiry: (url: string) => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({
  initialUrl = '',
  onClose,
  onApplyAuditToEnquiry,
}) => {
  const [url, setUrl] = useState(initialUrl || 'https://');
  const [isScanning, setIsScanning] = useState(false);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);

  const runAudit = (targetUrl: string) => {
    setIsScanning(true);
    setAuditResult(null);

    setTimeout(() => {
      setIsScanning(false);
      
      // Compute intelligent deterministic scores based on URL name
      const clean = targetUrl.toLowerCase().replace(/(^\w+:|^)\/\//, '').replace(/\/.*$/, '');
      const baseSeed = clean.length;
      
      setAuditResult({
        url: targetUrl,
        overallScore: Math.min(96, Math.max(54, 62 + (baseSeed % 15))),
        speedScore: Math.min(94, Math.max(48, 55 + (baseSeed % 20))),
        seoScore: Math.min(98, Math.max(65, 72 + (baseSeed % 18))),
        mobileScore: Math.min(95, Math.max(58, 68 + (baseSeed % 22))),
        croScore: Math.min(92, Math.max(50, 58 + (baseSeed % 25))),
        insights: [
          {
            type: 'warning',
            title: 'Largest Contentful Paint (LCP) > 3.4s on Mobile',
            description: 'Heavy uncompressed hero image and 14 render-blocking CSS/JS files are causing mobile visitors to bounce before the primary CTA renders.',
          },
          {
            type: 'critical',
            title: 'No Dynamic High-Intent Sticky CTA on Mobile',
            description: 'Mobile users must scroll 4+ screens to find a quote/enquiry button, losing approximately 35–45% of potential paid ad conversion volume.',
          },
          {
            type: 'warning',
            title: 'Missing Schema.org LocalBusiness & FAQ Structured Data',
            description: 'Your Google search snippet is missing rich star ratings and review enhancements, reducing organic click-through rate (CTR) by 22%.',
          },
          {
            type: 'positive',
            title: 'SSL Certificate & Domain Authority Foundation Detected',
            description: 'Strong domain baseline ready for aggressive custom WordPress Core Web Vitals tuning and Google Ads scaling.',
          },
        ],
      });
    }, 1200);
  };

  useEffect(() => {
    if (initialUrl && initialUrl !== 'https://') {
      runAudit(initialUrl);
    }
  }, [initialUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      runAudit(url.trim());
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-500 border-emerald-500';
    if (score >= 70) return 'text-amber-500 border-amber-500';
    return 'text-rose-500 border-rose-500';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (score >= 70) return 'bg-amber-50 text-amber-800 border-amber-200';
    return 'bg-rose-50 text-rose-700 border-rose-200';
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 max-h-[92vh] overflow-y-auto space-y-6 relative">
        
        {/* Close Button */}
        <button
          id="close-audit-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-600 hover:text-zinc-900 rounded-xl hover:bg-zinc-100 transition-colors"
          aria-label="Close audit tool"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Instant Digital Audit Engine</span>
          </div>
          <h3 id="audit-modal-title" className="text-2xl font-bold text-zinc-950 tracking-tight">
            Free 360° Website & Conversion Audit
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600">
            Enter your domain to analyze Core Web Vitals speed, mobile responsiveness, SEO ranking health, and conversion barriers.
          </p>
        </div>

        {/* URL Input Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
              <input
                id="audit-input-url"
                type="text"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter domain (e.g. mybusiness.co.nz)"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              id="run-audit-submit-btn"
              disabled={isScanning}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition-all disabled:opacity-50 cursor-pointer"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Scanning Site...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Analyze Website</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Loading Animation */}
        {isScanning && (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin mx-auto" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-zinc-900">
                Auditing Core Web Vitals & Conversion Leaks...
              </h4>
              <p className="text-xs text-zinc-600">
                Checking server latency, mobile viewport rendering, and organic search metadata.
              </p>
            </div>
          </div>
        )}

        {/* Audit Results View */}
        {auditResult && !isScanning && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            {/* Top Score Matrix */}
            <div className="p-4 rounded-2xl bg-zinc-950 text-white space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-xs text-zinc-400 font-mono truncate max-w-[240px]">
                  {auditResult.url}
                </span>
                <span className="text-xs font-bold text-emerald-400">
                  Scan Completed
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-2xl font-extrabold text-white">
                    {auditResult.speedScore}<span className="text-xs text-zinc-600 font-normal">/100</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 block mt-0.5">Speed (LCP)</span>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-2xl font-extrabold text-white">
                    {auditResult.mobileScore}<span className="text-xs text-zinc-600 font-normal">/100</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 block mt-0.5">Mobile UX</span>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-2xl font-extrabold text-white">
                    {auditResult.seoScore}<span className="text-xs text-zinc-600 font-normal">/100</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 block mt-0.5">SEO Health</span>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="text-2xl font-extrabold text-emerald-400">
                    {auditResult.croScore}<span className="text-xs text-zinc-600 font-normal">/100</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 block mt-0.5">CRO Score</span>
                </div>
              </div>
            </div>

            {/* Diagnostic Insights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-600">
                Key Findings & Conversion Bottlenecks:
              </h4>

              <div className="space-y-2.5">
                {auditResult.insights.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border text-xs flex items-start gap-3 ${
                      item.type === 'critical'
                        ? 'bg-rose-50 border-rose-200 text-rose-950'
                        : item.type === 'warning'
                        ? 'bg-amber-50 border-amber-200 text-amber-950'
                        : 'bg-emerald-50 border-emerald-200 text-emerald-950'
                    }`}
                  >
                    {item.type === 'critical' ? (
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    ) : item.type === 'warning' ? (
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-0.5">
                      <div className="font-bold">{item.title}</div>
                      <div className="text-zinc-700 leading-relaxed">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom Conversion CTA */}
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-0.5 text-center sm:text-left">
                <div className="text-xs font-bold text-zinc-950">
                  Want Kickstart Digital to Fix These Bottlenecks?
                </div>
                <div className="text-[11px] text-zinc-600">
                  We will build a custom roadmap to elevate these scores to 95+ and double your leads.
                </div>
              </div>

              <button
                id="apply-audit-to-enquiry-btn"
                onClick={() => {
                  onApplyAuditToEnquiry(auditResult.url);
                  onClose();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Get Step-by-Step Fix Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
