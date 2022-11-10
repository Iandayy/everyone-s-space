import Rink from "../components/Rink";

const Header = () => {
  return (
    <header className="text-3xl m-5 pb-5 text-blue-800 ">
      <strong>
        <em className="border-solid border-blue-800 border-2 rounded-3xl p-2">
          <Rink />
          everyone's post
        </em>
      </strong>
    </header>
  );
};

export default Header;
