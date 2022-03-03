import img from "./chain-agnostic.png";

const ChainAgnostic = () => {
  return (
    <section id="chain-agnostic">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col justify-center">
          <img
            className="object-scale-down w-[500px]"
            src={img}
            alt="_chain-agnostic"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-5xl">Chain Agnostic</span>
          <span className="text-4xl subtitle">
            Cortex works with any EVM supported blockchain
          </span>
          <p className="flex flex-col text-3xl leading-normal">
            Define flows to work with smart contracts on Ethereum, Polygon,
            Arbitrum or any other EVM supported chain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChainAgnostic;
