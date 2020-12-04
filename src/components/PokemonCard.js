import React from 'react'

export default function PokemonCard({pokemon, addToTeam}) {
    
    // const styleCircle = () => {
    //     if (pokemon.types.type === "grass"){
    //         background:"lightgreen"
    //     }
    // }
    function handleClick(event) {
        addToTeam(pokemon)
    }

    return (
        <div className="circle">
            <img className="sprite" 
                src={pokemon.sprites.front_default} 
                alt="pokemon sprite"
                key={pokemon.id}
                onClick={ handleClick }
            />
        </div>
    )
}
