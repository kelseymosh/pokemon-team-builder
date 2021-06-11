import TeamPokemonCard from '../components/TeamPokemonCard'
import TeamAnalysisContainer from "../containers/TeamAnalysisContainer"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Popover from "react-bootstrap/Popover"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"

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

    const popover = (
        <Popover id="popover-basic">
            <Popover.Content className="popover-content">
                <p><strong>Welcome Trainer!</strong>
                    <span className="trainer-sprite-container">
                        <img alt="trainer sprite" className="trainer-sprite" src="/assets/femaleSprite.png"/>
                        <img alt="trainer sprite" className="trainer-sprite" src="/assets/maleSprite.png"/>
                    </span>
                </p> 
                <p>Add a Pokemon to your team by clicking on a sprite. 
                To remove from your team, click on the larger image.</p> 
                <p>Team Type analysis <strong>coming soon!</strong></p>
            </Popover.Content>
        </Popover>
    );

    return (
        <section className="sticky-container">
            <div className="pokemon-team-container">
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <img 
                        className="pokeball-logo" 
                        alt="pokeball-logo"
                        src="assets/Pokeball.png"
                        variant="success"
                    />
                </OverlayTrigger>
                    { pokemon }
            </div>
                <Accordion className="accordion">
                    <Card>
                        <Card.Header className="accordion-image" alt="route-117">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <img
                                    className="plus-icon"
                                    alt="plus icon" 
                                    src="https://icon-library.com/images/plus-sign-icon-png/plus-sign-icon-png-19.jpg"
                                />
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