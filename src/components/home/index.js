import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <section id="home">
      <div className="flex flex-col justify-center h-screen">
        <div className="flex flex-row w-full md:w-3/4">
          <div className="flex flex-col gap-4">
            <span className="text-5xl">
              Smart contracts require smart interactions
            </span>
            <span className="text-4xl subtitle">
              Create trustless front-end behaviors for your dApps
            </span>
            <p className="flex flex-col text-3xl leading-normal">
              Smart contracts on the blockchain are decentralized, immutable and
              verifiable. HyperDapp powers front-end behaviors to be as well by
              delivering security, efficiency, decentralization and transparency
              on the interface layer of dApps.
            </p>
            <div className="flex flex-row">
              <Button className="w-[160px]" size="lg" variant="outline-info">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
