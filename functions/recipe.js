export function getRecipeTypes(data)
{
    const idx = data.findIndex( (node) => node.node.id === 'dGVybToy');
    return data[idx];
}