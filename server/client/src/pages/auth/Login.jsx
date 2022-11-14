import { useSetRecoilState } from "recoil";
import useAuth from "../../hooks/useAuth";

import { categoryState } from "../../recoil/atom/categoryState";

const Login = () => {
  const setCategory = useSetRecoilState(categoryState);

  const loginHandler = () => {
    setCategory("all");
  };

  const login = useAuth({
    title: "Login",
    path: "login",
    check: false,
    onCategory: loginHandler,
  });
  return <>{login}</>;
};

export default Login;
