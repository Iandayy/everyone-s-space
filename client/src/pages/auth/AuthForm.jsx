import Button from "../../components/Button";

const AuthForm = ({
  currentPage,
  inputValue,
  onInputChange,
  onSubmit,
  isValid,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-80 p-5 border rounded-md shadow-md"
      >
        <h2 className="text-start text-4xl mb-12">{currentPage}</h2>
        <section className="flex flex-col mb-6">
          <label htmlFor="name" className="text-lg text-gray-600">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your Name"
            value={inputValue.name}
            onChange={onInputChange}
            className="p-2 border rounded-md shadow"
          />
        </section>
        <section className="flex flex-col mb-8">
          <label htmlFor="password" className="text-lg text-gray-600">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Your Password"
            value={inputValue.password}
            onChange={onInputChange}
            className="p-2 border rounded-md shadow"
          />
        </section>
        {currentPage === "Join" && (
          <section className="flex flex-col mb-8">
            <label htmlFor="check" className="text-lg mb-2 text-gray-600">
              Check
            </label>
            <input
              id="check"
              name="check"
              type="password"
              value={inputValue.check}
              onChange={onInputChange}
              placeholder="Check Your Password"
              className="p-2 border rounded-md shadow"
            />
          </section>
        )}
        <Button str={currentPage} className="" disabled={!isValid} />
      </form>
    </div>
  );
};

export default AuthForm;
