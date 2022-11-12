import { Fragment } from "react";
import { useRecoilValue } from "recoil";

import { postsAllState } from "../../../recoil/selector/postsAllState";
import useCategory from "../../../hooks/useCategory";

const All = () => {
  const posts = useRecoilValue(postsAllState);
  const AllCategory = useCategory({ title: "All", posts });

  return <Fragment>{AllCategory}</Fragment>;
};

export default All;
