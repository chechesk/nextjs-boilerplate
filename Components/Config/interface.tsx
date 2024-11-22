export interface Pokemon {
    name: string;
    url: string;
    stats?: {
      base_stat: number;
      stat:{
        name: string;
      }
    }[]
    sprites?: {
        front_default: string;
        other?: {
            dream_world?:{
                front_default :string;
        }
      };
    }
    types?: {
        type: {
          name: string;
        };
      }[];
    abilities?: {
        ability: {
          name: string;
        };
      }[];
  }

  export interface PokemonApiResponse {
    results: Pokemon[];
  }
  
  export const statColors: { [key: string]: string } = {
    hp: "bg-red-500",
    attack: "bg-orange-300",
    defense: "bg-yellow-500",
    "special-attack": "bg-blue-500",
    "special-defense": "bg-teal-500",
    speed: "bg-purple-500",
  };

  export interface PaginateProps {
    currentPage: number;
    totalPages: number;
    handlePreviousPage: () => void;
    handleNextPage: () => void;
  }

  export interface PokemonCardProps {
    pokemon: Pokemon;
  }

  export interface SearchProps {
    pokemons: Pokemon[]; // Define el tipo de la propiedad 'pokemons' como un arreglo de 'Pokemon'
  }

  