import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};

  @media (min-width: 768px) {
    padding: 32px;
  }
`

export const FailedImage = styled.img`
  width: 60%;
  max-width: 300px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 30%;
    max-width: 400px;
  }
`

export const FailedHeading = styled.h1`
  color: ${props => props.headingColor};
  font-size: 24px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`

export const FailedPara = styled.p`
  color: ${props => props.paraColor};
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3b3f5c;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    padding: 10px 20px;
  }
`
