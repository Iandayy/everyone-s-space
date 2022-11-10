const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.str}
    </button>
  );
};

export default Button;
