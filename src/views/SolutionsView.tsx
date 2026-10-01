import React from 'react';
import {
  Zap,
  CloudLightning,
  Factory,
  Sun,
  Building2,
  Radio,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

import eseLightningArresterImg from '../assets/images/ese lightning arrester.png';

interface SolutionsViewProps {
  onNavigate: (view: string, productId?: string) => void;
  onOpenQuoteModal: () => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const solutions = [
    {
      id: 'substation',
      title: 'Substation & High-Voltage Grid Earthing',
      icon: Zap,
      desc: 'Engineered for 33kV, 132kV, and 400kV switchyards to handle severe fault current dissipation without lethal step and touch potentials.',
      standards: 'IEEE 80, IS 3043:2018, CBIP Manual 299',
      keyPoints: [
        'Mesh earthing grid calculations and touch-potential safety',
        'Heavy-duty 4G copper bonded rods with 300µm coating',
        'Transformer neutral and lightning arrester grounding',
        'Ground resistance < 1.0 Ohm compliance',
      ],
      recommendedProduct: '4g-copper-bonded-earthing-rod',
    },
    {
      id: 'lightning',
      title: 'Active & Passive Lightning Protection Systems',
      icon: CloudLightning,
      desc: 'Complete structural protection using advanced Early Streamer Emission (ESE) air terminals and Franklin rods to channel mega-ampere strokes safely.',
      standards: 'NFC 17-102:2011, IS/IEC 62305, UNE 21186',
      keyPoints: [
        'Protection radius up to 120 meters per ESE terminal',
        'Stainless steel 316 weather-resistant housing',
        'Lightning strike counters and test clamps integration',
        'Safe down-conductor routing to dedicated earth pits',
      ],
      recommendedProduct: 'ese-lightning-arrester',
    },
    {
      id: 'solar',
      title: 'Solar PV Plant Grounding (MW & Rooftop)',
      icon: Sun,
      desc: 'Integrated solutions for balance of systems, solar PV module tables, inverters, string combiners, and plant boundary fence earthing.',
      standards: 'MNRE Guidelines, IEC 62561, CEA Solar Regulations',
      keyPoints: [
        'Turn-key solar kits with 17mm copper rods & FRP pit covers',
        'High performance backfill compound for sandy & rocky soils',
        'Bi-metallic clamps to prevent galvanic corrosion',
        'Rapid fault clearance for central and string inverters',
      ],
      recommendedProduct: 'solar-earthing-kit',
    },
    {
      id: 'industrial',
      title: 'Industrial Facilities & Machinery Earthing',
      icon: Factory,
      desc: 'Protection for motor control centers (MCC), transformers, variable frequency drives, and heavy rotating equipment from catastrophic voltage surges.',
      standards: 'IS 3043, BS 7430, NFPA 70 (NEC)',
      keyPoints: [
        'Dual pipe-in-pipe copper bonded and GI electrodes',
        'Zero-spark static earthing for chemical solvent zones',
        'Earth resistance monitoring test pits',
        'Pre-filled mineral compounds for non-leaching performance',
      ],
      recommendedProduct: 'copper-bonded-earthing-electrode',
    },
    {
      id: 'commercial',
      title: 'Commercial Buildings & Data Centers',
      icon: Building2,
      desc: 'Clean, low-noise grounding essential for sensitive IT servers, hospital operation theaters, MRI scanners, and high-rise elevators.',
      standards: 'IEEE 1100 (Emerald Book), TIA-942, IS 3043',
      keyPoints: [
        'Pure 99.9% electrolytic grade copper electrodes',
        'Equipotential bonding busbars (EEB) throughout floors',
        'Zero electrical noise interference for sensitive digital signals',
        'Tested down to < 0.5 Ohm ground resistance',
      ],
      recommendedProduct: 'pure-copper-earthing-electrode',
    },
    {
      id: 'telecom',
      title: 'Telecom & Transmission Towers Grounding',
      icon: Radio,
      desc: 'High elevation hill-top and rooftop antenna mast protection from direct atmospheric discharges and electrostatic surges.',
      standards: 'TEC Standards, ITU-T K.27, IS 2309',
      keyPoints: [
        'Ring grounding topology around tower footing legs',
        'Earth enhancement backfill compound in high resistivity rock',
        'Coaxial surge arresters grounding',
        'Zero-maintenance 25+ years design life',
      ],
      recommendedProduct: 'earth-backfill-compound',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* =========================================================
          HERO / BANNER
      ========================================================== */}
      <section className="px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 text-white shadow-xl">
          {/* Product PNG background */}
          <div className="absolute inset-0">
            <img
              src={eseLightningArresterImg}
              alt=""
              aria-hidden="true"
              className="absolute right-0 top-1/2 h-[130%] w-[55%] -translate-y-1/2 object-contain opacity-20"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(245,158,11,0.12),transparent_38%)]" />
          </div>

          <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-amber-400">
                <ShieldCheck className="h-4 w-4" />
                Engineered Safety Systems
              </div>

              <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Turnkey Earthing &amp;
                <span className="text-amber-400">
                  {' '}
                  Protection Solutions
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                From high-voltage substations and utility-scale solar parks
                to critical IT infrastructure, Rudra provides grounding and
                lightning protection solutions tailored to project
                requirements.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 hover:bg-amber-400 active:scale-95"
                >
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS GRID
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-600">
            OUR SOLUTIONS
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Grounding Solutions for Critical Infrastructure
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Explore application-focused earthing and lightning protection
            solutions for power, renewable energy, industrial, commercial and
            telecom infrastructure.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
              >
                <div className="flex-1">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <div className="mt-5">
                    <h3 className="text-lg font-black leading-7 text-slate-950">
                      {item.title}
                    </h3>

                    <div className="mt-2 text-[10px] font-extrabold uppercase leading-5 tracking-wide text-amber-600">
                      {item.standards}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>

                  {/* Key Points */}
                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <span className="mb-3 block text-[10px] font-black uppercase tracking-[0.15em] text-slate-800">
                      Key Highlights
                    </span>

                    <div className="space-y-2.5">
                      {item.keyPoints.map((point, index) => (
                        <div
                          key={`${item.id}-point-${index}`}
                          className="flex items-start gap-2.5 text-xs leading-5 text-slate-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate(
                        'product-detail',
                        item.recommendedProduct
                      )
                    }
                    className="group/link inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-600 transition-colors hover:text-amber-700"
                  >
                    <span>View Recommended Product</span>

                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenQuoteModal}
                    className="inline-flex items-center justify-center rounded-lg bg-slate-100 px-4 py-2 text-xs font-bold text-slate-800 transition hover:bg-slate-950 hover:text-white"
                  >
                    Request Quote
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================== */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-amber-500 shadow-xl">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-7 px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:px-14">
            <div className="max-w-3xl text-center lg:text-left">
              <div className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-amber-100">
                ENGINEERING SUPPORT
              </div>

              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Need a solution designed around your project?
              </h3>

              <p className="mt-3 text-sm leading-7 text-amber-100 sm:text-base">
                Share your site conditions, project requirements and
                technical specifications with our team.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-black"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};