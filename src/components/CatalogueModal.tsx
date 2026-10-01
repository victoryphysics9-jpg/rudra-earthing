import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatalogueModal: React.FC<CatalogueModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);

    const catalogueContent = `
RUDRA EARTHING SYSTEMS - TECHNICAL PRODUCT CATALOGUE 2025-2026
Safe Today, Secure Tomorrow
Factory: ${siteConfig.FACTORY_ADDRESS}
Helpline: ${siteConfig.PHONE_DISPLAY} | Email: ${siteConfig.CLIENT_EMAIL}

PRODUCTS COVERED:
1. Copper Bonded Earthing Rods (IS 3043, IEC 62561-2, UL 467)
   - Sizes: 14mm, 17.2mm, 20mm, 25mm | Lengths: 1.5m, 2.0m, 2.4m, 3.0m
   - Copper Coating: >= 250 microns molecularly bonded

2. Copper Bonded Earthing Electrode (Dual pipe-in-pipe / pipe-in-strip)
   - Diameter: 40mm, 50mm, 80mm | Pre-filled conductive crystalline compound

3. 4G Copper Bonded Earthing Rod (Ultra 300+ micron heavy duty)
   - High tensile cold drawn steel core, suitable for hard rocky soil driving

4. GI Earthing Electrode (Hot Dip Galvanized Class-B pipe)
   - Zinc coating >= 86 microns as per IS 4759

5. GI Electrode with Solid Pure Copper Terminal
   - Bi-metallic joint protection for solar inverters and MCC panels

6. Pure Copper Earthing Electrode
   - 99.9% Electrolytic grade ETP copper pipe for MRI suites & data centers

7. ESE Lightning Arrester (Early Streamer Emission)
   - NFC 17-102:2011 standard certified, ΔT = 60µs, up to 120m radius protection

8. Conventional Lightning Arrester
   - Multi-prong pure copper / brass air terminals (IS/IEC 62305)

9. Solar Earthing Kit (Complete turn-key kit with rod, compound, pit cover, clamps)
10. Earth Enhancement Backfill Compound (Resistivity < 0.2 ohm-meter)
11. Heavy Duty FRP / Polyplastic Earth Pit Covers (2 to 5 ton load test)

TEST CERTIFICATIONS:
- CPRI Tested for 40kA Short Circuit Withstand
- NABL Accredited Soil Resistivity Test
- ISO 9001:2015 Quality Management System
`;

    const blob = new Blob([catalogueContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rudra_Earthing_Systems_Catalogue_2025.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-200" />
            <h3 className="text-lg font-bold">Rudra Technical Catalogue 2025</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-amber-100 hover:text-white hover:bg-black/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {downloaded ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Technical Catalogue Downloaded!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                The technical specifications file has been downloaded to your device.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 leading-relaxed">
                  Includes full technical dimensions, CPRI test certificates, IEEE 80 soil charts, and installation manuals for all 11 product ranges.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Chandra"
                  required
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Work / Personal Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. engineer@solarepc.com"
                    required
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Catalogue PDF (Instant)</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
