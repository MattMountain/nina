export function getRecipes(data)
{
    console.log(data)
    const idx = data.findIndex( (node) => node.node.id === 'dGVybToy' );
    return data[idx];
    // return data;
}