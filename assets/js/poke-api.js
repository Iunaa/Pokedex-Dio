
const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json())  //essa arraw function é a mesma coisa se tivesse usado o return
    .then((jsonBody) => jsonBody.results)    //results é minha lista de pokemons
    .catch((error) => console.error(error))
}