import Image from "next/image";
import typeBackgrounds, { Pokemon, statColors } from "../Config/interface";
import './Modal.css'

const PokemonModal: React.FC<{ pokemon: Pokemon; onClose: () => void }> = ({ pokemon, onClose }) => {
    const dreamWorldImage = pokemon.sprites?.other?.dream_world?.front_default;
    const primaryType = pokemon.types?.[0]?.type.name || "unknown";
    const backgroundClass = typeBackgrounds[primaryType] || "bg-gray-200";
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className={`${backgroundClass}  p-8 rounded-lg max-w-lg w-full text-black`}>
                <button onClick={onClose} 
                className="  text-white font-bold text-2xl bg-black p-2 rounded-full">
                    X
                </button>
                <Image
                    src={dreamWorldImage || "/placeholder.png"}
                    alt={pokemon.name}
                    width={126}
                    height={126}
                    className="mb-2 items-center"
                    priority
                />
                <h2 className="text-2xl font-bold capitalize mb-4 text-center">{pokemon.name}</h2>
                <p className="text-sm capitalize text-center shadow-2xl">
                Type: {pokemon.types?.map((t) => t.type.name).join(", ")} </p>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold ">Abilities:   {pokemon.abilities?.map((t) => t.ability.name).join(", ")}</h3>
                    
                      
                    
                    <div className="mb-4">
                    <h3 className="text-xl font-semibold">Stat:</h3>
                    <ul>
                        {pokemon.stats?.map((stat, key) => (
                            <li key={key} className="mb-2">
                                <span className="text-lg capitalize">{stat.stat.name}: </span>
                                <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                                    <div
                                        className={`h-4 ${statColors[stat.stat.name] || "bg-gray-500"}`}
                                        style={{ width: `${Math.min((stat.base_stat / 100) * 100, 100)}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm">{stat.base_stat}/100</span>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonModal