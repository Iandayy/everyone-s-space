import { useSetRecoilState } from "recoil";
import { categoryState } from "../recoil/atom/categoryState";
import Rink from "../components/Rink";

const Nav = () => {
  const setCategory = useSetRecoilState(categoryState);
  const categories = ["all", "study", "hobby", "daily"];

  return (
    <nav className="flex justify-center text-center m-5 pb-5 border-b-2">
      {categories.map((category) => (
        <Rink
          key={`${category}`}
          path={`/${category}`}
          onClick={() => setCategory(category)}
          className="bg-blue-800 text-white rounded p-2 w-3/6"
        >{`${category}`}</Rink>
      ))}
    </nav>
  );
};

export default Nav;
