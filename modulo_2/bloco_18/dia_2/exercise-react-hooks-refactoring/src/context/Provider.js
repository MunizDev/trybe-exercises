// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const initialState = {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
    signal: {
      color: 'red',
    },
  };

  const [carsSignal, setCarsSignal] = useState(initialState);

  const moveCar = (car, side) => {
    setCarsSignal({
      ...carsSignal,
      cars: { ...carsSignal.cars, [car]: side },
    });
  };

  const changeSignal = (signalColor) => {
    setCarsSignal({
      ...carsSignal,
      signal: { ...carsSignal, color: signalColor },
    });
  };

  const context = {
    carsSignal,
    moveCar,
    changeSignal,

  };

  return (
    <CarsContext.Provider value={context}>{children}</CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
