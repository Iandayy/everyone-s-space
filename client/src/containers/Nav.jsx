import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import useNav from "../hooks/useNav";
import { categoryState } from "../recoil/atom/categoryState";

const Nav = () => {
  const { categories, to } = useNav();
  const [currentCategory, setCurrentCategory] = useRecoilState(categoryState);

  return (
    <>
      {categories.length !== 0 && to.length !== 0 && (
        <nav className="flex justify-center text-center m-5 pb-5 border-b-2">
          {categories.map((category) => (
            <Link
              key={category}
              to={`${to}/${category}`}
              onClick={() => setCurrentCategory(category)}
              className={`${
                category === currentCategory
                  ? "bg-blue-800 text-white"
                  : "text-blue-800"
              } hover:bg-blue-800 hover:text-white text-lg font-bold rounded p-2 w-3/6`}
            >
              {category}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};

export default Nav;
