import useAuth from "../../hooks/useAuth";
import AuthForm from "./AuthForm";

const Login = () => {
  const { inputValue, inputValueChangeHandler, submitHandler, isValid } =
    useAuth();

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
      isValid={isValid}
    />
  );
};

export default Login;
