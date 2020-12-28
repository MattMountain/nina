export default function Hero (data)
{
    const element = data.data;
    const image = data.data.heroImage;

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
        </section>
    )
}