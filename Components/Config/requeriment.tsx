
import { AxiosResponse } from 'axios';
import { Pokemon, PokemonApiResponse } from './interface';
import { InstanceApi } from './api';



const fetchPokemons = async (): Promise<Pokemon[]> => {
  try {
    const response: AxiosResponse<PokemonApiResponse> = await InstanceApi.get(
      "pokemon?limit=10000"
    );
    const pokemonList = response.data.results;

    // Realizar una petición adicional por cada Pokémon para obtener más datos
    const pokemonDetails = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const pokemonResponse = await InstanceApi.get(pokemon.url);
        return pokemonResponse.data; // Devuelve los datos detallados de cada Pokémon
      })
    );

    return pokemonDetails;
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    return []; // Devuelve un array vacío en caso de error
  }
};

  export default  fetchPokemons