"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { Pokemon } from '../Config/interface';
import fetchPokemons from '../Config/requeriment';
import Paginate from '../Paginate/Paginate';
import PokemonCard from '../Card/cardPokemon';
import PokemonModal from '../Modal/ModalPokemon';

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [searchName, setSearchName] = useState('');
  const [searchType, setSearchType] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  // const [sidebarOpen, setSidebarOpen] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemons();
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    };

    fetchData();
  }, []);

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  const filteredPokemons = useMemo(() => {
    return pokemons.filter((pokemon) => {
      const matchesName = pokemon.name.toLowerCase().includes(searchName.toLowerCase());
      const matchesType = searchType ? pokemon.types?.some(t => t.type.name.toLowerCase() === searchType.toLowerCase()) : true;
      return matchesName && matchesType;
    });
  }, [pokemons, searchName, searchType]);

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
<header
  className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 
    w-32 md:w-32 lg:w-32 
    transform  "translate-x-0" : "-translate-x-full"} 
    md:translate-x-0 transition-transform duration-300 ease-in-out`}
>
  <h2 className="text-xl font-bold mb-4">Filter</h2>
  {/* <button
  className="absolute top-4 left-4 md:hidden z-50 bg-blue-500 text-white p-2 rounded-lg"
  onClick={() => setSidebarOpen(!sidebarOpen)}
>
  {sidebarOpen ? "Cerrar" : "Abrir"}
</button> */}
  <div className="flex flex-col gap-2">
    <button
      onClick={() => handleTypeChange({ target: { value: "" } } as React.ChangeEvent<HTMLSelectElement>)}
      className={`w-full text-left px-4 py-2 rounded-lg ${
        searchType === "" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
      }`}
    >
      All
    </button>
    {uniqueTypes &&
      uniqueTypes
        ?.filter((type): type is string => !!type)
        .map((type: string, key) => (
          <button
            key={key}
            onClick={() => handleTypeChange({ target: { value: type } } as React.ChangeEvent<HTMLSelectElement>)}
            className={`w-full text-left px-4 py-2 rounded-lg ${
              searchType === type ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
  </div>
</header>
      <h1 className="flex justify-center text-center text-4xl m-4">List Pokémon</h1>

      <div className='flex justify-center items-center p-3 rounded-3xl my-3 bg-gray-400 w-full max-w-lg mx-auto'>


        <form>
          <label>
            Search:
            <input
              className='text-black text-center mx-2 rounded-md'
              type="text"
              value={searchName}
              onChange={handleNameChange}
              placeholder="Search for name"
            />
          </label>
          <label className='text-white mx-2'>
            Type:
            <select
              value={searchType}
              onChange={handleTypeChange}
              className="text-black mx-2"
            >
              <option className='rounded-xl' value="">All</option>
              {uniqueTypes && uniqueTypes
                ?.filter((type): type is string => !!type)
                .map((type: string, key) => (
                  <option key={key} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
            </select>
          </label>
          
        </form>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {currentPokemons.map((pokemon, key) => (
          <div key={key} onClick={() => handlePokemonClick(pokemon)}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
      {selectedPokemon && (
        <PokemonModal pokemon={selectedPokemon} onClose={handleCloseModal} />
      )}
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
