"use client";

import { useState } from "react";
import Square from "../Square";
import RestartButton from "../RestartButton";
import Result from "../Result";

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
    <div className='flex flex-col justify-center text-center md:w-3xl mx-auto'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
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
      </div>
      {selectedSquare !== null && (
        <>
          <Result result={selectedSquare === correctSquare ? "You won!" : "You lost!"} />
          <RestartButton clickFunction={restartGame} />
        </>
      )}
    </div>
  );
};

export default Container;
