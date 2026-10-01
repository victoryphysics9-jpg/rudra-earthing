import React, { useState } from 'react';
import { Phone, ChevronDown, Menu, X, FileText, ShoppingBag } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '../config/siteConfig';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, productId?: string) => void;
  onOpenQuoteModal: () => void;
  onOpenCatalogueModal: () => void;
  onSecretAdminTrigger: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenQuoteModal,
  onOpenCatalogueModal,
  onSecretAdminTrigger,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'solutions', label: 'Solutions', hasDropdown: true },
    { id: 'projects', label: 'Projects' },
    { id: 'catalogue', label: 'Catalogue', isAction: true },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id: string) => {
    if (id === 'catalogue') {
      onOpenCatalogueModal();
    } else {
      onNavigate(id);
    }
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
    setIsSolutionsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with 5-click secret trigger */}
          <div className="flex items-center">
            <Logo
              variant="dark"
              onSecretTrigger={onSecretAdminTrigger}
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-slate-700">
            {/* Home */}
            <button
              onClick={() => handleLinkClick('home')}
              className={`transition-colors hover:text-amber-600 ${
                currentView === 'home' ? 'text-amber-600 font-semibold border-b-2 border-amber-600 pb-1' : ''
              }`}
            >
              Home
            </button>

            {/* About Us */}
            <button
              onClick={() => handleLinkClick('about')}
              className={`transition-colors hover:text-amber-600 ${
                currentView === 'about' ? 'text-amber-600 font-semibold border-b-2 border-amber-600 pb-1' : ''
              }`}
            >
              About Us
            </button>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button
                onClick={() => handleLinkClick('products')}
                className={`flex items-center gap-1 transition-colors hover:text-amber-600 ${
                  currentView === 'products' || currentView === 'product-detail'
                    ? 'text-amber-600 font-semibold border-b-2 border-amber-600 pb-1'
                    : ''
                }`}
              >
                Products
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Product Categories
                  </div>
                  <button
                    onClick={() => {
                      onNavigate('products');
                      setIsProductsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 flex items-center justify-between"
                  >
                    <span>All Products Catalogue</span>
                    <span className="text-xs text-amber-600 font-semibold">11 Items</span>
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('product-detail', 'copper-bonded-earthing-rod');
                      setIsProductsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Copper Bonded Earthing Rod
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('product-detail', 'copper-bonded-earthing-electrode');
                      setIsProductsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Copper Bonded Electrode
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('product-detail', 'ese-lightning-arrester');
                      setIsProductsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    ESE Lightning Arrester
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('product-detail', 'solar-earthing-kit');
                      setIsProductsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Solar Earthing Kits
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('product-detail', 'earth-backfill-compound');
                      setIsProductsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Earth Backfill Compound
                  </button>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
              onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
            >
              <button
                onClick={() => handleLinkClick('solutions')}
                className={`flex items-center gap-1 transition-colors hover:text-amber-600 ${
                  currentView === 'solutions' ? 'text-amber-600 font-semibold border-b-2 border-amber-600 pb-1' : ''
                }`}
              >
                Solutions
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {isSolutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleLinkClick('solutions')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Electrical Earthing
                  </button>
                  <button
                    onClick={() => handleLinkClick('solutions')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Lightning Protection
                  </button>
                  <button
                    onClick={() => handleLinkClick('solutions')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Industrial Substation Earthing
                  </button>
                  <button
                    onClick={() => handleLinkClick('solutions')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Solar PV Plant Grounding
                  </button>
                </div>
              )}
            </div>

            {/* Projects */}
            <button
              onClick={() => handleLinkClick('projects')}
              className={`transition-colors hover:text-amber-600 ${
                currentView === 'projects' ? 'text-amber-600 font-semibold border-b-2 border-amber-600 pb-1' : ''
              }`}
            >
              Projects
            </button>

            {/* Catalogue */}
            <button
              onClick={onOpenCatalogueModal}
              className="flex items-center gap-1.5 transition-colors hover:text-amber-600 text-slate-700"
            >
              <FileText className="w-4 h-4 text-amber-500" />
              Catalogue
            </button>

            {/* Contact Us */}
            <button
              onClick={() => handleLinkClick('contact')}
              className={`transition-colors hover:text-amber-600 ${
                currentView === 'contact' ? 'text-amber-600 font-semibold border-b-2 border-amber-600 pb-1' : ''
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Quote trigger */}
            <button
              onClick={onOpenQuoteModal}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
              <span>Get Quote</span>
            </button>

            {/* Phone Call CTA Button */}
            <a
              href={`tel:${siteConfig.PHONE_RAW}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold text-sm shadow-md shadow-orange-500/20 transition-all hover:shadow-lg active:scale-95"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>{siteConfig.PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteConfig.PHONE_RAW}`}
              className="p-2 rounded-full bg-amber-500 text-white"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="w-full text-left py-2.5 px-3 text-base font-medium rounded-lg text-slate-800 hover:bg-slate-50"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenQuoteModal();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-amber-700 bg-amber-50 rounded-lg"
            >
              Request Custom Quotation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
