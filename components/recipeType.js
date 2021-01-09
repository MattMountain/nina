export default function RecipeType (data)
{

    const element = data.data

    return (
        <div className='item'>
            <img
                className='item-thumbnail'
                src={ element.thumbnail }
                alt={ element.name }
                title={ element.name }
            />
            <p className='item-headline'>{ element.name }</p>
            <p className='item-posts'>{ element.posts } Rezepte</p>
        </div>
    )
}