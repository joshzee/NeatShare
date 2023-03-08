import {createClient} from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'neatshare_ds',
  apiVersion: '2021-10-21',
  useCDN: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = new ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source); 
