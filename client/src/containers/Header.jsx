import Rink from "../components/Rink";

import User from "./User";

const Header = () => {
  return (
    <header className="flex justify-between items-center m-5 pb-5 text-blue-800">
      <article className="text-4xl sm:text-2xl s:text-xl">
        <Rink path="/" className="cursor-pointer">
          <em className="border-solid border-blue-800 border-2 rounded-3xl font-bold p-2 shadow-md">
            everyone's post
          </em>
        </Rink>
      </article>
      <User />
    </header>
  );
};

export default Header;
