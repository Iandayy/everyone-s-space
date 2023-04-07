const Button = (props) => {
  return (
    <button
      className={`${props.className} bg-blue-800 text-white hover:bg-blue-500 rounded p-2 shadow-lg`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.str}
    </button>
  );
};

export default Button;
