import { Component } from "react";
import './App.css';
// import PokemonContainer from "./containers/PokemonContainer"

class App extends Component {
  
  state = {
    pokemon: []
  }

  componentDidMount(){
    let fetches = [];
    let fetchPokemon = () => {
      for (let i = 1; i <= 50; i++) {
        fetches.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`))      
      }
    }
    fetchPokemon()
    console.log("Promise.all(fetches)", Promise.all(fetches))
    Promise.all(fetches).then(responses => {
      console.log("responses", responses) 
      const parsedResponses = responses.map(response => response.json())

      console.log("parsed responses", parsedResponses)
      console.log("Promise.all(parsedResponses)", Promise.all(parsedResponses))
      Promise.all(parsedResponses).then(pokemon => this.setState({ pokemon }))
    }) 
  }

  render(){
    return (
      <div className="App">
        {/* <PokemonContainer pokemon={this.state.pokemon}/> */}
      </div>
    );
    }
}

export default App;
