import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import CardSection from "../components/CardSection";

import useLocalStorage from "../hooks/useLocalStorage";

const Homepage = () => {
  const [colView, setColView] = useLocalStorage("whisperwall-colview", "4");

  return (
    <div className="max-w-6xl mx-auto pt-3.5 flex flex-col items-center px-3">
      <Navbar />
      <HeroSection colView={colView} setColView={setColView} />
      <CardSection colView={colView} />
    </div>
  );
};

export default Homepage;
