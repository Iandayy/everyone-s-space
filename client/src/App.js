import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Header from "./containers/Header";
import Nav from "./containers/Nav";
import Layout from "./containers/Layout";
import Home from "./pages/Home";
import AllPosts from "./pages/posts/category/All";
import StudyPosts from "./pages/posts/category/Study";
import HobbyPosts from "./pages/posts/category/Hobby";
import DailyPosts from "./pages/posts/category/Daily";

import CreatePost from "./pages/posts/crud/Create";
import ReadPost from "./pages/posts/crud/Read";
import UpdatePost from "./pages/posts/crud/Update";
import Footer from "./containers/Footer";

const App = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Nav />
        <Layout>
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
        </Layout>
        <Footer />
      </Suspense>
    </RecoilRoot>
  );
};

export default App;
