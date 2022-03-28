import { HOME_TEXT } from "../../texts";

const Home = () => {
  return (
    <section id="home">
      <div className="flex flex-row w-full mt-20 md:mt-40 md:w-3/4">
        <div className="flex flex-col gap-4">
          <span className="text-3xl md:text-5xl">{HOME_TEXT.title}</span>
          <span className="text-2xl md:text-4xl subtitle">
            {HOME_TEXT.subtitle}
          </span>
          <p className="flex flex-col text-xl md:text-3xl leading-6">
            {HOME_TEXT.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
