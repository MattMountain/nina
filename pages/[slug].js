import Head from 'next/head'
import { getAllPagesWithSlug, getPageByURI } from "../lib/page";
import { getGeneral } from "../lib/general";
import Headline from "../components/headline";
import {getMenu} from "../lib/menu";
import Footer from "../components/footer";
import Menu from "../components/menu";
import Favicon from "../components/favicon";

export default function Page ({ content, generalSettings, socialMedia, serviceMenu, primaryMenu })
{

    const headline = { title: content?.title, description: '' }

    return (
        <>
            <Head>
                <title>{ generalSettings?.generalSettingsTitle } - { content?.title }</title>
                <Favicon />
            </Head>

            <header className='header'>
                <Menu data={ primaryMenu }></Menu>
            </header>

            <main className='container page'>
                <Headline data={ headline }></Headline>
                <section className='page-content'>
                    <p>{ content?.content }</p>
                </section>
            </main>

            <Footer data={ {social: socialMedia, serviceMenu: serviceMenu, general: generalSettings} }></Footer>
        </>
    )
}

export async function getStaticProps({ params, preview = false, previewData })
{
    const content = await getPageByURI( params?.slug )

    const generalSettings = await getGeneral()

    const socialMedia = await getMenu('soical-media')

    const serviceMenu = await getMenu('service-menu')

    const primaryMenu = await getMenu('hauptmenu')

    return {
        props: {
            content: content,
            generalSettings: generalSettings,
            socialMedia: socialMedia?.edges[0]?.node?.menuItems?.edges,
            serviceMenu: serviceMenu?.edges[0]?.node?.menuItems?.edges,
            primaryMenu: primaryMenu?.edges[0]?.node?.menuItems?.edges,
        }
    }
}

export async function getStaticPaths() {
    const allPages = await getAllPagesWithSlug()

    return {
        paths: allPages?.edges?.map(({ node }) => `/${node?.slug}`) || [],
        fallback: true,
    }
}