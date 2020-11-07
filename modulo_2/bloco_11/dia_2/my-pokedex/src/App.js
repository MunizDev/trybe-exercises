import "./App.css";
import React from "react";
import data from "./data";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const { name, type, image } = this.props.pk;
    const { value, measurementUnit } = this.props.pk.averageWeight;

    return (
      <div className="pokemon">
        <div className="info-pk">
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Peso: {value}
            {measurementUnit}
          </p>
        </div>
        <img src={image} alt="pokemon" />
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
            <Pokemon pk={pokemon} key={pokemon.id} />
          ))}
        </div>
      </div>
    );
  }
}

function App() {
  return <Pokedex />;
}

Pokemon.propTypes = {
  pk: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default App;
