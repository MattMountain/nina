import Head from 'next/head'
import {getPosts} from "../../lib/posts";

export default function Page ({ data })
{

    return (
        <>
            <h1>Hello World</h1>
        </>
    )
}

export async function getStaticProps({ params, preview = false, previewData })
{

    return {
        props: {
            data: params
        }
    }
}

export async function getStaticPaths() {
    const allPosts = await getPosts()

    return {
        paths: allPosts.edges.map(({ node }) => `/recipes/${node.slug}`) || [],
        fallback: true,
    }
}