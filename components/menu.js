import Link from "next/link";
export default function Menu ( data )
{
    const menu = data.data
    console.log( menu )
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

        </nav>
    )
}