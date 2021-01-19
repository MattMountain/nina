import RecipeType from "./recipeType";
import { addThumbnails } from "../lib/thumbnails";
import Headline from "./headline";

export default function RecipeTypes (data) {

    let children = data?.data?.categories?.node?.children?.edges
    children = addThumbnails(children, data?.data?.thumbnails)
    const headline = { title: data?.data?.categories?.node?.name, description: data?.data?.categories?.node?.description }

    return (
        <section className="container recipe-types">
            <Headline data={ headline }></Headline>
            <article className="recipe-types-more">
                { Object.keys(children).length > 0 ? (
                    Object.keys(children).map((key) =>
                        <RecipeType key={ key } data={ children[key] }></RecipeType>
                    )
                ) : (<span>No Categorie </span>) }
            </article>
        </section>
    )
}