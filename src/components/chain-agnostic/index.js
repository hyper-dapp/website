import img from "./chain-agnostic.png";
import { CHAIN_AGNOSTIC_TEXT } from "../../texts";

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
          <span className="text-3xl md:text-5xl">
            {CHAIN_AGNOSTIC_TEXT.title}
          </span>
          <span className="text-2xl md:text-4xl subtitle">
            {CHAIN_AGNOSTIC_TEXT.subtitle}
          </span>
          <p className="flex flex-col text-xl md:text-3xl leading-normal">
            {CHAIN_AGNOSTIC_TEXT.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChainAgnostic;
