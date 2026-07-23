import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ isOpen, onClose, cart, updateQuantity, removeFromCart, clearCart }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 100;
  const shippingFee = subtotal >= freeShippingThreshold || cart.length === 0 ? 0 : 15;
  const total = subtotal + shippingFee;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderSuccess(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        clearCart();
        setOrderSuccess(false);
        onClose();
      }, 3500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-[#0a0d14] border-l border-slate-800 flex flex-col h-full shadow-2xl">
        
        {/* Cart Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Your Shopping Cart</h3>
              <p className="text-xs text-slate-400">{cart.length} item{cart.length !== 1 ? 's' : ''} added</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="px-6 py-3 bg-slate-900/80 border-b border-slate-800 text-xs">
          {subtotal >= freeShippingThreshold ? (
            <div className="text-emerald-400 font-medium flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Congratulations! You unlocked FREE Express Delivery!</span>
            </div>
          ) : (
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Free Shipping Goal</span>
                <span className="font-semibold text-cyan-400">${Math.max(0, freeShippingThreshold - subtotal)} away</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500"
                  style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {orderSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-scaleUp">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h4 className="text-2xl font-bold text-white">Order Confirmed!</h4>
              <p className="text-slate-400 text-sm max-w-xs">
                Thank you for your order. A confirmation receipt has been dispatched to your email.
              </p>
              <div className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-cyan-400 font-mono">
                Order ID: #NEX-{Math.floor(100000 + Math.random() * 900000)}
              </div>
            </div>
          ) : cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-slate-500">
              <div className="p-4 rounded-full bg-slate-900 border border-slate-800">
                <ShoppingBag className="w-10 h-10 text-slate-600" />
              </div>
              <h4 className="text-lg font-semibold text-slate-300">Your Cart is Empty</h4>
              <p className="text-sm text-slate-500 max-w-xs">Explore our smartphones and premium accessories catalog to get started.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="glass-panel p-4 rounded-2xl border border-slate-800/80 flex items-center space-x-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded-xl border border-slate-700 bg-slate-900 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white text-sm truncate">{item.name}</h4>
                  <p className="text-xs text-slate-400">{item.brand}</p>
                  <p className="text-cyan-400 font-bold text-sm mt-1">${item.price}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-slate-500 hover:text-red-400 transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="flex items-center space-x-2 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="text-slate-400 hover:text-white"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-white px-1">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-slate-400 hover:text-white"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cart.length > 0 && !orderSuccess && (
          <div className="p-6 border-t border-slate-800 bg-slate-900/60 space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Estimated Shipping</span>
                <span>{shippingFee === 0 ? <span className="text-emerald-400 font-bold">FREE</span> : `$${shippingFee}`}</span>
              </div>
              <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-slate-800">
                <span>Total Amount</span>
                <span className="text-gradient-cyan">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full btn-primary font-bold py-3.5 text-sm uppercase tracking-wider flex items-center justify-center space-x-2"
            >
              {isCheckingOut ? (
                <span>Processing Order...</span>
              ) : (
                <>
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Encrypted 256-bit Secure Checkout & 14-Day Returns</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
