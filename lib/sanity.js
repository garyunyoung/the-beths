import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: '',
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export { client, urlFor };