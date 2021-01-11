import Headline from "./headline";
import VideoPost from "./videoPost";
import { reduceContent } from "./foodBlog";

export default function LastVideos(data)
{
    console.log(data.data)
    const headline = { title: data.data.title.edges[0].node.name,
        description: data.data.title.edges[0].node.description }

    const content = reduceContent(data.data.content.edges, 3)

    return (
        <section className='container last-videos'>
            <Headline data={ headline }></Headline>
            <article className='last-videos-content'>
                { Object.keys( content ).length > 0 ? (
                    Object.keys( content ).map( (key ) =>
                        <VideoPost data={ content[key] }></VideoPost>
                    ) ) : (<span>No Blog Post</span>)
                }
            </article>
        </section>
    )
}