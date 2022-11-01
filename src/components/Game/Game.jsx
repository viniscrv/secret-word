import React from "react";
import { Container } from "./style";

const Game = ({ verifyLetter }) => {
  return (
    <Container>
      <p>
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3>
        Dica sobre a palavra: <span>Dica ...</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blank"></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar</button>
        </form>
      </div>
      <div>
        <p>Letra já utilizadas</p>
        <span>a,</span>
        <span>b,</span>
        <span>c,</span>
      </div>
    </Container>
  );
};

export default Game;
