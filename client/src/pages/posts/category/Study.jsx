import { useRecoilValue } from "recoil";
import { postCategoryState } from "../../../recoil/selector/postCategoryState";
import useCategory from "../../../hooks/useCategory";

const Study = () => {
  const posts = useRecoilValue(postCategoryState);
  const StudyCategory = useCategory({ title: "Study", posts });

  return <>{StudyCategory}</>;
};

export default Study;
