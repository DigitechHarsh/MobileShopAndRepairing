import React from 'react';
import { X, Star, ShieldCheck, Truck, CheckCircle, Send } from 'lucide-react';

export default function ProductModal({ product, onClose, onInquireProduct }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-3xl white-card rounded-3xl overflow-hidden shadow-2xl bg-white">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Column */}
          <div className="p-8 bg-slate-50 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-slate-200 relative">
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-600 text-white shadow-md uppercase tracking-wide">
                {product.badge}
              </span>
            )}
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full max-w-xs h-64 object-contain rounded-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Details Column */}
          <div className="p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
                <span>{product.brand}</span>
                <span>•</span>
                <span>{product.category}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{product.name}</h3>

              {/* Rating */}
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <span className="text-sm font-bold text-slate-800 ml-1">{product.rating}</span>
                </div>
                <span className="text-slate-500 text-xs">({product.reviewsCount} verified reviews)</span>
              </div>

              {/* Price in INR */}
              <div className="flex items-baseline space-x-3 mt-4">
                <span className="text-3xl font-black text-blue-600">₹{product.price.toLocaleString('en-IN')}</span>
                {product.oldPrice && (
                  <span className="text-lg text-slate-400 line-through">₹{product.oldPrice.toLocaleString('en-IN')}</span>
                )}
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Available for Inquiry
                </span>
              </div>

              <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Technical Specifications Matrix */}
              {product.specs && (
                <div className="mt-6 pt-4 border-t border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Technical Specifications</h4>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between items-center p-2 rounded-lg bg-slate-50 border border-slate-200">
                        <span className="text-slate-500 capitalize">{key}:</span>
                        <span className="font-semibold text-slate-800">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Inquiry CTA */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <button
                onClick={() => {
                  onInquireProduct(
                    product.category === 'Mobiles' ? 'Mobile Buying Inquiry' : 'Accessories Inquiry',
                    `Inquiry for ${product.name} (${product.brand}) priced at ₹${product.price.toLocaleString('en-IN')}`
                  );
                  onClose();
                }}
                className="w-full btn-primary py-3.5 text-sm uppercase tracking-wider font-extrabold flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Inquire About This Product</span>
              </button>

              <div className="flex items-center justify-around text-xs text-slate-500 pt-2">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Official Warranty</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Truck className="w-4 h-4 text-emerald-600" />
                  <span>Express Delivery</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span>Direct Communication</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
