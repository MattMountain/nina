import SocialMedia from "./socialMedia";
import Link from 'next/link'

export default function Footer (data)
{
    const socialMedia = data.data.social
    const serviceMenu = data.data.serviceMenu
    const general = data.data.general
    const currentYear = new Date().getFullYear()

    console.log(serviceMenu)

    return (
        <footer className='container footer'>
            <section className='footer-title'>
                <p className='footer-title-main'>{ general.generalSettingsTitle }</p>
                <p className='footer-title-description'>{ general.generalSettingsDescription }</p>
            </section>

            <SocialMedia data={ socialMedia }></SocialMedia>

            <section className='footer-copyright'>
                <p className='footer-copyright-year'>{ currentYear }</p>
                <p className='footer-copyright-title'>{ general.generalSettingsTitle }</p>
                <ul className='footer-copyright-menu'>
                    { Object.keys(serviceMenu).length > 0 ? (
                        Object.keys(serviceMenu).map( (key) =>
                        <li className='footer-copyright-menu-item'>
                            <Link href={ serviceMenu[key].node.path }>
                                <a>| { serviceMenu[key].node.label }</a>
                            </Link>
                        </li>)) : (<li></li>)}
                </ul>
            </section>
        </footer>
    )
}