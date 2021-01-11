import Button from "./Button";

export default function VideoPost ( data )
{
    const content = data.data.node.lastVideos
    const image = data.data.node.featuredImage.node
    const youtube = { link: content.link, title: 'Zum Video', type: 'extern' }

    return (
        <div className='video-post'>
            <div className='video-post-img'>
                <img
                    className='video-post-img-item'
                    src={ image.mediaItemUrl }
                    alt={ image.altText }
                    title={ image.title }
                />
            </div>
            <div className='video-post-content'>
                <h3 className='video-post-content-headline'>{ content.name }</h3>
                <p className='video-post-content-text'>{ content.description }</p>
                <Button data={ youtube }></Button>
            </div>

        </div>
    )
}