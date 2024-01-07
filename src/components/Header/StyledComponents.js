import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  height: 50px;
  position: sticky;
  background-color: ${props => props.bgColor};
  scroll-behavior: smooth;
`

export const ProfileAndLogoutContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const NavBarListItems = styled.li`
  list-style-type: none;
  margin-right: 30px;
`

export const WebsiteLogoImage = styled.img`
  height: 30px;
  width: 140px;
`

export const ThemeButton = styled.button`
  color: ${props => props.color};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ProfileImage = styled.img`
  height: 35px;
  width: 35px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => props.color};
  border-color: ${props => props.color};
  border-width: 2px;
  border-style: solid;
  font-weight: 500;
  font-size: 16px;
  font-family: 'Roboto';
  border-radius: 5px;
  padding: 5px;
  width: 90px;
`
export const PopupDesign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  box-shadow: 0 2px 5px 0;
  border-radius: 5px;
  width: 350px;
  height: 180px;
`

export const PopupText = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  font-family: 'Roboto';
  margin-bottom: 30px;
`
export const HorizontalButtons = styled.div`
  display: flex;
  align-items: center;
`

export const CancelButton = styled.button`
  background-color: transparent;
  border: 2px solid #909090;
  color: #909090;
  font-size: 18px;
  font-family: 'Roboto';
  height: 40px;
  width: 90px;
  margin-right: 20px;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto';
  height: 40px;
  width: 90px;
`
