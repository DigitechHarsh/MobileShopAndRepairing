import React, { useState } from 'react';
import { Smartphone, Wrench, PhoneCall, ShoppingBag, Menu, X, Zap, Send, ShieldCheck } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onDirectInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Smartphone },
    { id: 'shop', label: 'Mobiles & Accessories', icon: ShoppingBag },
    { id: 'repairs', label: 'Repair Services', icon: Wrench },
    { id: 'contact', label: 'Contact & Inquiry', icon: PhoneCall },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 py-2 px-4 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Express 30-Min Android & iOS Repair | Official Mobiles & Accessories</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>6 Months Warranty</span>
            </span>
            <span className="text-slate-400">Call / WhatsApp: +91 98765 43210</span>
          </div>
        </div>
      </div>

      {/* Main Navbar Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => setActivePage('home')}
            className="flex items-center space-x-3 focus:outline-none group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-left">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 block leading-none">
                NEXUS<span className="text-blue-600">MOBILE</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase flex items-center gap-1 mt-0.5">
                <Zap className="w-2.5 h-2.5 text-blue-600" /> & iRepair Hub
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                      : 'text-slate-700 hover:text-blue-600 hover:bg-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onDirectInquiry('General Communication', 'General Inquiry regarding Phones, Accessories or Repairs')}
              className="hidden sm:inline-flex btn-primary text-xs uppercase tracking-wider py-3 px-5 font-bold"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Inquiry
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-blue-600 hover:bg-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-2">
            <button
              onClick={() => {
                onDirectInquiry('General Communication', 'General Inquiry regarding Phones, Accessories or Repairs');
                setMobileMenuOpen(false);
              }}
              className="w-full btn-primary text-xs uppercase font-extrabold py-3.5"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Communication Form Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
