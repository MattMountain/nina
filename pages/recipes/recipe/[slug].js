import {getPostBySlug, getPosts, postsByName} from "../../../lib/posts";
import {getGeneral} from "../../../lib/general";
import {getMenu} from "../../../lib/menu";
import Head from "next/head";
import Footer from "../../../components/footer";
import Headline from "../../../components/headline";

export default function Recipe ({ data, post, generalSettings, socialMedia, serviceMenu })
{
    const headline = { title: post?.title, description: ''}

    return (
        <>
            <Head>
                <title>{ generalSettings?.generalSettingsTitle } - { post?.title }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='container page'>
                <Headline data={ headline }></Headline>
                <p>{ post?.content }</p>

            </main>
            <Footer data={ {social: socialMedia, serviceMenu: serviceMenu, general: generalSettings} }></Footer>
        </>
    )
}

export async function getStaticProps({ params, preview = false, previewData })
{
    const post = await getPostBySlug( params.slug )

    const generalSettings = await getGeneral()

    const socialMedia = await getMenu('soical-media')

    const serviceMenu = await getMenu('service-menu')

    return {
        props: {
            data: 'hello world',
            post: post,
            generalSettings: generalSettings,
            socialMedia: socialMedia?.edges[0]?.node?.menuItems?.edges,
            serviceMenu: serviceMenu?.edges[0]?.node?.menuItems?.edges,
        }
    }
}

export async function getStaticPaths()
{
    const allPosts = await postsByName('Food Blog')

    return {
        paths: allPosts.edges.map(({ node }) => `/recipes/recipe/${node.slug}`) || [],
        fallback: true,
    }
}