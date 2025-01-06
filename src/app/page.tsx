import Hero from "./components/Hero";
import FavouriteProducts from "./components/FavouriteProducts";
import OurStory from "./components/OurStory";
import { Product } from "../../types/index";
import { fetchProducts } from "../../lib/fetchProducts";

export default async function Home() {
  const products: Product[] = await fetchProducts();

  return (
    <div>
      <Hero></Hero>
      <FavouriteProducts products={products}></FavouriteProducts>
      <OurStory></OurStory>
    </div>
  );
}
