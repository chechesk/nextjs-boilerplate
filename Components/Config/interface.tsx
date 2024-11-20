export interface Pokemon {
    name: string;
    url: string;
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