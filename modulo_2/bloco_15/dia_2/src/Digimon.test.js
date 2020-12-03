import React from 'react';
import { render } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    const digimon = {
      name: 'Koromon',
      img: 'https://digimon.shadowsmith.com/img/koromon.jpg',
      level: 'In Training',
    };

    const { findByText, getByTestId } = render(
      <Digimon digimon={digimon} />,
    );
    await findByText('Koromon');
    const divDigimon = getByTestId('divDigimon');
    const nome = getByTestId('digimonName');
    const level = getByTestId('digimonLevel');
    expect(nome.textContent).toBe(digimon.name);
    expect(level.textContent).toBe(`level: ${digimon.level}`);
    expect(divDigimon).toBeInTheDocument();
  });
});
