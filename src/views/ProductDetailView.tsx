import React, { useMemo, useState } from 'react';
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  Download,
  Phone,
  ArrowRight,
  Factory,
  Sun,
  Building2,
  Radio,
  Share2,
  Check,
  ZoomIn,
  Flame,
} from 'lucide-react';

import { Product } from '../types';
import { siteConfig } from '../config/siteConfig';

interface ProductDetailViewProps {
  product: Product;
  allProducts: Product[];
  onNavigate: (view: string, productId?: string) => void;
  onOpenQuoteModal: (productId?: string) => void;
  onOpenCatalogueModal: () => void;
  onOpenImageLightbox: (url: string, title?: string) => void;
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  allProducts,
  onNavigate,
  onOpenQuoteModal,
  onOpenCatalogueModal,
  onOpenImageLightbox,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  /*
   * Product images are now the single source of truth.
   * No old JPG hero image is required.
   */
  const productImages = useMemo(
    () => product.images?.filter(Boolean) ?? [],
    [product.images]
  );

  const currentDisplayImage =
    productImages[selectedImageIndex] || productImages[0] || '';

  const heroImage = productImages[0] || '';

  const relatedProducts = useMemo(
    () =>
      allProducts.filter((item) =>
        product.relatedProductIds?.includes(item.id)
      ),
    [allProducts, product.relatedProductIds]
  );

