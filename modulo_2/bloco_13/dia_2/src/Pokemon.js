import React from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight:{' '}
            {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <Link to={`/pokemons/${id}`}>More details...</Link>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;
