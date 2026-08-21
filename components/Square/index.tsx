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
      return "bg-purple-950 border-2 border-purple-700";
    }
    if (isCorrect) {
      return "bg-green-500 border-2 border-green-400";
    }
    return "bg-red-500 border-2 border-red-400";
  };

  return <button onClick={() => clickFunction(id)} disabled={gameFinished} className={`${squareColor()} w-28 h-28 md:w-50 md:h-50 rounded-xl cursor-help`}></button>;
};

export default Square;
