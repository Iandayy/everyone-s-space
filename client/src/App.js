import { Suspense } from "react";
import { RecoilRoot } from "recoil";

import Loding from "./components/Loding";
import Header from "./containers/Header";
import Nav from "./containers/Nav";
import Layout from "./containers/Layout";
import Router from "./containers/Router";
import Footer from "./containers/Footer";

const App = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loding />}>
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
