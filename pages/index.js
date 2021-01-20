import Head from 'next/head'
import RecipeTypes from "../components/recipeTypes";
import Hero from "../components/hero";
import AboutMe from "../components/aboutMe";
import FoodBlog from "../components/foodBlog";
import LastVideos from "../components/lastVideos"
import Footer from "../components/footer";

import styles from '../styles/Home.module.css'

import {getCategories, categoryByName, categoryBySlug} from "../lib/categories";
import { getHero } from "../lib/hero";
import {getPostBySlug, postsByName} from "../lib/posts";

import { filterThumbnails } from "../functions/thumbnails";
import { getMenu } from "../lib/menu";
import { getGeneral } from "../lib/general";
import Menu from "../components/menu";
import Favicon from "../components/favicon";

export default function Home({ categories, hero, about, foodBlog, lastVideo, socialMedia, serviceMenu, generalSettings, primaryMenu }) {

  return (
    <div>
      <Head>
        <title>{ generalSettings.generalSettingsTitle } - { generalSettings.generalSettingsDescription }</title>
        <Favicon />
      </Head>

      <header>
         <Menu data={ primaryMenu }></Menu>
      </header>

      <main>

          <Hero data={ { hero: hero, social: socialMedia } }></Hero>

          <RecipeTypes data={ categories } ></RecipeTypes>

          <AboutMe data={ about }></AboutMe>

          <FoodBlog data={ foodBlog }></FoodBlog>

          <LastVideos data={ lastVideo }></LastVideos>

      </main>

        <Footer data={ {social: socialMedia, serviceMenu: serviceMenu, general: generalSettings} }></Footer>

    </div>
  )
}

export async function getStaticProps({ preview = false })
{
    const dataCategories = await getCategories(preview)
    const categories = await categoryBySlug('rezepte-typen')
    const categoriesThumbnails = await filterThumbnails(categories?.edges[0])

    const aboutMe = await getPostBySlug('uber-mich')

    const foodBlog = await postsByName('Food Blog')
    const foodBlogTitle = await categoryByName('Food Blog')

    const lastVideo = await postsByName('Last Videos')
    const lastVideoTitle = await categoryByName('Last Videos')

    const hero = await getHero(preview)

    const socialMedia = await getMenu('soical-media')

    const serviceMenu = await getMenu('service-menu')

    const generalSettings = await getGeneral()

    const primaryMenu = await getMenu('hauptmenu')

    return {
        props: {
            categories: { categories: categories, thumbnails: categoriesThumbnails },
            hero: hero.hero,
            about: aboutMe,
            foodBlog: { content: foodBlog, title: foodBlogTitle },
            lastVideo: { content: lastVideo, title: lastVideoTitle},
            socialMedia: socialMedia?.edges[0]?.node?.menuItems?.edges,
            serviceMenu: serviceMenu?.edges[0]?.node?.menuItems?.edges,
            generalSettings: generalSettings,
            primaryMenu: primaryMenu?.edges[0]?.node?.menuItems?.edges,
        },
    }
}

