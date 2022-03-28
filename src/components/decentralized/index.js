import img from "./decentralized.png";
import { DECENTRALIZED_TEXT } from "../../texts";

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
          <span className="text-3xl md:text-5xl">
            {DECENTRALIZED_TEXT.title}
          </span>
          <span className="text-2xl md:text-4xl subtitle">
            {DECENTRALIZED_TEXT.subtitle}
          </span>
          <p className="flex flex-col text-xl md:text-3xl leading-normal">
            {DECENTRALIZED_TEXT.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Decentralized;
