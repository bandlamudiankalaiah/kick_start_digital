import React from 'react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Users, 
  Lock, 
  BarChart3,
  Award
} from 'lucide-react';
import { COMPARISON_DATA } from '../data/agencyData';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      icon: TrendingUp,
      title: 'Obsessed with Bottom-Line Revenue',
      description: 'We do not celebrate useless vanity metrics like impressions and clicks. Every campaign is measured against pipeline revenue, customer acquisition cost (CAC), and ROAS.',
    },
    {
      icon: Zap,
      title: 'Sub-Second Custom WordPress Engineering',
      description: 'We avoid sluggish, bloated page builders. We write clean, custom block architecture that passes Core Web Vitals with flying colors, converting mobile traffic instantly.',
    },
    {
      icon: Users,
      title: 'Senior New Zealand Talent Only',
      description: 'No bait-and-switch. Your account is strategized and managed directly by experienced senior growth marketers and developers based right here in New Zealand.',
    },
    {
      icon: ShieldCheck,
      title: 'Rolling Month-to-Month Agreements',
      description: 'Zero handcuffs. We retain 94% of our clients purely through consistent profitability and exceptional execution, not binding legal contracts.',
    },
  ];

  return (
    <section 
      id="why-us" 
      aria-label="Why Choose Kickstart Digital" 
      className="py-16 md:py-24 bg-slate-900 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>The Commercial Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Ambitious Brands Choose Kickstart Digital
          </h2>

          <p className="text-base text-slate-400 leading-relaxed font-normal">
            Most digital agencies are structured to serve their own retainer quotas. We designed Kickstart Digital from the ground up to solve the real frustrations business owners experience.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-950/80 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 flex items-center justify-center shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-indigo-400">
                    Proven Standard 
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Side-by-Side Comparison Table */}
        <div className="bg-slate-950 rounded-2xl text-white p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="text-center sm:text-left mb-8 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Honest Comparison
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Kickstart Digital vs Traditional Agencies
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <th className="py-3.5 pr-4 w-1/3">Key Evaluation Criteria</th>
                  <th className="py-3.5 px-4 w-1/3 text-indigo-400 bg-slate-900/90 rounded-t-xl">
                    ⚡ Kickstart Digital
                  </th>
                  <th className="py-3.5 pl-4 w-1/3 text-slate-400">
                    Typical Agency Retainers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-4 pr-4 font-semibold text-slate-200">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 bg-slate-900/60 font-medium text-slate-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{row.kickstart}</span>
                      </div>
                    </td>
                    <td className="py-4 pl-4 text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
