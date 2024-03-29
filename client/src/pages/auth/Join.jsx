import useAuth from "../../hooks/useAuth";
import AuthForm from "./AuthForm";

const Join = () => {
  const { inputValue, inputValueChangeHandler, submitHandler, isValid } =
    useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(
      "join",
      () => {
        window.location.replace("/login");
      },
      () => {}
    );
  };

  return (
    <AuthForm
      currentPage="Join"
      inputValue={inputValue}
      onInputChange={inputValueChangeHandler}
      onSubmit={onSubmit}
      isValid={isValid}
    />
  );
};

export default Join;
