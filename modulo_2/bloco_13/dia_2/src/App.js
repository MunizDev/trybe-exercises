import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import About from './About';
import NotFound from './NotFound';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <BrowserRouter>
          <div className='pokemon'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
          <Switch>
          <Route
            exact
            path="/"
            render={() => <Pokedex pokemons={pokemons} />}
          />
          <Route path="/about" component={About} />
          <Route
            path="/pokemons/:id"
            render={(props) => <PokemonDetails {...props} />}
          />
          <Route
            component={NotFound}
          />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
