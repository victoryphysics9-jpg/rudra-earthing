import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { ContactMessage } from '../types';
import { siteConfig } from '../config/siteConfig';

interface ContactViewProps {
  onSaveContact: (contact: ContactMessage) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onSaveContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');
    const newMsg: ContactMessage = {
      id: `MSG-${Date.now().toString().slice(-4)}`,
      name,
      email,
      phone,
      subject: subject || 'General Product Enquiry',
      message,
      createdAt: new Date().toISOString(),
      status: 'Unread',
    };

    onSaveContact(newMsg);
    setIsSubmitted(true);

    // Systematic structured email to configured business email
    const structuredBody = (
`==================================================
RUDRA EARTHING SYSTEMS - WEBSITE CONTACT INQUIRY
==================================================
Sender Name   : ${name}
Phone Number  : ${phone}
Sender Email  : ${email}
Subject       : ${subject || 'Product Query'}
Timestamp     : ${new Date().toLocaleString()}

MESSAGE / REQUIREMENTS:
${message}
==================================================`
    );

    const emailSubject = encodeURIComponent(`[INQUIRY] ${subject || 'Product Query'} - From ${name}`);
    const emailBody = encodeURIComponent(structuredBody);

    const ccParam = siteConfig.CC_EMAIL ? `&cc=${siteConfig.CC_EMAIL}` : '';
    window.location.href = `mailto:${siteConfig.CLIENT_EMAIL}?subject=${emailSubject}&body=${emailBody}${ccParam}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Rudra Earthing Systems, I am contacting you from the website regarding: *${subject || 'General Enquiry'}*.\nName: ${name || 'Customer'}\nPhone: ${phone}`
    );
    window.open(`https://wa.me/${siteConfig.WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black tracking-widest text-amber-600 uppercase">
            CONNECT WITH OUR TECHNICAL TEAM
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Rudra Earthing Systems
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Get instant price quotations, test certificates, site soil consultancy, or distributorship information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold">Factory &amp; Head Office</h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Plant Address:</span>
                    <span>{siteConfig.FACTORY_ADDRESS}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Direct Phone Line:</span>
                    <a href={`tel:${siteConfig.PHONE_RAW}`} className="hover:text-amber-400 text-sm font-semibold">
                      {siteConfig.PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Official Emails:</span>
                    <a href={`mailto:${siteConfig.CLIENT_EMAIL}`} className="hover:text-amber-400 text-amber-400 font-medium block">
                      {siteConfig.CLIENT_EMAIL}
                    </a>
                    {siteConfig.CC_EMAIL && (
                      <a href={`mailto:${siteConfig.CC_EMAIL}`} className="hover:text-amber-400 text-slate-400">
                        {siteConfig.CC_EMAIL}
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Direct call & WhatsApp triggers */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <a
                  href={`tel:${siteConfig.PHONE_RAW}`}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Factory Desk: {siteConfig.PHONE_DISPLAY}</span>
                </a>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Chat</span>
                </button>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>Manufacturing Unit Map View</span>
                </span>
                <a
                  href={siteConfig.GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-amber-600 font-semibold hover:underline"
                >
                  Open in Maps ↗
                </a>
              </div>
              <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative">
                <iframe
                  title="Rudra Earthing System Plant Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={siteConfig.GOOGLE_MAPS_EMBED_URL}
                />
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Message Dispatched Successfully!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold">{name}</span>. Your enquiry has been received and forwarded to{' '}
                  <span className="font-bold text-slate-800">{siteConfig.CLIENT_EMAIL}</span>. We will call you back shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 bg-slate-900 text-white font-semibold text-xs rounded-xl hover:bg-slate-800"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Emails are delivered immediately to our sales director&apos;s desk.
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Anand Sharma"
                      required
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      required
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. client@company.com"
                      required
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Price for 200 Copper Bonded Rods"
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Requirements / Message *
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Specify project type, rod size, quantity, site delivery location, or questions..."
                    required
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry &amp; Direct Email</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
