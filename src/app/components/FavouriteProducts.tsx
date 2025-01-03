/* eslint-disable @next/next/no-img-element */
import React from "react";
import customTitle from "./ui/customTitle";
import { fetchProducts } from "../../../lib/fetchProducts";
import { urlFor } from "../../../lib/sanity";
import { Product } from "../../../types";
import { qatarBold, qatarMeduim } from "./Fonts";
interface FavouriteProductsProps {
  products: Product[];
}
const FavouriteProducts: React.FC<FavouriteProductsProps> = ({ products }) => {
  const firstFourProducts = products?.slice(0, 4) || [];
  const getPrice = (product: Product) => {
    if (product.hasVolume) {
      const firstVolume = product.volumesAndPricesAndDiscounts?.[0];
      if (firstVolume) {
        if (firstVolume.pricing.hasDiscount) {
          return `${firstVolume.pricing.discount?.newPrice || "N/A"} `;
        }
        return `${firstVolume.pricing.dzd || "N/A"} `;
      }
    } else {
      const { basicPriceAndDiscount } = product;
      if (basicPriceAndDiscount?.hasDiscount) {
        return `${basicPriceAndDiscount.discount?.newPrice || "N/A"} `;
      }
      return `${basicPriceAndDiscount?.dzd || "N/A"} `;
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
          const priceDisplay = getPrice(product);
          return (
            <div key={product._id || Math.random()} className="rounded-lg">
              <div>
                <img
                  src={imageUrl}
                  alt={product.productName?.en || "Product Image"}
                  className="mx-auto h-full w-full rounded-lg object-cover"
                />
              </div>
              <div>
                <div className="mt-5">
                  <div>
                    <div
                      className={`text-2xl font-semibold text-gray-900 ${qatarBold.className}`}
                    >
                      {product.productName?.en || "Unnamed Product"} <br />
                      {product.productName?.ar || "u"}
                    </div>
                    <div className="mt-2 flex flex-row items-start justify-end gap-2">
                      <div
                        className={`font-semibold text-primary ${qatarBold.className} text-3xl`}
                      >
                        {priceDisplay !== "N/A DZD"
                          ? priceDisplay
                          : "Price not available"}
                      </div>
                      <div className={`${qatarMeduim.className} text-primary`}>
                        DZD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  try {
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
