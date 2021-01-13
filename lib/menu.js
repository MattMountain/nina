import { fetchAPI } from "./api.js";

export async function getMenu(name)
{
    const data = await fetchAPI(
        `query MENU_ITEMS {
  menus(where: {slug: "${ name }"}) {
    edges {
      node {
        id
        menuItems {
          edges {
            node {
              id
              label
              url
              path
            }
          }
        }
      }
    }
  }
}
`
    )
    return data?.menus
}