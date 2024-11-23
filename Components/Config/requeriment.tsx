
import { AxiosResponse } from 'axios';
import { Pokemon, PokemonApiResponse } from './interface';
import { InstanceApi } from './api';



const fetchPokemons = async (): Promise<Pokemon[]> => {
  try {
    const response: AxiosResponse<PokemonApiResponse> = await InstanceApi.get(
      "pokemon?limit=500"
    );
    const pokemonList = response.data.results;

    const pokemonDetails = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const pokemonResponse = await InstanceApi.get(pokemon.url);
        return pokemonResponse.data;
      })
    );

    return pokemonDetails;
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    return []; 
  }
};

  export default  fetchPokemons