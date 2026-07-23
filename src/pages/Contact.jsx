import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ChevronDown, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact({ inquiryContext }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'General Communication',
    contactMethod: 'Phone Call',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Sync inquiry context from product/repair buttons
  useEffect(() => {
    if (inquiryContext) {
      setFormState((prev) => ({
        ...prev,
        category: inquiryContext.category || 'General Communication',
        message: inquiryContext.details || ''
      }));
    }
  }, [inquiryContext]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 100, spread: 70 });
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        category: 'General Communication',
        contactMethod: 'Phone Call',
        message: ''
      });
    }, 4000);
  };

  const faqs = [
    {
      q: 'How long does an express smartphone repair take?',
      a: 'Most screen and battery replacements for iPhone, Samsung, Pixel, and OnePlus take between 20 to 30 minutes. You can wait comfortably in our store.'
    },
    {
      q: 'Will my personal data remain safe during repair?',
      a: 'Yes! We follow non-destructive repair protocols. Your photos, contacts, apps, and financial data stay 100% untouched.'
    },
    {
      q: 'Are replacement parts genuine and covered under warranty?',
      a: 'Yes! All displays, batteries, and IC components are original OEM grade and come with a 6-month written warranty card.'
    },
    {
      q: 'How will I receive a response to my inquiry form?',
      a: 'Our sales and technical support executive will call or WhatsApp you within 15 minutes during store working hours.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Contact Header Banner */}
      <div className="white-card p-8 sm:p-12 rounded-3xl border border-slate-200 bg-white text-center sm:text-left relative overflow-hidden shadow-md">
        <div className="max-w-2xl space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Main Customer Communication Desk</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Submit Your <span className="text-blue-600">Form Inquiry</span>
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Whether you want to buy a flagship mobile, inquire about accessories, or schedule an express Android/iOS repair, fill out the form below. Our team responds in under 15 minutes.
          </p>
        </div>
      </div>

      {/* Main Form & Store Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Primary Communication Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="white-card p-8 rounded-3xl border border-slate-200 bg-white shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Official Communication Form</h3>
                <p className="text-xs text-slate-500">Select inquiry topic and provide your details</p>
              </div>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-scaleUp">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-2xl font-bold text-slate-900">Inquiry Received!</h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you for submitting your inquiry. An executive will reach out to you via <span className="font-bold text-blue-600">{formState.contactMethod}</span> within 15 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Topic Basis Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Basis of Communication / Inquiry Topic *
                  </label>
                  <select
                    value={formState.category}
                    onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-bold focus:outline-none focus:border-blue-600 focus:bg-white"
                  >
                    <option value="Mobile Buying Inquiry">📱 Mobile Buying Inquiry (iPhones, Samsung, Pixel, OnePlus)</option>
                    <option value="Accessories Inquiry">🔌 Accessories & Chargers Inquiry (MagSafe, GaN, Earbuds)</option>
                    <option value="Android & iOS Repair Service Inquiry">🛠️ Android & iOS Repair Service Inquiry (Screen, Battery, Water Damage)</option>
                    <option value="General Communication">💬 General Communication / Support Inquiry</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="ramesh@example.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Preferred Contact Mode</label>
                    <select
                      value={formState.contactMethod}
                      onChange={(e) => setFormState({ ...formState, contactMethod: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-blue-600 focus:bg-white"
                    >
                      <option value="Phone Call">Phone Call Direct</option>
                      <option value="WhatsApp Message">WhatsApp Message</option>
                      <option value="Email Reply">Email Response</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Inquiry Details / Device Requirements *</label>
                  <textarea
                    rows="4"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide details about your mobile preference or screen/battery issue..."
                    className="w-full p-4 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-sm font-extrabold uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Form Communication Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Store Info */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="white-card p-8 rounded-3xl border border-slate-200 bg-white shadow-md space-y-6">
            <h3 className="text-xl font-bold text-slate-900">NexusMobile Store & Repair Hub</h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-900">Mumbai Flagship Showroom</h5>
                  <p className="text-slate-500 text-xs mt-0.5">Plot 42, Tech Park Road, Bandra West, Mumbai, Maharashtra 400050</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-900">Direct Phone Support</h5>
                  <p className="text-slate-500 text-xs mt-0.5">+91 98765 43210 (Toll Free Inquiry Line)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-900">Store Hours</h5>
                  <p className="text-slate-500 text-xs mt-0.5">Monday - Saturday: 9:30 AM – 8:30 PM</p>
                  <p className="text-slate-500 text-xs">Sunday: 10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Visual */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 p-4 text-center space-y-2">
              <div className="h-32 bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center space-y-1 relative shadow-inner">
                <MapPin className="w-8 h-8 text-blue-600 animate-bounce" />
                <span className="text-xs font-bold text-slate-900">NexusMobile Flagship Store</span>
                <span className="text-[10px] text-slate-500">Bandra West, Mumbai</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* FAQ SECTION */}
      <div className="white-card p-8 sm:p-12 rounded-3xl border border-slate-200 bg-white space-y-8 shadow-md">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Frequently Asked Questions</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Communication & Inquiry Guide</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between font-bold text-slate-900 text-sm hover:text-blue-600 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-blue-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>

              {openFaq === idx && (
                <div className="p-5 pt-0 text-slate-600 text-xs leading-relaxed border-t border-slate-200 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
