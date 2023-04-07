import { useMemo } from "react";

const useCategory = (title, posts) => {
  const filteredPosts = useMemo(() => {
    if (title === "All") return posts;
    return posts.filter((post) => post.category === title.toLowerCase());
  }, [title, posts]);

  return filteredPosts;
};

export default useCategory;
