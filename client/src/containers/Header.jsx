import Rink from "../components/Rink";

const Header = () => {
  return (
    <header className="text-3xl m-5 pb-5 text-blue-800">
      <em className="border-solid border-blue-800 border-2 rounded-3xl p-2">
        <Rink path="/" className="cursor-pointer">
          <strong>everyone's post</strong>
        </Rink>
      </em>
    </header>
  );
};

export default Header;
