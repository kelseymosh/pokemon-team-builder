import React from 'react'
import PokemonCard from "../components/PokemonCard"

export default function PokemonContainer(props) {
    const pokemon = props.pokemon.map(pokemon => {
        return <PokemonCard pokemon={pokemon} addToTeam={props.addToTeam}/>
    })
    
    return (
        <div className="pokemon-container">
            {pokemon}
        </div>
    )
}
