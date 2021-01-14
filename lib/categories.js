import { fetchAPI } from "./api.js";

export async function getCategories(preview)
{
    const data = await fetchAPI(
        `query Posts {
  categories {
    edges {
      node {
        description
        name
        id
        children {
          edges {
            node {
              name
              id
              slug
              posts {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`
    );
    return data?.categories;
}

export async function categoryByName(name)
{
    const data = await fetchAPI(
        `query Category {
  categories(where: {name: "${name}"}) {
    edges {
      node {
        id
        name
        description
      }
    }
  }
}
`
    )
    return data?.categories
}

export async function categoryBySlug(slug)
{
    const data = await fetchAPI(
        `query MyQuery {
  categories(where: {slug: "${ slug }"}) {
    edges {
      node {
        id
        name
        description
        posts {
          edges {
            node {
              id
              title
              slug
              foodPost {
                title
                titleImage {
                  altText
                  mediaItemUrl
                  title
                }
                vorspann
                youtubeLink
              }
            }
          }
        }
      }
    }
  }
}
`
    )
    return data?.categories
}

export async function categoryChildrenBySlug(slug)
{
    const data = await fetchAPI(
        `query MyQuery {
  categories(where: {slug: "${ slug }"}) {
    edges {
      node {
        id
        name
        slug
        children {
          edges {
            node {
              id
              slug
              name
            }
          }
        }
      }
    }
  }
}`
    )

    return data?.categories
}