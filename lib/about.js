import { fetchAPI } from "./api.js";

export async function getAboutPost(id)
{
    const data = await fetchAPI(
`query About {
  post(id: "${id}") {
    id
    title
    categories {
      edges {
        node {
          id
          description
          name
        }
      }
    }
    aboutMe {
      about
      image {
        altText
        mediaItemUrl
        title
      }
    }
  }
}`
    )
    return data?.post
}