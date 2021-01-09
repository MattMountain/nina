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