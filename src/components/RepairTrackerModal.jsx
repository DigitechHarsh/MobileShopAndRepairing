import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, Wrench, ShieldCheck, UserCheck, Smartphone } from 'lucide-react';
import { MOCK_TICKETS } from '../data/mockData';

export default function RepairTrackerModal({ isOpen, onClose }) {
  const [ticketInput, setTicketInput] = useState('REP-8821');
  const [activeTicket, setActiveTicket] = useState(MOCK_TICKETS['REP-8821']);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    const query = ticketInput.trim().toUpperCase();
    if (MOCK_TICKETS[query]) {
      setActiveTicket(MOCK_TICKETS[query]);
      setErrorMsg('');
    } else {
      setErrorMsg(`No active ticket found for ID "${query}". Try searching "REP-8821" or "REP-9410".`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-2xl glass-panel border border-slate-700 rounded-3xl overflow-hidden shadow-2xl bg-[#0a0d14]">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Live Repair Ticket Tracker</h3>
              <p className="text-xs text-slate-400">Track real-time diagnosis & bench status</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Input Form */}
        <div className="p-6 space-y-6">
          <form onSubmit={handleSearch} className="flex gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={ticketInput}
                onChange={(e) => setTicketInput(e.target.value)}
                placeholder="Enter Ticket ID (e.g. REP-8821)"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
              />
            </div>
            <button type="submit" className="btn-primary py-3 px-6 text-xs uppercase font-bold tracking-wider">
              Track
            </button>
          </form>

          {/* Quick Demo Ticket Chips */}
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <span>Try sample tickets:</span>
            {Object.keys(MOCK_TICKETS).map((id) => (
              <button
                key={id}
                onClick={() => {
                  setTicketInput(id);
                  setActiveTicket(MOCK_TICKETS[id]);
                  setErrorMsg('');
                }}
                className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-cyan-400 font-mono transition-colors"
              >
                {id}
              </button>
            ))}
          </div>

          {errorMsg ? (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {errorMsg}
            </div>
          ) : activeTicket && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Device & Status Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Customer & Device</span>
                  <h4 className="text-lg font-extrabold text-white mt-0.5">{activeTicket.customerName}</h4>
                  <p className="text-xs text-cyan-400 font-medium flex items-center gap-1 mt-1">
                    <Smartphone className="w-3.5 h-3.5" />
                    {activeTicket.device}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{activeTicket.service}</p>
                </div>

                <div className="sm:text-right space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Current Repair Stage</span>
                  <div className="flex items-center sm:justify-end space-x-2 mt-1">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {activeTicket.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 pt-1">
                    Technician: <span className="text-slate-200 font-medium">{activeTicket.techAssigned}</span>
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-300">Completion Status</span>
                  <span className="text-cyan-400 font-mono">{activeTicket.progress}% Completed</span>
                </div>
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 transition-all duration-700"
                    style={{ width: `${activeTicket.progress}%` }}
                  />
                </div>
              </div>

              {/* Steps Timeline */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Service Bench Log</h4>
                <div className="space-y-2">
                  {activeTicket.timeline.map((step, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 rounded-xl flex items-center justify-between text-xs transition-colors ${
                        step.done 
                          ? 'bg-slate-900/80 border border-slate-800 text-slate-200' 
                          : 'bg-slate-950/40 border border-slate-900 text-slate-500'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className={`w-4 h-4 ${step.done ? 'text-emerald-400' : 'text-slate-700'}`} />
                        <span className="font-medium">{step.step}</span>
                      </div>
                      <span className="font-mono text-slate-400">{step.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
