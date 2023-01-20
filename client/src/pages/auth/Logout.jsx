import instance from "../../service/request.js";

const Logout = () => {
  const logoutHandler = async () => {
    const res = await instance.post("/auth/logout");
    alert(res.data.message);
    window.location.replace("/");
  };
  return <button onClick={logoutHandler}>Logout</button>;
};

export default Logout;
