/* eslint-disable @next/next/no-img-element */
import React from "react";
import customTitle from "./ui/customTitle";
import { fetchProducts } from "../../../lib/fetchProducts";
import { urlFor } from "../../../lib/sanity";
import { Product } from "../../../types";

interface FavouriteProductsProps {
  products: Product[];
}

const FavouriteProducts: React.FC<FavouriteProductsProps> = ({ products }) => {
  const firstFourProducts = products?.slice(0, 4) || [];

  // Helper function to determine the price
  const getPrice = (product: Product) => {
    if (product.hasVolume) {
      const firstVolume = product.volumesAndPricesAndDiscounts?.[0];
      if (firstVolume) {
        if (firstVolume.pricing.hasDiscount) {
          return `${firstVolume.pricing.discount?.newPrice || "N/A"} DZD`;
        }
        return `${firstVolume.pricing.dzd || "N/A"} DZD`;
      }
    } else {
      const { basicPriceAndDiscount } = product;
      if (basicPriceAndDiscount?.hasDiscount) {
        return `${basicPriceAndDiscount.discount?.newPrice || "N/A"} DZD`;
      }
      return `${basicPriceAndDiscount?.dzd || "N/A"} DZD`;
    }
    return "Price not available";
  };

  return (
    <div className="container mx-auto px-4">
      <div>{customTitle("Favourite Products")}</div>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {firstFourProducts.map((product) => {
          const imageUrl = product.productPicture?.asset?._ref
            ? urlFor(product.productPicture).width(400).url()
            : "/default-image.jpg";

          // Get price for the product
          const priceDisplay = getPrice(product);

          return (
            <div
              key={product._id || Math.random()}
              className="rounded-lg bg-white shadow-md"
            >
              <div>
                <img
                  src={imageUrl}
                  alt={product.productName?.en || "Product Image"}
                  className="h-52 w-full rounded-t-lg object-cover object-center"
                />
              </div>
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-900">
                  {product.productName?.en || "Unnamed Product"}
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                  {product.description?.en || "No description available."}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-semibold text-primary">
                    {priceDisplay !== "N/A DZD"
                      ? priceDisplay
                      : "Price not available"}
                  </p>
                  <button className="rounded-md bg-primary px-4 py-2 text-white">
                    View Product
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Fetch data in getServerSideProps
export async function getServerSideProps() {
  try {
    // Fetch product data
    const products = await fetchProducts();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}

export default FavouriteProducts;
