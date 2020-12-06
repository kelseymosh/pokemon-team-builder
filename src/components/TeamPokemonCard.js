import React from 'react'

export default function TeamPokemonCard({pokemon, removeFromTeam}) {
    
    function handleClick(event) {
        removeFromTeam(pokemon)
    }

    return (
        <div className="team-pokemon-card">
            <div className="team-circle">
                <img className="pokemon-team-art" 
                    src={pokemon.sprites.other.dream_world.front_default} 
                    alt="pokemon sprite"
                    key={pokemon.id}
                    onClick={ handleClick }
                />
            </div>
                <div className="name-and-type">
                    {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                    {/* {pokemon.types[0].type.name} */}
                </div>
        </div>
    )
}
