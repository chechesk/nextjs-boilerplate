import Image from "next/image";
import typeBackgrounds, { Pokemon } from "../Config/interface";
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
                    width={226}
                    height={226}
                    className="mb-2 items-center"
                />
                <h2 className="text-2xl font-bold capitalize mb-4 text-center">{pokemon.name}</h2>
                <p className="text-sm capitalize text-center shadow-2xl">
                Tipo: {pokemon.types?.map((t) => t.type.name).join(", ")} </p>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold ">Habilidades:</h3>
                    <ul>
                        {pokemon.abilities?.map((value:any, key:any) => (
                            <li key={key} className="text-lg">{value.ability.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonModal