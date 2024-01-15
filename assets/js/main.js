
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToHtml(pokemon) {
    return`
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>

                </ol>

                <img class="imgPokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')
// pokemonList.innerHTML += '<li>Teste</li>'         // Concatenando mais um item fixo


    pokeApi.getPokemons().then((pokemons) => {       //convertendo essa lista de pokemons objetos em uma lista de 10 pokemons HTML

        // Fazer um for para percorrer a lista e passar todos os pokemons
      const listItens = []
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            listItens.push(convertPokemonToHtml(pokemon))
            
        }
        console.log(listItens)
    })
    .catch((error) => console.error(error))




   

 