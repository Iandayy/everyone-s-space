import Header from "./containers/Header";
import Nav from "./containers/Nav";
import Layout from "./containers/Layout";
import Router from "./containers/Router";
import Footer from "./containers/Footer";

import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <Nav />
      <Layout>
        <Router />
      </Layout>
      <Footer />
    </>
  );
};

export default App;
