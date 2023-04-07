import { Route, Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import Join from "../pages/auth/Join";
import Home from "../pages/Home";
import AllPosts from "../pages/posts/category/All";
import StudyPosts from "../pages/posts/category/Study";
import HobbyPosts from "../pages/posts/category/Hobby";
import DailyPosts from "../pages/posts/category/Daily";
import CreatePost from "../pages/posts/crud/Create";
import ReadPost from "../pages/posts/crud/Read";
import UpdatePost from "../pages/posts/crud/Update";

const ROUTES = [
  { path: "/", component: <Home /> },
  { path: "/login", component: <Login /> },
  { path: "/join", component: <Join /> },
  { path: "/posts/all", component: <AllPosts /> },
  { path: "/posts/study", component: <StudyPosts /> },
  { path: "/posts/hobby", component: <HobbyPosts /> },
  { path: "/posts/daily", component: <DailyPosts /> },
  { path: "/posts/create", component: <CreatePost /> },
  { path: "/posts/read", component: <ReadPost /> },
  { path: "/posts/update", component: <UpdatePost /> },
];

const Router = () => {
  const routes = ROUTES.map((route) => (
    <Route key={route.path} path={route.path} element={route.component} />
  ));

  return <Routes>{routes}</Routes>;
};

export default Router;
