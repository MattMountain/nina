import Head from "next/head";
import Footer from "../components/footer";
import AboutMe from "../components/aboutMe";
import {getMenu} from "../lib/menu";
import {getGeneral} from "../lib/general";
import Menu from "../components/menu";
import {getPostBySlug} from "../lib/posts";
import Favicon from "../components/favicon";

export default function About({ about, generalSettings, socialMedia, serviceMenu, primaryMenu })
{

    return (
        <>
            <Head>
                <title>{ generalSettings?.generalSettingsTitle } - About</title>
                <Favicon />
            </Head>

            <header className='header'>
                <Menu data={ primaryMenu }></Menu>
            </header>

            <main className='container'>
                <AboutMe data={ about }></AboutMe>
            </main>

            <Footer data={ {social: socialMedia, serviceMenu: serviceMenu, general: generalSettings} }></Footer>
        </>
    )
}

export async function getStaticProps({ previewg = false })
{
    const aboutMe = await await getPostBySlug('uber-mich')

    const socialMedia = await getMenu('soical-media')

    const serviceMenu = await getMenu('service-menu')

    const generalSettings = await getGeneral()

    const primaryMenu = await getMenu('hauptmenu')

    return {
        props: {
            about: aboutMe,
            generalSettings: generalSettings,
            socialMedia: socialMedia?.edges[0]?.node?.menuItems?.edges,
            serviceMenu: serviceMenu?.edges[0]?.node?.menuItems?.edges,
            primaryMenu: primaryMenu?.edges[0]?.node?.menuItems?.edges,
        }
    }
}

