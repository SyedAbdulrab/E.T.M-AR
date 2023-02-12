import React from "react";
import { animateScroll } from "react-scroll";
import {FaFacebook,FaLinkedin,FaInstagram,FaTwitter} from 'react-icons/fa'
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIcons,
  SocialLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const toggleHome = () => {
  animateScroll.scrollToTop()
}

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> About Us </FooterLinkTitle>
                <FooterLink to="https://www.instagram.com/syed_x34/">Testimonials</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">How It Works</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">Careers</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">Investors</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">Terms of Service</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle> About Us </FooterLinkTitle>
                <FooterLink to="https://www.instagram.com/syed_x34/">Testimonials</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">How It Works</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">Careers</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">Investors</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> About Us </FooterLinkTitle>
                <FooterLink to="https://www.instagram.com/syed_x34/">Testimonials</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">How It Works</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">Careers</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">Investors</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">Terms of Service</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle> About Us </FooterLinkTitle>
                <FooterLink to="https://www.instagram.com/syed_x34/">Testimonials</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">How It Works</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">Careers</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">Investors</FooterLink>
                <FooterLink to="https://www.instagram.com/syed_x34/">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>Syed Abdulrab</SocialLogo>
              <WebsiteRights>
                E.T.M {new Date().getFullYear()}: A design inspired by dolla - Brian design 
              </WebsiteRights>
              <SocialIcons>
                <SocialLink href="https://www.instagram.com/syed_x34/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/syed_x34/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/syed_x34/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/syed_x34/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
