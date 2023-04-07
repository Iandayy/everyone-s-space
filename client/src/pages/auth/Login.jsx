import useAuth from "../../hooks/useAuth";
import AuthForm from "./AuthForm";

const Login = () => {
  const { inputValue, inputValueChangeHandler, submitHandler } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(
      "login",
      () => {
        window.location.replace("/posts/all");
      },
      () => {}
    );
  };

  return (
    <AuthForm
      currentPage="Login"
      inputValue={inputValue}
      onInputChange={inputValueChangeHandler}
      onSubmit={onSubmit}
    />
  );
};

export default Login;
