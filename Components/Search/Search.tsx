import React, { useState } from 'react';
import { Pokemon, SearchProps } from '../Config/interface';



const Search: React.FC<SearchProps> = ({ pokemons }) => {
  const [searchName, setSearchName] = useState('');
  const [searchType, setSearchType] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>(pokemons);

  // Maneja el cambio en el campo de texto de nombre
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchName(value);
    filterPokemons(value, searchType);
  };

  // Maneja el cambio en el selector de tipo
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSearchType(value);
    filterPokemons(searchName, value);
  };

  // Filtra los Pokémon según nombre y tipo
  const filterPokemons = (name: string, type: string) => {
    let filtered = pokemons;

    if (name) {
      filtered = filtered.filter(pokemon =>
        pokemon.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (type) {
      filtered = filtered.filter(pokemon =>
        pokemon.types?.some(pokemonType => pokemonType.type.name.toLowerCase().includes(type.toLowerCase()))
      );
    }

    setFilteredPokemons(filtered);
  };

  return (
    <div className="search-container">
      <h2>Search</h2>
      <form>
        <label>
          Nombre:
          <input
            type="text"
            value={searchName}
            onChange={handleNameChange}
            placeholder="Buscar por nombre"
          />
        </label>
        <label>
          Tipo:
          <select value={searchType} onChange={handleTypeChange}>
            <option value="">Todos</option>
            <option value="fire">Fuego</option>
            <option value="water">Agua</option>
            <option value="grass">Planta</option>
            <option value="electric">Eléctrico</option>
            <option value="psychic">Psíquico</option>
            <option value="bug">Bicho</option>
            <option value="normal">Normal</option>
            <option value="ghost">Fantasma</option>
            <option value="fairy">Hada</option>
            <option value="fighting">Lucha</option>
            {/* Agregar más tipos si es necesario */}
          </select>
        </label>
      </form>

      <div className="pokemon-list">
        <ul>
          {filteredPokemons.map(pokemon => (
            <li key={pokemon.name}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
