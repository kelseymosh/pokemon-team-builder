import React from 'react'
import PokemonCard from '../components/PokemonCard'

export default function TeamContainer(props) {
    
    const pokemon = props.team.map(pokemon => {
        return(
            <PokemonCard pokemon={pokemon} />
        )
    })
    return (
        <div className="pokemon-team">
            Your Pokemon Team
            { pokemon }
        </div>
    )
}
