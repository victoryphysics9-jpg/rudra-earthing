import React from 'react';
import {
  ShieldCheck,
  Cpu,
  Clock,
  Truck,
  ArrowRight,
  Eye,
  Target,
  Zap,
  CloudLightning,
  Factory,
  Building2,
  Sun,
  Radio,
  Award,
  Settings,
  Headphones,
  Download,
  Phone,
  Star,
  CheckCircle2,
  Maximize2,
} from 'lucide-react';
import { Product, CustomerFeedback } from '../types';
import { siteConfig } from '../config/siteConfig';

import heroSubstationImg from '../assets/images/rudra_hero_substation_1790859117610.jpg';
import copperRodsImg from '../assets/images/rudra_copper_bonded_rods_1790859134733.jpg';
import factoryImg from '../assets/images/rudra_factory_manufacturing_1790859150262.jpg';
import arresterImg from '../assets/images/rudra_lightning_arrester_1790859164679.jpg';

interface HomeViewProps {
  products: Product[];
  testimonials: CustomerFeedback[];
  onNavigate: (view: string, productId?: string) => void;
  onOpenQuoteModal: (productId?: string) => void;
  onOpenCatalogueModal: () => void;
  onOpenImageLightbox: (url: string, title?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  products,
  testimonials,
  onNavigate,
  onOpenQuoteModal,
  onOpenCatalogueModal,
  onOpenImageLightbox,
}) => {
  return (
    <div className="space-y-0 text-slate-800">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#070f1a] text-white overflow-hidden py-16 md:py-24 lg:py-28 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={heroSubstationImg}
            alt="Substation Earthing & Lightning Protection"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out hover:scale-100 cursor-pointer"
            referrerPolicy="no-referrer"
            onDoubleClick={() => onOpenImageLightbox(heroSubstationImg, 'Industrial Substation Grounding Infrastructure')}
            title="Double-click to view fullscreen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070f1a] via-[#070f1a]/85 to-[#070f1a]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Earthing &amp; Lightning Protection Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Reliable Earthing &amp;{' '}
                <span className="text-amber-500">Lightning Protection</span> Solutions
              </h1>

              <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
                Rudra Earthing System is a trusted manufacturer of high-quality earthing and lightning protection materials, designed to ensure safety, stability and long-term performance for your critical infrastructure.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all hover:scale-102 active:scale-98 flex items-center gap-2"
                >
                  <span>View Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 rounded-full border border-slate-600 hover:border-white text-white font-semibold text-sm transition-all hover:bg-white/10 active:scale-98"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Side Visual Showcase */}
            <div className="lg:col-span-4 hidden lg:block">
              <div
                className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900/60 p-2 backdrop-blur-sm group cursor-pointer"
                onDoubleClick={() => onOpenImageLightbox(copperRodsImg, 'Copper Bonded Earthing Rods')}
                title="Double-click to open high-resolution fullscreen"
              >
                <img
                  src={copperRodsImg}
                  alt="Copper Bonded Rods"
                  className="rounded-xl w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="absolute inset-x-2 bottom-2 p-3 bg-slate-950/80 backdrop-blur-md rounded-b-xl border-t border-slate-700/40">
                  <div className="text-xs font-bold text-amber-400">
                    High Conductivity Electrodes
                  </div>
                  <div className="text-[11px] text-slate-300">
                    ≥ 250 Microns Copper Layer Molecular Bonding
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4-PILLAR FEATURE HIGHLIGHT BAR */}
      <section className="bg-[#050b14] border-b border-slate-800 text-slate-300 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="flex items-center gap-3.5 p-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Quality Products</div>
                <div className="text-xs text-slate-400">International Standards</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Advanced Manufacturing</div>
                <div className="text-xs text-slate-400">Modern Technology</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Reliable Performance</div>
                <div className="text-xs text-slate-400">Long Lasting &amp; Safe</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">On Time Delivery</div>
                <div className="text-xs text-slate-400">Across India &amp; Globally</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 4-Image Asymmetric Gallery */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className="overflow-hidden rounded-2xl shadow-md border border-slate-200 cursor-pointer group relative"
                  onDoubleClick={() => onOpenImageLightbox(factoryImg, 'Manufacturing Facility')}
                  title="Double-click to open fullscreen"
                >
                  <img
                    src={factoryImg}
                    alt="Rudra Earthing Facility"
                    className="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 p-1 rounded-md bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div
                  className="overflow-hidden rounded-2xl shadow-md border border-slate-200 cursor-pointer group relative"
                  onDoubleClick={() => onOpenImageLightbox(copperRodsImg, 'Copper Bonded Stock')}
                  title="Double-click to open fullscreen"
                >
                  <img
                    src={copperRodsImg}
                    alt="Copper Bonded Rods Stock"
                    className="w-full h-36 sm:h-44 object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 p-1 rounded-md bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div
                  className="overflow-hidden rounded-2xl shadow-md border border-slate-200 cursor-pointer group relative"
                  onDoubleClick={() => onOpenImageLightbox(arresterImg, 'Lightning Arrester Testing')}
                  title="Double-click to open fullscreen"
                >
                  <img
                    src={arresterImg}
                    alt="Lightning Protection Testing"
                    className="w-full h-36 sm:h-44 object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 p-1 rounded-md bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div
                  className="overflow-hidden rounded-2xl shadow-md border border-slate-200 cursor-pointer group relative"
                  onDoubleClick={() => onOpenImageLightbox(heroSubstationImg, 'Industrial Grid Substation')}
                  title="Double-click to open fullscreen"
                >
                  <img
                    src={heroSubstationImg}
                    alt="Industrial Plant Deployment"
                    className="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 p-1 rounded-md bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase block mb-1">
                  ABOUT US
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Rudra Earthing System
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We are a leading manufacturer of Earthing &amp; Lightning Protection materials, committed to delivering safe, reliable and advanced solutions for diverse industries. With years of experience and a strong focus on quality, we manufacture products that meet international standards and ensure the highest level of safety.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <Eye className="w-5 h-5 text-amber-600" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To be a globally recognized company in earthing and lightning protection solutions through continuous innovation, quality manufacturing and customer satisfaction.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200/70 space-y-2">
                  <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
                    <Target className="w-5 h-5 text-orange-600" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To provide superior quality products, engineering solutions and prompt technical support for a safer, sustainable, and lightning-proof industrial future.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 group"
                >
                  <span>Learn More About Our Facility &amp; Certifications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PRODUCTS / WIDE RANGE */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase block mb-1">
                OUR PRODUCTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Wide Range of Products
              </h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-amber-600 group"
            >
              <span>View All 11 Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map((product) => (
              <div
                key={product.id}
                onClick={() => onNavigate('product-detail', product.id)}
                className="group cursor-pointer bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div
                    className="h-52 bg-slate-100 overflow-hidden relative group/img"
                    onDoubleClick={(e) => {
                      e.stopPropagation();
                      onOpenImageLightbox(product.images[0], product.name);
                    }}
                    title="Double-click to inspect image fullscreen"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/50 text-white opacity-0 group-hover/img:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-slate-800 rounded-md shadow-sm">
                        {product.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
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
        </div>
      </section>

      {/* 5. OUR SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 space-y-5">
              <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase block">
                OUR SOLUTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Engineered for a Safer Tomorrow
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We provide complete earthing and lightning protection solutions for various applications, ensuring maximum safety, regulatory compliance, and system reliability.
              </p>
              <button
                onClick={() => onNavigate('solutions')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xs shadow-md hover:from-amber-600 hover:to-orange-700 transition-all flex items-center gap-2"
              >
                <span>Explore All Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div
                onClick={() => onNavigate('solutions')}
                className="cursor-pointer p-5 rounded-2xl border border-slate-200/90 bg-slate-50 hover:bg-white hover:border-amber-500/50 hover:shadow-lg transition-all text-center space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Electrical Earthing
                </h4>
              </div>

              <div
                onClick={() => onNavigate('solutions')}
                className="cursor-pointer p-5 rounded-2xl border border-slate-200/90 bg-slate-50 hover:bg-white hover:border-amber-500/50 hover:shadow-lg transition-all text-center space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CloudLightning className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Lightning Protection
                </h4>
              </div>

              <div
                onClick={() => onNavigate('solutions')}
                className="cursor-pointer p-5 rounded-2xl border border-slate-200/90 bg-slate-50 hover:bg-white hover:border-amber-500/50 hover:shadow-lg transition-all text-center space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Factory className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Industrial Earthing
                </h4>
              </div>

              <div
                onClick={() => onNavigate('solutions')}
                className="cursor-pointer p-5 rounded-2xl border border-slate-200/90 bg-slate-50 hover:bg-white hover:border-amber-500/50 hover:shadow-lg transition-all text-center space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Commercial Building Earthing
                </h4>
              </div>

              <div
                onClick={() => onNavigate('solutions')}
                className="cursor-pointer p-5 rounded-2xl border border-slate-200/90 bg-slate-50 hover:bg-white hover:border-amber-500/50 hover:shadow-lg transition-all text-center space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sun className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Solar Earthing
                </h4>
              </div>

              <div
                onClick={() => onNavigate('solutions')}
                className="cursor-pointer p-5 rounded-2xl border border-slate-200/90 bg-slate-50 hover:bg-white hover:border-amber-500/50 hover:shadow-lg transition-all text-center space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Radio className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Substation / Grid Earthing
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE RUDRA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-amber-400 uppercase">
              WHY CHOOSE RUDRA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Your Trusted Partner in Safety
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We combine quality, technology and expertise to deliver earthing and lightning protection solutions that you can count on - every time.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="p-4 space-y-3 group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                <Award className="w-7 h-7" />
              </div>
              <h4 className="text-sm font-bold text-white">Premium Quality Products</h4>
              <p className="text-[11px] text-slate-400">Strict NABL &amp; CPRI compliance testing</p>
            </div>

            <div className="p-4 space-y-3 group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                <Cpu className="w-7 h-7" />
              </div>
              <h4 className="text-sm font-bold text-white">Technical Expertise</h4>
              <p className="text-[11px] text-slate-400">Soil analysis &amp; IEEE 80 calculations</p>
            </div>

            <div className="p-4 space-y-3 group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                <Settings className="w-7 h-7" />
              </div>
              <h4 className="text-sm font-bold text-white">Customized Solutions</h4>
              <p className="text-[11px] text-slate-400">Custom diameter, length &amp; copper depth</p>
            </div>

            <div className="p-4 space-y-3 group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                <Clock className="w-7 h-7" />
              </div>
              <h4 className="text-sm font-bold text-white">Timely Delivery</h4>
              <p className="text-[11px] text-slate-400">Direct factory logistics across India</p>
            </div>

            <div className="p-4 space-y-3 group col-span-2 md:col-span-1">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                <Headphones className="w-7 h-7" />
              </div>
              <h4 className="text-sm font-bold text-white">Dedicated Customer Support</h4>
              <p className="text-[11px] text-slate-400">Engineer on-call &amp; test documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. APPLICATIONS & INDUSTRIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase block mb-1">
                OUR PROJECTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Applications &amp; Industries
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Our solutions are trusted across a wide range of industries and critical infrastructure projects.
              </p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-amber-600 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="cursor-pointer group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all"
              onDoubleClick={() => onOpenImageLightbox(heroSubstationImg, 'Solar Power Plants Grounding')}
              title="Double-click to inspect fullscreen"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={heroSubstationImg}
                  alt="Solar Power Plants"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Renewable Energy
                  </div>
                  <h4 className="text-base font-bold text-white">Solar Power Plants</h4>
                </div>
              </div>
            </div>

            <div
              className="cursor-pointer group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all"
              onDoubleClick={() => onOpenImageLightbox(factoryImg, 'Industrial Manufacturing Grounding')}
              title="Double-click to inspect fullscreen"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={factoryImg}
                  alt="Industrial Facilities"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Manufacturing
                  </div>
                  <h4 className="text-base font-bold text-white">Industrial Facilities</h4>
                </div>
              </div>
            </div>

            <div
              className="cursor-pointer group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all"
              onDoubleClick={() => onOpenImageLightbox(copperRodsImg, 'Commercial High-Rise Earthing')}
              title="Double-click to inspect fullscreen"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={copperRodsImg}
                  alt="Commercial Buildings"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    High-Rise Infrastructure
                  </div>
                  <h4 className="text-base font-bold text-white">Commercial Buildings</h4>
                </div>
              </div>
            </div>

            <div
              className="cursor-pointer group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all"
              onDoubleClick={() => onOpenImageLightbox(arresterImg, 'Substations & High Voltage Grids')}
              title="Double-click to inspect fullscreen"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={arresterImg}
                  alt="Substations & Infrastructure"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    High Voltage Grids
                  </div>
                  <h4 className="text-base font-bold text-white">Substations &amp; Grid</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER TESTIMONIALS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase">
              CLIENT TESTIMONIALS &amp; RATINGS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Leading EPC Contractors &amp; Engineers
            </h2>
            <p className="text-xs text-slate-500">
              Real feedback from project consultants who depend on Rudra earthing systems every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.filter(t => t.isApproved).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-amber-500/30 cursor-pointer"
                    referrerPolicy="no-referrer"
                    onDoubleClick={() => onOpenImageLightbox(item.imageUrl, item.name)}
                    title="Double-click to inspect photo"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{item.name}</div>
                    <div className="text-[11px] text-slate-500">{item.role} · {item.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DOWNLOAD CATALOGUE BANNER */}
      <section className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-20 rounded-lg bg-slate-900 border-2 border-white/40 shadow-xl hidden sm:flex items-center justify-center text-center p-2 shrink-0">
                <span className="text-[9px] font-black uppercase text-amber-400 leading-tight">
                  RUDRA 2025 CATALOGUE
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-black tracking-widest uppercase text-amber-950 bg-white/40 px-2 py-0.5 rounded">
                  DOWNLOAD CATALOGUE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Get Our Technical Product Catalogue
                </h3>
                <p className="text-amber-100 text-xs sm:text-sm">
                  Explore our complete range of products, specifications, IEEE standards, and more.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenCatalogueModal}
              className="px-8 py-3.5 rounded-full bg-slate-950 hover:bg-black text-white font-bold text-sm shadow-xl transition-transform hover:scale-105 active:scale-98 flex items-center gap-2 shrink-0"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 10. READY TO BUILD A SAFER FUTURE CTA BANNER */}
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
              onClick={() => onOpenQuoteModal()}
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
