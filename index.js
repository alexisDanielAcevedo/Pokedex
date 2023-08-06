const URL = 'https://pokeapi.co/api/v2/pokemon/'

const buscarInput = document.getElementById('buscar');
const pokedexContenedor = document.getElementById('pokedex');



function saltarError(mensaje){
    pokedexContenedor.innerHTML = `<p>${mensaje}</p>`;
}


async function buscarPokemon(){

    const pokemonBuscado = buscarInput.value.toLocaleLowerCase();
    
    try {
        const response = await fetch(URL + pokemonBuscado);

        if(!response.ok){
            saltarError(`No se encontro ningún Pokemon llamado: ${pokemonBuscado}`);
            return;
        }

        const data = await response.json();
        
        console.log(data)

        
        pokedexContenedor.innerHTML = `
    
        <h2>${data.name.toUpperCase()}</h2>
        <img src='${data.sprites.front_default}'>
        <p>N° ${data.id}</p>
        
        <p class="tipo">${data.types[0].type.name}</p>
        

        <div><p>${data.stats[0].stat.name}</p>
        <p>${data.stats[0].base_stat}</p></div>

        <div><p>${data.stats[1].stat.name}</p>
        <p>${data.stats[1].base_stat}</p></div>

        <div><p>${data.stats[2].stat.name}</p>
        <p>${data.stats[2].base_stat}</p></div>

        <div><p>${data.stats[3].stat.name}</p>
        <p>${data.stats[3].base_stat}</p></div>

        <div><p>${data.stats[4].stat.name}</p>
        <p>${data.stats[4].base_stat}</p></div>

        <div><p>${data.stats[5].stat.name}</p>
        <p>${data.stats[5].base_stat}</p></div>

        `;
      
    } catch (error) {
        saltarError('Ingrese el numero o nombre de un Pokemon')
       
    }
}

document.getElementById('btnBuscar').addEventListener('click', buscarPokemon);
