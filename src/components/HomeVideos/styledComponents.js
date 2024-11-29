import styled from 'styled-components'

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`

export const VideoItem = styled.li`
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#383838' : '#fff')};
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;
  cursor: pointer;
  width: 100%;
  max-width: 280px;
  box-shadow: ${({isDarkTheme}) =>
    isDarkTheme
      ? '0 4px 6px rgba(0, 0, 0, 0.3)'
      : '0 4px 6px rgba(0, 0, 0, 0.1)'};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`

export const VideoPara = styled.p`
  margin: 0 0 10px 0;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#e2e8f0' : '#555')};
  font-size: 14px;
  line-height: 1.5;
  text-align: left;
  flex-grow: 1;
  display: block;
`

export const VideoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 10px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
`

export const Flex = styled.div`
  display: flex;
`

export const VideoPara1 = styled.p`
  list-style-type: circle;
  margin: 0;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#e2e8f0' : '#555')};
  font-size: 14px;
  line-height: 1.5;
  text-align: left;
  margin-left: 20px;
  flex-grow: 1;
`
