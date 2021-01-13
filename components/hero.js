import SocialMedia from "./socialMedia";

export default function Hero (data)
{
    const socialMedia = data.data.social
    const element = data.data.hero;
    const image = data.data.hero.heroImage;

    return (
        <section className="hero">
            <article className="hero-text">
                <h1 className="hero-text-headline">{element.heroText}</h1>
                <p className="hero-text-subheadline">{element.heroSubheadline}</p>
            </article>
            <img
                className="hero-image"
                src={image.mediaItemUrl}
                alt={image.altText}
            />
            <SocialMedia data={ socialMedia }></SocialMedia>
        </section>
    )
}