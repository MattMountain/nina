import Headline from "./headline";
import BlogPost from "./BlogPost";

export default function FoodBlog (data)
{
    const headline = { title: data.data.title.edges[0].node.name,
                       description: data.data.title.edges[0].node.description }

    const content = reduceContent( data.data.content.edges, 2)
    const contentLength = data.data.content.edges.length

    return (
        <section className='container food-blog'>
            <Headline data={ headline }></Headline>
            <article className='food-blog-content'>
                { Object.keys( content ).length > 0 ? (
                    Object.keys( content ).map( (key)  =>
                        <BlogPost key={ key } data={ content[key] }></BlogPost>
                ) ) : (<span>No Blog Post</span>) }
            </article>
        </section>
    )
}

export function reduceContent (content, level)
{
    while (content.length > level)
    {
        content.pop()
    }
    return content
}