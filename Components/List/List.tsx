"use client"
import React, { useState, useEffect } from 'react';
import { InstanceApi } from '../../Components/Config/api'; // Importa la instancia de Axios
import { AxiosResponse } from 'axios';
import Link from 'next/link';

interface Pokemon {
    name: string;
    url: string;
  }
  
  interface PokemonApiResponse {
    results: Pokemon[];
  }

  const PokemonList: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
    useEffect(() => {
      const fetchPokemons = async () => {
        try {
          const response: AxiosResponse<PokemonApiResponse> = await InstanceApi.get('pokemon?limit=100000');
          setPokemons(response.data.results);
        } catch (error) {
          console.error('Error fetching pokemons:', error);
        }
      };
  
      fetchPokemons();
    }, []);
  
    return (
      <div>
        <h1>Lista de Pokémon</h1>
        <ul>
        {pokemons.map((pokemon) => (
      <Link href={pokemon.url} key={pokemon.name}>
      <li>
        {pokemon.name || 'No name available'} {/* Fallback for missing name */}
      </li>
    </Link>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PokemonList;