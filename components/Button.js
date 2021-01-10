export default function Button (data)
{
    const link = data.data
    let button
    console.log(link)
    switch (link.type) {
        case 'page':
            button = <a className='button-item' href={ link.link }>{ link.title }</a>
            break
        case 'extern':
            button = <a className='button-item'
                        href={ link.link}
                        target='_blank'>{ link.title }</a>
            break
        default:
            break
    }

    return (
        <div className='button'>
            { button }
        </div>
    )
}