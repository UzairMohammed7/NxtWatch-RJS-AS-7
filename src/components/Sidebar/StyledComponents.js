import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  background-size: cover;
  width: 280px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  position: -webkit-sticky;
`
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 30px;
  flex-grow: 1;
`

export const TabList = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 55px;
`
export const NavLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 13px;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 15px;
`
export const TabText = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  font-family: 'Roboto';
  margin-left: 15px;
  width: 150px;
`
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
`
export const ContactUsHeading = styled.h1`
  color: ${props => props.color};
  font-size: 20px;
  font-family: 'Roboto';
  width: 140px;
`

export const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: space-around;
`
export const SocialMediaImages = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
  cursor: pointer;
`
export const SocialDesc = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-family: 'Roboto';
  width: 140px;
  margin-left: 15px;
`
