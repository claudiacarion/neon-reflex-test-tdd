type RestartButtonProp = {
  clickFunction: () => void;
};

const RestartButton = ({ clickFunction }: RestartButtonProp) => {
  return <button onClick={clickFunction} className='font-mono cursor-pointer rounded-xl w-fit border-2 border-purple-700 p-3 mx-auto'>Restart Game</button>;
};

export default RestartButton;
