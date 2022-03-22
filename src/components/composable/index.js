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
            Composable interoperability for Web3
          </span>
          <span className="text-2xl md:text-4xl subtitle">
            Define the front-end logic once and use everywhere
          </span>
          <p className="flex flex-col text-xl md:text-3xl leading-normal">
            HyperDapp's interpreter engine, can be embedded through an iframe or
            into any text based interface. Supporting chat-bots, CLIs, mobile-apps,
            video games or metaverse platforms to interface with smart contracts
            through defined front-end workflows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Composable;
