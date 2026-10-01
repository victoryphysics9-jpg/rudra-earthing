export interface ProductVariant {
  diameter: string;
  length: string;
  copperLayer: string;
  partNumber?: string;
}

export interface ProductSpecification {
  material: string;
  diameter: string;
  length: string;
  copperLayerThickness: string;
  tensileStrength: string;
  standards: string;
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'rods' | 'electrodes' | 'lightning' | 'compounds' | 'accessories';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  images: string[];
  highlights: string[];
  keyFeatures: string[];
  specifications: ProductSpecification;
  applications: string[];
  variants: ProductVariant[];
  relatedProductIds: string[];
  isPopular?: boolean;
}

export interface CustomerOrder {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  companyName: string;
  city: string;
  products: {
    productId: string;
    productName: string;
    quantity: number;
    variant?: string;
  }[];
  projectType: string;
  notes: string;
  status: 'New' | 'Contacted' | 'Quoted' | 'In Production' | 'Dispatched' | 'Completed';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'Unread' | 'Replied';
}

export interface CustomerFeedback {
  id: string;
  name: string;
  company: string;
  role: string;
  rating: number; // 1 to 5
  comment: string;
  imageUrl: string;
  isApproved: boolean;
  date: string;
}
