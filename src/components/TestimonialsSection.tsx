import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Quote, 
  Play, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  X
} from 'lucide-react';
import { TESTIMONIALS, AGENCY_INFO } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section 
      id="testimonials" 
      aria-label="Client Testimonials and Reviews" 
      className="py-16 md:py-24 bg-slate-900 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Google Reviews & Social Proof</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Rated 4.9/5 by High-Growth New Zealand Brands
          </h2>

          <p className="text-base text-slate-400 leading-relaxed font-normal">
            We judge our success by one metric: client profitability. Here is what business owners, CEOs, and marketing leaders say about partnering with Kickstart Digital.
          </p>
        </div>

        {/* Video Story Banner + Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Featured Video Case Teaser */}
          <div className="lg:col-span-4 bg-slate-950 text-white rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden border border-slate-800 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Client Story
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                How Vanguard Scaled Pipeline by $2.8M
              </h3>
            </div>

            {/* Video Thumbnail Preview */}
            <div 
              onClick={() => setVideoModalOpen(true)}
              className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=80"
                alt="Client Video Case Study Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white translate-x-0.5" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-slate-300">
                2:45 min
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-indigo-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>+340% corporate quote request volume</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Watch David Harrison explain how rebuilding on custom WordPress and optimizing Google Search transformed their B2B acquisition.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Google Verified Client</span>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Client Testimonial Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                id={`testimonial-${testimonial.id}`}
                className="bg-slate-950 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 shadow-lg"
              >
                <div className="space-y-3">
                  {/* Rating & Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {testimonial.date}
                    </span>
                  </div>

                  {/* Quote Content */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover border border-slate-700 shrink-0"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white block">
                        {testimonial.author}
                      </h4>
                      <span className="text-[11px] text-slate-400 block">
                        {testimonial.role}, {testimonial.company}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Video Player Modal Simulation */}
        {videoModalOpen && (
          <div 
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          >
            <div className="bg-slate-900 text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-800 space-y-4 relative shadow-2xl">
              <button
                id="close-video-modal-btn"
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  Client Video Case Study
                </span>
                <h3 className="text-xl font-bold text-white">
                  David Harrison on Partnering with Kickstart Digital
                </h3>
              </div>

              <div className="aspect-video bg-slate-950 rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-3 border border-slate-800">
                <div className="w-16 h-16 rounded-full bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
                  <Play className="w-8 h-8 fill-indigo-400 translate-x-0.5" />
                </div>
                <p className="text-sm text-slate-300 max-w-md">
                  "Within 30 days of Kickstart taking over our Google Ads and launching our custom WordPress site, our qualified corporate pipeline doubled."
                </p>
                <span className="text-xs text-slate-400">
                  Full 4K Video Case Interview (Auckland Studio Recording)
                </span>
              </div>

              <div className="flex justify-end">
                <button
                  id="close-video-btn"
                  onClick={() => setVideoModalOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700"
                >
                  Close Video
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
