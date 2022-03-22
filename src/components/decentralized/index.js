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
            Decentralized distribution for dApp front-ends
          </span>
          <p className="flex flex-col text-xl md:text-3xl leading-normal">
            CortexHub is a registry to allows developers to publish their front-end logic
            artifacts to be available and ready to use by any platform supporting the protocol.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Decentralized;
