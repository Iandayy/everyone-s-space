import Rink from "../components/Rink";
import mailBox3 from "../images/mailbox3.jpg";

const Home = () => {
  return (
    <article className="flex flex-col items-center">
      <img src={mailBox3} alt="mailBox" className="my-2 w-4/5" />
      <Rink
        path="/all"
        className="text-center text-white bg-blue-800 hover:bg-blue-500 rounded p-2 w-3/6"
      >
        Let's write a post
      </Rink>
    </article>
  );
};

export default Home;
