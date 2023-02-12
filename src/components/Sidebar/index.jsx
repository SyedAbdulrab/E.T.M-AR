import React from 'react'
import { CloseIcon, Icon, SidebarBtnWrapper, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper } from './SidebarElements'

const Sidebar = (props) => {
  return (
    <>
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
        <Icon onClick={props.toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink to="about" onClick={props.toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="discover" onClick={props.toggle}>
                    Discover
                </SidebarLink>
                <SidebarLink to="services" onClick={props.toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to="signup" onClick={props.toggle}>
                    Sign Up
                </SidebarLink>
                <SidebarBtnWrapper>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SidebarBtnWrapper>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
    </>
  )
}

export default Sidebar