import React, { useState, useEffect } from 'react';
import { initialProducts } from './data/products';
import { initialOrders, initialContacts, initialTestimonials } from './data/initialData';
import { Product, CustomerOrder, ContactMessage, CustomerFeedback } from './types';

import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { CatalogueModal } from './components/CatalogueModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';

import { HomeView } from './views/HomeView';
import { ProductsView } from './views/ProductsView';
import ProductDetailView from './views/ProductDetailView';
import { SolutionsView } from './views/SolutionsView';
import { AboutView } from './views/AboutView';
import { ProjectsView } from './views/ProjectsView';
import { ContactView } from './views/ContactView';
import { AdminView } from './views/AdminView';

export default function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('copper-bonded-earthing-rod');

  // Modals
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteModalProductId, setQuoteModalProductId] = useState<string | undefined>();
  const [isCatalogueModalOpen, setIsCatalogueModalOpen] = useState<boolean>(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState<boolean>(false);

  // Fullscreen Image Lightbox
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxImageUrl, setLightboxImageUrl] = useState<string>('');
  const [lightboxImageTitle, setLightboxImageTitle] = useState<string>('');

  // Persistent Data States with localStorage
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('rudra_products');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return initialProducts;
  });

  const [orders, setOrders] = useState<CustomerOrder[]>(() => {
    try {
      const saved = localStorage.getItem('rudra_orders');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return initialOrders;
  });

  const [contacts, setContacts] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem('rudra_contacts');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return initialContacts;
  });

  const [testimonials, setTestimonials] = useState<CustomerFeedback[]>(() => {
    try {
      const saved = localStorage.getItem('rudra_testimonials');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return initialTestimonials;
  });

  // Local storage auto sync
  useEffect(() => {
    localStorage.setItem('rudra_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('rudra_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('rudra_contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem('rudra_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  // Scroll to top on page navigate
  const handleNavigate = (view: string, productId?: string) => {
    setCurrentView(view);
    if (productId) {
      setSelectedProductId(productId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (productId?: string) => {
    setQuoteModalProductId(productId || selectedProductId);
    setIsQuoteModalOpen(true);
  };

  const handleOpenCatalogueModal = () => {
    setIsCatalogueModalOpen(true);
  };

  // Secret 5-click on Logo trigger
  const handleSecretAdminTrigger = () => {
    setIsAdminLoginOpen(true);
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminLoginOpen(false);
    handleNavigate('admin');
  };

  // Open Fullscreen Lightbox on double-click
  const handleOpenImageLightbox = (url: string, title?: string) => {
    setLightboxImageUrl(url);
    setLightboxImageTitle(title || 'Product High-Resolution Image');
    setIsLightboxOpen(true);
  };

  // Order & Contact handlers
  const handleSaveOrder = (newOrder: CustomerOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  const handleSaveContact = (newContact: ContactMessage) => {
    setContacts((prev) => [newContact, ...prev]);
  };

  // Product Admin handlers
  const handleAddProduct = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const handleUpdateProduct = (updated: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleUpdateOrderStatus = (orderId: string, status: CustomerOrder['status']) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status } : o))
    );
  };

  // Testimonials Admin handlers
  const handleAddTestimonial = (item: CustomerFeedback) => {
    setTestimonials((prev) => [item, ...prev]);
  };

  const handleToggleTestimonial = (id: string) => {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isApproved: !t.isApproved } : t))
    );
  };

  const handleDeleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  const activeProduct =
    products.find((p) => p.id === selectedProductId) || products[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 antialiased selection:bg-amber-500 selection:text-white">
      {/* Desktop Circular Cursor */}
      <CustomCursor />

      {/* Primary Top Bar (No visible admin button; 5-click logo trigger) */}
      {currentView !== 'admin' && (
        <Navbar
          currentView={currentView}
          onNavigate={handleNavigate}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenCatalogueModal={handleOpenCatalogueModal}
          onSecretAdminTrigger={handleSecretAdminTrigger}
        />
      )}

      {/* Main View Router */}
      <main className="flex-1 transition-opacity duration-300">
        {currentView === 'home' && (
          <HomeView
            products={products}
            testimonials={testimonials}
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenCatalogueModal={handleOpenCatalogueModal}
            onOpenImageLightbox={handleOpenImageLightbox}
          />
        )}

        {currentView === 'products' && (
          <ProductsView
            products={products}
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenCatalogueModal={handleOpenCatalogueModal}
            onOpenImageLightbox={handleOpenImageLightbox}
          />
        )}

        {currentView === 'product-detail' && (
          <ProductDetailView
            product={activeProduct}
            allProducts={products}
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenCatalogueModal={handleOpenCatalogueModal}
            onOpenImageLightbox={handleOpenImageLightbox}
          />
        )}

        {currentView === 'solutions' && (
          <SolutionsView
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenCatalogueModal={handleOpenCatalogueModal}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}

        {currentView === 'projects' && (
          <ProjectsView
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}

        {currentView === 'contact' && (
          <ContactView onSaveContact={handleSaveContact} />
        )}

        {currentView === 'admin' && (
          <AdminView
            products={products}
            orders={orders}
            contacts={contacts}
            testimonials={testimonials}
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
            onUpdateOrderStatus={handleUpdateOrderStatus}
            onAddTestimonial={handleAddTestimonial}
            onToggleTestimonial={handleToggleTestimonial}
            onDeleteTestimonial={handleDeleteTestimonial}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}
      </main>

      {/* Global Footer (No visible admin button; 5-click logo trigger) */}
      {currentView !== 'admin' && (
        <Footer
          onNavigate={handleNavigate}
          onOpenCatalogueModal={handleOpenCatalogueModal}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onSecretAdminTrigger={handleSecretAdminTrigger}
        />
      )}

      {/* Direct Quotation & Order Inquiry Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        products={products}
        initialProductId={quoteModalProductId}
        onSaveOrder={handleSaveOrder}
      />

      {/* Technical Catalogue Download Modal */}
      <CatalogueModal
        isOpen={isCatalogueModalOpen}
        onClose={() => setIsCatalogueModalOpen(false)}
      />

      {/* Secret Admin Authentication Modal (Opens on 5-clicks on logo) */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onSuccess={handleAdminLoginSuccess}
      />

      {/* High-Resolution Fullscreen Image Lightbox (Opens on double-click on any image) */}
      <ImageLightboxModal
        isOpen={isLightboxOpen}
        imageUrl={lightboxImageUrl}
        imageTitle={lightboxImageTitle}
        onClose={() => setIsLightboxOpen(false)}
      />
    </div>
  );
}
