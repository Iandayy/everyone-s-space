import useAuth from "../../hooks/useAuth";

const Join = () => {
  const join = useAuth({ title: "Join", path: "join", check: true });
  return <>{join}</>;
};

export default Join;
