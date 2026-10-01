import React from 'react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import heroSubstationImg from '../assets/images/rudra_hero_substation_1790859117610.jpg';
import factoryImg from '../assets/images/rudra_factory_manufacturing_1790859150262.jpg';
import copperRodsImg from '../assets/images/rudra_copper_bonded_rods_1790859134733.jpg';
import arresterImg from '../assets/images/rudra_lightning_arrester_1790859164679.jpg';

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
      title: '75 MW Solar PV Park Grid Earthing',
      location: 'Bhadla, Rajasthan',
      category: 'Solar Energy',
      image: heroSubstationImg,
      details: 'Supplied 4,200 copper bonded earthing rods (17.2mm x 3m), 15 tons of conductive backfill compound, and 24 ESE lightning arresters. Achieved < 0.6 Ohm grid impedance.',
    },
    {
      title: '132/33kV State Transmission Substation',
      location: 'Varanasi, Uttar Pradesh',
      category: 'Power Grid',
      image: arresterImg,
      details: 'Installed heavy-duty 4G copper bonded rods with 300-micron copper thickness for transformer neutral grounding and switchyard perimeter safety mesh.',
    },
    {
      title: 'Mega Chemical Processing Complex',
      location: 'Dahej Industrial Area, Gujarat',
      category: 'Industrial',
      image: factoryImg,
      details: 'Corrosion-proof pure electrolytic copper electrodes and spark-proof earthing pits designed to prevent static charge buildup in flammable solvent zones.',
    },
    {
      title: 'Commercial IT Park & Data Center Towers',
      location: 'Noida Expressway, NCR',
      category: 'Commercial High-Rise',
      image: copperRodsImg,
      details: 'Multi-point ESE Early Streamer Emission lightning protection system covering 4 high-rise towers and low-noise dedicated clean ground for servers.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black tracking-widest text-amber-600 uppercase">
            PROVEN TRACK RECORD
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Major Infrastructure &amp; Industrial Projects
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Rudra Earthing Systems products are installed in critical national infrastructure projects across India, delivering uncompromised electrical grounding and lightning safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[11px] font-bold bg-slate-900/80 backdrop-blur-sm text-amber-400 rounded-md">
                      {proj.category}
                    </span>
                  </div>
                </div>

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

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Successfully Commissioned</span>
                </span>
                <button
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
              Planning a Project That Demands Verified Grounding?
            </h3>
            <p className="text-xs sm:text-sm text-amber-100">
              Our engineering team offers free bill-of-quantities (BOQ) review and IEEE 80 compliance assistance.
            </p>
          </div>
          <button
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
