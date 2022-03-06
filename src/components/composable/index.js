import img from "./composable.png";

const Composable = () => {
  return (
    <section id="composable">
      <div className="flex flex-col md:flex-row md:flex-row-reverse gap-10">
        <div className="flex flex-col justify-center items-center">
          <img
            className="object-scale-down w-[250px] md:w-[950px]"
            src={img}
            alt="_composable"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <span className="text-3xl md:text-5xl">
            Composable and Interoperable for the Web3 world
          </span>
          <span className="text-2xl md:text-4xl subtitle">
            Define the business logic once and use everywhere
          </span>
          <p className="flex flex-col text-xl md:text-3xl leading-normal">
            Cortex is designed to work on any text based interface. Allowing
            chat bots, CLIs, meta-verse platforms or any platform supporting
            text to use the cortex engine to interface with smart contracts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Composable;
