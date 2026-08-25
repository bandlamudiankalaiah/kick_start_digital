import React from 'react';
import { ShieldCheck, Award, Star, Zap, CheckCircle2 } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export const TrustTicker: React.FC = () => {
  const partnerBadges = [
    { name: 'Google Premier Partner 2026', type: 'Premier Search & Shopping' },
    { name: 'Meta Certified Agency', type: 'Performance Marketing' },
    { name: 'WordPress VIP & Woo Expert', type: 'Custom Architecture' },
    { name: 'Shopify Plus Partner', type: 'E-Commerce Engineering' },
    { name: 'HubSpot Certified', type: 'CRM & Lead Automation' },
  ];

  return (
    <section 
      id="trust-and-credentials" 
      aria-label="Accreditations and Trust" 
      className="bg-slate-900 border-b border-slate-800 py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Tag */}
        <div className="text-center mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Trusted by Ambitious Brands Across New Zealand & Australasia
          </p>
        </div>

        {/* Partner Badges Carousel/Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
          {partnerBadges.map((badge, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col items-center justify-center text-center group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 mb-2 shadow-2xs group-hover:scale-105 group-hover:text-indigo-300 transition-all">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white block leading-tight">
                {badge.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                {badge.type}
              </span>
            </div>
          ))}
        </div>

        {/* High-Impact Stat Bar */}
        <div className="bg-slate-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            <div className="pt-3 md:pt-0">
              <span className="text-3xl sm:text-4xl font-extrabold text-white block tracking-tight">
                {AGENCY_INFO.stats.totalRevenueGenerated}
              </span>
              <span className="text-xs font-medium text-slate-400 mt-1 block">
                Tracked Revenue Generated
              </span>
            </div>

            <div className="pt-3 md:pt-0 md:pl-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-indigo-400 block tracking-tight">
                {AGENCY_INFO.stats.averageLeadIncrease}
              </span>
              <span className="text-xs font-medium text-slate-400 mt-1 block">
                Average Qualified Lead Surge
              </span>
            </div>

            <div className="pt-3 md:pt-0 md:pl-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-white block tracking-tight">
                {AGENCY_INFO.stats.averageRoas}
              </span>
              <span className="text-xs font-medium text-slate-400 mt-1 block">
                Average Client ROAS
              </span>
            </div>

            <div className="pt-3 md:pt-0 md:pl-4">
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-200 block">
                4.9 / 5.0 Google Rating
              </span>
              <span className="text-[11px] text-slate-500 block">
                From 64+ Verified NZ Clients
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
