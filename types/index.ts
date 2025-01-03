export interface Product {
  _id: string;
  slug: string;
  productName: {
    en: string;
    ar: string;
  };
  productPicture: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  otherImages?: {
    asset: {
      _ref: string;
      url: string;
    };
  }[];
  description: {
    en: string;
    ar: string;
  };
  categories: {
    _id: string;
    title: string;
  }[];
  hasVolume: boolean;
  volumesAndPricesAndDiscounts?: {
    volume: number;
    pricing: {
      dzd: number;
      hasDiscount: boolean;
      discount?: {
        discountValue: number;
        newPrice: number;
      };
    };
  }[];
  basicPriceAndDiscount?: {
    dzd: number;
    hasDiscount: boolean;
    discount?: {
      discountValue: number;
      newPrice: number;
    };
  };
}
