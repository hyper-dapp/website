import img from "./chain-agnostic.png";

const ChainAgnostic = () => {
  return (
    <section id="chain-agnostic">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col justify-center items-center">
          <img
            className="object-scale-down w-[250px] md:w-[500px]"
            src={img}
            alt="_chain-agnostic"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <span className="text-3xl md:text-5xl">Chain Agnostic</span>
          <span className="text-2xl md:text-4xl subtitle">
            HyperDapp works with any EVM supported blockchain
          </span>
          <p className="flex flex-col text-xl md:text-3xl leading-normal">
            Define front-end workflows for any smart contracts on Ethereum,
            Polygon, Arbitrum or any other EVM supported chain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChainAgnostic;
