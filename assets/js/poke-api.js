
const pokeApi = {}

function convertPokeApiDatailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon


}

pokeApi.getPokemonDatail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDatailToPokemon) 
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())  //essa arraw function é a mesma coisa se tivesse usado o return
        .then((jsonBody) => jsonBody.results)    //results é minha lista de pokemons
        .then((pokemons) => pokemons.map((pokeApi.getPokemonDatail)))   
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemosDetails) => pokemosDetails)
        
}
