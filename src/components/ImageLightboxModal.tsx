import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, Download } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  imageTitle?: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  imageUrl,
  imageTitle,
  onClose,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsZoomed(false);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="w-full max-w-7xl flex items-center justify-between text-white py-2 px-4 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-0.5">
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
            Fullscreen Product Inspection
          </span>
          <h4 className="text-sm sm:text-base font-semibold text-slate-100 truncate max-w-md sm:max-w-xl">
            {imageTitle || 'Product High-Resolution Image'}
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            title={isZoomed ? 'Zoom Out' : 'Zoom In'}
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>

          <a
            href={imageUrl}
            download="rudra-product-image.jpg"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Download Image"
          >
            <Download className="w-5 h-5" />
          </a>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold transition-colors ml-2"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        className="flex-1 w-full max-w-7xl flex items-center justify-center overflow-auto p-2"
        onClick={(e) => e.stopPropagation()}
        onDoubleClick={() => setIsZoomed(!isZoomed)}
      >
        <div className="relative transition-transform duration-300 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={imageTitle || 'Product Preview'}
            className={`max-h-[82vh] object-contain rounded-lg shadow-2xl transition-all duration-300 ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="text-center py-2 text-xs text-slate-400">
        <span>Click image or press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[11px] text-white">Esc</kbd> to exit fullscreen</span>
      </div>
    </div>
  );
};
