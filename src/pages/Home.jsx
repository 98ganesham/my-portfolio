import React from "react";
import HeroHeader from "../components/heroComponents/HeroHeader";
import PaddingBox from "../assets/frame/PaddingBox";
import HeroBody from "../components/heroComponents/HeroBody";
import HeroFooter from "../components/heroComponents/HeroFooter";

const Home = () => {
  return (
    <PaddingBox>
      <HeroHeader />
      <HeroBody />
      <HeroFooter />
    </PaddingBox>
  );
};

export default Home;
