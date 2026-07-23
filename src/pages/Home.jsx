import React from 'react';
import { Smartphone, Wrench, ShieldCheck, Zap, ArrowRight, Star, Clock, CheckCircle2, Award, Sparkles, ChevronRight, Send, MessageSquare } from 'lucide-react';
import RepairCostEstimator from '../components/RepairCostEstimator';
import { MOCK_PRODUCTS, MOCK_TESTIMONIALS } from '../data/mockData';

export default function Home({ setActivePage, onOpenModal, onInquireItem }) {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-20 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 lg:pt-16 bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Certified iOS & Android Flagship Store</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Buy Flagship Mobiles. <br />
                <span className="text-blue-600">Express 30-Min</span> <br />
                Device Repair Service.
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Your destination for official iPhones, Samsung Galaxy devices, and premium accessories. Need an express repair? Submit an inquiry for a guaranteed quote with a <span className="text-blue-600 font-semibold">6-month written warranty</span>.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setActivePage('shop')}
                  className="w-full sm:w-auto btn-primary py-4 px-8 text-sm uppercase tracking-wider font-extrabold flex items-center justify-center space-x-2"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>Browse Mobiles & Accessories</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <button
                  onClick={() => onInquireItem('General Communication', 'Inquiry regarding Smartphone purchase or repair service')}
                  className="w-full sm:w-auto btn-secondary py-4 px-8 text-sm uppercase tracking-wider font-bold"
                >
                  <Send className="w-4 h-4 mr-2 text-blue-600" />
                  Send General Inquiry
                </button>
              </div>

              {/* Micro Trust Stats */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <h4 className="text-2xl font-black text-slate-900">15,000+</h4>
                  <p className="text-xs text-slate-500 font-medium">Repairs Completed</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-blue-600">4.9 / 5.0</h4>
                  <p className="text-xs text-slate-500 font-medium">Customer Rating</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-emerald-600">30 Mins</h4>
                  <p className="text-xs text-slate-500 font-medium">Average Repair Time</p>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Banner */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                
                <div className="relative rounded-3xl white-card p-4 shadow-xl border border-slate-200 overflow-hidden group bg-white">
                  <img
                    src="/images/hero_flagship.png"
                    alt="Nexus Flagship Smartphone"
                    className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Floating Micro Badge 1 */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold flex items-center space-x-2 text-slate-900 shadow-md">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>6-Month Warranty</span>
                  </div>

                  {/* Floating Micro Badge 2 */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold flex items-center space-x-2 text-slate-900 shadow-md">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>30-Min Walk-in Fix</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INSTANT REPAIR ESTIMATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RepairCostEstimator onInquireRepair={onInquireItem} />
      </section>

      {/* FEATURED PRODUCTS & ACCESSORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Featured Catalog</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              Top Mobiles & Original Accessories
            </h2>
          </div>
          <button
            onClick={() => setActivePage('shop')}
            className="text-blue-600 hover:text-blue-700 font-bold text-sm flex items-center space-x-1 group"
          >
            <span>View Full Shop Catalog</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="white-card white-card-hover rounded-2xl border border-slate-200 p-5 flex flex-col justify-between relative group bg-white"
            >
              {product.badge && (
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-blue-600 text-white shadow-sm uppercase tracking-wider">
                  {product.badge}
                </span>
              )}

              <div className="my-6 flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-44 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>{product.brand}</span>
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span className="ml-1 text-slate-800 font-bold">{product.rating}</span>
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 text-base truncate">{product.name}</h3>

                <div className="flex items-baseline space-x-2 pt-1">
                  <span className="text-xl font-extrabold text-blue-600">₹{product.price.toLocaleString('en-IN')}</span>
                  {product.oldPrice && (
                    <span className="text-xs text-slate-400 line-through">₹{product.oldPrice.toLocaleString('en-IN')}</span>
                  )}
                </div>

                <div className="pt-4 flex items-center space-x-2">
                  <button
                    onClick={() => onOpenModal(product)}
                    className="flex-1 btn-secondary text-xs py-2.5 font-bold"
                  >
                    Quick Specs
                  </button>
                  <button
                    onClick={() => onInquireItem(
                      product.category === 'Mobiles' ? 'Mobile Buying Inquiry' : 'Accessories Inquiry',
                      `Inquiry for ${product.name} priced at ₹${product.price.toLocaleString('en-IN')}`
                    )}
                    className="btn-primary py-2.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Inquiry</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US / REPAIR LAB SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="white-card rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-lg bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Micro-Soldering & Repair Standards</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Why 15,000+ Customers Trust Our <span className="text-blue-600">Repair Center</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Equipped with digital microscopes, ultrasonic de-corrosion tanks, and laser back glass separation technology. Every repair is performed by certified Android and iOS technicians.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Genuine OEM Screen & Battery Components</h4>
                    <p className="text-xs text-slate-500">Original color reproduction, True Tone, and zero touch response delay.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Zero Data Loss & Strict Confidentiality</h4>
                    <p className="text-xs text-slate-500">Your photos, contacts, and personal data remain 100% secure.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Direct Form Communication</h4>
                    <p className="text-xs text-slate-500">Submit your repair query for instant response and cost quotation.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onInquireItem('Android & iOS Repair Service Inquiry', 'General Smartphone Repair Quotation')}
                  className="btn-primary text-xs uppercase font-extrabold py-3.5 px-6"
                >
                  Inquire For Repair Quote
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="/images/repair_tech.png"
                  alt="Precision Smartphone Repair Lab"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl border border-slate-200 max-w-xs shadow-xl hidden sm:block">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">6-Month Warranty</h5>
                    <p className="text-[11px] text-slate-500">Guaranteed hardware reliability</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Customer Feedback</span>
          <h2 className="text-3xl font-extrabold text-slate-900">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_TESTIMONIALS.map((t) => (
            <div key={t.id} className="white-card p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4 bg-white">
              <div className="space-y-3">
                <div className="flex items-center text-amber-500 space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.device}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
