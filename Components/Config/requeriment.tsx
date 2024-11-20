
import { AxiosResponse } from 'axios';
import { Pokemon, PokemonApiResponse } from './interface';
import { InstanceApi } from './api';



const fetchPokemons = async (): Promise<Pokemon[]> => {
  try {
    const response: AxiosResponse<PokemonApiResponse> = await InstanceApi.get(
      "pokemon?limit=100000"
    );
    return response.data.results; // Devuelve los resultados
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    return []; // Devuelve un array vacío en caso de error
  }
};

  export default  fetchPokemons