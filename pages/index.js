import Head from 'next/head'
import RecipeTypes from "../components/recipeTypes";
import Hero from "../components/hero";

import styles from '../styles/Home.module.css'

import { getCategories } from "../lib/categories";
import { getHero } from "../lib/hero";
import { getRecipeTypes } from "../functions/recipe";

export default function Home({ categories, hero, preview }) {
    console.log(hero)
    const recipeTypes = getRecipeTypes(categories)

  return (
    <div>
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Hero data={hero}></Hero>

          <RecipeTypes data={recipeTypes}></RecipeTypes>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export async function getStaticProps({ preview = false })
{
    const categories = await getCategories(preview);
    const hero = await getHero(preview)
    return {
        props: {
            categories: categories.edges,
            hero: hero.hero,
            preview },
    }
}

