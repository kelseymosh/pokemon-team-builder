import React from 'react'

export default function PokemonCard({pokemon, addToTeam}) {
    
    function handleClick(event) {
        if (addToTeam){
            addToTeam(pokemon)
        } else {
        }
    }

    return (
        <div className="sprite-circle">
            <img className="sprite" 
                src={pokemon.sprites.front_default} 
                alt="pokemon sprite"
                key={pokemon.id}
                onClick={ handleClick }
            />
        </div>
    
    )
}
