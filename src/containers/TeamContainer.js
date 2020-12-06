import React from 'react'
import TeamPokemonCard from '../components/TeamPokemonCard'

export default function TeamContainer(props) {
    
    const pokemon = props.team.map(pokemon => {
        return(
            <TeamPokemonCard className="team-pokemon" pokemon={pokemon} key={pokemon.id} removeFromTeam={props.removeFromTeam} />
        )
    })
    return (
        <div className="pokemon-team-container">
            { pokemon }
        </div>
    )
}
