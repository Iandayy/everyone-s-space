import instance from "../../service/request.js";

const Logout = () => {
  const logoutHandler = async () => {
    try {
      const res = await instance.post("/auth/logout");
      alert(res.data.message);
      window.location.replace("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  return (
    <button
      onClick={logoutHandler}
      className="text-blue-800 hover:font-semibold"
    >
      Logout
    </button>
  );
};

export default Logout;
