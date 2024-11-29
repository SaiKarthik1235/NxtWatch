import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.bgColor};
  padding: 16px;

  @media (min-width: 768px) {
    padding: 32px;
  }
`

export const NotFoundImg = styled.img`
  width: 60vw;
  height: auto;
  max-height: 40vh;

  @media (min-width: 768px) {
    width: 30vw;
    height: 40vh;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => props.headingColor};
  font-size: 24px;
  text-align: center;
  margin-top: 16px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`

export const NotFoundPara = styled.p`
  color: ${props => props.paraColor};
  font-size: 16px;
  text-align: center;
  margin-top: 8px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`
