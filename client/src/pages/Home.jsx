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
    <article className="flex flex-col items-center">
      <img src={nightSky} alt="nightSky" className="mb-2" />
      <Button
        str="Let's write a post"
        onClick={startButtonHandler}
        disabled={false}
        className="text-center text-white bg-blue-800 rounded p-2 m-2 w-3/6"
      />
    </article>
  );
};

export default Home;
