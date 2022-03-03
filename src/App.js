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
      <div className="container pb-16">
        <Home />
        <div className="flex flex-col gap-30 md:gap-72">
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
