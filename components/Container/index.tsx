"use client";

import { useState } from "react";
import Square from "../Square";
import RestartButton from "../RestartButton";

const getRandomSquare = () => {
  return Math.floor(Math.random() * 3) + 1;
};

const Container = () => {
  const squareIds = [1, 2, 3];

  const [correctSquare, setCorrectSquare] = useState<number>(getRandomSquare());
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);
  const [gameFinished, setGameFinished] = useState<boolean>(false);

  const selectSquare = (id: number) => {
    setSelectedSquare(id);
    setGameFinished(true);
  };

  const restartGame = () => {
    setSelectedSquare(null);
    setGameFinished(false);
    setCorrectSquare(getRandomSquare());
  };

  return (
    <>
      {squareIds.map(id => (
        <Square
          key={id}
          id={id}
          isCorrect={id === correctSquare}
          isSelected={id === selectedSquare}
          gameFinished={gameFinished}
          clickFunction={selectSquare}
        />
      ))}
      {selectedSquare !== null && <RestartButton clickFunction={restartGame} />}
    </>
  );
};

export default Container;
