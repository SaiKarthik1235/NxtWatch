import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import { BsMoon, BsBrightnessHigh } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavBar,
  LogoLink,
  NavBarLogo,
  NavBarItems,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  ModalContainer,
  ModalDesc,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  LogoutIconButton,
} from './styledComponents'

const Header = () => {
  const navigate = useNavigate()

  const onChangeTheme = (toggleTheme, isDarkTheme) => {
    toggleTheme()
  }

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {({ isDarkTheme, toggleTheme }) => {
        const color = isDarkTheme ? '#ffffff' : '#00306e'
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'

        return (
          <NavBar bgColor={bgColor}>
            <LogoLink to="/">
              <NavBarLogo
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </LogoLink>
            <NavBarItems>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={() => onChangeTheme(toggleTheme, isDarkTheme)}
              >
                {isDarkTheme ? (
                  <BsBrightnessHigh color="#fff" size={25} />
                ) : (
                  <BsMoon size={25} />
                )}
              </ThemeButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutButton type="button" bgColor={bgColor} color={color}>
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <ModalContainer>
                    <ModalDesc>Are you sure, you want to logout</ModalDesc>
                    <ButtonsContainer>
                      <CloseButton
                        type="button"
                        data-testid="close-button"
                        onClick={close}
                      >
                        Cancel
                      </CloseButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <LogoutIconButton type="button" bgColor={bgColor} color={color}>
                    <FiLogOut size={25} color={color} />
                  </LogoutIconButton>
                }
              >
                {close => (
                  <ModalContainer>
                    <ModalDesc>Are you sure, you want to logout</ModalDesc>
                    <ButtonsContainer>
                      <CloseButton
                        type="button"
                        data-testid="close-button"
                        onClick={close}
                      >
                        Cancel
                      </CloseButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>
            </NavBarItems>
          </NavBar>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default Header
