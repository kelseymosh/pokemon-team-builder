import React from 'react'

export default function PokemonCard({pokemon, addToTeam}) {
    
    function handleClick(event) {
        if (addToTeam){
            addToTeam(pokemon)
        } else {
        }
    }

    function styleCircleColor() {
        if ( pokemon.types[0].type.name === "grass" ){
            return "lightgreen"
        } else {
        }
    }

    return (
        <div className="sprite-circle" style={ {background:`${styleCircleColor()}`} } >
            <img className="sprite" 
                src={pokemon.sprites.front_default} 
                alt="pokemon sprite"
                key={pokemon.id}
                onClick={ handleClick }
            />
        </div>
    
    )
}
