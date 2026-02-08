import { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";

const Poke = () => {
    const [pokemonData, setPokemonData] = useState([]);
    

    const BASE_URL="https://pokeapi.co/api/v2/pokemon/";

    const fetchPokemons = async (id) => {
        try{
            const response = await fetch(`${BASE_URL}${id}`);
            const data = await response.json();
            setPokemonData((prev) => [...prev, data]);
        }catch(error){
            console.error(`Error en el fetch del pokemon: ${id}-${error}`)
        }
    }

    useEffect(() => {
        for(let i=1;i<21;i++){
            fetchPokemons(i);
        }
        
    }, []);

    if(!pokemonData){
        return (<h1>Cargando pokemon...</h1>)
    }

    return (
        <>
            { pokemonData.map((pokemon, id) => (
                <PokeCard key={id} pokemon={pokemon} />
            ))}
            
        </>
    )

}

export default Poke;