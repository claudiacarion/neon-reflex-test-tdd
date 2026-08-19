type SquareProps = {
  id: number;
  isSelected: boolean;
  isCorrect: boolean;
  gameFinished: boolean;
  clickFunction: (id: number) => void;
};

const Square = ({ id, isSelected, isCorrect, gameFinished, clickFunction }: SquareProps) => {
  const squareColor = () => {
    if (!isSelected) {
      return "bg-purple-950";
    }
    if (isCorrect) {
      return "bg-green-500";
    }
    return "bg-red-500";
  };

  return <button onClick={() => clickFunction(id)} disabled={gameFinished} className={squareColor()}></button>;
};

export default Square;
