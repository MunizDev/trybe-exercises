import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByLabelText, queryByText } = render(<App />); // Caso precise de uma nova query adicione no object destructuring

    const inputTodo = getByLabelText('Tarefa:');
    const botaoAdd = queryByText('Adicionar');

    listTodo.forEach((todo) => {
      fireEvent.change(inputTodo, { target: { value: todo } });
      fireEvent.click(botaoAdd);
    });
    listTodo.forEach((todo) => {
      expect(queryByText(todo)).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const { queryByText } = render(<Item content="Beber muita água" />);
    expect(queryByText('Beber muita água')).toBeInTheDocument();
  });
});
