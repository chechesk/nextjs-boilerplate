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

  const typeBackgrounds: Record<string, string> = {
    normal: "bg-gray-300",
    fighting: "bg-red-600",
    flying: "bg-blue-300",
    poison: "bg-purple-200",
    ground: "bg-yellow-700",
    rock: "bg-gray-700",
    bug: "bg-green-500",
    ghost: "bg-indigo-800",
    steel: "bg-gray-400",
    fire: "bg-orange-500",
    water: "bg-blue-500",
    grass: "bg-green-600",
    electric: "bg-yellow-400",
    psychic: "bg-pink-500",
    ice: "bg-blue-200",
    dragon: "bg-purple-700",
    dark: "bg-gray-500",
    fairy: "bg-pink-300",
    stellar: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    unknown: "bg-gray-200",
  };

  export default typeBackgrounds