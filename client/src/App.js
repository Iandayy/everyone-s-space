import Header from "./containers/Header";
import Nav from "./containers/Nav";
import Layout from "./containers/Layout";
import Router from "./containers/Router";
import Footer from "./containers/Footer";

const App = () => {
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
