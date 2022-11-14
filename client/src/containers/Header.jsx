import Rink from "../components/Rink";

import User from "./User";

const Header = () => {
  return (
    <header className="flex justify-between items-center m-5 pb-5 text-blue-800">
      <article className="text-3xl sm:text-2xl">
        <strong className="border-solid border-blue-800 border-2 rounded-3xl p-2">
          <Rink path="/" className="cursor-pointer">
            <em>everyone's post</em>
          </Rink>
        </strong>
      </article>
      <User />
    </header>
  );
};

export default Header;
