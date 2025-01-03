import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "7rjzrzev",
  dataset: "production",
  apiVersion: "2024-12-23",
  useCdn: true,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;
