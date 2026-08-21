import Subtitle from "../Subtitle";
import Title from "../Title";

const Header = () => {
  return (
    <header className='bg-gray-900 rounded-xl border-2 border-purple-700 text-center md:w-3xl mx-4 md:mx-auto my-6 py-2 md:py-10'>
      <Title text="Neon Reflex" />
      <Subtitle text="Click the correct square" />
    </header>
  );
};

export default Header;
