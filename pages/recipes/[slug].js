import Head from 'next/head'
import {getPosts} from "../../lib/posts";
import {categoryBySlug, categoryChildrenBySlug} from "../../lib/categories";
import Headline from "../../components/headline";
import BlogPost from "../../components/BlogPost";
import {getGeneral} from "../../lib/general";
import {getMenu} from "../../lib/menu";
import Footer from "../../components/footer";

export default function Recipes ({ content, posts, generalSettings, socialMedia, serviceMenu })
{
    const headline = { title: content?.node?.name, description: ( content?.node?.description ? content.description : '')}
    return (
        <>
            <Head>
                <title>{ generalSettings?.generalSettingsTitle } - { content?.title }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='container recipes food-blog'>
                <Headline data={ headline }></Headline>
                <section className='food-blog-content'>
                    { posts ?
                        Object.keys( posts ).map( (key) =>
                            <BlogPost key={ key } data={ posts[key] }></BlogPost>
                        ) :
                        ( <p>Keine asPosts vorhanden</p> )
                    }
                </section>
            </main>
            <Footer data={ {social: socialMedia, serviceMenu: serviceMenu, general: generalSettings} }></Footer>
        </>

    )
}

export async function getStaticProps({ params, preview = false, previewData })
{
    const content = await categoryBySlug(params.slug)

    const generalSettings = await getGeneral()

    const socialMedia = await getMenu('soical-media')

    const serviceMenu = await getMenu('service-menu')

    return {
        props: {
            content: content?.edges[0],
            posts: content?.edges[0]?.node?.posts?.edges,
            generalSettings: generalSettings,
            socialMedia: socialMedia?.edges[0]?.node?.menuItems?.edges,
            serviceMenu: serviceMenu?.edges[0]?.node?.menuItems?.edges,
        }
    }
}

export async function getStaticPaths() {
    const allPosts = await categoryChildrenBySlug('rezepte-typen')
    console.log(allPosts)
    return {
        paths: allPosts.edges[0].node.children.edges.map(({ node }) => `/recipes/${node.slug}`) || [],
        fallback: true,
    }
}