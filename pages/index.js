import Head from 'next/head'
import RecipeTypes from "../components/recipeTypes";
import Hero from "../components/hero";
import AboutMe from "../components/aboutMe";

import styles from '../styles/Home.module.css'

import { getCategories } from "../lib/categories";
import { getHero } from "../lib/hero";
import { getRecipes } from "../functions/recipe";
import { filterThumbnails } from "../functions/thumbnails";

import { getAbout } from "../functions/about-me";

export default function Home({ categories, hero, about }) {
    console.log(about)

  return (
    <div>
      <Head>
        <title>Nina Müller - Food Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Hero data={hero}></Hero>

          <RecipeTypes data={categories} ></RecipeTypes>

          <AboutMe data={about}></AboutMe>
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

    const hero = await getHero(preview)

    return {
        props: {
            categories: { categories: categories, thumbnails: categoriesThumbnails },
            hero: hero.hero,
            about: aboutMe,
        },
    }
}

