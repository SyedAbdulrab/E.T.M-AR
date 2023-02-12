import React, { useState } from "react";
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from "./HeroElements";
import Video from "../../videos/video1.mp4";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ButtonElement";
import { animateScroll } from "react-scroll";

const HeroSection = () => {
    const [hover,setHover] = useState(false)

    const toggleHover = () => {
        setHover(prevHover => !prevHover)
    }

    const animatedScroll = () => {
      animateScroll.scrollTo(1720)
    }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} autoPlay loop muted type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to the Real World !</HeroH1>
        <HeroP>
            Tired of your usual 9-5 low-revenue high-effort job that you'll be doing for the rest of your life?
            E.T.M - Escape the Matrix was made solely for you. Scroll..
        </HeroP>
        <HeroBtnWrapper>
            <Button primary="true" dark="true" onClick={animatedScroll} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Get Started { hover ? <ArrowForward/> : <ArrowRight/> }</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

// My unmatched percpicacity, coupled with sheer indefatigability makes me a
// feared opponent in any realm of human endeavour.