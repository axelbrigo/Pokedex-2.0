async function getPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await response.json()
    return data
}

async function init() {
    const firstPokemon = await getPokemon(120)
    updatePokemon(pokemon)
}
init()

function updatePokemon(pokemon) {
    let primerPokemon = document.getElementById('pokemon')
    let pokemonImg = document.getElementById('image')
  
        primerPokemon.textContent = pokemon.name
    pokemonImg.setAttribute('src', pokemon.sprites.front_default)
   
  
}

let buscador = document.getElementById('search')

buscador.addEventListener('change', async () => {
    const pokemon = await getPokemon(buscador.value)
    updatePokemon(pokemon)

  
})




