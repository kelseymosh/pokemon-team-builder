import React from 'react'

export default function TeamPokemonCard({pokemon, removeFromTeam}) {
    const grassImage = <img className="type-image" alt="grass type" src="assets/grass.png" />
    const bugImage = <img className="type-image" alt="bug type" src="assets/bug.png" />
    const darkImage = <img className="type-image" alt="dark type" src="assets/dark.png" />
    const dragonImage = <img className="type-image" alt="dragon type" src="assets/dragon.png" />
    const electricImage = <img className="type-image" alt="electric type" src="assets/electric.png" />
    const fairyImage = <img className="type-image" alt="fairy type" src="assets/fairy.png" />
    const fightingImage = <img className="type-image" alt="fighting type" src="assets/fighting.png" />
    const fireImage = <img className="type-image" alt="fire type" src="assets/fire.png" />
    const flyingImage = <img className="type-image" alt="flying type" src="assets/flying.png" />
    const ghostImage = <img className="type-image" alt="ghost type" src="assets/ghost.png"/>
    const groundImage = <img className="type-image" alt="ground type" src="assets/ground.png" />
    const iceImage = <img className="type-image" alt="ice type" src="assets/ice.png" />
    const normalImage = <img className="type-image" alt="normal type" src="assets/normal.png" />
    const poisonImage = <img className="type-image" alt="poison type" src="assets/poison.png" />
    const psychicImage = <img className="type-image" alt="psychic type" src="assets/psychic.png" />
    const rockImage = <img className="type-image" alt="rock type" src="assets/rock.png"/>
    const steelImage = <img className="type-image" alt="steel type" src="assets/steel.png" />
    const waterImage = <img className="type-image" alt="water type" src="assets/water.png" />
    
    function handleClick(event) {
        removeFromTeam(pokemon)
    }

    function styleCircleColor() {
        if ( pokemon.types[0].type.name === "grass" ){
            return "#a8e4a0"
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
            return "#f4a166"
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
            return "#aa9667"
        } 
        if ( pokemon.types[0].type.name === "steel" ){
            return "#d2d1d6"
        } 
        if ( pokemon.types[0].type.name === "water" ){
            return "#9db0f5"
        } else {
        }
    }

    function typeImage() {
        if ( pokemon.types[0].type.name === "grass" ){
            return grassImage
        }
        if ( pokemon.types[0].type.name === "bug" ){
            return bugImage
        }
        if ( pokemon.types[0].type.name === "dark" ){
            return darkImage
        }
        if ( pokemon.types[0].type.name === "dragon" ){
            return dragonImage
        }
        if ( pokemon.types[0].type.name === "electric" ){
            return electricImage
        }
        if ( pokemon.types[0].type.name === "fairy" ){
            return fairyImage
        }
        if ( pokemon.types[0].type.name === "fighting" ){
            return fightingImage
        }
        if ( pokemon.types[0].type.name === "fire" ){
            return fireImage
        }
        if ( pokemon.types[0].type.name === "flying" ){
            return flyingImage
        }
        if ( pokemon.types[0].type.name === "ghost" ){
            return ghostImage
        } 
        if ( pokemon.types[0].type.name === "ground" ){
            return groundImage
        } 
        if ( pokemon.types[0].type.name === "ice" ){
            return iceImage
        } 
        if ( pokemon.types[0].type.name === "normal" ){
            return normalImage
        } 
        if ( pokemon.types[0].type.name === "poison" ){
            return poisonImage
        } 
        if ( pokemon.types[0].type.name === "psychic" ){
            return psychicImage
        } 
        if ( pokemon.types[0].type.name === "rock" ){
            return rockImage
        } 
        if ( pokemon.types[0].type.name === "steel" ){
            return steelImage
        } 
        if ( pokemon.types[0].type.name === "water" ){
            return waterImage
        } else {
        }
    }

    function secondaryTypeImage() {
        if ( pokemon.types.length === 1 ) {
            return null
        }
        if ( pokemon.types[1].type.name === "grass" ){
            return grassImage
        }
        if ( pokemon.types[1].type.name === "bug" ){
            return bugImage
        }
        if ( pokemon.types[1].type.name === "dark" ){
            return darkImage
        }
        if ( pokemon.types[1].type.name === "dragon" ){
            return dragonImage
        }
        if ( pokemon.types[1].type.name === "electric" ){
            return electricImage
        }
        if ( pokemon.types[1].type.name === "fairy" ){
            return fairyImage
        }
        if ( pokemon.types[1].type.name === "fighting" ){
            return fightingImage
        }
        if ( pokemon.types[1].type.name === "fire" ){
            return fireImage
        }
        if ( pokemon.types[1].type.name === "flying" ){
            return flyingImage
        }
        if ( pokemon.types[1].type.name === "ghost" ){
            return ghostImage
        } 
        if ( pokemon.types[1].type.name === "ground" ){
            return groundImage
        } 
        if ( pokemon.types[1].type.name === "ice" ){
            return iceImage
        } 
        if ( pokemon.types[1].type.name === "normal" ){
            return normalImage
        } 
        if ( pokemon.types[1].type.name === "poison" ){
            return poisonImage
        } 
        if ( pokemon.types[1].type.name === "psychic" ){
            return psychicImage
        } 
        if ( pokemon.types[1].type.name === "rock" ){
            return rockImage
        } 
        if ( pokemon.types[1].type.name === "steel" ){
            return steelImage
        } 
        if ( pokemon.types[1].type.name === "water" ){
            return waterImage
        } 
    }


    return (
        <div className="team-pokemon-card" onClick={ handleClick }>
            <div className="team-circle" style={ {background:`${styleCircleColor()}`} }>
                <img className="pokemon-team-art" 
                    src={pokemon.sprites.other["official-artwork"].front_default} 
                    alt="pokemon official artwork"
                    key={pokemon.id}    
                />
            </div>
                <div className="name-and-type" style={ {background:`${styleCircleColor()}`} }>
                    <div className="pokemon-name">
                        {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                    </div>
                    <div className="type-image-div">
                        {typeImage()}
                        {secondaryTypeImage()}                   
                    </div>
                </div>
        </div>
    )
}
