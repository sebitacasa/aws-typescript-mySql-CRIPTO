import React from "react";
import CaptionCarousel from "./Carrousel";
import StatsGridWithImage from "./Features";
import SmallWithSocial from "./Footer";
import Nav from "./NavBar";

function Home() {
  return (
    <div>
      <Nav />
      <CaptionCarousel />
      <StatsGridWithImage />
      <SmallWithSocial />
    </div>
  );
}

export default Home;
