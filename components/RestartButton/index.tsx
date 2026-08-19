type RestartButtonProp = {
  clickFunction: () => void;
};

const RestartButton = ({ clickFunction }: RestartButtonProp) => {
  return <button onClick={clickFunction}>Restart Game</button>;
};

export default RestartButton;
