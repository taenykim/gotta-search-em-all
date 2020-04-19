import React from 'react';
import Container from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../shared';

const Controls = ({ pokemonIndex, changePokemonIndex }) => {
  console.log('pokemonIndex', pokemonIndex);

  return (
    <Container>
      <Button onClick={() => changePokemonIndex(pokemonIndex - 1)}>
        <FontAwesomeIcon icon={faArrowDown} />
      </Button>
      <input
        type="text"
        className="input"
        value={pokemonIndex}
        onChange={(e) => changePokemonIndex(e.target.value)}
      />
      <Button onClick={() => changePokemonIndex(pokemonIndex + 1)}>
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    </Container>
  );
};

export default Controls;