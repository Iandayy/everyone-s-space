import { useSetRecoilState } from "recoil";
import { useLocation } from "react-router-dom";

import { categoryState } from "../recoil/atom/categoryState";
import Rink from "../components/Rink";

const Nav = () => {
  const path = useLocation().pathname;
  const currentCategory = path.slice(1);
  const categories = ["all", "study", "hobby", "daily"];

  const setCategory = useSetRecoilState(categoryState);

  return (
    <>
      {path !== "/" && path !== "/create" && path !== "/update" && (
        <nav className="flex justify-center text-center m-5 pb-5 border-b-2">
          {categories.map((category) => (
            <Rink
              key={`${category}`}
              path={`/${category}`}
              onClick={() => setCategory(category)}
              className={`${
                currentCategory === category && "bg-blue-800 text-white"
              } hover:bg-blue-800 hover:text-white text-blue-800 rounded text-lg font-bold p-2 w-3/6`}
            >{`${category}`}</Rink>
          ))}
        </nav>
      )}
    </>
  );
};

export default Nav;
