export default function Headline (data)
{
    return (
        <article className='headline'>
            <h2 className='headline-title'>
                { data.data.title }
                <em>{ data.data.title }</em>
            </h2>
            <p className='headline-description'>{ data.data.description }</p>
        </article>
    )
}