import {getAbout} from "../functions/about-me";
import Head from "next/head";
import Footer from "../components/footer";
import AboutMe from "../components/aboutMe";
import {getMenu} from "../lib/menu";
import {getGeneral} from "../lib/general";

export default function About({ about, generalSettings, socialMedia, serviceMenu })
{
    console.log(about)
    return (
        <>
            <Head>
                <title>{ generalSettings?.generalSettingsTitle } - About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='container'>
                <AboutMe data={ about }></AboutMe>
            </main>
            <Footer data={ {social: socialMedia, serviceMenu: serviceMenu, general: generalSettings} }></Footer>
        </>
    )
}

export async function getStaticProps({ params, preview = false, previewData })
{
    const aboutMe = await getAbout()

    const socialMedia = await getMenu('soical-media')

    const serviceMenu = await getMenu('service-menu')

    const generalSettings = await getGeneral()

    return {
        props: {
            about: aboutMe,
            generalSettings: generalSettings,
            socialMedia: socialMedia?.edges[0]?.node?.menuItems?.edges,
            serviceMenu: serviceMenu?.edges[0]?.node?.menuItems?.edges,
        }
    }
}

