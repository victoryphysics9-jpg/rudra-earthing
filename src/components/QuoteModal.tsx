import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, MessageSquare, AlertCircle, Copy, Check } from 'lucide-react';
import { Product, CustomerOrder } from '../types';
import { siteConfig } from '../config/siteConfig';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  initialProductId?: string;
  onSaveOrder: (order: CustomerOrder) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  products,
  initialProductId,
  onSaveOrder,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProductId || (products[0]?.id ?? '')
  );
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(50);
  const [customerName, setCustomerName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [projectType, setProjectType] = useState<string>('Solar Power Plant');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [orderReference, setOrderReference] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentProduct = products.find((p) => p.id === selectedProductId) || products[0];

  const buildStructuredText = (refId: string) => {
    return (
`==================================================
RUDRA EARTHING SYSTEMS - PRODUCT QUOTE & ORDER
==================================================
Reference Number : ${refId}
Timestamp        : ${new Date().toLocaleString()}

[ CUSTOMER & PROJECT DETAILS ]
Customer Name    : ${customerName}
Company / Firm   : ${companyName || 'Not specified'}
Contact Phone    : ${phone}
Customer Email   : ${email}
Delivery City    : ${city || 'Not specified'}
Project Category : ${projectType}

[ PRODUCT SPECIFICATIONS ]
Product Name     : ${currentProduct.name}
Selected Variant : ${selectedVariant || 'Standard Factory Spec'}
Quantity Needed  : ${quantity} units

[ TECHNICAL NOTES / REQUIREMENTS ]
${notes || 'Standard manufacturing and dispatch as per IS 3043 / IEC 62561.'}
==================================================`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !phone.trim() || !email.trim()) {
      setValidationError('Please enter your Name, Phone Number, and Email.');
      return;
    }

    setValidationError('');
    const refId = `RUD-ORD-${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrder: CustomerOrder = {
      id: refId,
      customerName,
      email,
      phone,
      companyName: companyName || 'Client Organization',
      city: city || 'Not specified',
      products: [
        {
          productId: currentProduct.id,
          productName: currentProduct.name,
          quantity: Number(quantity) || 1,
          variant: selectedVariant || (currentProduct.variants[0]?.diameter ? `${currentProduct.variants[0].diameter} x ${currentProduct.variants[0].length}` : 'Standard'),
        },
      ],
      projectType,
      notes,
      status: 'New',
      createdAt: new Date().toISOString(),
    };

    onSaveOrder(newOrder);
    setOrderReference(refId);
    setIsSubmitted(true);

    // Systematic structured email to configured business email
    const structuredBody = buildStructuredText(refId);
    const emailSubject = encodeURIComponent(`[ORDER QUOTE] #${refId} - ${customerName} (${currentProduct.name})`);
    const emailBody = encodeURIComponent(structuredBody);

    const ccParam = siteConfig.CC_EMAIL ? `&cc=${siteConfig.CC_EMAIL}` : '';
    const mailtoUrl = `mailto:${siteConfig.CLIENT_EMAIL}?subject=${emailSubject}&body=${emailBody}${ccParam}`;
    
    // Open email client with pre-filled structured message
    window.location.href = mailtoUrl;
  };

  const handleCopyStructuredOrder = () => {
    const text = buildStructuredText(orderReference);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Rudra Earthing Systems, I am requesting a quotation:\n\n` +
      `Product: ${currentProduct?.name}\n` +
      `Size / Variant: ${selectedVariant || 'Standard'}\n` +
      `Quantity: ${quantity}\n` +
      `Name: ${customerName}\n` +
      `Phone: ${phone}\n` +
      `Location: ${city || 'India'}\n` +
      `Reference: ${orderReference}`
    );
    window.open(`https://wa.me/${siteConfig.WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Direct Quotation &amp; Order Request
            </span>
            <h3 className="text-xl font-bold text-white">
              Get Instant Price &amp; Factory Dispatch Timeline
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-slate-900">
                Quotation Request Dispatched!
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Reference ID: <span className="font-mono font-bold text-amber-600">{orderReference}</span>
              </p>
              <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto">
                Your order query has been logged into the management system and forwarded to{' '}
                <span className="font-semibold text-slate-800">{siteConfig.CLIENT_EMAIL}</span>. Our technical engineer will call you shortly.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleCopyStructuredOrder}
                className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-2 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                <span>{copied ? 'Order Details Copied!' : 'Copy Formatted Details'}</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-2 transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>

              <a
                href={`tel:${siteConfig.PHONE_RAW}`}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs flex items-center gap-2 transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Sales Office</span>
              </a>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {validationError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Product selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Select Product *
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Variant / Size
                </label>
                <select
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  <option value="">Standard Specification</option>
                  {currentProduct.variants.map((v, i) => (
                    <option key={i} value={`${v.diameter} - ${v.length} (${v.copperLayer})`}>
                      {v.diameter} | Length: {v.length} ({v.copperLayer})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quantity and Project Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Estimated Quantity *
                </label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  placeholder="e.g. 100 rods"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Project Type
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  <option value="Solar Power Plant">Solar Power Plant (Ground / Rooftop)</option>
                  <option value="Substation & Grid Infrastructure">Substation &amp; Grid Infrastructure</option>
                  <option value="Industrial Manufacturing Plant">Industrial Manufacturing Plant</option>
                  <option value="Commercial High-Rise Building">Commercial High-Rise Building</option>
                  <option value="Telecom / Transmission Towers">Telecom / Transmission Towers</option>
                  <option value="Residential Society">Residential Society / Villa</option>
                </select>
              </div>
            </div>

            {/* Contact details */}
            <div className="border-t border-slate-200 pt-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Your Contact Information
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    placeholder="e.g. Rajesh Sharma"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    placeholder="e.g. +91 98765 43210"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    placeholder="e.g. client@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Company / Firm Name
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    placeholder="e.g. Apex Electricals EPC"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Site Delivery Location / City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    placeholder="e.g. Lucknow, Kanpur, Delhi NCR, Varanasi..."
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Specific Requirements or Custom Notes
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    placeholder="Mention any custom copper micron depth, test certificates needed, or target delivery date..."
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Send className="w-3.5 h-3.5 text-amber-500" />
                <span>Orders sent directly to Rudra Factory Desk</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 sm:w-auto px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95"
                >
                  Submit &amp; Get Email Quote
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
