import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";

import { categoryState } from "../recoil/atom/categoryState";
import Rink from "../components/Rink";

const Nav = () => {
  const path = useLocation().pathname;
  const categories = ["all", "study", "hobby", "daily"];

  const [currentCategory, setCurrentCategory] = useRecoilState(categoryState);

  return (
    <>
      {path !== "/" &&
        path !== "/create" &&
        path !== "/update" &&
        path !== "/join" &&
        path !== "/login" && (
          <nav className="flex justify-center text-center m-5 pb-5 border-b-2">
            {categories.map((category) => (
              <Rink
                key={`${category}`}
                path={`/${category}`}
                onClick={() => setCurrentCategory(category)}
                className={`${
                  category === currentCategory
                    ? "bg-blue-800 text-white"
                    : "text-blue-800"
                } hover:bg-blue-800 hover:text-white text-lg font-bold rounded p-2 w-3/6`}
              >{`${category}`}</Rink>
            ))}
          </nav>
        )}
    </>
  );
};

export default Nav;
