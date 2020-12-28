export default function RecipeTypes (data) {
    const node = data.data.node
    console.log(node.children.edges.length)

    return (
        <section>
            <h2>{node.name}</h2>
        </section>
    )
}