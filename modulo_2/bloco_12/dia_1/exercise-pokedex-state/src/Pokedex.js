import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      filter: 'Fire',
      sizeFilter: 2,
      pokemonsFiltered: [
        {
          id: 4,
          name: 'Charmander',
          type: 'Fire',
          averageWeight: {
            value: '8.5',
            measurementUnit: 'kg',
          },
          image: 'https://cdn.bulbagarden.net/upload/0/0a/Spr_5b_004.png',
          moreInfo:
            'https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)',
        },
        {
          id: 78,
          name: 'Rapidash',
          type: 'Fire',
          averageWeight: {
            value: '95.0',
            measurementUnit: 'kg',
          },
          image: 'https://cdn.bulbagarden.net/upload/5/58/Spr_5b_078.png',
          moreInfo:
            'https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)',
        },
      ],
    };
  }

  increaseIndex = () => {
    if (this.state.index < this.state.sizeFilter - 1) {
      this.setState((estadoAnterior, _props) => ({
        index: estadoAnterior.index + 1,
      }));
    } else {
      this.setState({ index: 0 });
    }
  };

  filterPokemons = (param) => {
    const pokemons = this.props.pokemons.filter(
      (pokemon) => pokemon.type === param,
    );

    this.setState({
      index: 0,
      filter: param,
      sizeFilter: pokemons.length,
      pokemonsFiltered: pokemons,
    });
  };

  allPokemons = () => {
    this.setState({
      index: 0,
      filter: 'All',
      sizeFilter: this.props.pokemons.length,
      pokemonsFiltered: this.props.pokemons,
    });
  };

  render() {
    return (
      <div className="pokedex">
        <Pokemon pokemon={this.state.pokemonsFiltered[this.state.index]} />
        <div>
          <button className="button-next" onClick={this.increaseIndex}>
            Próximo
          </button>
        </div>

        <div>
          <button className="button-type" onClick={this.allPokemons}>
            All
          </button>
          <button
            className="button-type"
            onClick={() => this.filterPokemons('Fire')}
          >
            Fire
          </button>
          <button
            className="button-type"
            onClick={() => this.filterPokemons('Psychic')}
          >
            Psychic
          </button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
