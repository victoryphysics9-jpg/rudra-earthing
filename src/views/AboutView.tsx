import React from 'react';
import { ShieldCheck, Award, Eye, Target, Cpu, CheckCircle2, MapPin, Download } from 'lucide-react';
import factoryImg from '../assets/images/rudra_factory_manufacturing_1790859150262.jpg';
import copperRodsImg from '../assets/images/rudra_copper_bonded_rods_1790859134733.jpg';

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
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Banner */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-black tracking-widest text-amber-600 uppercase">
                ABOUT RUDRA EARTHING SYSTEMS
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Pioneering Electrical Safety &amp; Grounding Technology
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded with a mission to eliminate electrical hazards and protect critical human and industrial assets, Rudra Earthing System has grown to become India&apos;s leading manufacturer of high-purity copper bonded earthing rods, chemical electrodes, and advanced ESE lightning arresters.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-700 pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  ISO 9001:2015 Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  CPRI Tested
                </span>
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-amber-500" />
                  IEEE 80 Compliant
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src={factoryImg}
                  alt="Rudra Earthing Manufacturing Unit"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing & Infrastructure Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src={copperRodsImg}
                alt="Continuous Copper Electroplating Baths"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            <span className="text-xs font-black tracking-widest text-amber-600 uppercase">
              STATE-OF-THE-ART MANUFACTURING
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Lucknow Plant with Automated Electroplating Lines
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Located in the industrial corridor of Lucknow, Uttar Pradesh, our manufacturing unit houses automated 4-stage surface preparation, chemical degreasing, acid pickling, and proprietary high-amperage continuous molecular copper bonding tanks.
            </p>
            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>Ultrasonic Copper Thickness Verification:</strong> Every rod is tested with digital magnetic thickness gauges to guarantee a minimum 250 µm to 350 µm uniform copper sheath.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>Bend &amp; Adhesion Tests (UL 467 standard):</strong> Rods undergo rigorous 180° mandrel bend tests to ensure zero flaking, peeling, or cracking of the copper bonding.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>In-House Resistivity Testing Pit:</strong> Continuous formulation R&amp;D for Earth Enhancement Compounds to guarantee resistivity under 0.2 Ohm-meter.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To be recognized as India&apos;s most reliable and technologically advanced brand in electrical grounding and lightning safety, supporting the nation&apos;s rapid electrification, renewable energy revolution, and smart infrastructure.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To provide zero-defect, long-lasting grounding products backed by transparent lab test certificates, prompt dispatch across India, and dedicated engineering support to ensure life and equipment safety.
            </p>
          </div>
        </div>

        {/* Factory Address & Plant Visit CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase">
              <MapPin className="w-4 h-4" />
              <span>Plant &amp; Sales Headquarters</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Plot No. 123, Industrial Area, Lucknow, UP - 226010
            </h3>
            <p className="text-xs text-slate-400">
              Contractors and inspection engineers are welcome to schedule a site visit and witness batch testing in our lab.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCatalogueModal}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl border border-slate-700 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Brochure</span>
            </button>
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl shadow-md transition-all"
            >
              Request Plant Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
