import { Fragment } from "react";
import { useLocation } from "react-router-dom";

import useNav from "../hooks/useNav";

const Nav = () => {
  const postCategory = ["all", "study", "hobby", "daily"];
  const mypageCategory = ["userInfo", "profile", "account"];

  const postNav = useNav({ categories: postCategory, to: "posts" });
  const mypageNav = useNav({ categories: mypageCategory, to: "mypage" });

  const path = useLocation().pathname;

  return (
    <Fragment>
      <>{path.includes("/posts") && <> {postNav}</>}</>
      <>{path.includes("/mypage") && <> {mypageNav}</>}</>
    </Fragment>
  );
};

export default Nav;
