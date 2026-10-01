import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';

import copperBondedRodImg from '../assets/images/copper bonded earthing rod.png';
import fourGCopperBondedRodImg from '../assets/images/4g copper bonded earthing rod.png';
import pureCopperEarthingElectrodeImg from '../assets/images/pure copper earthing electrode.png';
import eseLightningArresterImg from '../assets/images/ese lightning arrester.png';

interface ProjectsViewProps {
  onNavigate: (view: string, productId?: string) => void;
  onOpenQuoteModal: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const projects = [
    {
      title: 'Solar PV Park Earthing & Lightning Protection',
      location: 'India',
      category: 'Solar Energy',
      image: copperBondedRodImg,
      details:
        'Copper bonded earthing rods and conductive earthing solutions designed for reliable grounding of solar PV installations, equipment and associated electrical infrastructure.',
    },
    {
      title: 'Power Transmission & Substation Grounding',
      location: 'India',
      category: 'Power Grid',
      image: fourGCopperBondedRodImg,
      details:
        'Heavy-duty 4G copper bonded earthing rods provide a durable grounding solution for substations, transformer neutral grounding, switchyards and critical power infrastructure.',
    },
    {
      title: 'Industrial Electrical Safety & Grounding',
      location: 'India',
      category: 'Industrial',
      image: pureCopperEarthingElectrodeImg,
      details:
        'Pure copper earthing electrodes are suitable for industrial environments where dependable electrical grounding, corrosion resistance and long-term performance are required.',
    },
    {
      title: 'Commercial & Data Infrastructure Protection',
      location: 'India',
      category: 'Commercial',
      image: eseLightningArresterImg,
      details:
        'Lightning protection and earthing solutions for commercial buildings, high-rise facilities, telecom infrastructure and data-intensive environments.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black tracking-widest text-amber-600 uppercase">
            PROJECT APPLICATIONS
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Grounding &amp; Lightning Protection Applications
          </h1>

          <p className="text-slate-600 text-sm leading-relaxed">
            Explore how Rudra Earthing Systems products can be applied across
            solar, power, industrial, commercial and critical electrical
            infrastructure projects.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="h-64 sm:h-72 relative overflow-hidden bg-slate-100 flex items-center justify-center">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-contain p-6 hover:scale-105 transition-transform duration-500"
                  />

                  {/* Category */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[11px] font-bold bg-slate-950/90 backdrop-blur-sm text-amber-400 rounded-md">
                      {proj.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>{proj.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.details}
                  </p>
                </div>
              </div>

              {/* Bottom */}
              <div className="p-6 pt-0 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Rudra Product Application</span>
                </span>

                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="px-4 py-2 bg-slate-100 hover:bg-amber-500 hover:text-white rounded-lg text-xs font-bold transition-colors"
                >
                  Request Similar Solution
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-amber-500 rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-2xl font-extrabold text-white">
              Planning a Project That Demands Reliable Grounding?
            </h3>

            <p className="text-xs sm:text-sm text-amber-100">
              Share your project requirements and our team can help identify
              suitable earthing and lightning protection products.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="px-8 py-3.5 bg-slate-950 hover:bg-black text-white font-bold text-xs rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95 shrink-0"
          >
            Submit Your Project BOQ
          </button>
        </div>
      </div>
    </div>
  );
};