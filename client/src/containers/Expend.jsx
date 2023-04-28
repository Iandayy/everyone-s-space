import Timer from "react-compound-timer";

const Expend = () => {
  return (
    <Timer initialTime={60000} direction="backward">
      {() => (
        <>
          <Timer.Minutes /> minutes
          <Timer.Seconds /> seconds
        </>
      )}
    </Timer>
  );
};

export default Expend;
