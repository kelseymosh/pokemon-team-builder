import React from 'react'

export default function PokemonCard(props) {
    return (
        <div>
            <img src={props.pokemon.sprites.front_default}/>
        </div>
    )
}
