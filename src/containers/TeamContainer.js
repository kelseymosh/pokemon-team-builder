import TeamPokemonCard from '../components/TeamPokemonCard'
import TeamAnalysisContainer from "../containers/TeamAnalysisContainer"

import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export default function TeamContainer(props) {

    const pokemon = props.team.map(pokemon => {
        return(
            <TeamPokemonCard 
                className="team-pokemon" 
                pokemon={pokemon} 
                key={pokemon.id} 
                removeFromTeam={props.removeFromTeam} 
            />
        )
    })
    return (
        <section className="sticky-container">
            <div className="pokemon-team-container">
                { pokemon }
            </div>
            <Accordion className="accordion">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            +
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body> <TeamAnalysisContainer /> </Card.Body>
                        </Accordion.Collapse>
                </Card>
                </Accordion>
        </section>
    )
}