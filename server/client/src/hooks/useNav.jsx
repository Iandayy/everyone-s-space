import { useRecoilState } from "recoil";

import { categoryState } from "../recoil/atom/categoryState";
import Rink from "../components/Rink";

const useNav = ({ categories, to }) => {
  const [currentCategory, setCurrentCategory] = useRecoilState(categoryState);

  return (
    <>
      <nav className="flex justify-center text-center m-5 pb-5 border-b-2">
        {categories.map((category) => (
          <Rink
            key={`${category}`}
            path={`${to}/${category}`}
            onClick={() => setCurrentCategory(category)}
            className={`${
              category === currentCategory
                ? "bg-blue-800 text-white"
                : "text-blue-800"
            } hover:bg-blue-800 hover:text-white text-lg font-bold rounded p-2 w-3/6`}
          >{`${category}`}</Rink>
        ))}
      </nav>
    </>
  );
};

export default useNav;
