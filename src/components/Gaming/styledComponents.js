import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 576px) {
    padding: 10px;
  }
`

export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 576px) {
    margin-bottom: 10px;
  }
`

export const TitleIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e8f0;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  margin-right: 15px;

  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
    margin-right: 10px;
  }

  @media (max-width: 576px) {
    height: 40px;
    width: 40px;
    margin-right: 8px;
  }
`

export const GamingText = styled.h1`
  color: ${props => props.color};
  font-size: 24px;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
`
