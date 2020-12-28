import { fetchAPI } from "./api.js";

export async function getCategories(preview)
{
    const data = await fetchAPI(
        `query Posts {
  categories {
    edges {
      node {
        name
        id
        children {
          edges {
            node {
              name
              id
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