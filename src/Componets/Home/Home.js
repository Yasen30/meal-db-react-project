import React from "react";
import Footer from "../Footer/Footer";
import Meals from "../Meals/Meals";
import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Meals></Meals>
      <Footer></Footer>
    </div>
  );
};

export default Home;
