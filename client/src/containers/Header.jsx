import { Link } from "react-router-dom";

import User from "./User";

const Header = () => {
  return (
    <header className="flex justify-between items-center m-5 mb-10 text-blue-800">
      <Link
        to="/"
        className="cursor-pointer text-4xl sm:text-2xl s:text-xl my-2"
      >
        <em className="border-solid border-blue-800 border-2 rounded-3xl font-bold p-2 shadow-md hover:shadow-2xl">
          Everyone' Space
        </em>
      </Link>
      <User />
    </header>
  );
};

export default Header;
