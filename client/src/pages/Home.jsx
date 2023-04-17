import { useSetRecoilState } from "recoil";
import { categoryState } from "../recoil/atom/categoryState";
import nightSky from "../images/nightSky.jpg";

import Button from "../components/Button";

const Home = () => {
  const setCategory = useSetRecoilState(categoryState);

  const startButtonHandler = () => {
    setCategory(() => "all");
    window.location.replace("/posts/all");
  };

  return (
    <article className="flex flex-col-reverse items-center bg-nightSky h-screen bg-bottom bg-cover">
      {/* <img src={nightSky} alt="nightSky" className="mb-2 w-4/5" /> */}
      <Button
        str="Let's write a post"
        onClick={startButtonHandler}
        disabled={false}
        className="text-center text-xl text-blue-800 font-black bg-white rounded p-4 m-6 w-1/2 hover:outline-white"
      />
    </article>
  );
};

export default Home;
