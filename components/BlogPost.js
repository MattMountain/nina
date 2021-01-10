import Button from "./Button";

export default function BlogPost(data)
{
    const link = { link: data.data.node.link, title: 'Rezept', type: 'page' }
    const post = data.data.node.foodPost
    const youtube = { link: post.youtubeLink, title: 'Zum Video', type: 'extern'}


    return (
        <div className='food-post'>
            <div className='food-post-image'>
                <img
                    className='food-post-image-item'
                    src={ post.titleImage.mediaItemUrl }
                    alt={ post.titleImage.altText }
                    title={ post.titleImage.title }
                />
            </div>
            <div className='food-post-content'>
                <h3 className='headline-small'>
                    { post.title }
                    <em>{ post.title }</em>
                </h3>
                <p className='food-post-content-text'>{ post.vorspann }</p>
                <div className='food-post-content-links'>
                    <Button data={ link }></Button>
                    <Button data={ youtube }></Button>
                </div>
            </div>
        </div>

    )
}