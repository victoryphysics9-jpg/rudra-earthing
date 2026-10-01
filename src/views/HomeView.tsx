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

/*
 * IMPORTANT:
 * Only PNG assets from the current Rudra product asset set are used here.
 * Old JPG / generated-image dependencies have been removed.
 */
import copperBondedRodImg from '../assets/images/copper bonded earthing rod.png';
import copperBondedElectrodeImg from '../assets/images/copper bonded earthing electrode.png';
import fourGCopperBondedRodImg from '../assets/images/4g copper bonded earthing rod.png';
import pureCopperEarthingElectrodeImg from '../assets/images/pure copper earthing electrode.png';
import eseLightningArresterImg from '../assets/images/ese lightning arrester.png';

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
    <div className="space-y-0 text-slate-800 overflow-hidden">

      {/* =========================================================
          1. HERO SECTION
      ========================================================= */}
      <section className="relative bg-[#070f1a] text-white overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 border-b border-slate-800">

        {/* Background product image */}
        <div className="absolute inset-0 z-0">
          <img
            src={fourGCopperBondedRodImg}
            alt="Rudra 4G Copper Bonded Earthing Rod"
            className="w-full h-full object-cover object-center opacity-20 scale-105 transition-transform duration-1000 ease-out hover:scale-100 cursor-pointer"
            onDoubleClick={() =>
              onOpenImageLightbox(
                fourGCopperBondedRodImg,
                '4G Copper Bonded Earthing Rod'
              )
            }
            title="Double-click to view fullscreen"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#070f1a] via-[#070f1a]/95 to-[#070f1a]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070f1a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-6">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                <Zap className="w-3.5 h-3.5 shrink-0" />
                <span>Earthing &amp; Lightning Protection Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Reliable Earthing &amp;{' '}
                <span className="text-amber-500">
                  Lightning Protection
                </span>{' '}
                Solutions
              </h1>

              <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                Rudra Earthing System provides earthing and lightning
                protection products designed for industrial, commercial,
                renewable energy and critical infrastructure applications.
              </p>

              <div className="pt-2 flex flex-col xs:flex-row sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">

                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="w-full xs:w-auto sm:w-auto justify-center px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>View Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="w-full xs:w-auto sm:w-auto justify-center px-6 sm:px-7 py-3.5 rounded-full border border-slate-600 hover:border-white text-white font-semibold text-sm transition-all hover:bg-white/10 active:scale-95 flex items-center gap-2"
                >
                  Contact Us
                </button>

              </div>

              {/* Small trust points */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  Earthing Systems
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  Lightning Protection
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  Industrial Solutions
                </span>
              </div>
            </div>

            {/* RIGHT PRODUCT SHOWCASE */}
            <div className="lg:col-span-5 xl:col-span-4">

              <div
                className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900/70 p-2 backdrop-blur-sm group cursor-pointer"
                onDoubleClick={() =>
                  onOpenImageLightbox(
                    copperBondedRodImg,
                    'Copper Bonded Earthing Rod'
                  )
                }
                title="Double-click to open fullscreen"
              >

                <div className="h-64 sm:h-72 md:h-80 lg:h-[390px] rounded-xl overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={copperBondedRodImg}
                    alt="Copper Bonded Earthing Rod"
                    className="w-full h-full object-contain p-5 sm:p-7 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="absolute top-5 right-5 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute inset-x-2 bottom-2 p-4 bg-slate-950/90 backdrop-blur-md rounded-b-xl border-t border-slate-700/40">

                  <div className="text-xs font-bold text-amber-400">
                    Copper Bonded Earthing Rod
                  </div>

                  <div className="text-[11px] text-slate-300 mt-1">
                    High conductivity • Corrosion resistant • Industrial grounding
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          2. FEATURE HIGHLIGHT BAR
      ========================================================= */}
      <section className="bg-[#050b14] border-b border-slate-800 text-slate-300 py-5 sm:py-6">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-6">

            <div className="flex items-center gap-3 p-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  Quality Products
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400">
                  Standards Focused
                </div>
              </div>
            </div>


            <div className="flex items-center gap-3 p-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  Advanced Manufacturing
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400">
                  Modern Technology
                </div>
              </div>
            </div>


            <div className="flex items-center gap-3 p-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  Reliable Performance
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400">
                  Designed for Safety
                </div>
              </div>
            </div>


            <div className="flex items-center gap-3 p-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  On Time Delivery
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400">
                  Across India &amp; Beyond
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          3. ABOUT US
      ========================================================= */}
      <section className="py-16 sm:py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* PRODUCT VISUAL GRID */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">

              {/* Column 1 */}
              <div className="space-y-3 sm:space-y-4">

                <div
                  className="overflow-hidden rounded-2xl shadow-md border border-slate-200 cursor-pointer group relative bg-white"
                  onDoubleClick={() =>
                    onOpenImageLightbox(
                      fourGCopperBondedRodImg,
                      '4G Copper Bonded Earthing Rod'
                    )
                  }
                >
                  <img
                    src={fourGCopperBondedRodImg}
                    alt="4G Copper Bonded Earthing Rod"
                    className="w-full h-44 sm:h-52 object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute bottom-2 left-2 right-2 px-3 py-2 rounded-lg bg-slate-950/85 text-white">
                    <div className="text-[10px] font-bold text-amber-400">
                      4G EARTHING
                    </div>
                    <div className="text-[10px] text-slate-300">
                      Heavy Duty Copper Bonded Rod
                    </div>
                  </div>
                </div>


                <div
                  className="overflow-hidden rounded-2xl shadow-md border border-slate-200 cursor-pointer group relative bg-white"
                  onDoubleClick={() =>
                    onOpenImageLightbox(
                      pureCopperEarthingElectrodeImg,
                      'Pure Copper Earthing Electrode'
                    )
                  }
                >
                  <img
                    src={pureCopperEarthingElectrodeImg}
                    alt="Pure Copper Earthing Electrode"
                    className="w-full h-36 sm:h-44 object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute bottom-2 left-2 right-2 px-3 py-2 rounded-lg bg-slate-950/85 text-white">
                    <div className="text-[10px] font-bold text-amber-400">
                      PURE COPPER
                    </div>
                    <div className="text-[10px] text-slate-300">
                      Premium Earthing Electrode
                    </div>
                  </div>
                </div>

              </div>


              {/* Column 2 */}
              <div className="space-y-3 sm:space-y-4 pt-5 sm:pt-6">

                <div
                  className="overflow-hidden rounded-2xl shadow-md border border-slate-200 cursor-pointer group relative bg-white"
                  onDoubleClick={() =>
                    onOpenImageLightbox(
                      eseLightningArresterImg,
                      'ESE Lightning Arrester'
                    )
                  }
                >
                  <img
                    src={eseLightningArresterImg}
                    alt="ESE Lightning Arrester"
                    className="w-full h-36 sm:h-44 object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute bottom-2 left-2 right-2 px-3 py-2 rounded-lg bg-slate-950/85 text-white">
                    <div className="text-[10px] font-bold text-amber-400">
                      LIGHTNING PROTECTION
                    </div>
                    <div className="text-[10px] text-slate-300">
                      ESE Lightning Arrester
                    </div>
                  </div>
                </div>


                <div
                  className="overflow-hidden rounded-2xl shadow-md border border-slate-200 cursor-pointer group relative bg-white"
                  onDoubleClick={() =>
                    onOpenImageLightbox(
                      copperBondedElectrodeImg,
                      'Copper Bonded Earthing Electrode'
                    )
                  }
                >
                  <img
                    src={copperBondedElectrodeImg}
                    alt="Copper Bonded Earthing Electrode"
                    className="w-full h-44 sm:h-52 object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute bottom-2 left-2 right-2 px-3 py-2 rounded-lg bg-slate-950/85 text-white">
                    <div className="text-[10px] font-bold text-amber-400">
                      EARTHING ELECTRODE
                    </div>
                    <div className="text-[10px] text-slate-300">
                      Copper Bonded Electrode
                    </div>
                  </div>
                </div>

              </div>

            </div>


            {/* ABOUT CONTENT */}
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
                We provide earthing and lightning protection products for
                industrial, commercial, renewable energy and critical
                infrastructure applications, with a strong focus on product
                quality, dependable performance and technical support.
              </p>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

                <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-2">

                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <Eye className="w-5 h-5 text-amber-600" />
                    <span>Our Vision</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    To build a recognized earthing and lightning protection
                    brand through continuous innovation, quality manufacturing
                    and customer-focused solutions.
                  </p>

                </div>


                <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200/70 space-y-2">

                  <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
                    <Target className="w-5 h-5 text-orange-600" />
                    <span>Our Mission</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    To provide dependable products, engineering solutions and
                    technical support for safer and more reliable electrical
                    infrastructure.
                  </p>

                </div>

              </div>


              <div className="pt-2">

                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 group"
                >
                  <span>Learn More About Rudra</span>

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          4. PRODUCTS
      ========================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">

            <div>
              <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase block mb-1">
                OUR PRODUCTS
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Wide Range of Products
              </h2>

              <p className="text-sm text-slate-500 mt-2 max-w-2xl">
                Explore earthing electrodes, copper bonded rods, lightning
                protection products and supporting grounding accessories.
              </p>
            </div>


            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-amber-600 group shrink-0"
            >
              <span>View All 11 Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

            {products.slice(0, 6).map((product) => (

              <div
                key={product.id}
                onClick={() => onNavigate('product-detail', product.id)}
                className="group cursor-pointer bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >

                <div>

                  <div
                    className="h-52 sm:h-56 bg-white overflow-hidden relative group/img flex items-center justify-center"
                    onDoubleClick={(e) => {
                      e.stopPropagation();

                      const image = product.images?.[0];

                      if (image) {
                        onOpenImageLightbox(image, product.name);
                      }
                    }}
                    title="Double-click to inspect image fullscreen"
                  >

                    {product.images?.[0] ? (
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-contain p-5 group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-xs text-slate-400">
                        Product image unavailable
                      </div>
                    )}

                    <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/50 text-white opacity-0 group-hover/img:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>


                    <div className="absolute top-3 left-3">

                      <span className="px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold bg-white/95 backdrop-blur-sm text-slate-800 rounded-md shadow-sm">
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


                <div className="p-5 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-2">

                  <span className="text-xs font-bold text-amber-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>


                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuoteModal(product.id);
                    }}
                    className="px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-amber-500 hover:text-white rounded-lg transition-colors shrink-0"
                  >
                    Quick Quote
                  </button>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>


      {/* =========================================================
          5. SOLUTIONS
      ========================================================= */}
      <section className="py-16 sm:py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            <div className="lg:col-span-4 space-y-5">

              <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase block">
                OUR SOLUTIONS
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Engineered for a Safer Tomorrow
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                Complete earthing and lightning protection solutions for
                industrial, commercial, renewable energy and infrastructure
                applications.
              </p>

              <button
                type="button"
                onClick={() => onNavigate('solutions')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xs shadow-md hover:from-amber-600 hover:to-orange-700 transition-all flex items-center gap-2"
              >
                <span>Explore All Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>


            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">

              {[
                {
                  icon: Zap,
                  title: 'Electrical Earthing',
                },
                {
                  icon: CloudLightning,
                  title: 'Lightning Protection',
                },
                {
                  icon: Factory,
                  title: 'Industrial Earthing',
                },
                {
                  icon: Building2,
                  title: 'Commercial Building Earthing',
                },
                {
                  icon: Sun,
                  title: 'Solar Earthing',
                },
                {
                  icon: Radio,
                  title: 'Substation / Grid Earthing',
                },
              ].map(({ icon: Icon, title }) => (

                <div
                  key={title}
                  onClick={() => onNavigate('solutions')}
                  className="cursor-pointer p-4 sm:p-5 rounded-2xl border border-slate-200/90 bg-slate-50 hover:bg-white hover:border-amber-500/50 hover:shadow-lg transition-all text-center space-y-3 group"
                >

                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-100 text-amber-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {title}
                  </h4>

                </div>

              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          6. WHY CHOOSE RUDRA
      ========================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">

            <span className="text-xs font-extrabold tracking-widest text-amber-400 uppercase">
              WHY CHOOSE RUDRA
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Built Around Quality &amp; Reliability
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              We combine product quality, technical understanding and
              customer support to provide dependable grounding solutions.
            </p>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 text-center">

            {[
              {
                icon: Award,
                title: 'Premium Quality Products',
                text: 'Quality-focused product manufacturing',
              },
              {
                icon: Cpu,
                title: 'Technical Expertise',
                text: 'Engineering-focused solutions',
              },
              {
                icon: Settings,
                title: 'Customized Solutions',
                text: 'Multiple sizes and configurations',
              },
              {
                icon: Clock,
                title: 'Timely Delivery',
                text: 'Efficient order coordination',
              },
              {
                icon: Headphones,
                title: 'Customer Support',
                text: 'Technical assistance when required',
              },
            ].map(({ icon: Icon, title, text }, index) => (

              <div
                key={title}
                className={`p-3 sm:p-4 space-y-3 group ${
                  index === 4 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >

                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <Icon className="w-7 h-7" />
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-white">
                  {title}
                </h4>

                <p className="text-[10px] sm:text-[11px] text-slate-400 leading-relaxed">
                  {text}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>


      {/* =========================================================
          7. APPLICATIONS & INDUSTRIES
      ========================================================= */}
      <section className="py-16 sm:py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">

            <div>

              <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase block mb-1">
                APPLICATIONS
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Applications &amp; Industries
              </h2>

              <p className="text-slate-500 text-sm mt-1 max-w-2xl">
                Grounding and lightning protection solutions for a wide range
                of electrical infrastructure applications.
              </p>

            </div>


            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-amber-600 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {[
              {
                image: pureCopperEarthingElectrodeImg,
                title: 'Industrial Facilities',
                label: 'Manufacturing',
              },
              {
                image: copperBondedRodImg,
                title: 'Commercial Buildings',
                label: 'High-Rise Infrastructure',
              },
              {
                image: eseLightningArresterImg,
                title: 'Substations & Grid',
                label: 'High Voltage Infrastructure',
              },
            ].map((item) => (

              <div
                key={item.title}
                className="cursor-pointer group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all"
                onDoubleClick={() =>
                  onOpenImageLightbox(item.image, item.title)
                }
                title="Double-click to inspect fullscreen"
              >

                <div className="h-52 bg-slate-50 overflow-hidden relative flex items-center justify-center">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 text-white">

                    <div className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider">
                      {item.label}
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {item.title}
                    </h4>

                  </div>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>


      {/* =========================================================
          8. TESTIMONIALS
      ========================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center max-w-2xl mx-auto space-y-2">

            <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase">
              CLIENT TESTIMONIALS
            </span>

            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              What Our Clients Say
            </h2>

            <p className="text-xs text-slate-500">
              Feedback from customers and project professionals.
            </p>

          </div>


          {testimonials.filter((t) => t.isApproved).length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">

              {testimonials
                .filter((t) => t.isApproved)
                .slice(0, 6)
                .map((item) => (

                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                  >

                    <div className="space-y-3">

                      <div className="flex items-center gap-1 text-amber-500">

                        {Array.from({
                          length: Math.max(
                            0,
                            Math.min(5, Number(item.rating) || 0)
                          ),
                        }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400"
                          />
                        ))}

                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed italic">
                        &ldquo;{item.comment}&rdquo;
                      </p>

                    </div>


                    <div className="flex items-center gap-3 pt-3 border-t border-slate-100">

                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          loading="lazy"
                          className="w-10 h-10 rounded-full object-cover border border-amber-500/30 cursor-pointer"
                          onDoubleClick={() =>
                            onOpenImageLightbox(
                              item.imageUrl,
                              item.name
                            )
                          }
                          title="Double-click to inspect photo"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                          {item.name?.charAt(0)?.toUpperCase() || '?'}
                        </div>
                      )}

                      <div className="min-w-0">

                        <div className="text-xs font-bold text-slate-900 truncate">
                          {item.name}
                        </div>

                        <div className="text-[11px] text-slate-500 truncate">
                          {item.role} · {item.company}
                        </div>

                      </div>

                    </div>

                  </div>

                ))}

            </div>

          ) : (

            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">

              <Star className="w-8 h-8 text-amber-400 mx-auto mb-3" />

              <p className="text-sm font-semibold text-slate-700">
                Customer testimonials will appear here.
              </p>

              <p className="text-xs text-slate-400 mt-1">
                Approved customer feedback will automatically be displayed.
              </p>

            </div>

          )}

        </div>
      </section>


      {/* =========================================================
          9. DOWNLOAD CATALOGUE
      ========================================================= */}
      <section className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 py-10 sm:py-12 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="flex items-center gap-5 sm:gap-6">

              <div className="w-16 h-20 rounded-lg bg-slate-900 border-2 border-white/40 shadow-xl hidden sm:flex items-center justify-center text-center p-2 shrink-0">

                <span className="text-[9px] font-black uppercase text-amber-400 leading-tight">
                  RUDRA
                  <br />
                  CATALOGUE
                </span>

              </div>


              <div className="space-y-1">

                <span className="inline-block text-[10px] sm:text-xs font-black tracking-widest uppercase text-amber-950 bg-white/40 px-2 py-0.5 rounded">
                  DOWNLOAD CATALOGUE
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                  Get Our Technical Product Catalogue
                </h3>

                <p className="text-amber-100 text-xs sm:text-sm">
                  Explore our products, specifications and technical information.
                </p>

              </div>

            </div>


            <button
              type="button"
              onClick={onOpenCatalogueModal}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-full bg-slate-950 hover:bg-black text-white font-bold text-sm shadow-xl transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shrink-0"
            >
              <Download className="w-4 h-4 text-amber-400" />

              <span>Download Now</span>

              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </div>
      </section>


      {/* =========================================================
          10. FINAL CTA
      ========================================================= */}
      <section className="bg-[#0b1626] py-10 border-t border-slate-800 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="space-y-1 text-center md:text-left">

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to Build a Safer Future?
            </h3>

            <p className="text-xs sm:text-sm text-slate-300">
              Get the right earthing solution for your project.
              Our team is ready to help.
            </p>

          </div>


          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">

            <button
              type="button"
              onClick={() => onOpenQuoteModal()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              Request a Quote
            </button>


            <a
              href={`tel:${siteConfig.PHONE_RAW}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-600 hover:border-white text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all hover:bg-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />

              <span>
                Call Us Now {siteConfig.PHONE_DISPLAY}
              </span>
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};