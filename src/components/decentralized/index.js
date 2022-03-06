import img from "./decentralized.png";

const Decentralized = () => {
  return (
    <section id="decentralized">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col justify-center items-center">
          <img
            className="object-scale-down w-[250px] md:w-[950px]"
            src={img}
            alt="_decentralized"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <span className="text-3xl md:text-5xl">CortexHub</span>
          <span className="text-2xl md:text-4xl subtitle">
            A decentralized registry for cortex flows
          </span>
          <p className="flex flex-col text-xl md:text-3xl leading-normal">
            CortexHub allows developers to publish their cortex flow so that
            their dApp business logic is always available and ready to use by
            anyone who wishes to interact with their smart contracts in a
            predictable and secure manner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Decentralized;
