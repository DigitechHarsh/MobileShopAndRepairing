import React from 'react';
import { Smartphone, ShieldCheck, Clock, MapPin, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';

export default function Footer({ setActivePage, onDirectInquiry }) {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-slate-800/80 border border-slate-700 mb-16">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">30-Min Express Repair</h4>
              <p className="text-xs text-slate-400">On-the-spot screen & battery swap</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">6 Months Warranty</h4>
              <p className="text-xs text-slate-400">Comprehensive hardware protection</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Genuine OEM Parts</h4>
              <p className="text-xs text-slate-400">Original grade displays & batteries</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Direct Communication</h4>
              <p className="text-xs text-slate-400">Form inquiry with instant callback</p>
            </div>
          </div>
        </div>

        {/* Footer Main Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold shadow-lg">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold text-white">
                NEXUS<span className="text-blue-400">MOBILE</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Your trusted smartphone store and express iOS & Android repair center in India. Submit your inquiry to get instant assistance and genuine device quotes.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs font-semibold text-slate-300">
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">Apple & Android Certified</span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">100% Genuine Warranty</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => setActivePage('home')} className="hover:text-blue-400 transition-colors">Home Landing</button></li>
              <li><button onClick={() => setActivePage('shop')} className="hover:text-blue-400 transition-colors">Buy Smartphones</button></li>
              <li><button onClick={() => setActivePage('shop')} className="hover:text-blue-400 transition-colors">Mobile Accessories</button></li>
              <li><button onClick={() => setActivePage('repairs')} className="hover:text-blue-400 transition-colors">Android & iOS Repair</button></li>
              <li><button onClick={() => setActivePage('contact')} className="hover:text-blue-400 transition-colors">Submit Form Inquiry</button></li>
            </ul>
          </div>

          {/* Service Inquiries */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">Inquire Services</h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  onClick={() => onDirectInquiry('Repair Service Inquiry', 'OLED Screen Replacement Inquiry')} 
                  className="hover:text-blue-400 transition-colors"
                >
                  Screen Replacement
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onDirectInquiry('Repair Service Inquiry', 'Battery Replacement Inquiry')} 
                  className="hover:text-blue-400 transition-colors"
                >
                  Battery Replacement
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onDirectInquiry('Mobile Buying Inquiry', 'Flagship Smartphone Inquiry')} 
                  className="hover:text-blue-400 transition-colors"
                >
                  iPhone & Samsung Phones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onDirectInquiry('Accessories Inquiry', 'GaN Fast Charger / Case Inquiry')} 
                  className="hover:text-blue-400 transition-colors"
                >
                  Original Accessories
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base mb-4">Store Location</h4>
            <div className="flex items-start space-x-3 text-slate-300">
              <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <span>Plot 42, Tech Park Road, Bandra West, Mumbai, India</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-300">
              <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-300">
              <Mail className="w-5 h-5 text-purple-400 shrink-0" />
              <span>inquiry@nexusmobile.in</span>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} NexusMobile & iRepair India. All prices in INR (₹).</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Communication</span>
            <span className="hover:text-slate-400 cursor-pointer">Warranty Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
