import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const path = useLocation().pathname;

  const homePath = path === "/";
  const authPath = path === "/login" || path === "/join";
  return (
    <main
      className={`flex flex-col p-5 min-h-[calc(100vh-238px)] ${
        (authPath || homePath) && "h-[calc(100vh-152px)]"
      }`}
    >
      {props.children}
    </main>
  );
};

export default Layout;
