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
        className="bg-zinc-950 text-zinc-300 text-xs py-2 px-4 border-b border-zinc-800 flex items-center justify-between"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-[11px] border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Accepting Q2/Q3 Client Intakes
            </span>
            <span className="hidden sm:inline text-zinc-400">
              New Zealand’s High-Performance Digital Marketing & WordPress Agency
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              id="header-dossier-pill"
              onClick={onOpenDossier}
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer bg-amber-950/40 px-2.5 py-0.5 rounded border border-amber-800/60"
              title="View Developer Assessment Technical Dossier & Notes for Jana & Lakshmi"
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>Assessment Dossier (Jana & Lakshmi)</span>
            </button>
            <a
              href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`}
              className="hidden md:inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
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
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200/80 py-3'
            : 'bg-white border-b border-zinc-100 py-4'
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  K
                </span>
              </div>
              <div>
                <span className="text-lg font-bold text-zinc-950 tracking-tight block leading-tight">
                  KICKSTART<span className="text-emerald-600">.</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-zinc-600 block">
                  Digital NZ
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-600">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className="hover:text-zinc-950 transition-colors cursor-pointer py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-200"></span>
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-free-audit-btn"
              onClick={() => onOpenAudit()}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors border border-zinc-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Free Site Audit
            </button>

            <button
              id="header-primary-enquiry-btn"
              onClick={() => onScrollToSection('enquiry-form')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-950 text-white hover:bg-zinc-800 transition-all shadow-sm hover:shadow group cursor-pointer"
            >
              <span>Get Growth Proposal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-700 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-dropdown-menu"
            className="lg:hidden bg-white border-b border-zinc-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl"
          >
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 text-left"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-600" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2.5">
              <button
                id="mobile-audit-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border border-zinc-300 text-zinc-800 hover:bg-zinc-50"
              >
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Run Instant Website Audit
              </button>

              <button
                id="mobile-enquiry-btn"
                onClick={() => handleNavClick('enquiry-form')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-zinc-950 text-white hover:bg-zinc-800"
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
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200"
              >
                <FileCode2 className="w-3.5 h-3.5 text-amber-700" />
                <span>Developer Assessment Dossier</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
