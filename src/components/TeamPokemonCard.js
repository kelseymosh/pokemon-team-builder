import React from 'react'

export default function TeamPokemonCard({pokemon, removeFromTeam}) {
    
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

    const grassImage = <img className="type-image" alt="grass type" src="https://cdn.bulbagarden.net/upload/a/a5/GrassIC.png" />
    const bugImage = <img className="type-image" alt="bug type" src="https://cdn.bulbagarden.net/upload/b/bd/BugIC.png" />
    const darkImage = <img className="type-image" alt="dark type" src="https://cdn.bulbagarden.net/upload/e/e3/DarkIC.png" />
    const dragonImage = <img className="type-image" alt="dragon type" src="https://cdn.bulbagarden.net/upload/c/c3/DragonIC.png" />
    const electricImage = <img className="type-image" alt="electric type" src="https://cdn.bulbagarden.net/upload/e/ea/ElectricIC.png" />
    const fairyImage = <img className="type-image" alt="fairy type" src="https://cdn.bulbagarden.net/upload/3/31/FairyIC.png" />
    const fightingImage = <img className="type-image" alt="fighting type" src="https://cdn.bulbagarden.net/upload/9/9b/FightingIC.png" />
    const fireImage = <img className="type-image" alt="fire type" src="https://cdn.bulbagarden.net/upload/9/9f/FireIC.png" />
    const flyingImage = <img className="type-image" alt="flying type" src="https://cdn.bulbagarden.net/upload/d/dc/FlyingIC.png" />
    const ghostImage = <img className="type-image" alt="ghost type" src="https://cdn.bulbagarden.net/upload/c/c3/GhostIC.png"/>
    const groundImage = <img className="type-image" alt="ground type" src="https://cdn.bulbagarden.net/upload/8/87/GroundIC.png" />
    const iceImage = <img className="type-image" alt="ice type" src="https://cdn.bulbagarden.net/upload/8/86/IceIC.png" />
    const normalImage = <img className="type-image" alt="normal type" src="https://cdn.bulbagarden.net/upload/0/0f/NormalIC.png" />
    const poisonImage = <img className="type-image" alt="poison type" src="https://cdn.bulbagarden.net/upload/8/86/PoisonIC.png" />
    const psychicImage = <img className="type-image" alt="psychic type" src="https://cdn.bulbagarden.net/upload/f/f8/PsychicIC.png" />
    const rockImage = <img className="type-image" alt="rock type" src="https://cdn.bulbagarden.net/upload/e/e6/RockIC.png"/>
    const steelImage = <img className="type-image" alt="steel type" src="https://cdn.bulbagarden.net/upload/7/7e/SteelIC.png" />
    const waterImage = <img className="type-image" alt="water type" src="https://cdn.bulbagarden.net/upload/b/b0/WaterIC.png" />

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
