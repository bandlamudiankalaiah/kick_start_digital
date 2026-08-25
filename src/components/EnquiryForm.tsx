import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Phone, 
  Mail, 
  ArrowRight,
  RefreshCw,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AGENCY_INFO } from '../data/agencyData';
import { EnquiryFormData } from '../types';

interface EnquiryFormProps {
  preselectedService?: string;
  calculatorState?: {
    visitors: number;
    conversionRate: number;
    dealValue: number;
    projectedGain: number;
  } | null;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  preselectedService,
  calculatorState,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    goal: preselectedService ? [preselectedService] : ['Custom WordPress & Web Development'],
    currentWebsite: '',
    monthlyBudget: '$2,500 – $5,000 NZD / mo',
    timeline: 'Within 2 to 4 weeks',
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [formError, setFormError] = useState<string | null>(null);

  const goalOptions = [
    'Custom WordPress & Web Development',
    'Google Ads & PPC Management',
    'SEO & Organic Search Rankings',
    'Meta & Social Paid Ads',
    'Conversion Rate Optimisation (CRO)',
    'High-Speed WordPress Care & Hosting',
  ];

  const budgetOptions = [
    'Under $2,500 NZD / mo',
    '$2,500 – $5,000 NZD / mo',
    '$5,000 – $10,000 NZD / mo',
    '$10,000+ NZD / mo',
  ];

  const timelineOptions = [
    'ASAP / Immediate',
    'Within 2 to 4 weeks',
    'Next 1 to 3 months',
    'Exploratory / Planning phase',
  ];

  const toggleGoal = (goal: string) => {
    if (formData.goal.includes(goal)) {
      if (formData.goal.length > 1) {
        setFormData({ ...formData, goal: formData.goal.filter((g) => g !== goal) });
      }
    } else {
      setFormData({ ...formData, goal: [...formData.goal, goal] });
    }
  };

