import { useState } from "react";
import { useCookies } from "react-cookie";
import instance from "../../service/request";

import Button from "../../components/Button";

const Profile = () => {
  const [cookies] = useCookies();

  const memberID = cookies.member_id.slice(2, 26);

  const [inputValue, setInputValue] = useState({
    name: "",
    password: "",
  });

  const inputValueChangeHandler = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const editHandler = async (e) => {
    e.preventDefault();

    const items = {
      name: inputValue.name,
      password: inputValue.password,
    };

    try {
      const res = await instance.patch(`/mypage/${memberID}`, items);
      alert(res.data.message);
    } catch (err) {
      console.log("err", err);
      alert(err.response.data.message);
    }
  };

  return (
    <div className="flex flex-col text-center">
      <h2 className="text-3xl mb-4">Profile Edit</h2>
      <section>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          placeholder="Edit Name"
          value={inputValue.name}
          onChange={inputValueChangeHandler}
        />
      </section>
      <section>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          placeholder="Edit Password"
          value={inputValue.password}
          onChange={inputValueChangeHandler}
        />
      </section>
      <form onSubmit={editHandler}>
        <Button str="Edit" />
      </form>
    </div>
  );
};

export default Profile;
