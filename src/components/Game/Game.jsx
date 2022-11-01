import React from "react";
import { Container } from "./style";

const Game = ({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {
  return (
    <Container>
      <p>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i)=> (
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">{letter}</span>
          ) : (
            <span key={i} className="blank"></span>
          )
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letras já utilizadas</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </div>
    </Container>
  );
};

export default Game;
