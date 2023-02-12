import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjtwo } from "../components/InfoSection/Data";
import { NavBar } from "../components/Navbar";
import Services from "../components/services";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    console.log("Toggling..")
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>

      <Sidebar isOpen={isOpen} toggle={toggleOpen} />
      <NavBar toggle={toggleOpen}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}   />
      <InfoSection {...homeObjtwo}   />
      <Services/>
      <InfoSection {...homeObjThree} />
      <Footer/>
      
    </>
  );
};

export default Home;
