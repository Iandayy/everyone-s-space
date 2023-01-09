import loading from "../images/loading.svg";

const Loding = () => {
  return (
    <section className="flex justify-center items-center w-screen h-screen">
      <p>Loading...</p>
      <img src={loading} alt="loding" className="animate-spin h-5 w-5" />
    </section>
  );
};

export default Loding;
