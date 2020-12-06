import React from 'react'

export default function TeamAnalysisContainer() {

    const grassImage = <img className="team-analysis-type-image" alt="grass type" src="https://cdn.bulbagarden.net/upload/a/a5/GrassIC.png" />
    const bugImage = <img className="team-analysis-type-image" alt="bug type" src="https://cdn.bulbagarden.net/upload/b/bd/BugIC.png" />
    const darkImage = <img className="team-analysis-type-image" alt="dark type" src="https://cdn.bulbagarden.net/upload/e/e3/DarkIC.png" />
    const dragonImage = <img className="team-analysis-type-image" alt="dragon type" src="https://cdn.bulbagarden.net/upload/c/c3/DragonIC.png" />
    const electricImage = <img className="team-analysis-type-image" alt="electric type" src="https://cdn.bulbagarden.net/upload/e/ea/ElectricIC.png" />
    const fairyImage = <img className="team-analysis-type-image" alt="fairy type" src="https://cdn.bulbagarden.net/upload/3/31/FairyIC.png" />
    const fightingImage = <img className="team-analysis-type-image" alt="fighting type" src="https://cdn.bulbagarden.net/upload/9/9b/FightingIC.png" />
    const fireImage = <img className="team-analysis-type-image" alt="fire type" src="https://cdn.bulbagarden.net/upload/9/9f/FireIC.png" />
    const flyingImage = <img className="team-analysis-type-image" alt="flying type" src="https://cdn.bulbagarden.net/upload/d/dc/FlyingIC.png" />
    const ghostImage = <img className="team-analysis-type-image" alt="ghost type" src="https://cdn.bulbagarden.net/upload/c/c3/GhostIC.png"/>
    const groundImage = <img className="team-analysis-type-image" alt="ground type" src="https://cdn.bulbagarden.net/upload/8/87/GroundIC.png" />
    const iceImage = <img className="team-analysis-type-image" alt="ice type" src="https://cdn.bulbagarden.net/upload/8/86/IceIC.png" />
    const normalImage = <img className="team-analysis-type-image" alt="normal type" src="https://cdn.bulbagarden.net/upload/0/0f/NormalIC.png" />
    const poisonImage = <img className="team-analysis-type-image" alt="poison type" src="https://cdn.bulbagarden.net/upload/8/86/PoisonIC.png" />
    const psychicImage = <img className="team-analysis-type-image" alt="psychic type" src="https://cdn.bulbagarden.net/upload/f/f8/PsychicIC.png" />
    const rockImage = <img className="team-analysis-type-image" alt="rock type" src="https://cdn.bulbagarden.net/upload/e/e6/RockIC.png"/>
    const steelImage = <img className="team-analysis-type-image" alt="steel type" src="https://cdn.bulbagarden.net/upload/7/7e/SteelIC.png" />
    const waterImage = <img className="team-analysis-type-image" alt="water type" src="https://cdn.bulbagarden.net/upload/b/b0/WaterIC.png" />

    return (
        <div className="team-analysis-container" >
            {grassImage}
            {bugImage}
            {darkImage}
            {dragonImage}
            {electricImage}
            {fairyImage}
            {fightingImage}
            {fireImage}
            {flyingImage}
            {ghostImage}
            {groundImage}
            {iceImage}
            {normalImage}
            {poisonImage}
            {psychicImage}
            {rockImage}
            {steelImage}
            {waterImage}
        </div>
    )
}
