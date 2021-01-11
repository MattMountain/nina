import Head from 'next/head'
import RecipeTypes from "../components/recipeTypes";
import Hero from "../components/hero";
import AboutMe from "../components/aboutMe";
import FoodBlog from "../components/foodBlog";
import LastVideos from "../components/lastVideos"

import styles from '../styles/Home.module.css'

import { getCategories, categoryByName } from "../lib/categories";
import { getHero } from "../lib/hero";
import { postsByName } from "../lib/posts";

import { getRecipes } from "../functions/recipe";
import { filterThumbnails } from "../functions/thumbnails";
import { getAbout } from "../functions/about-me";

export default function Home({ categories, hero, about, foodBlog, lastVideo }) {
    console.log( lastVideo )

  return (
    <div>
      <Head>
        <title>Nina Müller - Food Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Hero data={ hero }></Hero>

          <RecipeTypes data={ categories } ></RecipeTypes>

          <AboutMe data={ about }></AboutMe>

          <FoodBlog data={ foodBlog }></FoodBlog>

          <LastVideos data={ lastVideo }></LastVideos>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export async function getStaticProps({ preview = false })
{
    const dataCategories = await getCategories(preview)
    const categories = getRecipes(dataCategories.edges)
    const categoriesThumbnails = await filterThumbnails(categories)

    const aboutMe = await getAbout()

    const foodBlog = await postsByName('Food Blog')
    const foodBlogTitle = await categoryByName('Food Blog')

    const lastVideo = await postsByName('Last Videos')
    const lastVideoTitle = await categoryByName('Last Videos')

    const hero = await getHero(preview)

    return {
        props: {
            categories: { categories: categories, thumbnails: categoriesThumbnails },
            hero: hero.hero,
            about: aboutMe,
            foodBlog: { content: foodBlog, title: foodBlogTitle },
            lastVideo: { content: lastVideo, title: lastVideoTitle}
        },
    }
}

