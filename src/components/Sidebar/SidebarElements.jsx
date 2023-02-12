import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkR} from 'react-router-dom'
import { Link as LinkS } from "react-scroll";
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
 
`;

export const CloseIcon = styled(FaTimes)`  
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
`

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    
`

export const SidebarLink = styled(LinkS)`
     color: #fff;
    cursor:pointer;
    font-size: 1.5rem;
    margin: 20px;
    text-decoration: none;
    transition: .15s all ease-in-out;

    &:hover{
        color: #ffffff;
        font-size: 3rem;
        border-bottom: 3px solid green;
    }
`

export const SidebarBtnWrapper = styled.div`
    /* padding-top: 40px; */
    margin-top: 120px;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 30px;
    color: #010606;
    font-size: 1.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition:  0.2s all ease-in-out;
        font-size: 1.6rem;
        background-color: #fff;
        color: #010606;
    }
`