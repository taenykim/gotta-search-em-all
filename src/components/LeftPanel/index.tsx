import React from 'react'
import Container from './styles'
import Name from './Name'
import Sprite from './Sprite'
import Description from './Description'
import { PokemonProps } from '../sharedTypes'

interface LeftPanelprops {
  pokemon?: PokemonProps
  loading: boolean
  pokemonIndex: number
}

const LeftPanel = ({ pokemon, loading, pokemonIndex }: LeftPanelprops) => {
  if (!pokemon) {
    return <div></div>
  }

  const {
    pokemonData: { name, sprites },
    pokemonDescription,
  } = pokemon

  return (
    <Container>
      <Name name={name} pokemonIndex={pokemonIndex} />
      <Sprite sprites={sprites} name={name} loading={loading} />
      <Description description={pokemonDescription} />
    </Container>
  )
}

export default LeftPanel
