import { useCookies } from "react-cookie";

import Button from "../../components/Button";

const Account = () => {
  const [cookies] = useCookies();

  const deleteHandler = () => {
    window.localStorage.clear();
  };
  return (
    <div className="flex flex-col text-center">
      <h2 className="text-3xl mb-4">Delete Account</h2>
      <section>
        <p className="text-lg pb-5">
          Are you sure you want to close your account?
        </p>
        <p className="text-lg pb-5">If you wish to cancel your account,</p>
        <p className="text-lg pb-5">please click the 'Delete' button below.</p>
      </section>
      <form
        action={`/deleteAccount/${cookies.member_id}?_method=DELETE`}
        method="POST"
      >
        <Button str="Delete" onClick={deleteHandler} />
      </form>
    </div>
  );
};

export default Account;
