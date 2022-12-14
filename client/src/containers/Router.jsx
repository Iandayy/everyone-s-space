import { Route, Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import Join from "../pages/auth/Join";
import UserInfo from "../pages/mypage/UserInfo";
import Profile from "../pages/mypage/Profile";
import Account from "../pages/mypage/Account";
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
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/mypage/userInfo" element={<UserInfo />} />
      <Route path="/mypage/profile" element={<Profile />} />
      <Route path="/mypage/account" element={<Account />} />
      <Route path="/" element={<Home />} />
      <Route path="/posts/all" element={<AllPosts />} />
      <Route path="/posts/study" element={<StudyPosts />} />
      <Route path="/posts/hobby" element={<HobbyPosts />} />
      <Route path="/posts/daily" element={<DailyPosts />} />
      <Route path="/posts/create" element={<CreatePost />} />
      <Route path="/posts/read" element={<ReadPost />} />
      <Route path="/posts/update" element={<UpdatePost />} />
    </Routes>
  );
};

export default Router;
