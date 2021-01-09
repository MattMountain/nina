import { getPosts } from "../lib/posts.js"
import { getAboutPost } from "../lib/about"

export async function getAbout()
{
    const posts = await getPosts()
    const id = getId(posts.edges)
    const about = getAboutPost(id)
    return about
}

function getId(posts)
{
    const idx = posts.findIndex( (post) => post.node.title === 'Über mich')
    return posts[idx].node.id
}