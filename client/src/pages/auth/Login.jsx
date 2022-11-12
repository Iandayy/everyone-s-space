import Button from "../../components/Button";

const Login = () => {
  return (
    <div>
      <h2 className="text-4xl text-center mb-5">Login</h2>
      <form
        action="/login"
        method="POST"
        className="flex flex-col items-center p-5"
      >
        <section className="flex flex-col text-center mb-10">
          <label htmlFor="name" className="text-lg mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your Name"
            className="text-center p-1"
          />
        </section>
        <section className="flex flex-col text-center mb-10">
          <label htmlFor="password" className="text-lg mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Your Password"
            className="text-center p-1"
          />
        </section>
        <Button str="Login" />
      </form>
    </div>
  );
};

export default Login;
