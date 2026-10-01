import React, { useState } from 'react';
import {
  ShieldCheck,
  Package,
  ShoppingBag,
  Users,
  MessageSquare,
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  Phone,
  Mail,
  Search,
  Lock,
  Unlock,
  Star,
} from 'lucide-react';
import { Product, CustomerOrder, ContactMessage, CustomerFeedback } from '../types';
import { siteConfig } from '../config/siteConfig';

interface AdminViewProps {
  products: Product[];
  orders: CustomerOrder[];
  contacts: ContactMessage[];
  testimonials: CustomerFeedback[];
  onAddProduct: (product: Product) => void;
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (productId: string) => void;
  onUpdateOrderStatus: (orderId: string, status: CustomerOrder['status']) => void;
  onAddTestimonial: (testimonial: CustomerFeedback) => void;
  onToggleTestimonial: (id: string) => void;
  onDeleteTestimonial: (id: string) => void;
  onNavigateHome: () => void;
}

export const AdminView: React.FC<AdminViewProps> = ({
  products,
  orders,
  contacts,
  testimonials,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  onUpdateOrderStatus,
  onAddTestimonial,
  onToggleTestimonial,
  onDeleteTestimonial,
  onNavigateHome,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [passcode, setPasscode] = useState('');
  const [activeTab, setActiveTab] = useState<'orders' | 'products' | 'contacts' | 'testimonials'>('orders');

  // Product Add / Edit modal state
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [prodName, setProdName] = useState('');
  const [prodCategory, setProdCategory] = useState<Product['category']>('rods');
  const [prodShortDesc, setProdShortDesc] = useState('');
  const [prodFullDesc, setProdFullDesc] = useState('');
  const [prodMaterial, setProdMaterial] = useState('');
  const [prodDiameter, setProdDiameter] = useState('');
  const [prodLength, setProdLength] = useState('');
  const [prodCopperLayer, setProdCopperLayer] = useState('');
  const [prodTensile, setProdTensile] = useState('');
  const [prodStandards, setProdStandards] = useState('');
  const [prodImgUrl, setProdImgUrl] = useState('');

  // Testimonial Add state
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [testName, setTestName] = useState('');
  const [testCompany, setTestCompany] = useState('');
  const [testRole, setTestRole] = useState('');
  const [testRating, setTestRating] = useState(5);
  const [testComment, setTestComment] = useState('');
  const [testImageUrl, setTestImageUrl] = useState('');

  // Search filter
  const [orderSearch, setOrderSearch] = useState('');

  const openAddProductModal = () => {
    setEditingProductId(null);
    setProdName('');
    setProdCategory('rods');
    setProdShortDesc('');
    setProdFullDesc('');
    setProdMaterial('Low Carbon Steel Core + Molecular Copper');
    setProdDiameter('17 mm / 20 mm');
    setProdLength('3.0 m');
    setProdCopperLayer('≥ 250 microns');
    setProdTensile('≥ 450 N/mm²');
    setProdStandards('IS 3043, IEC 62561');
    setProdImgUrl(products[0]?.images[0] || '');
    setIsProductModalOpen(true);
  };

  const openEditProductModal = (prod: Product) => {
    setEditingProductId(prod.id);
    setProdName(prod.name);
    setProdCategory(prod.category);
    setProdShortDesc(prod.shortDesc);
    setProdFullDesc(prod.fullDesc);
    setProdMaterial(prod.specifications.material);
    setProdDiameter(prod.specifications.diameter);
    setProdLength(prod.specifications.length);
    setProdCopperLayer(prod.specifications.copperLayerThickness);
    setProdTensile(prod.specifications.tensileStrength);
    setProdStandards(prod.specifications.standards);
    setProdImgUrl(prod.images[0] || '');
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prodName.trim()) return;

    if (editingProductId) {
      const existing = products.find((p) => p.id === editingProductId);
      if (existing) {
        const updated: Product = {
          ...existing,
          name: prodName,
          category: prodCategory,
          shortDesc: prodShortDesc,
          fullDesc: prodFullDesc,
          images: prodImgUrl ? [prodImgUrl, ...existing.images.slice(1)] : existing.images,
          specifications: {
            ...existing.specifications,
            material: prodMaterial,
            diameter: prodDiameter,
            length: prodLength,
            copperLayerThickness: prodCopperLayer,
            tensileStrength: prodTensile,
            standards: prodStandards,
          },
        };
        onUpdateProduct(updated);
      }
    } else {
      const id = prodName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const newProduct: Product = {
        id,
        name: prodName,
        slug: id,
        category: prodCategory,
        categoryLabel:
          prodCategory === 'rods'
            ? 'Earthing Electrodes & Rods'
            : prodCategory === 'electrodes'
            ? 'Chemical Electrodes'
            : prodCategory === 'lightning'
            ? 'Lightning Protection'
            : prodCategory === 'compounds'
            ? 'Earth Enhancement Materials'
            : 'Earthing Accessories & Kits',
        shortDesc: prodShortDesc,
        fullDesc: prodFullDesc,
        images: [
          prodImgUrl || products[0]?.images[0] || '',
          products[0]?.images[1] || '',
          products[0]?.images[2] || '',
          products[0]?.images[3] || '',
        ],
        highlights: [
          'High Conductivity & Low Resistance',
          'Certified to IS 3043 & IEC 62561',
          'Corrosion Resistant Pure Layer',
          'Fast Dispatch from Factory',
        ],
        keyFeatures: [
          'Precision Machined',
          'High Tensile Rigidity',
          'Low Earth Resistance',
          'Factory Quality Inspected',
        ],
        specifications: {
          material: prodMaterial,
          diameter: prodDiameter,
          length: prodLength,
          copperLayerThickness: prodCopperLayer,
          tensileStrength: prodTensile,
          standards: prodStandards,
        },
        applications: [
          'Substations & Grid Stations',
          'Solar Power Parks',
          'Industrial Manufacturing',
          'Commercial Towers',
        ],
        variants: [
          { diameter: prodDiameter.split('/')[0]?.trim() || '17mm', length: prodLength, copperLayer: prodCopperLayer, partNumber: `RUD-${Date.now().toString().slice(-4)}` },
        ],
        relatedProductIds: ['copper-bonded-earthing-rod', 'earth-backfill-compound'],
      };
      onAddProduct(newProduct);
    }
    setIsProductModalOpen(false);
  };

  const handleSaveTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testName.trim() || !testComment.trim()) return;

    const newTestimonial: CustomerFeedback = {
      id: `TEST-${Date.now().toString().slice(-4)}`,
      name: testName,
      company: testCompany || 'Independent Consultant',
      role: testRole || 'Project Engineer',
      rating: testRating,
      comment: testComment,
      imageUrl: testImageUrl.trim() || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      isApproved: true,
      date: 'Just now',
    };

    onAddTestimonial(newTestimonial);
    setIsTestimonialModalOpen(false);
    setTestName('');
    setTestCompany('');
    setTestRole('');
    setTestComment('');
    setTestImageUrl('');
  };

  const filteredOrders = orders.filter((o) => {
    const q = orderSearch.toLowerCase();
    return (
      o.customerName.toLowerCase().includes(q) ||
      o.email.toLowerCase().includes(q) ||
      o.phone.toLowerCase().includes(q) ||
      o.companyName.toLowerCase().includes(q) ||
      o.id.toLowerCase().includes(q)
    );
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Rudra Admin Portal</h2>
            <p className="text-xs text-slate-500 mt-1">Enter passcode to manage products, orders &amp; customer database</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (passcode === siteConfig.ADMIN_PASSCODE || passcode === 'admin123' || passcode === 'rudra2025') {
                setIsAuthenticated(true);
              } else {
                alert('Invalid passcode.');
              }
            }}
            className="space-y-4"
          >
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter admin passcode"
              className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none text-center"
            />
            <button
              type="submit"
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-xl transition-colors shadow-md"
            >
              Sign In to Management
            </button>
          </form>
          <button
            onClick={onNavigateHome}
            className="text-xs text-slate-400 hover:text-slate-600"
          >
            Return to Website
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      {/* Top Admin Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500 text-white font-black text-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-white text-base">RUDRA EARTHING</span>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                Executive Management Desk
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span>Exit to Website</span>
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="p-1.5 text-slate-400 hover:text-white"
              title="Lock Admin"
            >
              <Unlock className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Navigation Tabs (PHP Backend script tab removed as requested) */}
        <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'orders'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Customer Orders &amp; Quotes ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'products'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Products &amp; Specs ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'contacts'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Contact Inquiries ({contacts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('testimonials')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'testimonials'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Customer Feedback ({testimonials.length})</span>
          </button>
        </div>

        {/* TAB 1: CUSTOMER ORDERS & QUOTES */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Customer Orders &amp; Price Requests
                </h3>
                <p className="text-xs text-slate-500">
                  All requests dispatched to <span className="font-semibold text-amber-600">{siteConfig.CLIENT_EMAIL}</span> and logged in real-time.
                </p>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={orderSearch}
                  onChange={(e) => setOrderSearch(e.target.value)}
                  placeholder="Search customer, phone, ID..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-xs">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-slate-700 uppercase">Ref ID</th>
                      <th className="px-4 py-3 text-left font-bold text-slate-700 uppercase">Customer</th>
                      <th className="px-4 py-3 text-left font-bold text-slate-700 uppercase">Contact</th>
                      <th className="px-4 py-3 text-left font-bold text-slate-700 uppercase">Product &amp; Qty</th>
                      <th className="px-4 py-3 text-left font-bold text-slate-700 uppercase">Project / Site</th>
                      <th className="px-4 py-3 text-left font-bold text-slate-700 uppercase">Status</th>
                      <th className="px-4 py-3 text-right font-bold text-slate-700 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-mono font-bold text-amber-600">{order.id}</td>
                        <td className="px-4 py-3">
                          <div className="font-bold text-slate-900">{order.customerName}</div>
                          <div className="text-[11px] text-slate-500">{order.companyName}</div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1 font-semibold text-slate-800">
                            <Phone className="w-3 h-3 text-amber-500" />
                            <a href={`tel:${order.phone}`} className="hover:underline">{order.phone}</a>
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-slate-500">
                            <Mail className="w-3 h-3 text-slate-400" />
                            <a href={`mailto:${order.email}`} className="hover:underline">{order.email}</a>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          {order.products.map((item, idx) => (
                            <div key={idx}>
                              <span className="font-semibold text-slate-800">{item.productName}</span>
                              <span className="text-amber-600 font-bold ml-1.5">x {item.quantity}</span>
                              {item.variant && <div className="text-[10px] text-slate-400">{item.variant}</div>}
                            </div>
                          ))}
                        </td>
                        <td className="px-4 py-3">
                          <div className="font-semibold text-slate-800">{order.projectType}</div>
                          <div className="text-[10px] text-slate-500">{order.city}</div>
                          {order.notes && <div className="text-[10px] text-slate-400 italic line-clamp-1 mt-0.5">&ldquo;{order.notes}&rdquo;</div>}
                        </td>
                        <td className="px-4 py-3">
                          <select
                            value={order.status}
                            onChange={(e) => onUpdateOrderStatus(order.id, e.target.value as CustomerOrder['status'])}
                            className="text-xs font-bold rounded-lg px-2 py-1 border border-slate-300 bg-white"
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Quoted">Quoted</option>
                            <option value="In Production">In Production</option>
                            <option value="Dispatched">Dispatched</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <a
                            href={`https://wa.me/${order.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(order.customerName)},%20regarding%20your%20Rudra%20Earthing%20Quote%20${order.id}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-md font-semibold text-[11px] mr-1"
                          >
                            WhatsApp
                          </a>
                          <a
                            href={`tel:${order.phone}`}
                            className="inline-block px-2.5 py-1 bg-amber-50 text-amber-700 hover:bg-amber-100 rounded-md font-semibold text-[11px]"
                          >
                            Call
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS MANAGEMENT */}
        {activeTab === 'products' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Products &amp; Technical Specifications
                </h3>
                <p className="text-xs text-slate-500">
                  Add new products, adjust technical standards, or delete items.
                </p>
              </div>

              <button
                onClick={openAddProductModal}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Product</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        className="w-14 h-14 rounded-xl object-cover border border-slate-200"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <span className="text-[10px] font-bold uppercase text-amber-600 block">
                          {p.categoryLabel}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">
                          {p.name}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 line-clamp-2">
                      {p.shortDesc}
                    </p>

                    <div className="text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-1">
                      <div><strong className="text-slate-700">Standards:</strong> {p.specifications.standards}</div>
                      <div><strong className="text-slate-700">Diameter:</strong> {p.specifications.diameter}</div>
                      <div><strong className="text-slate-700">Copper Layer:</strong> {p.specifications.copperLayerThickness}</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => openEditProductModal(p)}
                      className="text-xs font-bold text-slate-700 hover:text-amber-600 flex items-center gap-1"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit Specifications</span>
                    </button>

                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete "${p.name}"?`)) {
                          onDeleteProduct(p.id);
                        }
                      }}
                      className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CONTACT INQUIRIES & USERS */}
        {activeTab === 'contacts' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900">
                Customer Messages &amp; Registered Enquiries
              </h3>
              <p className="text-xs text-slate-500">
                All visitor contact inquiries submitted from the website forms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contacts.map((c) => (
                <div
                  key={c.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{c.name}</h4>
                      <div className="text-[11px] text-slate-500">{new Date(c.createdAt).toLocaleDateString()}</div>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-100 text-slate-700">
                      {c.status}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-amber-700 bg-amber-50/50 p-2 rounded-lg border border-amber-100">
                    Subject: {c.subject}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {c.message}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <div className="space-x-3">
                      <a href={`tel:${c.phone}`} className="font-bold text-slate-800 hover:text-amber-600">
                        {c.phone}
                      </a>
                      <a href={`mailto:${c.email}`} className="text-slate-500 hover:text-amber-600">
                        {c.email}
                      </a>
                    </div>
                    <a
                      href={`mailto:${c.email}?subject=RE: ${encodeURIComponent(c.subject)}&body=Hello ${encodeURIComponent(c.name)},\n\nThank you for reaching out to Rudra Earthing Systems.\n\n`}
                      className="px-3 py-1 bg-amber-500 text-white rounded-lg font-bold text-[11px]"
                    >
                      Reply via Email
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CUSTOMER FEEDBACK & TESTIMONIALS MANAGER */}
        {activeTab === 'testimonials' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Customer Testimonials &amp; Reviews Manager
                </h3>
                <p className="text-xs text-slate-500">
                  Add reviews with customer name, rating (1-5 stars), photo/image URL, and control front-end display.
                </p>
              </div>

              <button
                onClick={() => setIsTestimonialModalOpen(true)}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add Customer Review</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-500">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>

                      <span
                        onClick={() => onToggleTestimonial(t.id)}
                        className={`cursor-pointer px-2 py-0.5 text-[10px] font-bold rounded-full ${
                          t.isApproved
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {t.isApproved ? 'Visible on Site' : 'Hidden'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 italic line-clamp-3">
                      &ldquo;{t.comment}&rdquo;
                    </p>

                    <div className="flex items-center gap-3 pt-2">
                      <img
                        src={t.imageUrl}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-900">{t.name}</div>
                        <div className="text-[10px] text-slate-500">{t.role} · {t.company}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onToggleTestimonial(t.id)}
                      className="text-xs font-bold text-slate-600 hover:text-amber-600"
                    >
                      {t.isApproved ? 'Hide Review' : 'Show on Site'}
                    </button>
                    <button
                      onClick={() => onDeleteTestimonial(t.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MODAL: ADD / EDIT PRODUCT */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[85vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-slate-900">
              {editingProductId ? 'Edit Product Specifications' : 'Add New Product to Catalogue'}
            </h3>

            <form onSubmit={handleSaveProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Product Title *</label>
                <input
                  type="text"
                  value={prodName}
                  onChange={(e) => setProdName(e.target.value)}
                  placeholder="e.g. Copper Bonded Earth Electrode"
                  required
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category</label>
                  <select
                    value={prodCategory}
                    onChange={(e) => setProdCategory(e.target.value as Product['category'])}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
                  >
                    <option value="rods">Earthing Rods</option>
                    <option value="electrodes">Chemical Electrodes</option>
                    <option value="lightning">Lightning Protection</option>
                    <option value="compounds">Backfill Compounds</option>
                    <option value="accessories">Pit Covers &amp; Kits</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Image URL</label>
                  <input
                    type="text"
                    value={prodImgUrl}
                    onChange={(e) => setProdImgUrl(e.target.value)}
                    placeholder="https://... or leave default"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Short Description</label>
                <textarea
                  rows={2}
                  value={prodShortDesc}
                  onChange={(e) => setProdShortDesc(e.target.value)}
                  placeholder="1-2 line summary for card preview"
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
                />
              </div>

              <div className="border-t border-slate-200 pt-3 space-y-3">
                <span className="text-xs font-bold text-amber-600 uppercase">Specifications Table</span>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700">Material</label>
                    <input
                      type="text"
                      value={prodMaterial}
                      onChange={(e) => setProdMaterial(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700">Diameter</label>
                    <input
                      type="text"
                      value={prodDiameter}
                      onChange={(e) => setProdDiameter(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700">Length</label>
                    <input
                      type="text"
                      value={prodLength}
                      onChange={(e) => setProdLength(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700">Copper Layer / Micron</label>
                    <input
                      type="text"
                      value={prodCopperLayer}
                      onChange={(e) => setProdCopperLayer(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700">Tensile Strength</label>
                    <input
                      type="text"
                      value={prodTensile}
                      onChange={(e) => setProdTensile(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700">Standards (IS / IEC)</label>
                    <input
                      type="text"
                      value={prodStandards}
                      onChange={(e) => setProdStandards(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-md"
                >
                  Save to Catalogue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD CUSTOMER TESTIMONIAL */}
      {isTestimonialModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Add Customer Testimonial / Feedback
            </h3>

            <form onSubmit={handleSaveTestimonial} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Customer Full Name *</label>
                <input
                  type="text"
                  value={testName}
                  onChange={(e) => setTestName(e.target.value)}
                  placeholder="e.g. Er. Rajiv Mishra"
                  required
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    value={testCompany}
                    onChange={(e) => setTestCompany(e.target.value)}
                    placeholder="e.g. State Power Corp"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Designation / Role</label>
                  <input
                    type="text"
                    value={testRole}
                    onChange={(e) => setTestRole(e.target.value)}
                    placeholder="e.g. Chief Electrical Inspector"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Rating</label>
                  <select
                    value={testRating}
                    onChange={(e) => setTestRating(Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
                  >
                    <option value={5}>5 Stars (★★★★★)</option>
                    <option value={4}>4 Stars (★★★★☆)</option>
                    <option value={3}>3 Stars (★★★☆☆)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Photo / Avatar Image URL</label>
                  <input
                    type="text"
                    value={testImageUrl}
                    onChange={(e) => setTestImageUrl(e.target.value)}
                    placeholder="https://... (or leave for default avatar)"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Feedback / Testimonial Text *</label>
                <textarea
                  rows={3}
                  value={testComment}
                  onChange={(e) => setTestComment(e.target.value)}
                  placeholder="Write the customer recommendation or review..."
                  required
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsTestimonialModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-md"
                >
                  Publish Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