  const handleNextStep = () => {
    setFormError(null);
    if (activeStep === 1) {
      if (formData.goal.length === 0) {
        setFormError('Please select at least one growth service.');
        return;
      }
      setActiveStep(2);
    } else if (activeStep === 2) {
      if (!formData.currentWebsite.trim()) {
        setFormError('Please provide your website URL (or write "New Website").');
        return;
      }
      setActiveStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormError('Please enter a valid business email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setFormError('Please enter your contact phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#14b8a6', '#0f172a', '#f59e0b'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 900);
  };

  return (
    <section 
      id="enquiry-form" 
      aria-label="Request a Growth Proposal" 
      className="py-16 md:py-24 bg-zinc-950 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 -right-32 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Offer Teardown & Trust */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero-Obligation Growth Strategy Call</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Turn Your Website Into a Predictable Revenue Machine?
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              Claim your free 360° Digital Growth Audit. We will analyze your website speed, conversion bottlenecks, competitor ad spend, and keyword opportunities—then deliver a step-by-step action plan.
            </p>

            {/* What you get checklist */}
            <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                Included in Your Free Consultation:
              </span>
              <ul className="space-y-2.5 text-xs text-zinc-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Comprehensive Core Web Vitals & technical speed audit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Competitor Google & Meta ad strategy breakdown</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>High-intent commercial keyword opportunity matrix</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Clear pricing & rolling month-to-month roadmap</span>
                </li>
              </ul>
            </div>

            {/* Direct Contact Reference */}
            <div className="pt-2 space-y-3">
              <div className="text-xs text-zinc-400">
                Prefer to email or speak directly?
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href={`mailto:${AGENCY_INFO.contacts.jana}`}
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center gap-2.5"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="font-semibold text-white block">Jana</span>
                    <span className="text-zinc-400 text-[11px] block truncate">{AGENCY_INFO.contacts.jana}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${AGENCY_INFO.contacts.lakshmi}`}
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center gap-2.5"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="font-semibold text-white block">Lakshmi</span>
                    <span className="text-zinc-400 text-[11px] block truncate">{AGENCY_INFO.contacts.lakshmi}</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-zinc-400 pt-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Average response time: <strong>under 2 hours</strong> during NZ business hours.</span>
            </div>

          </div>

          {/* Right Column: Multi-Step Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-zinc-950 rounded-3xl p-6 sm:p-10 shadow-2xl border border-zinc-200">
              
              {isSubmitted ? (
                /* Submission Confirmation */
                <div className="text-center py-10 space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Enquiry Received
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
                      Thank You, {formData.fullName.split(' ')[0]}!
                    </h3>
                    <p className="text-sm text-zinc-600 max-w-md mx-auto">
                      Our senior strategy team is already reviewing your website (<strong className="text-zinc-900">{formData.currentWebsite}</strong>). We will send your custom 360° growth audit and proposal to <strong className="text-zinc-900">{formData.email}</strong> shortly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 max-w-md mx-auto space-y-1">
                    <div className="font-bold text-zinc-900">What happens next?</div>
                    <div>1. We run deep technical and competitor scans on your domain.</div>
                    <div>2. Jana or Lakshmi will reach out to confirm your strategy call.</div>
                  </div>

                  <button
                    id="submit-another-enquiry-btn"
                    onClick={() => {
                      setIsSubmitted(false);
                      setActiveStep(1);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              ) : (
                /* Active Multi-Step Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Step Progress Header */}
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                    <div>
                      <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                        Step {activeStep} of 3
                      </span>
                      <h3 className="text-lg font-bold text-zinc-950">
                        {activeStep === 1 && 'Select Your Growth Focus'}
                        {activeStep === 2 && 'Your Website & Budget Scope'}
                        {activeStep === 3 && 'Your Contact & Scheduling Details'}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3].map((step) => (
                        <div
                          key={step}
                          className={`w-7 h-1.5 rounded-full transition-all ${
                            step <= activeStep ? 'bg-emerald-600' : 'bg-zinc-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Calculator Context Alert if passed */}
                  {calculatorState && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                      <span>🎯 Pre-loaded ROI Plan: Projected +${calculatorState.projectedGain.toLocaleString()} NZD/yr upside.</span>
                      <span className="font-bold text-emerald-700">Applied</span>
                    </div>
                  )}

                  {/* Step 1: Services Selection */}
                  {activeStep === 1 && (
                    <div className="space-y-4 animate-in fade-in duration-150">
                      <label className="text-xs font-semibold text-zinc-700 block">
                        Which areas would you like Kickstart Digital to help you with? (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {goalOptions.map((goal) => {
                          const isSelected = formData.goal.includes(goal);
                          return (
                            <button
                              type="button"
                              key={goal}
                              onClick={() => toggleGoal(goal)}
                              className={`p-3.5 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer flex items-center justify-between ${
                                isSelected
                                  ? 'bg-zinc-950 text-white border-zinc-950 shadow-sm'
                                  : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-800 border-zinc-200'
                              }`}
                            >
                              <span>{goal}</span>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                isSelected ? 'border-emerald-400 bg-emerald-500 text-zinc-950' : 'border-zinc-300'
                              }`}>
                                {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Website & Budget Scope */}
                  {activeStep === 2 && (
                    <div className="space-y-5 animate-in fade-in duration-150">
                      <div className="space-y-1.5">
                        <label htmlFor="enquiry-website" className="text-xs font-semibold text-zinc-800 block">
                          Current Website URL <span className="text-emerald-700">*</span>
                        </label>
                        <input
                          id="enquiry-website"
                          type="text"
                          required
                          value={formData.currentWebsite}
                          onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                          placeholder="e.g. mybusiness.co.nz (or 'New Project')"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="enquiry-budget" className="text-xs font-semibold text-zinc-800 block">
                          Estimated Monthly Growth Budget
                        </label>
                        <select
                          id="enquiry-budget"
                          value={formData.monthlyBudget}
                          onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-sm text-zinc-900 bg-white focus:outline-none focus:border-emerald-500"
                        >
                          {budgetOptions.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="enquiry-timeline" className="text-xs font-semibold text-zinc-800 block">
                          Target Launch / Start Timeline
                        </label>
                        <select
                          id="enquiry-timeline"
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-sm text-zinc-900 bg-white focus:outline-none focus:border-emerald-500"
                        >
                          {timelineOptions.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact Details */}
                  {activeStep === 3 && (
                    <div className="space-y-4 animate-in fade-in duration-150">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="enquiry-fullname" className="text-xs font-semibold text-zinc-800 block">
                            Full Name <span className="text-emerald-700">*</span>
                          </label>
                          <input
                            id="enquiry-fullname"
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. John Doe"
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="enquiry-email" className="text-xs font-semibold text-zinc-800 block">
                            Work Email Address <span className="text-emerald-700">*</span>
                          </label>
                          <input
                            id="enquiry-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@yourcompany.co.nz"
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="enquiry-phone" className="text-xs font-semibold text-zinc-800 block">
                            Phone Number <span className="text-emerald-700">*</span>
                          </label>
                          <input
                            id="enquiry-phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. +64 21 000 0000"
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="enquiry-company" className="text-xs font-semibold text-zinc-800 block">
                            Company Name
                          </label>
                          <input
                            id="enquiry-company"
                            type="text"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            placeholder="e.g. Acme Enterprises NZ"
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="enquiry-notes" className="text-xs font-semibold text-zinc-800 block">
                          Project Goals or Specific Questions (Optional)
                        </label>
                        <textarea
                          id="enquiry-notes"
                          rows={2}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="Tell us about your target revenue goals or current marketing bottlenecks..."
                          className="w-full px-4 py-2 rounded-xl border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* Form Error Notice */}
                  {formError && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                      {formError}
                    </div>
                  )}

                  {/* Navigation / Action Buttons */}
                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between gap-4">
                    {activeStep > 1 ? (
                      <button
                        type="button"
                        id="enquiry-back-step-btn"
                        onClick={() => {
                          setFormError(null);
                          setActiveStep(activeStep - 1);
                        }}
                        className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                    ) : (
                      <span className="text-[11px] text-zinc-600 flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5" /> 100% Confidential
                      </span>
                    )}

                    {activeStep < 3 ? (
                      <button
                        type="button"
                        id="enquiry-next-step-btn"
                        onClick={handleNextStep}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition-all cursor-pointer shadow-sm hover:shadow"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        id="enquiry-final-submit-btn"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold transition-all shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Preparing Growth Audit...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Request Free Proposal & Audit</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <div className="text-center">
                    <p className="text-[11px] text-zinc-600">
                      🔒 No spam. No pushy sales calls. Strictly strategic insights.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
