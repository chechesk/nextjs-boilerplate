"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Pokemon } from '../Config/interface';
import fetchPokemons from '../Config/requeriment';
import Paginate from '../Paginate/Paginate';
import PokemonCard from '../Card/cardPokemon';

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 21; // Elementos por página

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemons(); // Fetch los datos
      setPokemons(data); // Actualiza el estado con los datos detallados
    };

    fetchData();
  }, []);

  // Cálculo para paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPokemons = pokemons.slice(startIndex, endIndex);
  const totalPages = Math.ceil(pokemons.length / itemsPerPage);

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

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <div className="grid grid-cols-3 gap-3">
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