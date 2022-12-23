const Logout = () => {
  const logoutHandler = () => {
    window.localStorage.clear();
  };
  return (
    <form action="/auth/logout" method="POST" className="ml-2">
      <button onClick={logoutHandler}>Logout</button>
    </form>
  );
};

export default Logout;
