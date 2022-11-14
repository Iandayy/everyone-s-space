import { useRecoilValue } from "recoil";
import { postCategoryState } from "../../../recoil/selector/postCategoryState";
import useCategory from "../../../hooks/useCategory";

const Hobby = () => {
  const posts = useRecoilValue(postCategoryState);
  const HobbyCategory = useCategory({ title: "Hobby", posts });

  return <>{HobbyCategory}</>;
};

export default Hobby;
