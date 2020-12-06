import React from 'react'

export default function TeamPokemonCard({pokemon, removeFromTeam}) {
    
    function handleClick(event) {
        removeFromTeam(pokemon)
    }

    function styleCircleColor() {
        if ( pokemon.types[0].type.name === "grass" ){
            return "#8da780"
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
            return "#ffdc76"
        }
        if ( pokemon.types[0].type.name === "fairy" ){
            return "#f3ded7"
        }
        if ( pokemon.types[0].type.name === "fighting" ){
            return "#e2dbcb"
        }
        if ( pokemon.types[0].type.name === "fire" ){
            return "#ce5b0e"
        }
        if ( pokemon.types[0].type.name === "flying" ){
            return "#c4d4e3"
        }
        if ( pokemon.types[0].type.name === "ghost" ){
            return "#c1c0da"
        } 
        if ( pokemon.types[0].type.name === "ground" ){
            return "#caab8f"
        } 
        if ( pokemon.types[0].type.name === "ice" ){
            return "#c4dce3"
        } 
        if ( pokemon.types[0].type.name === "normal" ){
            return "#f8f9fc"
        } 
        if ( pokemon.types[0].type.name === "poison" ){
            return "#d3a4c9"
        } 
        if ( pokemon.types[0].type.name === "psychic" ){
            return "#fae6fa"
        } 
        if ( pokemon.types[0].type.name === "rock" ){
            return "#A28D5B"
        } 
        if ( pokemon.types[0].type.name === "steel" ){
            return "#d2d1d6"
        } 
        if ( pokemon.types[0].type.name === "water" ){
            return "#9cd3db"
        } else {
        }
    }

    return (
        <div className="team-pokemon-card">
            <div className="team-circle" style={ {background:`${styleCircleColor()}`} }>
                <img className="pokemon-team-art" 
                    src={pokemon.sprites.other.dream_world.front_default} 
                    alt="pokemon sprite"
                    key={pokemon.id}
                    onClick={ handleClick }
                />
            </div>
                <div className="name-and-type" style={ {background:`${styleCircleColor()}`} }>
                    {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                    <img />
                </div>
        </div>
    )
}