import { useSetRecoilState } from "recoil";
import { categoryState } from "../recoil/atom/categoryState";
import Rink from "../components/Rink";
import mailBox from "../images/mailbox.jpg";

const Home = () => {
  const setCategory = useSetRecoilState(categoryState);

  return (
    <article className="flex flex-col items-center">
      <img src={mailBox} alt="mailBox" className="my-2 w-4/5" />
      <Rink
        path="/posts/all"
        onClick={() => setCategory("all")}
        className="text-center text-white bg-blue-800 hover:bg-blue-500 rounded p-2 w-3/6"
      >
        Let's write a post
      </Rink>
    </article>
  );
};

export default Home;
