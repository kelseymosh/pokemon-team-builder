import { Component } from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import PokemonContainer from "./containers/PokemonContainer";
import TeamContainer from "./containers/TeamContainer"
import TeamAnalysisContainer from "./containers/TeamAnalysisContainer"

class App extends Component {
  
  state = {
    pokemon: [],
    team:[],
  }

  addToTeam = (addedPokemon) => {
    if(!this.state.team.find(pokemon => pokemon.id === addedPokemon.id) && this.state.team.length <= 5)
      this.setState({ team:[...this.state.team, addedPokemon] })
  }

  removeFromTeam = (pokemonToRemove) => {
    let updatedTeam = this.state.team.filter(pokemon => pokemon.id !== pokemonToRemove.id)
      this.setState({ team:updatedTeam })
  }

  componentDidMount(){
    let fetches = [];
    let fetchPokemon = () => {
      for (let i = 1; i <= 600; i++) {
        fetches.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`))      
      }
    }
    fetchPokemon()
    // console.log("Promise.all(fetches)", Promise.all(fetches))
    Promise.all(fetches).then(responses => {
      // console.log("responses", responses) 
      const parsedResponses = responses.map(response => response.json())

      // console.log("parsed responses", parsedResponses)
      // console.log("Promise.all(parsedResponses)", Promise.all(parsedResponses))
      Promise.all(parsedResponses).then(pokemon => this.setState({ pokemon }))
    }) 
  }

  render(){
    return (
      <div className="App">
          <TeamContainer 
            team={this.state.team} 
            removeFromTeam={this.removeFromTeam} 
          />
            <Accordion>
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
          <PokemonContainer pokemon={this.state.pokemon} addToTeam={this.addToTeam} />
      </div>
    );
    }
}

export default App;
