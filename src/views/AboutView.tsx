import React from 'react';
import {
  ShieldCheck,
  Award,
  Eye,
  Target,
  Cpu,
  CheckCircle2,
  MapPin,
  Download,
} from 'lucide-react';

import copperBondedRodImg from '../assets/images/copper bonded earthing rod.png';
import fourGCopperBondedRodImg from '../assets/images/4g copper bonded earthing rod.png';
import copperBondedElectrodeImg from '../assets/images/copper bonded earthing electrode.png';
import pureCopperEarthingElectrodeImg from '../assets/images/pure copper earthing electrode.png';

interface AboutViewProps {
  onNavigate: (view: string) => void;
  onOpenCatalogueModal: () => void;
  onOpenQuoteModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenCatalogueModal,
  onOpenQuoteModal,
}) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-7 lg:p-14">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-amber-500" />

                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-600">
                  About Rudra Earthing Systems
                </span>
              </div>

              <h1 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Engineering Safer Grounding
                <span className="block text-amber-600">
                  For a More Connected India
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Rudra Earthing Systems is focused on reliable electrical
                grounding and lightning protection solutions for industrial,
                commercial, infrastructure, renewable energy and critical
                electrical installations.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Our product portfolio includes copper bonded earthing rods,
                earthing electrodes, GI earthing solutions, lightning
                protection systems, solar earthing kits and earth enhancement
                materials.
              </p>

              {/* Trust badges */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-amber-500" />

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wide text-slate-400">
                      Quality
                    </p>
                    <p className="text-xs font-bold text-slate-800">
                      ISO Focused
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                  <Award className="h-5 w-5 shrink-0 text-amber-500" />

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wide text-slate-400">
                      Testing
                    </p>
                    <p className="text-xs font-bold text-slate-800">
                      Quality Tested
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                  <Cpu className="h-5 w-5 shrink-0 text-amber-500" />

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wide text-slate-400">
                      Engineering
                    </p>
                    <p className="text-xs font-bold text-slate-800">
                      Standards Focused
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition-all duration-200 hover:bg-amber-600 hover:shadow-xl"
                >
                  Talk to Our Team
                </button>

                <button
                  type="button"
                  onClick={onOpenCatalogueModal}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50"
                >
                  <Download className="h-4 w-4" />
                  View Catalogue
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative min-h-[320px] overflow-hidden bg-slate-900 lg:col-span-5 lg:min-h-[620px]">
              <img
                src={fourGCopperBondedRodImg}
                alt="Rudra Earthing copper bonded earthing rod"
                className="h-full w-full object-contain p-8 sm:p-12 lg:p-14"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/80 p-5 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-400">
                  Engineering • Protection • Reliability
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-white">
                  Grounding solutions designed for demanding electrical
                  infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            MANUFACTURING / PRODUCT ENGINEERING
        ========================================================= */}
        <section className="mt-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">

            {/* Image */}
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="absolute left-0 top-0 h-24 w-24 rounded-br-full bg-amber-500/10" />

                <div className="relative flex min-h-[360px] items-center justify-center rounded-2xl bg-slate-100 p-8">
                  <img
                    src={copperBondedElectrodeImg}
                    alt="Rudra copper bonded earthing electrode"
                    className="max-h-[330px] w-full object-contain"
                  />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-900 p-4 text-white">
                    <p className="text-2xl font-black">01</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-400">
                      Product Engineering
                    </p>
                  </div>

                  <div className="rounded-xl bg-amber-500 p-4 text-white">
                    <p className="text-2xl font-black">02</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-amber-100">
                      Quality Focus
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 space-y-6 lg:order-2 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-amber-500" />

                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-600">
                  Product Engineering
                </span>
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Built Around Electrical
                <span className="block text-amber-600">
                  Safety &amp; Long-Term Performance
                </span>
              </h2>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                Every grounding installation has different soil conditions,
                fault-current requirements, environmental exposure and
                mechanical demands. Rudra&apos;s product range is structured
                to address these requirements across multiple applications.
              </p>

              <div className="space-y-4 pt-2">

                <div className="flex gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Copper Bonded Grounding Solutions
                    </h3>

                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      Earthing rods and electrodes designed around conductivity,
                      corrosion resistance and mechanical durability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Lightning Protection Systems
                    </h3>

                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      Conventional and ESE lightning protection products for
                      buildings, industrial facilities and infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Application-Specific Solutions
                    </h3>

                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      Solutions for solar plants, substations, factories, data
                      centers, telecom installations and commercial projects.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUALITY APPROACH
        ========================================================= */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            <div className="p-8 sm:p-12 lg:p-14">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-amber-500" />

                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-400">
                  Our Approach
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
                Quality Is More Than
                <span className="block text-amber-400">
                  A Product Specification
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Reliable grounding depends on correct product selection,
                installation conditions, material quality and proper testing.
                Our approach is focused on delivering products that can be
                integrated into complete electrical safety systems.
              </p>

              <button
                type="button"
                onClick={() => onNavigate('products')}
                className="mt-7 inline-flex items-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-amber-600"
              >
                Explore Products
              </button>
            </div>

            <div className="grid grid-cols-1 gap-px bg-slate-800 sm:grid-cols-2">
              <div className="bg-slate-900 p-7 sm:p-8">
                <ShieldCheck className="h-7 w-7 text-amber-400" />

                <h3 className="mt-5 text-base font-bold text-white">
                  Material Quality
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Product selection based on material characteristics,
                  durability and application requirements.
                </p>
              </div>

              <div className="bg-slate-900 p-7 sm:p-8">
                <Award className="h-7 w-7 text-amber-400" />

                <h3 className="mt-5 text-base font-bold text-white">
                  Testing Focus
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Emphasis on dimensional, material and performance checks
                  appropriate to the product.
                </p>
              </div>

              <div className="bg-slate-900 p-7 sm:p-8">
                <Cpu className="h-7 w-7 text-amber-400" />

                <h3 className="mt-5 text-base font-bold text-white">
                  Engineering
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Solutions designed around practical electrical and
                  infrastructure requirements.
                </p>
              </div>

              <div className="bg-slate-900 p-7 sm:p-8">
                <Target className="h-7 w-7 text-amber-400" />

                <h3 className="mt-5 text-base font-bold text-white">
                  Application Focus
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Products organized for industrial, commercial, solar,
                  telecom and infrastructure projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            VISION + MISSION
        ========================================================= */}
        <section className="mt-16">
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-amber-500" />

              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-600">
                Our Direction
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Vision &amp; Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* Vision */}
            <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                <Eye className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-950">
                Our Vision
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                To build a trusted Indian brand in electrical grounding and
                lightning protection, supporting the growth of renewable
                energy, industrial infrastructure, digital facilities and
                modern electrical networks.
              </p>
            </div>

            {/* Mission */}
            <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                <Target className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-950">
                Our Mission
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                To provide dependable grounding and lightning protection
                products with consistent quality, transparent technical
                information, responsive support and solutions suited to real
                project requirements.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            PRODUCT RANGE
        ========================================================= */}
        <section className="mt-16">
          <div className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-12 lg:p-12">

            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-amber-500" />

                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-600">
                  Product Portfolio
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Grounding Solutions for
                <span className="block text-amber-600">
                  Modern Infrastructure
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
                From copper bonded rods and electrodes to lightning protection,
                solar earthing kits and earth enhancement materials, Rudra
                offers a growing portfolio for electrical safety applications.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  'Earthing Rods',
                  'Earthing Electrodes',
                  'Lightning Protection',
                  'Solar Earthing',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-4 text-center"
                  >
                    <CheckCircle2 className="mx-auto h-5 w-5 text-amber-500" />

                    <p className="mt-2 text-[10px] font-bold leading-4 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onNavigate('products')}
                className="mt-7 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-slate-800"
              >
                Browse Product Range
              </button>
            </div>

            <div className="lg:col-span-5">
              <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-2xl bg-slate-100 p-8">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-amber-500/10" />

                <img
                  src={pureCopperEarthingElectrodeImg}
                  alt="Rudra Pure Copper Earthing Electrode"
                  className="relative max-h-[300px] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            LOCATION / CTA
        ========================================================= */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-slate-950 text-white">
          <div className="relative p-7 sm:p-10 lg:p-12">

            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-amber-400">
                  <MapPin className="h-4 w-4" />

                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                    Plant &amp; Sales Headquarters
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">
                  Let&apos;s discuss your grounding requirements.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  Contact our team for product specifications, project
                  requirements, catalogue information, technical assistance or
                  a quotation.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">

                <button
                  type="button"
                  onClick={onOpenCatalogueModal}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-all hover:border-slate-600 hover:bg-slate-800"
                >
                  <Download className="h-4 w-4 text-amber-400" />
                  Download Catalogue
                </button>

                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-black text-white shadow-lg shadow-amber-500/20 transition-all hover:bg-amber-600"
                >
                  Request a Quote
                </button>

              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};