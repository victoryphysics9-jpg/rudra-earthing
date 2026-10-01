import React, { useState } from 'react';
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  Download,
  Phone,
  ArrowRight,
  Factory,
  Sun,
  Building2,
  Radio,
  Share2,
  Check,
  ZoomIn,
  Flame,
} from 'lucide-react';
import { Product } from '../types';
import { siteConfig } from '../config/siteConfig';

import heroSubstationImg from '../assets/images/rudra_hero_substation_1790859117610.jpg';

interface ProductDetailViewProps {
  product: Product;
  allProducts: Product[];
  onNavigate: (view: string, productId?: string) => void;
  onOpenQuoteModal: (productId?: string) => void;
  onOpenCatalogueModal: () => void;
  onOpenImageLightbox: (url: string, title?: string) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  allProducts,
  onNavigate,
  onOpenQuoteModal,
  onOpenCatalogueModal,
  onOpenImageLightbox,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const relatedProducts = allProducts.filter((p) =>
    product.relatedProductIds.includes(p.id)
  );

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const titleParts = product.name.split(' ');
  const mainFirstWord = titleParts.slice(0, 2).join(' ');
  const mainRestWords = titleParts.slice(2).join(' ');

  const currentDisplayImage = product.images[selectedImageIndex] || product.images[0];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* 1. TOP BREADCRUMB & HERO BANNER */}
      <section className="relative bg-[#070f1a] text-white overflow-hidden py-10 md:py-14 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={heroSubstationImg}
            alt="Product Background"
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity cursor-pointer"
            referrerPolicy="no-referrer"
            onDoubleClick={() => onOpenImageLightbox(heroSubstationImg, 'Industrial Grid Substation Backdrop')}
            title="Double-click to view fullscreen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070f1a] via-[#070f1a]/90 to-[#070f1a]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">
              Products
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-400">{product.categoryLabel}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-semibold">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header info */}
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                {mainFirstWord}{' '}
                <span className="text-amber-500">{mainRestWords || ''}</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                {product.shortDesc}
              </p>

              {/* 4 Feature Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                {product.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-sm flex items-start gap-2.5"
                  >
                    <div className="text-amber-500 shrink-0 mt-0.5">
                      {idx === 0 && <Zap className="w-4 h-4" />}
                      {idx === 1 && <ShieldCheck className="w-4 h-4" />}
                      {idx === 2 && <Clock className="w-4 h-4" />}
                      {idx === 3 && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <span className="text-xs font-semibold text-slate-200 leading-tight">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Header Visual */}
            <div className="lg:col-span-4 hidden lg:block">
              <div
                className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl p-1 bg-gradient-to-tr from-amber-500/20 to-transparent cursor-pointer group"
                onDoubleClick={() => onOpenImageLightbox(product.images[0], product.name)}
                title="Double-click to inspect fullscreen"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="rounded-xl w-full h-52 object-cover group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN PRODUCT OVERVIEW: GALLERY + DETAILS + SPEC TABLE */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT: GALLERY */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row gap-4">
              {/* Vertical thumbnail list */}
              <div className="flex sm:flex-col gap-2 order-2 sm:order-1">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    onDoubleClick={() => onOpenImageLightbox(img, `${product.name} - View ${index + 1}`)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      selectedImageIndex === index
                        ? 'border-amber-500 ring-2 ring-amber-500/30'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                    title="Click to select, double-click for fullscreen"
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>

              {/* Main zoomable preview */}
              <div
                className="flex-1 rounded-2xl border border-slate-200 overflow-hidden relative group bg-slate-100 order-1 sm:order-2 cursor-pointer"
                onDoubleClick={() => onOpenImageLightbox(currentDisplayImage, product.name)}
                title="Double-click to open high-resolution fullscreen"
              >
                <img
                  src={currentDisplayImage}
                  alt={product.name}
                  className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenImageLightbox(currentDisplayImage, product.name);
                  }}
                  className="absolute bottom-3 right-3 p-2 bg-black/60 hover:bg-black/90 text-white rounded-lg backdrop-blur-sm transition-colors flex items-center gap-1.5 text-xs"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span className="hidden sm:inline font-semibold">Fullscreen</span>
                </button>
              </div>
            </div>

            {/* CENTER: PRODUCT DESCRIPTION & CTAS */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-black tracking-widest text-amber-600 uppercase block mb-1">
                  PREMIUM QUALITY
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {product.name}
                </h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {product.fullDesc}
              </p>

              {/* 4 Feature Pills / Cards */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {product.keyFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2"
                  >
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 text-xs font-bold">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal(product.id)}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenCatalogueModal}
                  className="px-5 py-3 border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 font-semibold text-xs rounded-xl transition-colors flex items-center gap-2 bg-white"
                >
                  <Download className="w-4 h-4 text-amber-600" />
                  <span>Download Brochure</span>
                </button>

                <button
                  onClick={handleShare}
                  className="p-3 border border-slate-200 hover:bg-slate-50 rounded-xl text-slate-500 transition-colors"
                  title="Share link"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* RIGHT: KEY SPECIFICATIONS TABLE */}
            <div className="lg:col-span-3 space-y-4">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-4">
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                  Key Specifications
                </h3>

                <div className="divide-y divide-slate-200/80 text-xs">
                  <div className="py-2 flex items-center justify-between">
                    <span className="text-slate-500">Material</span>
                    <span className="font-semibold text-slate-800 text-right">{product.specifications.material}</span>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <span className="text-slate-500">Diameter</span>
                    <span className="font-semibold text-slate-800">{product.specifications.diameter}</span>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <span className="text-slate-500">Length</span>
                    <span className="font-semibold text-slate-800">{product.specifications.length}</span>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <span className="text-slate-500">Copper Layer</span>
                    <span className="font-semibold text-slate-800">{product.specifications.copperLayerThickness}</span>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <span className="text-slate-500">Tensile Strength</span>
                    <span className="font-semibold text-slate-800">{product.specifications.tensileStrength}</span>
                  </div>
                  <div className="py-2 flex items-center justify-between">
                    <span className="text-slate-500">Standards</span>
                    <span className="font-semibold text-slate-800 text-right">{product.specifications.standards}</span>
                  </div>
                </div>
              </div>

              {/* Need a custom solution box */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 space-y-2">
                <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-600" />
                  <span>Need a custom solution?</span>
                </div>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  Our engineering team can help you select the exact copper micron and length based on your soil resistivity test.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-bold text-amber-700 hover:text-amber-900 inline-flex items-center gap-1 mt-1"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPLICATIONS GRID */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Applications
            </h3>
            <p className="text-xs text-slate-500">
              Ideal for a wide range of applications including:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {product.applications.map((app, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-2 shadow-xs hover:border-amber-400 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 mx-auto flex items-center justify-center">
                  {idx % 4 === 0 && <Sun className="w-5 h-5" />}
                  {idx % 4 === 1 && <Factory className="w-5 h-5" />}
                  {idx % 4 === 2 && <Building2 className="w-5 h-5" />}
                  {idx % 4 === 3 && <Radio className="w-5 h-5" />}
                </div>
                <div className="text-xs font-bold text-slate-800">{app}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCT VARIANTS TABLE */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Product Variants
            </h3>
            <p className="text-xs text-slate-500">
              Standard manufacturing dimensions and thicknesses
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-xs">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left font-bold text-slate-700 uppercase tracking-wider">
                    Diameter (mm)
                  </th>
                  <th className="px-6 py-3 text-left font-bold text-slate-700 uppercase tracking-wider">
                    Length (m)
                  </th>
                  <th className="px-6 py-3 text-left font-bold text-slate-700 uppercase tracking-wider">
                    Copper Layer (µm)
                  </th>
                  <th className="px-6 py-3 text-right font-bold text-slate-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100 font-medium">
                {product.variants.map((variant, i) => (
                  <tr key={i} className="hover:bg-amber-50/50 transition-colors">
                    <td className="px-6 py-3 text-slate-900 font-bold">{variant.diameter}</td>
                    <td className="px-6 py-3 text-slate-600">{variant.length}</td>
                    <td className="px-6 py-3 text-slate-600">{variant.copperLayer}</td>
                    <td className="px-6 py-3 text-right">
                      <button
                        onClick={() => onOpenQuoteModal(product.id)}
                        className="text-amber-600 hover:text-amber-700 font-bold"
                      >
                        Enquire This Size
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400">
            ⓘ Custom sizes, diameters up to 32mm, and length up to 6.0 meters are available on request.
          </p>
        </div>
      </section>

      {/* 5. RELATED PRODUCTS */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">
              Related Products
            </h3>
            <button
              onClick={() => onNavigate('products')}
              className="text-xs font-bold text-amber-600 hover:text-amber-700"
            >
              View Full Range →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate('product-detail', rel.id)}
                className="cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div
                    className="h-40 bg-slate-100 overflow-hidden relative"
                    onDoubleClick={(e) => {
                      e.stopPropagation();
                      onOpenImageLightbox(rel.images[0], rel.name);
                    }}
                    title="Double-click to inspect fullscreen"
                  >
                    <img
                      src={rel.images[0]}
                      alt={rel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {rel.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-2">
                      {rel.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-amber-600 font-bold">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM READY TO BUILD A SAFER FUTURE BANNER */}
      <section className="bg-[#0b1626] py-10 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to Build a Safer Future?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get the right earthing solution for your project. Our experts are here to help.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal(product.id)}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              Request a Quote
            </button>

            <a
              href={`tel:${siteConfig.PHONE_RAW}`}
              className="px-5 py-2.5 rounded-xl border border-slate-600 hover:border-white text-white font-semibold text-xs flex items-center gap-2 transition-all hover:bg-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Us Now {siteConfig.PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
