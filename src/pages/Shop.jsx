import React, { useState } from 'react';
import { Search, Star, Smartphone, Send, ArrowUpDown } from 'lucide-react';
import { MOCK_PRODUCTS } from '../data/mockData';

export default function Shop({ onOpenModal, onInquireItem }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['All', 'Mobiles', 'Accessories', 'Audio', 'Power'];

  // Filter products
  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // default popular
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="white-card p-8 sm:p-12 rounded-3xl border border-slate-200 bg-white relative overflow-hidden text-center sm:text-left shadow-md">
        <div className="max-w-2xl space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Official Mobile & Accessories Store</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Mobiles & <span className="text-blue-600">Original Accessories</span>
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Genuine smartphones with official brand warranty. Submit an inquiry button on any device or accessory to connect directly with our sales team.
          </p>
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 white-card p-4 rounded-2xl border border-slate-200 bg-white">
        
        {/* Category Tabs */}
        <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search phone, brand, case..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 font-medium"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <ArrowUpDown className="w-4 h-4 text-blue-600 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-auto px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 focus:outline-none focus:border-blue-600 font-semibold"
            >
              <option value="popular">Sort by Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Customer Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="white-card p-12 rounded-3xl text-center space-y-4 bg-white">
          <Smartphone className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-xl font-bold text-slate-900">No products found matching "{searchQuery}"</h3>
          <p className="text-slate-500 text-xs">Try searching for "iPhone", "Samsung", "Case", or reset category filter.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="btn-primary py-2.5 px-6 text-xs font-bold"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="white-card white-card-hover rounded-2xl border border-slate-200 p-6 flex flex-col justify-between relative group bg-white"
            >
              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-extrabold bg-blue-600 text-white shadow-sm uppercase tracking-wider">
                  {product.badge}
                </span>
              )}

              <div className="my-6 flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>{product.brand}</span>
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span className="ml-1 text-slate-800 font-bold">{product.rating}</span>
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 text-lg">{product.name}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{product.description}</p>

                <div className="flex items-baseline space-x-2 pt-2">
                  <span className="text-2xl font-black text-blue-600">₹{product.price.toLocaleString('en-IN')}</span>
                  {product.oldPrice && (
                    <span className="text-xs text-slate-400 line-through">₹{product.oldPrice.toLocaleString('en-IN')}</span>
                  )}
                </div>

                <div className="pt-4 flex items-center space-x-2">
                  <button
                    onClick={() => onOpenModal(product)}
                    className="flex-1 btn-secondary text-xs py-3 font-bold"
                  >
                    Quick Specs
                  </button>
                  <button
                    onClick={() => onInquireItem(
                      product.category === 'Mobiles' ? 'Mobile Buying Inquiry' : 'Accessories Inquiry',
                      `Inquiry for ${product.name} (${product.brand}) - Price: ₹${product.price.toLocaleString('en-IN')}`
                    )}
                    className="btn-primary py-3 px-5 text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Inquiry</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
