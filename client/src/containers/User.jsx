import { useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";

import { categoryState } from "../recoil/atom/categoryState";
import Rink from "../components/Rink";
import Logout from "../pages/auth/Logout";
import Time from "./Time";

const User = () => {
  const [cookies] = useCookies();

  const path = useLocation().pathname;

  const setCategory = useSetRecoilState(categoryState);

  const categoryHandler = () => {
    if (path.includes("/posts")) setCategory("userInfo");
    if (path.includes("/mypage")) setCategory("all");
  };

  return (
    <>
      {cookies.login === undefined && (
        <article className="text-xl sm: text-text-lg">
          <Rink path="/login">Login</Rink>
          <Rink path="/join" className="ml-2">
            Join
          </Rink>
        </article>
      )}
      {cookies.login && (
        <article className="flex text-xl sm: text-text-lg">
          <Time />
          {path.includes("/posts") && (
            <Rink path="/mypage/userInfo" onClick={categoryHandler}>
              Mypage
            </Rink>
          )}
          {path.includes("/mypage") && (
            <Rink path="/posts/all" onClick={categoryHandler}>
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
