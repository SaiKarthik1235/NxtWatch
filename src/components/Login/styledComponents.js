import styled from 'styled-components'

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LoginInputFieldLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  margin-left: 2px;
  color: #222;
`

export const LoginInputField = styled.input`
  flex-grow: 1;
  margin-top: 6px;
  font-family: 'Roboto';
  height: 40px;
  padding: 5px 5px 5px 15px;
  background-color: transparent;
  border: 1px solid #64748b;
  border-radius: 3px;
  font-size: 14px;
  color: #222;
  outline: none;
`

export const LoginContainer = styled.div`
  background-color: #f1f5f9;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginForm = styled.form`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    padding: 60px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`

export const LogoImg = styled.img`
  width: 120px;
  align-self: center;
  margin-bottom: 20px;
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #6366f1;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  height: 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
`

export const ErrorMsgStyle = styled.p`
  margin-top: 2px;
  margin-left: 4px;
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 13px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const ShowPasswordCheckbox = styled.input`
  margin-right: 8px;
  cursor: pointer;
`

export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
  cursor: pointer;
`
