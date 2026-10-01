import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, Zap, Download } from 'lucide-react';
import { Product } from '../types';

interface ProductsViewProps {
  products: Product[];
  onNavigate: (view: string, productId?: string) => void;
  onOpenQuoteModal: (productId?: string) => void;
  onOpenCatalogueModal: () => void;
  onOpenImageLightbox?: (url: string, title?: string) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  products,
  onNavigate,
  onOpenQuoteModal,
  onOpenCatalogueModal,
  onOpenImageLightbox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-[#0c1a2e] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              RUDRA PRODUCT CATALOGUE
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Engineered Earthing &amp; Lightning Protection Systems
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Explore our complete range of high-conductivity copper bonded rods, chemical electrodes, early streamer emission lightning arresters, and conductive compounds.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95"
              >
                Request Custom Bulk Quote
              </button>
              <button
                onClick={onOpenCatalogueModal}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Download PDF Datasheet</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Products ({products.length})
            </button>
            <button
              onClick={() => setSelectedCategory('rods')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === 'rods'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Earthing Rods
            </button>
            <button
              onClick={() => setSelectedCategory('electrodes')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === 'electrodes'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Chemical Electrodes
            </button>
            <button
              onClick={() => setSelectedCategory('lightning')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === 'lightning'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Lightning Arresters
            </button>
            <button
              onClick={() => setSelectedCategory('compounds')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === 'compounds'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Backfill Compounds
            </button>
            <button
              onClick={() => setSelectedCategory('accessories')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === 'accessories'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Pit Covers &amp; Kits
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products or specs..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onNavigate('product-detail', product.id)}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div
                  className="h-52 bg-slate-100 overflow-hidden relative cursor-pointer"
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    if (onOpenImageLightbox) {
                      onOpenImageLightbox(product.images[0], product.name);
                    }
                  }}
                  title="Double-click to view fullscreen"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-slate-800 rounded-md shadow-xs">
                      {product.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {product.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                <span className="text-xs font-bold text-amber-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenQuoteModal(product.id);
                  }}
                  className="px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-amber-500 hover:text-white rounded-lg transition-colors"
                >
                  Quick Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <Zap className="w-12 h-12 text-amber-500 mx-auto mb-3 opacity-50" />
            <h3 className="text-lg font-bold text-slate-800">No products match your search</h3>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search query or filter</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
