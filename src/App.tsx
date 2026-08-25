import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { RoiCalculator } from './components/RoiCalculator';
import { ProcessSection } from './components/ProcessSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { EnquiryForm } from './components/EnquiryForm';
import { Footer } from './components/Footer';
import { StickyConversionBar } from './components/StickyConversionBar';
import { AuditModal } from './components/AuditModal';
import { AssessmentDossierModal } from './components/AssessmentDossierModal';

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [auditInitialUrl, setAuditInitialUrl] = useState('');
  const [dossierModalOpen, setDossierModalOpen] = useState(false);
  
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [calculatorState, setCalculatorState] = useState<{
    visitors: number;
    conversionRate: number;
    dealValue: number;
    projectedGain: number;
  } | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenAudit = (initialUrl?: string) => {
    setAuditInitialUrl(initialUrl || '');
    setAuditModalOpen(true);
  };

  const handleSelectServiceForEnquiry = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    scrollToSection('enquiry-form');
  };

  const handleApplyCalculatedPlan = (details: {
    visitors: number;
    conversionRate: number;
    dealValue: number;
    projectedGain: number;
  }) => {
    setCalculatorState(details);
    scrollToSection('enquiry-form');
  };

  const handleApplyAuditToEnquiry = (url: string) => {
    setAuditModalOpen(false);
    scrollToSection('enquiry-form');
    // Pre-populate URL if needed
    const websiteInput = document.getElementById('enquiry-website') as HTMLInputElement | null;
    if (websiteInput) {
      websiteInput.value = url;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* Primary Header Navigation */}
      <Header
        onOpenAudit={handleOpenAudit}
        onOpenDossier={() => setDossierModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Main Conversion Layout */}
      <main id="main-content">
        
        {/* 1. Hero Section with Live Quick Audit Bar */}
        <Hero
          onOpenAudit={handleOpenAudit}
          onScrollToSection={scrollToSection}
        />

        {/* 2. Accreditations & Verified Aggregate Metrics */}
        <TrustTicker />

        {/* 3. High-Converting Growth Services */}
        <ServicesSection
          onSelectServiceForEnquiry={handleSelectServiceForEnquiry}
          onOpenAudit={() => handleOpenAudit()}
        />

        {/* 4. The Commercial Advantage / Why Us Matrix */}
        <WhyUsSection />

        {/* 5. Interactive ROI & Revenue Growth Calculator */}
        <RoiCalculator
          onApplyCalculatedPlan={handleApplyCalculatedPlan}
        />

        {/* 6. The 4-Step Revenue Engine Process */}
        <ProcessSection
          onScrollToEnquiry={() => scrollToSection('enquiry-form')}
        />

        {/* 7. Documented Case Studies & Real NZ Results */}
        <CaseStudiesSection
          onScrollToEnquiry={() => scrollToSection('enquiry-form')}
        />

        {/* 8. 4.9★ Google Reviews & Video Proof */}
        <TestimonialsSection />

        {/* 9. Objection-Handling FAQ Accordion */}
        <FaqSection
          onScrollToEnquiry={() => scrollToSection('enquiry-form')}
        />

        {/* 10. Multi-Step Interactive Enquiry & Growth Proposal Form */}
        <EnquiryForm
          preselectedService={preselectedService}
          calculatorState={calculatorState}
        />

      </main>

      {/* Primary Footer */}
      <Footer
        onOpenAudit={() => handleOpenAudit()}
        onOpenDossier={() => setDossierModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Sticky Conversion Floating Bar (Appears on scroll) */}
      <StickyConversionBar
        onOpenAudit={() => handleOpenAudit()}
        onOpenDossier={() => setDossierModalOpen(true)}
        onScrollToEnquiry={() => scrollToSection('enquiry-form')}
      />

      {/* Free Instant Website Audit Analyzer Modal */}
      {auditModalOpen && (
        <AuditModal
          initialUrl={auditInitialUrl}
          onClose={() => setAuditModalOpen(false)}
          onApplyAuditToEnquiry={handleApplyAuditToEnquiry}
        />
      )}

      {/* Developer Assessment Technical Dossier for Jana & Lakshmi */}
      {dossierModalOpen && (
        <AssessmentDossierModal
          onClose={() => setDossierModalOpen(false)}
        />
      )}

    </div>
  );
}
