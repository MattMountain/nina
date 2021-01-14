import {getPosts} from "../../../lib/posts";

export default function Recipe ({ data })
{
    return (
        <h1>Hello World</h1>
    )
}

export async function getStaticProps({ params, preview = false, previewData })
{
    return {
        props: {
            data: 'hello world',
        }
    }
}

export async function getStaticPaths()
{
    const allPosts = await getPosts()

    return {
        paths: allPosts.edges.map(({ node }) => `/recipes/recipe/${node.slug}`) || [],
        fallback: true,
    }
}