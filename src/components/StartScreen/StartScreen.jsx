import React from 'react'
import { Container } from './style'

const StartScreen = ({startGame}) => {
  return (
    <Container>
        <h1>Secret Word</h1>
        <p>Clique no botaõ abaixo para iniciar o jogo</p>
        <button onClick={startGame}>Começar o jogo</button>
    </Container>
  )
}

export default StartScreen