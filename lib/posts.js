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
        slug
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
        slug
        featuredImage {
          node {
            altText
            mediaItemUrl
            title
          }
        }
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
        lastVideos {
          description
          link
          name
        }
      }
    }
  }
}`
    )
    return data?.posts
}

export async function getPostBySlug(slug)
{
    const data = await fetchAPI(
        `query MyQuery {
  postBy(slug: "${ slug }") {
    id
    content(format: RENDERED)
    title
  }
}`
    )
    return data?.postBy
}