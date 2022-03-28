import img from "./composable.png";
import { COMPOSABLE_TEXT } from "../../texts";

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
          <span className="text-3xl md:text-5xl">{COMPOSABLE_TEXT.title}</span>
          <span className="text-2xl md:text-4xl subtitle">
            {COMPOSABLE_TEXT.subtitle}
          </span>
          <p className="flex flex-col text-xl md:text-3xl leading-normal">
            {COMPOSABLE_TEXT.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Composable;
