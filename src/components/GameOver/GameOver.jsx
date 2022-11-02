import React from "react";
import { Container } from "./style";

const GameOver = ({ retry, score }) => {
  return (
    <Container>
      <h1>Fim de jogo</h1>
      <h2>A sua pontuação foi <span>{score}</span></h2>
      <button onClick={retry}>Reiniciar jogo</button>
    </Container>
  );
};

export default GameOver;
