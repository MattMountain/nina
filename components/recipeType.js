import Link from "next/link";

export default function RecipeType (data)
{

    const element = data.data
    const link = `recipes/${ element.slug }`

    return (
        <Link
            href={ link }
        >
            <div className='item'>
                <img
                    className='item-thumbnail'
                    src={ element.thumbnail }
                    alt={ element.name }
                    title={ element.name }
                />
                <p className='item-headline'>{ element.name }</p>
                <p className='item-posts'>{ element.posts }Rezepte</p>
            </div>

        </Link>
    )
}