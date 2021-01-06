import React from "react";
import App from "./App";
import renderWhitRedux from "./helpers/index";

describe("Testes do app Traffic Signal ", () => {
  test("Verifica se existe 3 botões na página para mover os carrinhos", () => {
    const { queryAllByText } = renderWhitRedux(<App />);
    const botoesMove = queryAllByText("move");

    expect(botoesMove.length).toBe(3);
  });
});
