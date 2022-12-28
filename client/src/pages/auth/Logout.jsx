import instance from "../../service/request.js";

const Logout = () => {
  const logoutHandler = async () => {
    const res = await instance.post("/auth/logout");
    alert(res.data.message);
    window.location.replace("/");
  };
  return (
    <form>
      <button onClick={logoutHandler}>Logout</button>
    </form>
  );
};

export default Logout;
