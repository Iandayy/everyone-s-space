import { Link } from "react-router-dom";

import User from "./User";

const Header = () => {
  return (
    <header className="flex justify-between items-center m-5 pb-5 text-blue-800">
      <article className="text-4xl sm:text-2xl s:text-xl">
        <Link to="/" className="cursor-pointer">
          <em className="border-solid border-blue-800 border-2 rounded-3xl font-bold p-2 shadow-md">
            Everyone's Post
          </em>
        </Link>
      </article>
      <User />
    </header>
  );
};

export default Header;
