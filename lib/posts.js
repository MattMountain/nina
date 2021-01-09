import { fetchAPI } from "./api.js";

export async function getPosts(preview)
{
    const data = await fetchAPI(
        `query Posts {
  posts {
    edges {
      node {
        id
        title
      }
    }
  }
}`
    )
    return data?.posts
}