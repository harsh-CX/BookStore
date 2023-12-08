import React from "react";
import Navbar from "./Navbar";
import { ImgComponent } from "./Imgs";
const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar></Navbar>

        <ImgComponent />
      </div>
    </>
  );
};

export default Home;
