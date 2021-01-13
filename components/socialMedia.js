import Image from "next/image";

export default function SocialMedia(data)
{
    const social = data.data
    let fileUrls = []

    social.forEach(item => fileUrls.push(`/svg/${ item.node.label.toLowerCase() }.svg` ))

    return (
        <section className='social-media'>
            { Object.keys(social).length > 0 ? (
                Object.keys(social).map( (key) =>
                    <a href={ social[key].node.url } target="_blank" className='social-media-link'>
                        <Image src={ fileUrls[key] } alt={ social[key].node.label } width="30" height="30" />
                    </a>) )
                : (<span></span>)
            }

        </section>

    )
}