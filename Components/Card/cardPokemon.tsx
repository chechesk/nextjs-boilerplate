"use client";
import React from "react";
import Image from "next/image";
import { PokemonCardProps } from "../Config/interface";
import typeBackgrounds from "../Config/interface";



const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  // Obtén el nombre del tipo principal del Pokémon
  const primaryType = pokemon.types?.[0]?.type.name || "unknown";

  // Selecciona el fondo según el tipo
  const backgroundClass = typeBackgrounds[primaryType] || "bg-gray-200";

  return (
    <div
  className={`w-[200px] h-[280px] sm:w-[250px] sm:h-[300px] md:w-[300px] md:h-[350px] flex flex-col items-center justify-center rounded-lg shadow-lg text-white p-4 ${backgroundClass} transition-all duration-500 transform hover:scale-105`}
>
  <Image
    src={pokemon.sprites?.front_default || "/placeholder.png"}
    alt={pokemon.name}
    width={226}
    height={226}
    className="mb-2"
    priority
  />
  <h2 className="text-lg font-bold capitalize text-center">{pokemon.name}</h2>
  <p className="text-sm capitalize text-center shadow-2xl">
    Tipo: {pokemon.types?.map((t) => t.type.name).join(", ")}
  </p>
</div>
  );
};

export default PokemonCard;
