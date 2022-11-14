import { Suspense } from "react";
import { RecoilRoot } from "recoil";

import Header from "./containers/Header";
import Nav from "./containers/Nav";
import Layout from "./containers/Layout";
import Router from "./containers/Router";
import Footer from "./containers/Footer";

const App = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Nav />
        <Layout>
          <Router />
        </Layout>
        <Footer />
      </Suspense>
    </RecoilRoot>
  );
};

export default App;
