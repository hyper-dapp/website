import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./assets/particles-config.json";
import editor from "./assets/images/cortex.png";
import registry from "./assets/images/decentralized.png";
import interpreter from "./assets/images/composable.png";
import chainAgnostic from "./assets/images/chain-agnostic.png";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import { CHAIN_AGNOSTIC, INTERPRETER, REGISTRY, EDITOR, HOME } from "./texts";

const App = () => {
  const links = [
    { href: "#editor", name: "Solutions" },
    {
      href: "https://drive.google.com/file/d/1YsDgDs1tEj19PQ-mmqIohBBhEn7erd8C/view?usp=sharing",
      name: "Whitepaper",
      target: "_blank",
    },
  ];

  const particlesInit = (main) => {};

  const particlesLoaded = (container) => {};

  return (
    <div>
      <Particles
        params={particlesConfig}
        className="App-particles__container"
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <div className="bg-[#272a2d] text-white">
        <NavBar links={links} />
        <div className="container mx-auto p-16">
          <div className="flex flex-col gap-40 sm:gap-80">
            <section id="home" className="mt-24 sm:mt-56">
              <Section
                title={HOME.title}
                subtitle={HOME.subtitle}
                description={HOME.description}
              />
            </section>
            <section id="editor">
              <Section
                img={editor}
                title={EDITOR.title}
                subtitle={EDITOR.subtitle}
                description={EDITOR.description}
                reverse={true}
              />
            </section>
            <section id="registry">
              <Section
                img={registry}
                title={REGISTRY.title}
                subtitle={REGISTRY.subtitle}
                description={REGISTRY.description}
              />
            </section>
            <section id="interpreter">
              <Section
                img={interpreter}
                title={INTERPRETER.title}
                subtitle={INTERPRETER.subtitle}
                description={INTERPRETER.description}
                reverse={true}
              />
            </section>
            <section id="chain-agnostic">
              <Section
                img={chainAgnostic}
                title={CHAIN_AGNOSTIC.title}
                subtitle={CHAIN_AGNOSTIC.subtitle}
                description={CHAIN_AGNOSTIC.description}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
