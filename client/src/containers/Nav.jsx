import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useMemo } from "react";
import { categoryState } from "../recoil/atom/categoryState";
import useNav from "../hooks/useNav";

const Nav = () => {
  const { categories, to } = useNav();
  const [currentCategory, setCurrentCategory] = useRecoilState(categoryState);

  const showNavigation = useMemo(() => {
    return categories.length !== 0 && to.length !== 0;
  }, [categories, to]);

  return (
    <>
      {showNavigation && (
        <nav className="flex justify-center text-center p-5 border-b-2 z-10">
          {categories.map((category) => (
            <Link
              key={category}
              to={`${to}/${category}`}
              onClick={() => setCurrentCategory(category)}
              className={`${
                category === currentCategory
                  ? "bg-blue-800 text-white"
                  : "text-blue-800  hover:bg-blue-300/20"
              } text-lg font-bold rounded p-2 w-3/6`}
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
