import React from 'react';
import { Wrench, ShieldCheck, Clock, CheckCircle2, Smartphone, Zap, Send } from 'lucide-react';
import { MOCK_REPAIR_SERVICES } from '../data/mockData';
import RepairCostEstimator from '../components/RepairCostEstimator';

export default function RepairServices({ onInquireRepair }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Repair Hero Banner */}
      <div className="white-card p-8 sm:p-12 rounded-3xl border border-slate-200 bg-white relative overflow-hidden text-center sm:text-left shadow-md">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Master Android & iOS Certified Repair Lab</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Express <span className="text-blue-600">Smartphone Repair</span> Services
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Cracked screen? Battery drain? Water damage or motherboard fault? We service all Android and iOS smartphones with genuine original components and a 6-month written warranty. Submit your inquiry below for instant assistance.
          </p>
        </div>
      </div>

      {/* REPAIR SERVICES MATRIX */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Technical Capabilities</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Comprehensive Repair Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_REPAIR_SERVICES.map((srv) => (
            <div key={srv.id} className="white-card white-card-hover p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
                    {srv.platform}
                  </span>
                  <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {srv.estTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{srv.title}</h3>

                <ul className="space-y-2 text-xs text-slate-600">
                  {srv.highlights.map((h, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Starts From</span>
                  <span className="text-2xl font-black text-blue-600">₹{srv.startingPrice.toLocaleString('en-IN')}</span>
                </div>

                <button
                  onClick={() => onInquireRepair(
                    'Android & iOS Repair Service Inquiry',
                    `Inquiry for ${srv.title} (Starting Price: ₹${srv.startingPrice.toLocaleString('en-IN')})`
                  )}
                  className="btn-primary text-xs py-2.5 px-4 font-bold uppercase tracking-wider flex items-center space-x-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Inquire Repair</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CALCULATOR EMBED */}
      <div>
        <RepairCostEstimator onInquireRepair={onInquireRepair} />
      </div>

    </div>
  );
}
