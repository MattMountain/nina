import Headline from "./headline";

export default function AboutMe(data)
{
    const description = data?.data?.categories?.edges[0]?.node?.description
    const headline = { title: data?.data?.title, description: description }
    const aboutMe = data?.data?.aboutMe

    return (
        <section className='container about-me'>
            <Headline data={ headline }></Headline>
            <article className='about-me-content'>
                <div className='about-me-content-img'>
                    <img
                        className='about-me-content-img-item'
                        src={ aboutMe?.image?.mediaItemUrl }
                        alt={ aboutMe?.image?.altText }
                        title={ aboutMe?.image?.title }
                    />
                </div>
                <div className='about-me-content-text'>
                    <p>{aboutMe?.about}</p>
                </div>
            </article>
        </section>
    )
}