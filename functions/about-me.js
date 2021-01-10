import { getPosts } from "../lib/posts.js"
import { getAboutPost } from "../lib/about"

export async function getAbout()
{
    const posts = await getPosts()
    const id = getIdPosts(posts.edges, 'Über mich')
    const about = getAboutPost(id)
    return about
}

export function getIdPosts(posts, title)
{
    const idx = posts.findIndex( (post) => post.node.title === title)
    return posts[idx].node.id
}