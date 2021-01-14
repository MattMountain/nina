import Button from "./Button";
import Link from "next/link";

export default function BlogPost(data)
{
    const link = { link: `/recipes/recipe/${ data.data?.node?.slug }`, title: 'Rezept', type: 'page' }
    const post = data.data?.node?.foodPost
    const youtubeLink = (post.youtubeLink ? (post.youtubeLink) : '')
    const youtube = { link: youtubeLink, title: 'Zum Video', type: 'extern'}

    console.log(data)

    return (
        <div className='food-post'>
            <div className='food-post-image'>
                <img
                    className='food-post-image-item'
                    src={ post?.titleImage?.mediaItemUrl }
                    alt={ post?.titleImage?.altText }
                    title={ post?.titleImage?.title }
                />
            </div>
            <div className='food-post-content'>
                <h3 className='headline-small'>
                    { post?.title }
                    <em>{ post?.title }</em>
                </h3>
                <p className='food-post-content-text'>{ post?.vorspann }</p>
                <div className='food-post-content-links'>
                    <div className='button'>
                        <Link href={ link?.link }>
                            <a className='button-item'>{ link?.title}</a>
                        </Link>
                    </div>
                    <div className='button'>
                        <Link href={ youtube?.link }>
                            <a className='button-item'>{ youtube?.title}</a>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    )
}