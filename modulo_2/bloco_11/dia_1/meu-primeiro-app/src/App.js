import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    value.map(element => <li>{element}</li>)
  );
}

const arrayTask = ['work', 'dinner', 'meeting']

function App() {
  return (
    <div className="App">
      <ul>
      {task(arrayTask)}
      </ul>
    </div>
  );
}


export default App;
