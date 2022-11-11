import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import AllPosts from "../pages/posts/category/All";
import StudyPosts from "../pages/posts/category/Study";
import HobbyPosts from "../pages/posts/category/Hobby";
import DailyPosts from "../pages/posts/category/Daily";
import CreatePost from "../pages/posts/crud/Create";
import ReadPost from "../pages/posts/crud/Read";
import UpdatePost from "../pages/posts/crud/Update";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all" element={<AllPosts />} />
      <Route path="/study" element={<StudyPosts />} />
      <Route path="/hobby" element={<HobbyPosts />} />
      <Route path="/daily" element={<DailyPosts />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/read" element={<ReadPost />} />
      <Route path="/update" element={<UpdatePost />} />
    </Routes>
  );
};

export default Router;
