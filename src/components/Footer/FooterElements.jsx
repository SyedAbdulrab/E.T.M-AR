import styled from "styled-components";
import { Link } from "react-router-dom";
export const FooterContainer = styled.div`
  background-color: #101522;
`;
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  align-items: flex-start;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0px;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`

  text-decoration: none;
  color: #fff;
  font-size: 14px;
  margin-bottom: 0.5rem;

  &:hover {
   color: #01bf71;
   transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;

`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    @media screen and (max-width:820px){
        flex-direction : column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-content: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    &:hover{
        color:#01bf71;
        
    }
`
export const WebsiteRights = styled.small`
    color:#fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialLink =  styled.a`
    color: #fff;
    font-size: 24px;
`
