import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #f9f9f9;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginForm = styled.form`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  width: 35%;
  height: 40%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const UsernameAndPasswordContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const NxtLogo = styled.img`
  height: 40px;
  width: 180px;
`

export const LabelText = styled.label`
  color: #47556999;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-top: 20px;
  margin-bottom: 5px;
`

export const InputContainer = styled.input`
  border: 1px solid #94a3b8;
  color: #94a3b8;
  font-size: 14px;
  font-family: 'Roboto';
  width: 100%;
  padding: 10px;
  outline: none;
  border-radius: 5px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 5px;
`
export const CheckboxInput = styled.input`
  margin-right: 4px;
  line-height: normal;
  width: 18px;
  height: 18px;
`
export const CheckboxLabel = styled.label`
  color: #1e293b;
  font-size: 14px;
  font-weight: bold;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto';
  width: 100%;
  height: 35px;
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ShowErrorMsg = styled.p`
  color: #ff0000;
  font-size: 12px;
  font-family: 'Roboto';
  margin-top: 0px;
`
