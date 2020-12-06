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
            return "#d0ecfd"
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

    function typeImageSrc() {
        if ( pokemon.types[0].type.name === "grass" ){
            return "https://cdn.bulbagarden.net/upload/a/a5/GrassIC.png"
        }
        if ( pokemon.types[0].type.name === "bug" ){
            return "https://cdn.bulbagarden.net/upload/b/bd/BugIC.png"
        }
        if ( pokemon.types[0].type.name === "dark" ){
            return "https://cdn.bulbagarden.net/upload/e/e3/DarkIC.png"
        }
        if ( pokemon.types[0].type.name === "dragon" ){
            return "https://cdn.bulbagarden.net/upload/c/c3/DragonIC.png"
        }
        if ( pokemon.types[0].type.name === "electric" ){
            return "https://cdn.bulbagarden.net/upload/e/ea/ElectricIC.png"
        }
        if ( pokemon.types[0].type.name === "fairy" ){
            return "https://cdn.bulbagarden.net/upload/3/31/FairyIC.png"
        }
        if ( pokemon.types[0].type.name === "fighting" ){
            return "https://cdn.bulbagarden.net/upload/9/9b/FightingIC.png"
        }
        if ( pokemon.types[0].type.name === "fire" ){
            return "https://cdn.bulbagarden.net/upload/9/9f/FireIC.png"
        }
        if ( pokemon.types[0].type.name === "flying" ){
            return "https://cdn.bulbagarden.net/upload/d/dc/FlyingIC.png"
        }
        if ( pokemon.types[0].type.name === "ghost" ){
            return "https://cdn.bulbagarden.net/upload/c/c3/GhostIC.png"
        } 
        if ( pokemon.types[0].type.name === "ground" ){
            return "https://cdn.bulbagarden.net/upload/8/87/GroundIC.png"
        } 
        if ( pokemon.types[0].type.name === "ice" ){
            return "https://cdn.bulbagarden.net/upload/8/86/IceIC.png"
        } 
        if ( pokemon.types[0].type.name === "normal" ){
            return "https://cdn.bulbagarden.net/upload/0/0f/NormalIC.png"
        } 
        if ( pokemon.types[0].type.name === "poison" ){
            return "https://cdn.bulbagarden.net/upload/8/86/PoisonIC.png"
        } 
        if ( pokemon.types[0].type.name === "psychic" ){
            return "https://cdn.bulbagarden.net/upload/f/f8/PsychicIC.png"
        } 
        if ( pokemon.types[0].type.name === "rock" ){
            return "https://cdn.bulbagarden.net/upload/e/e6/RockIC.png"
        } 
        if ( pokemon.types[0].type.name === "steel" ){
            return "https://cdn.bulbagarden.net/upload/7/7e/SteelIC.png"
        } 
        if ( pokemon.types[0].type.name === "water" ){
            return "https://cdn.bulbagarden.net/upload/b/b0/WaterIC.png"
        } else {
        }
    }

    function secondaryTypeImageSrc() {
        if ( pokemon.types.length == 1 ) {
            return null
        }
        if ( pokemon.types[1].type.name === "grass" ){
            return "https://cdn.bulbagarden.net/upload/a/a5/GrassIC.png"
        }
        if ( pokemon.types[1].type.name === "bug" ){
            return "https://cdn.bulbagarden.net/upload/b/bd/BugIC.png"
        }
        if ( pokemon.types[1].type.name === "dark" ){
            return "https://cdn.bulbagarden.net/upload/e/e3/DarkIC.png"
        }
        if ( pokemon.types[1].type.name === "dragon" ){
            return "https://cdn.bulbagarden.net/upload/c/c3/DragonIC.png"
        }
        if ( pokemon.types[1].type.name === "electric" ){
            return "https://cdn.bulbagarden.net/upload/e/ea/ElectricIC.png"
        }
        if ( pokemon.types[1].type.name === "fairy" ){
            return "https://cdn.bulbagarden.net/upload/3/31/FairyIC.png"
        }
        if ( pokemon.types[1].type.name === "fighting" ){
            return "https://cdn.bulbagarden.net/upload/9/9b/FightingIC.png"
        }
        if ( pokemon.types[1].type.name === "fire" ){
            return "https://cdn.bulbagarden.net/upload/9/9f/FireIC.png"
        }
        if ( pokemon.types[1].type.name === "flying" ){
            return "https://cdn.bulbagarden.net/upload/d/dc/FlyingIC.png"
        }
        if ( pokemon.types[1].type.name === "ghost" ){
            return "https://cdn.bulbagarden.net/upload/c/c3/GhostIC.png"
        } 
        if ( pokemon.types[1].type.name === "ground" ){
            return "https://cdn.bulbagarden.net/upload/8/87/GroundIC.png"
        } 
        if ( pokemon.types[1].type.name === "ice" ){
            return "https://cdn.bulbagarden.net/upload/8/86/IceIC.png"
        } 
        if ( pokemon.types[1].type.name === "normal" ){
            return "https://cdn.bulbagarden.net/upload/1/0f/NormalIC.png"
        } 
        if ( pokemon.types[1].type.name === "poison" ){
            return "https://cdn.bulbagarden.net/upload/8/86/PoisonIC.png"
        } 
        if ( pokemon.types[1].type.name === "psychic" ){
            return "https://cdn.bulbagarden.net/upload/f/f8/PsychicIC.png"
        } 
        if ( pokemon.types[1].type.name === "rock" ){
            return "https://cdn.bulbagarden.net/upload/e/e6/RockIC.png"
        } 
        if ( pokemon.types[1].type.name === "steel" ){
            return "https://cdn.bulbagarden.net/upload/7/7e/SteelIC.png"
        } 
        if ( pokemon.types[1].type.name === "water" ){
            return "https://cdn.bulbagarden.net/upload/b/b0/WaterIC.png"
        } 
    }


    return (
        <div className="team-pokemon-card">
            <div className="team-circle" style={ {background:`${styleCircleColor()}`} }>
                <img className="pokemon-team-art" 
                    src={pokemon.sprites.other.dream_world.front_default} 
                    alt="pokemon official artwork"
                    key={pokemon.id}
                    onClick={ handleClick }
                />
            </div>
                <div className="name-and-type" style={ {background:`${styleCircleColor()}`} }>
                    <span className="pokemon-name">
                        {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                    </span>
                    <span className="type-image-div">
                        <img className="type-image" src={`${typeImageSrc()}`} />
                        <img className="secondary-type-image" src={`${secondaryTypeImageSrc()}`} />
                    </span>
                </div>
        </div>
    )
}
