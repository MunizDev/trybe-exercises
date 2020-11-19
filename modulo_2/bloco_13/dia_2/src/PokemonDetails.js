import React from 'react';
import pokemons from './data';

class PokemonDetails extends React.Component {
  constructor() {
    super();
    this.filterPokemon = this.filterPokemon.bind(this);
  }
  filterPokemon(idPok) {
    return pokemons.filter((pokemon) => pokemon.id === idPok)[0];
  }

  render() {
    const { id } = this.props.match.params;
    const {
      name,
      type,
      averageWeight,
      summary,
      foundAt,
      image,
    } = this.filterPokemon(parseInt(id));
    const { value, measurementUnit } = averageWeight;
    return (
      <div className="pokedex">
        <div className="pokemon">
          <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              {value}
              {measurementUnit}
            </p>

            <p>{summary}</p>
          </div>
          <img src={image} alt={name} />
        </div>
        <div>
          {foundAt.map((e) => {
            return (
              <div key={e.location}>
                <img src={e.map} alt={e.location} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
