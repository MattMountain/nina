import Link from "next/link";
import { Sling as Hamburger } from 'hamburger-react'

export default function Menu ( data )
{
    const menu = data?.data

    return (
        <nav className='nav container'>
            <ul className='nav-content'>
                { menu ?
                    Object.keys( menu ).map( ( key ) =>
                        <li key={ key } className='nav-content-item'>
                            <Link href={ menu[key]?.node?.url }>
                                <a className='nav-content-item-link'>{ menu[key]?.node?.label }</a>
                            </Link>
                        </li>

                    ) : ( <span>No Menu</span> )
                }
            </ul>
            <Hamburger
                onToggle={ toggleBurger }
            ></Hamburger>
        </nav>
    )
}

function toggleBurger() {

    document.querySelector('.nav-content').classList.toggle('open')
    document.querySelector('body').classList.toggle('scroll-disable')
}