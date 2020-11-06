import logo from "./logo.svg";
import "./App.css";
import React from "react";
import data from "./data";

class Pokemon extends React.Component {
  render() {
    return (
      <div className="pokemon">
        <div className="info-pk">
          <p>{this.props.objPokemon.name}</p>
          <p>{this.props.objPokemon.type}</p>
          <p>
            Peso: {this.props.objPokemon.averageWeight.value}
            {this.props.objPokemon.averageWeight.measurementUnit}
          </p>
        </div>
        <img src={this.props.objPokemon.image} />
        <br />
        <br />
      </div>
    );
  }
}

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
        <h1>Pokedex</h1>
        <div className="pokemons">
          {data.map((pokemon) => (
            <Pokemon objPokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  }
}

function App() {
  return <Pokedex />;
}

export default App;
