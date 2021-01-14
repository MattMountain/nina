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