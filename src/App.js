import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./assets/particles-config.json";
import {
  ChainAgnostic,
  Composable,
  Decentralized,
  DefineVerify,
  Home,
  NavBar,
} from "./components";
import "./App.css";

const App = () => {
  const links = [
    { href: "#solution", name: "Solutions" },
    { href: "https://drive.google.com/file/d/1YsDgDs1tEj19PQ-mmqIohBBhEn7erd8C/view?usp=sharing", name: "Whitepaper", target: "_blank" }
  ];

  const particlesInit = (main) => {};

  const particlesLoaded = (container) => {};

  return (
    <div>
      <Particles params={particlesConfig} className="App-particles__container" init={particlesInit} loaded={particlesLoaded}/>
      <div className="bg-[#272a2d] text-white">
        <NavBar links={links} />
        <div className="container p-16">
          <Home />
          <div className="flex flex-col mt-40 gap-40 md:mt-80 md:gap-80">
            <DefineVerify />
            <Decentralized />
            <Composable />
            <ChainAgnostic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
