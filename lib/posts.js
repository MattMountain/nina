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

export async function postsByName(name)
{
    const data = await fetchAPI(
        `query Posts {
  posts(where: {categoryName: "${ name }"}) {
    edges {
      node {
        id
        title
        link
        foodPost {
          title
          titleImage {
            altText
            mediaItemUrl
            title
          }
          youtubeLink
          vorspann
        }
      }
    }
  }
}`
    )
    return data?.posts
}