  const titleParts = product.name.trim().split(/\s+/);
  const whiteTitle = titleParts.slice(0, 2).join(' ');
  const amberTitle = titleParts.slice(2).join(' ');

  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: product.name,
          text: product.shortDesc,
          url,
        });
        return;
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);

        setCopiedLink(true);

        window.setTimeout(() => {
          setCopiedLink(false);
        }, 2000);
      }
    } catch {
      // User cancelled share dialog or browser blocked clipboard.
    }
  };

  const applicationIcons = [Sun, Factory, Building2, Radio];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        {/* Product image background */}
        {heroImage && (
          <div className="absolute inset-0 -z-20">
            <img
              src={heroImage}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-center opacity-20 blur-[2px] scale-105"
            />
          </div>
        )}

        {/* Dark overlays */}
        <div className="absolute inset-0 -z-10 bg-slate-950/85" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400"
          >
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="transition-colors hover:text-white"
            >
              Home
            </button>

            <ChevronRight className="h-4 w-4" />

            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="transition-colors hover:text-white"
            >
              Products
            </button>

            <ChevronRight className="h-4 w-4" />

            <span
              className="max-w-[220px] truncate text-slate-200"
              aria-current="page"
            >
              {product.name}
            </span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* Hero content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                <ShieldCheck className="h-4 w-4" />
                Industrial Grade Solution
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-white">{whiteTitle}</span>{' '}
                {amberTitle && (
                  <span className="text-orange-400">{amberTitle}</span>
                )}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {product.shortDesc}
              </p>

              {/* Highlights */}
              {product.highlights?.length > 0 && (
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {product.highlights.slice(0, 4).map((highlight, index) => (
                    <div
                      key={`${highlight}-${index}`}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                      <span className="text-sm font-medium leading-6 text-slate-200">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Hero CTAs */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(product.id)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-400"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={onOpenCatalogueModal}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  <Download className="h-4 w-4" />
                  Product Catalogue
                </button>
              </div>
            </div>

            {/* Hero product image */}
            <div className="relative">
              <div className="absolute inset-8 rounded-full bg-orange-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-sm sm:p-8">
                <div className="absolute right-5 top-5 rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-orange-300">
                  Rudra Earthing
                </div>

                {heroImage ? (
                  <img
                    src={heroImage}
                    alt={product.name}
                    className="relative z-10 mx-auto h-[300px] w-full object-contain sm:h-[390px] lg:h-[450px]"
                    loading="eager"
                  />
                ) : (
                  <div className="flex h-[300px] items-center justify-center text-sm text-slate-500 sm:h-[390px]">
                    Product image unavailable
                  </div>
                )}

                <div className="relative z-10 mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Product
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      {product.name}
                    </p>
                  </div>

                  <div className="rounded-full bg-orange-500/10 p-2.5 text-orange-400">
                    <Zap className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN PRODUCT INFORMATION
      ========================================================== */}
      <main>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            {/* =====================================================
                GALLERY
            ====================================================== */}
            <div>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                {currentDisplayImage ? (
                  <>
                    <img
                      src={currentDisplayImage}
                      alt={product.name}
                      className="h-[360px] w-full cursor-zoom-in object-contain p-8 transition-transform duration-500 group-hover:scale-[1.02] sm:h-[500px] sm:p-12"
                      onDoubleClick={() =>
                        onOpenImageLightbox(
                          currentDisplayImage,
                          product.name
                        )
                      }
                    />

                    <button
                      type="button"
                      onClick={() =>
                        onOpenImageLightbox(
                          currentDisplayImage,
                          product.name
                        )
                      }
                      aria-label={`View ${product.name} image fullscreen`}
                      className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/95 px-4 py-2.5 text-xs font-bold text-slate-700 shadow-sm backdrop-blur transition hover:bg-white"
                    >
                      <ZoomIn className="h-4 w-4" />
                      View Fullscreen
                    </button>
                  </>
                ) : (
                  <div className="flex h-[360px] items-center justify-center text-sm text-slate-400 sm:h-[500px]">
                    Product image unavailable
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {productImages.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
                  {productImages.map((image, index) => (
                    <button
                      type="button"
                      key={`${image}-${index}`}
                      onClick={() => setSelectedImageIndex(index)}
                      aria-label={`View image ${index + 1}`}
                      aria-pressed={selectedImageIndex === index}
                      className={`overflow-hidden rounded-xl border bg-slate-50 transition-all ${
                        selectedImageIndex === index
                          ? 'border-orange-500 ring-2 ring-orange-500/20'
                          : 'border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="h-20 w-full object-contain p-2 sm:h-24"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* =====================================================
                OVERVIEW
            ====================================================== */}
            <div>
              <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                <span className="h-px w-8 bg-orange-500" />
                Product Overview
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Built for reliable earthing performance
              </h2>

              
              {/* Key Features */}
              {product.keyFeatures?.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-extrabold text-slate-950">
                    Key Features
                  </h3>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {product.keyFeatures.map((feature, index) => (
                      <div
                        key={`${feature}-${index}`}
                        className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                      >
                        <div className="mt-0.5 rounded-lg bg-orange-50 p-2 text-orange-600">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>

                        <span className="text-sm font-medium leading-6 text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(product.id)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-extrabold text-white transition hover:bg-slate-800"
                >
                  Get Product Quote
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={onOpenCatalogueModal}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <Download className="h-4 w-4" />
                  Download Catalogue
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  {copiedLink ? (
                    <>
                      <Check className="h-4 w-4 text-green-600" />
                      Link Copied
                    </>
                  ) : (
                    <>
                      <Share2 className="h-4 w-4" />
                      Share
                    </>
                  )}
                </button>
              </div>

              
            </div>
          </div>
        </section>

        {/* =========================================================
            CUSTOM SOLUTION
        ========================================================== */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 rounded-3xl bg-slate-950 p-7 shadow-xl sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
                  <Flame className="h-4 w-4" />
                  Project Requirements
                </div>

                <h3 className="text-2xl font-black text-white sm:text-3xl">
                  Need a customised earthing solution?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                  Share your project requirements, site conditions and
                  technical specifications with our team for a suitable
                  product configuration.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenQuoteModal(product.id)}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-orange-400"
              >
                Discuss Your Requirement
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            APPLICATIONS
        ========================================================== */}
        {product.applications?.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                <span className="h-px w-8 bg-orange-500" />
                Applications
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Designed for demanding environments
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Suitable for industrial, commercial, infrastructure and
                specialised electrical installations.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.applications.map((application, index) => {
                const Icon =
                  applicationIcons[index % applicationIcons.length];

                return (
                  <div
                    key={`${application}-${index}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-extrabold text-slate-900">
                      {application}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Reliable earthing and protection for demanding
                      installations.
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* =========================================================
            VARIANTS
        ========================================================== */}
        {product.variants?.length > 0 && (
  <section className="bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            <span className="h-px w-8 bg-orange-500" />
            Product Variants
          </div>

          <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
            Available configurations
          </h2>
        </div>

        <button
          type="button"
          onClick={() => onOpenQuoteModal(product.id)}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:border-orange-300 hover:text-orange-600"
        >
          Ask for Pricing
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-[680px] w-full border-collapse text-left">
          <thead>
            <tr className="bg-slate-950 text-white">
              <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider">
                Variant
              </th>

              <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider">
                Diameter
              </th>

              <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider">
                Length
              </th>

              <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider">
                Specification
              </th>

              <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {product.variants.map((variant, index) => (
              <tr
                key={`${variant.diameter}-${variant.length}-${index}`}
                className="transition hover:bg-orange-50/40"
              >
                <td className="px-5 py-4 text-sm font-bold text-slate-900">
                  Variant {index + 1}
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {variant.diameter || '—'}
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {variant.length || '—'}
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {variant.copperLayer || '—'}
                </td>

                <td className="px-5 py-4">
                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal(product.id)}
                    className="whitespace-nowrap text-sm font-extrabold text-orange-600 hover:text-orange-700"
                  >
                    Get Quote
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
)}

        {/* =========================================================
            RELATED PRODUCTS
        ========================================================== */}
        {relatedProducts.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                  <span className="h-px w-8 bg-orange-500" />
                  Related Products
                </div>

                <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
                  Explore more solutions
                </h2>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('products')}
                className="inline-flex items-center gap-2 text-sm font-extrabold text-orange-600 hover:text-orange-700"
              >
                View All Products
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.slice(0, 4).map((relatedProduct) => {
                const image = relatedProduct.images?.[0];

                return (
                  <button
                    type="button"
                    key={relatedProduct.id}
                    onClick={() =>
                      onNavigate('product-detail', relatedProduct.id)
                    }
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                  >
                    <div className="relative overflow-hidden bg-slate-50">
                      {image ? (
                        <img
                          src={image}
                          alt={relatedProduct.name}
                          className="h-56 w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-56 items-center justify-center text-sm text-slate-400">
                          Image unavailable
                        </div>
                      )}

                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-orange-600 shadow-sm">
                        Rudra
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                        {relatedProduct.category}
                      </p>

                      <h3 className="mt-2 line-clamp-2 text-lg font-extrabold leading-6 text-slate-950">
                        {relatedProduct.name}
                      </h3>

                      <div className="mt-4 flex items-center gap-2 text-sm font-bold text-slate-700 transition group-hover:text-orange-600">
                        View Product
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}
        <section className="border-t border-slate-200 bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
                  <Clock className="h-4 w-4" />
                  Talk to Our Team
                </div>

                <h2 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Looking for the right earthing solution for your project?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                  Get technical assistance, product details and a project
                  specific quotation from the Rudra Earthing team.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(product.id)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-orange-400"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={`tel:${siteConfig.PHONE_RAW}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetailView;