const Button = (props) => {
  return (
    <button
      className={`${props.className} ${
        props.disabled
          ? "bg-gray-400 hover:bg-gray-400 cursor-default outline outline-gray-400"
          : "bg-blue-800 outline outline-blue-800 hover:outline-offset-2"
      } m-1 text-white rounded p-2 shadow-lg`}
      onClick={props.onClick}
    >
      {props.str}
    </button>
  );
};

export default Button;
