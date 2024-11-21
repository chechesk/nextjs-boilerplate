"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { Pokemon } from '../Config/interface';
import fetchPokemons from '../Config/requeriment';
import Paginate from '../Paginate/Paginate';
import PokemonCard from '../Card/cardPokemon';

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 20; // Elementos por página
  const [searchName, setSearchName] = useState('');
  const [searchType, setSearchType] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemons(); // Fetch los datos
      setPokemons(data); // Actualiza el estado con los datos detallados
    };

    fetchData();
  }, []);

  // Filtrar los Pokémon según nombre y tipo usando useMemo para optimización
  const filteredPokemons = useMemo(() => {
    return pokemons.filter((pokemon) => {
      const matchesName = pokemon.name.toLowerCase().includes(searchName.toLowerCase());
      const matchesType = searchType ? pokemon.types?.some(t => t.type.name.toLowerCase() === searchType.toLowerCase()) : true;
      return matchesName && matchesType;
    });
  }, [pokemons, searchName, searchType]);

  // Cálculo para paginación basado en los Pokémon filtrados
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPokemons = filteredPokemons.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchName(value);
  };

  const uniqueTypes = Array.from(
    new Set(
      pokemons.flatMap(pokemon =>
        pokemon.types?.map(type => type.type.name)
      )
    )
  );

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  return (
    <div>
      <h1 className="flex justify-center text-center text-4xl m-4">Lista de Pokémon</h1>
      
      <div className='flex justify-center items-center p-3 rounded-3xl my-2 bg-gray-400 w-full max-w-lg mx-auto'>
        
    
      <form>
        <label>
        Buscar:
          <input
            className='text-black mx-2'
            type="text"
            value={searchName}
            onChange={handleNameChange}
            placeholder="Buscar por nombre"
          />
        </label>
        <label className='text-white mx-2'>
          Tipo: 
          <select
            value={searchType}
            onChange={handleTypeChange}
            className="text-black mx-2"
          >
            <option value="">Todos</option>
            {uniqueTypes && uniqueTypes.map((type:any, key) => (
              <option key={key} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)} {/* Capitaliza el tipo */}
              </option>
            ))}
          </select>
        </label>
      </form>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {currentPokemons.map((pokemon, key) => (
          <PokemonCard key={key} pokemon={pokemon} />
        ))}
      </div>
      <Paginate
        currentPage={currentPage}
        totalPages={totalPages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
};

export default PokemonList;
