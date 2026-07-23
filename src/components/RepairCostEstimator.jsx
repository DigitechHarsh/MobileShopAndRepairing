import React, { useState } from 'react';
import { Smartphone, Zap, Clock, ShieldCheck, CheckCircle2, ArrowRight, Wrench, Send } from 'lucide-react';

const BRANDS = [
  { id: 'apple', name: 'Apple iPhone', icon: '' },
  { id: 'samsung', name: 'Samsung Galaxy', icon: 'S' },
  { id: 'google', name: 'Google Pixel', icon: 'G' },
  { id: 'oneplus', name: 'OnePlus', icon: '1+' }
];

const MODELS_BY_BRAND = {
  apple: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 14 Pro Max', 'iPhone 13 Pro', 'iPhone 12 / 11'],
  samsung: ['Galaxy S24 Ultra', 'Galaxy S23 Ultra', 'Galaxy S22+', 'Galaxy Z Fold 5', 'Galaxy A Series'],
  google: ['Pixel 8 Pro', 'Pixel 8', 'Pixel 7 Pro', 'Pixel 7a'],
  oneplus: ['OnePlus 12', 'OnePlus 11', 'OnePlus Nord 3']
};

const ISSUES = [
  { id: 'screen', name: 'Cracked OLED / Touch Screen', basePrice: 2499, estMin: 25 },
  { id: 'battery', name: 'Battery Drain / Swollen Battery', basePrice: 1499, estMin: 20 },
  { id: 'water', name: 'Water & Fluid Damage Restoration', basePrice: 1999, estMin: 120 },
  { id: 'camera', name: 'Blurry Camera & Lens Swap', basePrice: 1299, estMin: 30 },
  { id: 'port', name: 'Charging Port & Earpiece Mic', basePrice: 899, estMin: 20 },
  { id: 'board', name: 'No Power / Motherboard IC Fix', basePrice: 2999, estMin: 180 }
];

export default function RepairCostEstimator({ onInquireRepair }) {
  const [selectedBrand, setSelectedBrand] = useState('apple');
  const [selectedModel, setSelectedModel] = useState(MODELS_BY_BRAND['apple'][0]);
  const [selectedIssue, setSelectedIssue] = useState(ISSUES[0].id);

  const activeIssueObj = ISSUES.find(i => i.id === selectedIssue) || ISSUES[0];
  
  // Calculate price adjustments based on model series
  const isFlagship = selectedModel.includes('Pro Max') || selectedModel.includes('Ultra');
  const finalEstimate = isFlagship ? activeIssueObj.basePrice + 1000 : activeIssueObj.basePrice;

  const handleBrandChange = (brandId) => {
    setSelectedBrand(brandId);
    setSelectedModel(MODELS_BY_BRAND[brandId][0]);
  };

  const handleInquireSubmit = () => {
    if (onInquireRepair) {
      onInquireRepair(
        'Android & iOS Repair Service Inquiry',
        `Repair Inquiry for ${selectedModel} - ${activeIssueObj.name} (Estimated Quote: ₹${finalEstimate.toLocaleString('en-IN')})`
      );
    }
  };

  return (
    <div className="white-card rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg relative overflow-hidden bg-white">
      
      <div className="relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Instant Repair Cost Calculator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Get Instant <span className="text-blue-600">Repair Quote</span>
            </h3>
          </div>
          <div className="flex items-center space-x-4 text-xs font-medium text-slate-500">
            <span className="flex items-center space-x-1">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Express Turnaround</span>
            </span>
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>6 Months Warranty</span>
            </span>
          </div>
        </div>

        {/* Step 1: Select Brand */}
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              1. Select Smartphone Brand
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {BRANDS.map((b) => (
                <button
                  key={b.id}
                  onClick={() => handleBrandChange(b.id)}
                  className={`p-3.5 rounded-2xl flex items-center justify-center space-x-2 font-bold text-sm transition-all duration-200 ${
                    selectedBrand === b.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className="text-lg font-mono">{b.icon}</span>
                  <span>{b.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Specific Model */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              2. Select Model Series
            </label>
            <div className="flex flex-wrap gap-2">
              {MODELS_BY_BRAND[selectedBrand].map((model) => (
                <button
                  key={model}
                  onClick={() => setSelectedModel(model)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedModel === model
                      ? 'bg-blue-50 text-blue-700 border border-blue-300 shadow-sm font-bold'
                      : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Select Problem */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              3. Select Repair Requirement
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ISSUES.map((issue) => (
                <button
                  key={issue.id}
                  onClick={() => setSelectedIssue(issue.id)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 ${
                    selectedIssue === issue.id
                      ? 'bg-blue-50 border-2 border-blue-600 text-slate-900 shadow-md'
                      : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-slate-900">{issue.name}</span>
                    {selectedIssue === issue.id && (
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs mt-3 pt-2 border-t border-slate-200">
                    <span className="text-slate-500 font-mono">Est: {issue.estMin} mins</span>
                    <span className="text-blue-600 font-bold">From ₹{issue.basePrice.toLocaleString('en-IN')}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Result Quote Card */}
          <div className="pt-6 border-t border-slate-200">
            <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-xs text-slate-400 font-medium">Estimated Repair Quote for {selectedModel}:</span>
                <div className="flex items-baseline space-x-3 justify-center md:justify-start">
                  <span className="text-4xl font-black text-blue-400">₹{finalEstimate.toLocaleString('en-IN')}</span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    Includes Parts & Labor
                  </span>
                </div>
                <p className="text-xs text-slate-400 pt-1">
                  Average Service Time: <span className="text-white font-bold">{activeIssueObj.estMin} minutes</span>
                </p>
              </div>

              <button
                onClick={handleInquireSubmit}
                className="w-full md:w-auto btn-primary py-4 px-8 text-sm uppercase tracking-wider font-extrabold flex items-center justify-center space-x-2 shrink-0"
              >
                <Send className="w-4 h-4" />
                <span>Inquire About This Repair</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
