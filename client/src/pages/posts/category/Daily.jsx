import { useRecoilValue } from "recoil";
import { postCategoryState } from "../../../recoil/selector/postCategoryState";
import useCategory from "../../../hooks/useCategory";

const Daily = () => {
  const posts = useRecoilValue(postCategoryState);
  const DailyCategory = useCategory({ title: "Daily", posts });

  return <>{DailyCategory}</>;
};

export default Daily;
