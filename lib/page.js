import { fetchAPI } from "./api.js";

export async function getAllPagesWithSlug(preview)
{
    const data = await fetchAPI(
        `query MyQuery {
  pages {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`
    )
    return data?.pages
}

export async function getPageByURI( uri )
{
    const data = await fetchAPI(
        `query MyQuery {
  pageBy(uri: "${ uri }") {
    id
    content
    title
  }
}
`
    )
    return data?.pageBy
}

