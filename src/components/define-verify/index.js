import { DEFINE_VERIFY_TEXT } from "../../texts";
import img from "./cortex.png";

const DefineVerify = () => {
  return (
    <section id="solution">
      <div className="flex flex-col md:flex-row md:flex-row-reverse gap-10">
        <div className="flex flex-col justify-center items-center">
          <img
            className="object-scale-down w-[250px] md:w-[950px]"
            src={img}
            alt="_cortex"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <span className="text-3xl md:text-5xl">
            {DEFINE_VERIFY_TEXT.title}
          </span>
          <span className="text-2xl md:text-4xl subtitle">
            {DEFINE_VERIFY_TEXT.subtitle}
          </span>
          <p className="flex flex-col text-xl md:text-3xl leading-normal">
            {DEFINE_VERIFY_TEXT.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DefineVerify;
