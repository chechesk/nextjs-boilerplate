export interface Pokemon {
    name: string;
    url: string;
    sprites?: {
        front_default: string;
      };
  }
  
  export interface PokemonApiResponse {
    results: Pokemon[];
  }
  

  export interface PaginateProps {
    currentPage: number;
    totalPages: number;
    handlePreviousPage: () => void;
    handleNextPage: () => void;
  }