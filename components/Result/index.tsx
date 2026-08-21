type ResultProp = {
  result: string;
};

const Result = ({ result }: ResultProp) => {
  return <h3 className='font-mono my-6'>{result}</h3>;
};

export default Result;
