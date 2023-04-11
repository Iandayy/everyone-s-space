import { Route, Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import Join from "../pages/auth/Join";
import Home from "../pages/Home";
import AllPosts from "../pages/posts/category/All";
import UniversePosts from "../pages/posts/category/Universe";
import AlienPosts from "../pages/posts/category/Alien";
import MysteryPosts from "../pages/posts/category/Mystery";
import CreatePost from "../pages/posts/crud/Create";
import ReadPost from "../pages/posts/crud/Read";
import UpdatePost from "../pages/posts/crud/Update";

const ROUTES = [
  { path: "/", component: <Home /> },
  { path: "/login", component: <Login /> },
  { path: "/join", component: <Join /> },
  { path: "/posts/all", component: <AllPosts /> },
  { path: "/posts/universe", component: <UniversePosts /> },
  { path: "/posts/alien", component: <AlienPosts /> },
  { path: "/posts/mystery", component: <MysteryPosts /> },
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
