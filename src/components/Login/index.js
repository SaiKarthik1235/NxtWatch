import { Component } from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import {
  InputFieldContainer,
  LoginInputFieldLabel,
  LoginInputField,
  LoginContainer,
  LoginForm,
  LogoImg,
  LoginButton,
  ErrorMsgStyle,
  CheckboxContainer,
  ShowPasswordCheckbox,
  CheckboxLabel,
} from './styledComponents'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    errorMsg: '',
    showErrorMsg: false,
    showPassword: false,
    redirectToHome: false,
  }

  onSuccessLogin = jwtToken => {
    Cookies.set('jwt_token', jwtToken, { expires: 30 })
    this.setState({ redirectToHome: true })
  }

  onFailureLogin = errorMsg => {
    this.setState({ errorMsg, showErrorMsg: true })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    let { usernameInput, passwordInput } = this.state

    if (usernameInput.toLowerCase().trim('') === 'tarun')
      usernameInput = 'rahul'
    if (passwordInput === 'tarun@9849') passwordInput = 'rahul@2021'

    const userDetails = { username: usernameInput, password: passwordInput }
    const LoginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginApiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  updateUsername = event => this.setState({ usernameInput: event.target.value })

  updatePassword = event => this.setState({ passwordInput: event.target.value })

  toggleShowPassword = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }))
  }

  renderUsernameField = () => {
    const { usernameInput } = this.state
    return (
      <InputFieldContainer>
        <LoginInputFieldLabel htmlFor="username">USERNAME</LoginInputFieldLabel>
        <LoginInputField
          type="text"
          value={usernameInput}
          placeholder="tarun"
          id="username"
          onChange={this.updateUsername}
        />
      </InputFieldContainer>
    )
  }

  renderPasswordField = () => {
    const { passwordInput, showPassword } = this.state
    return (
      <InputFieldContainer>
        <LoginInputFieldLabel htmlFor="password">PASSWORD</LoginInputFieldLabel>
        <LoginInputField
          type={showPassword ? 'text' : 'password'}
          value={passwordInput}
          placeholder="tarun@9849"
          id="password"
          onChange={this.updatePassword}
        />
        <CheckboxContainer>
          <ShowPasswordCheckbox
            type="checkbox"
            id="inputCheck"
            checked={showPassword}
            onChange={this.toggleShowPassword}
          />
          <CheckboxLabel htmlFor="inputCheck">Show Password</CheckboxLabel>
        </CheckboxContainer>
      </InputFieldContainer>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Navigate to="/" />
    }

    if (this.state.redirectToHome) {
      return <Navigate to="/" />
    }

    const { errorMsg, showErrorMsg } = this.state

    return (
      <LoginContainer>
        <LoginForm onSubmit={this.onSubmitForm}>
          <LogoImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          {this.renderUsernameField()}
          {this.renderPasswordField()}
          <LoginButton type="submit" color="#ffffff">
            Login
          </LoginButton>
          {showErrorMsg && <ErrorMsgStyle>*{errorMsg}</ErrorMsgStyle>}
        </LoginForm>
      </LoginContainer>
    )
  }
}

export default Login
