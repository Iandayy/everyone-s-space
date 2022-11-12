import { useCookies } from "react-cookie";

import Rink from "../components/Rink";
import Logout from "../pages/auth/Logout";

const User = () => {
  const [cookies] = useCookies();

  return (
    <>
      {cookies.member_id === undefined && (
        <article className="text-xl sm: text-text-lg">
          <Rink path="/login">Login</Rink>
          <Rink path="/join" className="ml-2">
            Join
          </Rink>
        </article>
      )}
      {cookies.member_id && (
        <article className="flex text-xl sm: text-text-lg">
          <Rink path="/mypage">Mypage</Rink>
          <Logout />
        </article>
      )}
    </>
  );
};

export default User;
