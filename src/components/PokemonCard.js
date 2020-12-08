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
            return "#A7DB8D"
        }
        if ( pokemon.types[0].type.name === "bug" ){
            return "rgb(193,205,50)"
        }
        if ( pokemon.types[0].type.name === "dark" ){
            return "#69808b"
        }
        if ( pokemon.types[0].type.name === "dragon" ){
            return "#6f83d7"
        }
        if ( pokemon.types[0].type.name === "electric" ){
            return "#fadf7a"
        }
        if ( pokemon.types[0].type.name === "fairy" ){
            return "#f3ded7"
        }
        if ( pokemon.types[0].type.name === "fighting" ){
            return "#ce8e89"
        }
        if ( pokemon.types[0].type.name === "fire" ){
            return "#F5AC78"
        }
        if ( pokemon.types[0].type.name === "flying" ){
            return "#d0ecfd"
        }
        if ( pokemon.types[0].type.name === "ghost" ){
            return "#c1c0da"
        } 
        if ( pokemon.types[0].type.name === "ground" ){
            return "#e7cd88"
        } 
        if ( pokemon.types[0].type.name === "ice" ){
            return "#b0e0e6"
        } 
        if ( pokemon.types[0].type.name === "normal" ){
            return "#dadac6"
        } 
        if ( pokemon.types[0].type.name === "poison" ){
            return "#d3a4c9"
        } 
        if ( pokemon.types[0].type.name === "psychic" ){
            return "#ffb7cb"
        } 
        if ( pokemon.types[0].type.name === "rock" ){
            return "#A28D5B"
        } 
        if ( pokemon.types[0].type.name === "steel" ){
            return "#d2d1d6"
        } 
        if ( pokemon.types[0].type.name === "water" ){
            return "#9DB7F5"
        } else {
        }
    }

    return (
        <span className="sprite-circle" style={ {background:`${styleCircleColor()}`} } >
            <img className="sprite" 
                src={pokemon.sprites.front_default} 
                alt="pokemon sprite"
                key={pokemon.id}
                onClick={ handleClick }
            />
        </span>
    
    )
}
