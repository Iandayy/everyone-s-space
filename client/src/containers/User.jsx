import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import Rink from "../components/Rink";
import Logout from "../pages/auth/Logout";

const User = () => {
  const [cookies] = useCookies();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (cookies.login === undefined) setIsLogin(false);
    else setIsLogin(true);
  }, [cookies]);

  return (
    <>
      {!isLogin && (
        <article className="text-xl sm:text-lg s:text-base">
          <Rink path="/login" className="mr-2">
            Login
          </Rink>
          <Rink path="/join">Join</Rink>
        </article>
      )}
      {isLogin && (
        <article className="flex text-xl sm:text-lg s:text-base">
          <Logout />
        </article>
      )}
    </>
  );
};

export default User;
