import {Link, withRouter} from 'react-router-dom'

import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {
  NavHeader,
  WebsiteLogoImage,
  ProfileAndLogoutContainer,
  NavBarListItems,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  PopupDesign,
  PopupText,
  HorizontalButtons,
  CancelButton,
  ConfirmButton,
} from './StyledComponents'

import './index.css'

import ThemeContext from '../../context/ThemeContext'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {toggleTheme, isDarkTheme} = value

        const onClickToggleTheme = () => {
          toggleTheme()
        }

        const webSiteLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const themeLogo = isDarkTheme ? (
          <FiSun className="theme-icon" />
        ) : (
          <BsMoon className="theme-icon" />
        )

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        const buttonColor = isDarkTheme ? '#f9f9f9' : '#3b82f6'

        const bgColor = isDarkTheme ? '#181818' : '#ffffff'

        return (
          <NavHeader bgColor={bgColor}>
            <Link to="/">
              <WebsiteLogoImage src={webSiteLogo} alt="website logo" />
            </Link>
            <ProfileAndLogoutContainer>
              <NavBarListItems>
                <ThemeButton
                  data-testid="theme"
                  onClick={onClickToggleTheme}
                  color={textColor}
                >
                  {themeLogo}
                </ThemeButton>
              </NavBarListItems>
              <NavBarListItems>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavBarListItems>
              <NavBarListItems>
                <Popup
                  modal
                  trigger={
                    <LogoutButton
                      type="button"
                      data-tetid="iconButton"
                      color={buttonColor}
                    >
                      Logout
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupDesign bgColor={bgColor}>
                      <PopupText color={textColor}>
                        Are you sure, you want to logout?
                      </PopupText>
                      <HorizontalButtons>
                        <CancelButton
                          type="button"
                          data-tetid="closeButton"
                          onClick={() => close()}
                        >
                          Cancel
                        </CancelButton>
                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </HorizontalButtons>
                    </PopupDesign>
                  )}
                </Popup>
              </NavBarListItems>
            </ProfileAndLogoutContainer>
          </NavHeader>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(Header)
