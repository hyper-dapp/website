import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <section id="home">
      <div className="flex flex-row w-full mt-20 md:mt-40 md:w-3/4">
        <div className="flex flex-col gap-4">
          <span className="text-3xl md:text-5xl">
            A protocol for creating and distributing verifiable dApp front-ends
          </span>
          <span className="text-2xl md:text-4xl subtitle">
            Smart contracts require smart interactions
          </span>
          <p className="flex flex-col text-xl md:text-3xl leading-normal">
            Smart contracts on the blockchain are decentralized, immutable and
            verifiable. HyperDapp powers user interfaces to be as well, by
            providing developers the tools to generate verifiable and trustless
            front-ends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
