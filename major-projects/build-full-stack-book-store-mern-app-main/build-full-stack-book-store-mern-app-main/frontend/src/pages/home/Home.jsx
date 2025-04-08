import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recommened from "./Recommened";
import News from "./News";
import Banners from "./Banners";

const Home = () => {
  return (
    <>
      <Banners />
      <Banner />
      <TopSellers />
      <Recommened />
      <News />
    </>
  );
};

export default Home;
