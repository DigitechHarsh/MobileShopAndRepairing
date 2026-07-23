import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

import Home from './pages/Home';
import Shop from './pages/Shop';
import RepairServices from './pages/RepairServices';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProductModal, setSelectedProductModal] = useState(null);
  const [inquiryContext, setInquiryContext] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Toast notification helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  // Redirect to contact form with pre-selected topic and pre-filled message
  const handleInquireItem = (category, details) => {
    setInquiryContext({ category, details });
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Redirected to Contact Form for "${category}"`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Floating Toast Notification Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 right-4 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 text-sm font-semibold border border-slate-800"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar Header */}
      <Navbar
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onDirectInquiry={handleInquireItem}
      />

      {/* Main Animated Page Router */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {activePage === 'home' && (
              <Home
                setActivePage={setActivePage}
                onOpenModal={setSelectedProductModal}
                onInquireItem={handleInquireItem}
              />
            )}

            {activePage === 'shop' && (
              <Shop
                onOpenModal={setSelectedProductModal}
                onInquireItem={handleInquireItem}
              />
            )}

            {activePage === 'repairs' && (
              <RepairServices
                onInquireRepair={handleInquireItem}
              />
            )}

            {activePage === 'contact' && (
              <Contact
                inquiryContext={inquiryContext}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer 
        setActivePage={setActivePage} 
        onDirectInquiry={handleInquireItem}
      />

      {/* Quick Specs Product Modal */}
      <ProductModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        onInquireProduct={handleInquireItem}
      />

    </div>
  );
}
