import { Component } from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import PokemonContainer from "./containers/PokemonContainer";
import TeamContainer from "./containers/TeamContainer"

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
      for (let i = 1; i <= 895; i++) {
        fetches.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`))      
      }
    }
    fetchPokemon()
    
    Promise.all(fetches).then(responses => {
      const parsedResponses = responses.map(response => response.json())
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
          <PokemonContainer pokemon={this.state.pokemon} addToTeam={this.addToTeam} />
      </div>
    );
    }
}

export default App;
