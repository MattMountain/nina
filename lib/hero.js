import { fetchAPI } from "./api.js";

export async function getHero(preview)
{
    const data = await fetchAPI(
        `query MyQuery {
  page(id: "cG9zdDo4") {
    id
    hero {
      heroSubheadline
      heroText
      heroImage {
        altText
        mediaItemUrl
      }
    }
  }
}`
    )
    return data?.page
}