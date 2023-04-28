import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { categoryState } from "../recoil/atom/categoryState";
import Button from "../components/Button";
import nightSky from "../images/nightSky.jpg";

const Home = () => {
  const setCategory = useSetRecoilState(categoryState);
  const navigate = useNavigate();

  const startButtonHandler = () => {
    setCategory("all");
    navigate("/posts/all");
  };

  return (
    <article className="flex flex-col-reverse items-center absolute left-0 right-0 top-0 h-screen bg-nightSky bg-bottom bg-cover">
      <Button
        str="Let's write a post"
        onClick={startButtonHandler}
        disabled={false}
        className="p-4 m-24 w-1/2 text-center text-xl text-white font-black bg-slate-50/20 border-slate-50 rounded outline-transparent hover:outline-white/50"
      />
    </article>
  );
};

export default Home;
