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
import heroSubstationImg from '../assets/images/rudra_hero_substation_1790859117610.jpg';

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
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="absolute inset-0 z-0">
            <img
              src={heroSubstationImg}
              alt="Solutions banner"
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              ENGINEERED SAFETY SYSTEMS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Turnkey Earthing &amp; Protection Solutions
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              From high-voltage 400kV substations and utility-scale solar parks to critical IT data centers, Rudra designs and manufactures custom grounding systems tailored to site-specific soil resistivity.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95"
              >
                Discuss Your Project Specifications
              </button>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <div className="text-[11px] font-semibold text-amber-600">
                      {item.standards}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                      Key Highlights:
                    </span>
                    {item.keyPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('product-detail', item.recommendedProduct)}
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 group"
                  >
                    <span>View Recommended Product</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={onOpenQuoteModal}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg"
                  >
                    Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
