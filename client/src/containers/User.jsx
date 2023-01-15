import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";

import { categoryState } from "../recoil/atom/categoryState";
import Rink from "../components/Rink";
import Logout from "../pages/auth/Logout";

const User = () => {
  const [cookies] = useCookies();
  const path = useLocation().pathname;

  const [isLogin, setIsLogin] = useState(false);
  const setCategory = useSetRecoilState(categoryState);

  useEffect(() => {
    if (cookies.login === undefined) setIsLogin(false);
    else setIsLogin(true);
  }, [cookies]);

  const categoryHandler = () => {
    if (path.includes("/posts")) setCategory("userInfo");
    if (path.includes("/mypage")) setCategory("all");
  };

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
          {path.includes("/posts") && (
            <Rink
              path="/mypage/userInfo"
              onClick={categoryHandler}
              className="mr-2"
            >
              Mypage
            </Rink>
          )}
          {path.includes("/mypage") && (
            <Rink path="/posts/all" onClick={categoryHandler} className="mr-2">
              Posts
            </Rink>
          )}
          <Logout />
        </article>
      )}
    </>
  );
};

export default User;
