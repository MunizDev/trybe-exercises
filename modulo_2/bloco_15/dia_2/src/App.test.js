import React from 'react';
import { fireEvent, getByTestId, render } from '@testing-library/react';
import App from './App';
import Digimon from './Digimon';

describe('Teste da aplicação toda', () => {
  it('renders App', async () => {
    const { getByText, getByTestId } = render(<App />);
    const input = getByTestId('input');
    const botao = getByText(/Search Digimon/i);
    const linkElement = getByText(/Faça uma pesquisa/i);

    expect(input).toHaveTextContent('');
    expect(botao).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });

  it('usuário digita no input', async () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('input');

    fireEvent.change(input, {
      target: {
        value: 'Koromon',
      },
    });
    expect(input.value).toBe('Koromon');
  });

  it('Busca por um digimon', async () => {
    const digimon = [
      {
        name: 'Koromon',
        img: 'https://digimon.shadowsmith.com/img/koromon.jpg',
        level: 'In Training',
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      json: async () => digimon,
    });

    const { getByText, getByTestId, findByText, getByAltText } = render(
      <App />,
    );

    const input = getByTestId('input');
    const botao = getByText(/Search Digimon/i);

    fireEvent.change(input, {
      target: {
        value: 'Koromon',
      },
    });

    expect(input.value).toBe('Koromon');

    fireEvent.click(botao);

    await findByText('level: In Training');
    expect(getByText('Koromon')).toBeInTheDocument();
    expect(getByAltText('Koromon')).toBeInTheDocument();
  });

  it('Busca por um digimon inexistente', async () => {
    const ErrorMsg = 'Koromon1 is not a Digimon in our database.';

    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({
        ErrorMsg: 'Koromon1 is not a Digimon in our database.',
      }),
    });

    const { getByText, getByTestId, findByText } = render(<App />);

    const input = getByTestId('input');
    const botao = getByText(/Search Digimon/i);
    const linkElement = getByText(/Faça uma pesquisa/i);

    fireEvent.change(input, {
      target: {
        value: 'Koromon1',
      },
    });

    expect(input.value).toBe('Koromon1');

    fireEvent.click(botao);

    await findByText(ErrorMsg);

    expect(linkElement.textContent).toBe(ErrorMsg);
  });
});
