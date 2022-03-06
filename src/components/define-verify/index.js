import img from "./cortex.png";

const DefineVerify = () => {
  return (
    <section id="define-verify">
      <div className="flex flex-col md:flex-row md:flex-row-reverse gap-10">
        <div className="flex flex-col justify-center items-center">
          <img
            className="object-scale-down w-[250px] md:w-[950px]"
            src={img}
            alt="_cortex"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <span className="text-3xl md:text-5xl">Cortex</span>
          <span className="text-2xl md:text-4xl subtitle">
            A behavior engine to power smart contract interactions
          </span>
          <p className="flex flex-col text-xl md:text-3xl leading-normal">
            Cortex allows developers to define business logic behavior for
            interfacing with smart contracts. Each business logic flow is
            packaged into an artifact that is verifiable, immutable and
            trustless. Allowing predictable and secure client side interactions
            with the blockchain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DefineVerify;
