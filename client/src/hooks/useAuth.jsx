import Button from "../components/Button";

const useAuth = (props) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl text-center mb-5">{props.title}</h2>
      <form
        action={`/${props.path}`}
        method="POST"
        className="flex flex-col items-center p-5 mb-10 border-2 rounded-md w-80"
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
            className="text-center w-48 p-1 border-2 rounded-md "
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
            className="text-center w-48 p-1 border-2 rounded-md"
          />
        </section>
        {props.check && (
          <section className="flex flex-col text-center mb-10">
            <label htmlFor="check" className="text-lg mb-2">
              Check
            </label>
            <input
              id="check"
              name="check"
              type="password"
              placeholder="Check Your Password"
              className="text-center w-48 p-1 border-2 rounded-md"
            />
          </section>
        )}
        <Button
          str={props.title}
          onClick={props.onCategory}
          className="w-48 mb-5"
        />
      </form>
    </div>
  );
};

export default useAuth;
