import { Link } from "react-router-dom";

const Rink = (props) => {
  return (
    <Link
      to={props.path}
      value={props.value}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
};

export default Rink;
