import React from "react";
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
    { href: "#define-verify", name: "Solutions" },
    { href: "#decentralized", name: "Sign up for Alpha Release" },
  ];

  return (
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
  );
};

export default App;
