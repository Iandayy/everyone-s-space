import { Link, useLocation } from "react-router-dom";
import User from "./User";

// m-5 : 위 아래 좌 우 모두 마진 20px
// mb-10: 아래에만 마진 40px
// mb: 40px padding: 20px

// apple: "flex justify-between items-center p-5 mb-5 text-blue-800"

const Header = () => {
  const homePath = useLocation().pathname === "/";
  return (
    <header className="flex justify-between items-center p-5 z-10 relative">
      <Link
        to="/"
        className="cursor-pointer text-4xl sm:text-2xl s:text-xl py-2 "
      >
        <em
          className={`${
            homePath
              ? "text-slate-50  border-slate-50 hover:shadow-slate-50"
              : " text-blue-800 border-blue-800 hover:shadow-blue-800"
          } border-solid font-black rounded-3xl p-2 shadow-md border-2`}
        >
          Everyone' Space
        </em>
      </Link>
      <User />
    </header>
  );
};

export default Header;
