import { client } from "./sanity";

export const fetchProducts = async () => {
  const query = `*[_type == "product"]`;

  const products = await client.fetch(query);
  return products;
};
