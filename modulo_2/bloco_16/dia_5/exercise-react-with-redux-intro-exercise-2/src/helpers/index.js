import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { combineReducers, createStore } from "redux";
import reducer from "../redux/reducer";

const storeTest = createStore(combineReducers({ reducer }));

const renderWhitRedux = (component) => {
  return {
    ...render(<Provider store={storeTest}>{component}</Provider>),
    storeTest,
  };
};

export default renderWhitRedux;
