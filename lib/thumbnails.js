import { fetchAPI } from "./api.js";

export async function getThumbnails(categeory)
{
    const data = await fetchAPI(`query Thumbnails {
  thumbnail(name: "${categeory}")}`);

    return data?.thumbnail;
}

export function addThumbnails(data, thumbnails)
{
    let newData = {}
    let index = 0
    data?.forEach( (item) => {
        const name = item?.node.name
        const idx = thumbnails?.findIndex( (thumbnail) => thumbnail.name === name )
        newData[index] = {
            name: name,
            id: item?.node?.id,
            posts: item?.node?.posts?.edges?.length,
            thumbnail: thumbnails[idx]?.thumbnail,
            slug: item?.node?.slug,
        }
        index++
    })
    return newData
}