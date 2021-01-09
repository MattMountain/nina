import { getThumbnails } from "../lib/thumbnails";

export async function filterThumbnails(categories)
{
    const children = categories.node.children.edges;
    let thumbnails = new Array();

    children.forEach(async (item) => {
        const name = item.node.name ;
        thumbnails.push({ name: name, thumbnail: await getThumbnails(item.node.name)})
    })
    return thumbnails
}