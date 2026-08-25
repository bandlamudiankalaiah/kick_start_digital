import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  ArrowRight, 
  Menu, 
  X, 
  FileCode2, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface HeaderProps {
  onOpenAudit: (initialUrl?: string) => void;
  onOpenDossier: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAudit,
  onOpenDossier,
  onScrollToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'Process', id: 'process' },
    { label: 'ROI Calculator', id: 'roi-calculator' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Notification / Trust Bar */}
      <aside 
        id="top-announcement-bar"
        aria-label="Agency Announcement"
        className="bg-slate-950 text-slate-400 text-xs py-2 px-4 border-b border-slate-800 flex items-center justify-between"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-[11px] border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Accepting Q2/Q3 Client Intakes
            </span>
            <span className="hidden sm:inline text-slate-400">
              New Zealand’s High-Performance Digital Marketing & WordPress Agency
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              id="header-dossier-pill"
              onClick={onOpenDossier}
              className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer bg-indigo-500/10 px-2.5 py-0.5 rounded-md border border-indigo-500/30"
              title="View Developer Assessment Technical Dossier & Notes for Jana & Lakshmi"
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>Assessment Dossier (Jana & Lakshmi)</span>
            </button>
            <a
              href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`}
              className="hidden md:inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-indigo-400" />
              <span>{AGENCY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header
        id="main-navigation-header"
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800 py-3'
            : 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              id="logo-button"
              onClick={() => onScrollToSection('hero')}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-xl italic shadow-md shadow-indigo-500/20 group-hover:bg-indigo-500 transition-colors duration-200">
                <span>K</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight block leading-tight">
                  Kickstart <span className="text-indigo-400 font-semibold">Digital</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 block">
                  New Zealand
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className="hover:text-white transition-colors cursor-pointer py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-200"></span>
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-free-audit-btn"
              onClick={() => onOpenAudit()}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 bg-slate-900 border border-slate-700 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Free Site Audit
            </button>

            <button
              id="header-primary-enquiry-btn"
              onClick={() => onScrollToSection('enquiry-form')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 group cursor-pointer"
            >
              <span>Get Proposal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-dropdown-menu"
            className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl"
          >
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white text-left"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                id="mobile-audit-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-700 text-slate-200 hover:bg-slate-800 bg-slate-900/60"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Run Instant Website Audit
              </button>

              <button
                id="mobile-enquiry-btn"
                onClick={() => handleNavClick('enquiry-form')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                <span>Request Growth Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="mobile-dossier-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDossier();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30"
              >
                <FileCode2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Developer Assessment Dossier</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
