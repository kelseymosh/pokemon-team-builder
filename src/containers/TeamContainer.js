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
            <Popover.Title as="h3">
                <img className="pokemon-logo" alt="pokemon-logo" src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png"/>
                <strong>Team Builder</strong>
            </Popover.Title>
                <Popover.Content>
                    <p><strong>Welcome Trainer!</strong> Add a Pokemon to your team by clicking on a sprite. 
                    To remove from your team, click on the larger image.</p> 
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
                        src="https://lh3.googleusercontent.com/proxy/3msSqEOqREOZU-QHn_XrdTvUfjRqmQ7xg0-uojwAQbUjPxDSnyztHLzWzgVVEfUZwpLStre7zqiAT4_hzFvodVIRiLZxZOmfXsG2PSMutJagGql2I333uOhWzQiiaBxePQ" 
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
                                    alt="plus-icon" 
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