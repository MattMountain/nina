const API_URL = 'https://alexmayr.matthiasriedl.com/graphql/';

export async function fetchAPI(query, { variables } = {}) {
    // Set up some headers to tell the fetch call
    // that this is an application/json type
    const headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
        'Content-Type': 'application/json'
    };

    // build out the fetch() call using the API_URL
    // environment variable pulled in at the start
    // Note the merging of the query and variables
    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables })
    });

    // error handling work
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        console.log('error details', query, variables);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}
