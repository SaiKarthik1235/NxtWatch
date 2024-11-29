import styled from 'styled-components'

export const VideoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 20px;
    padding-bottom: 50px;
  }

  @media (min-width: 768px) {
    margin-left: 250px;
  }

  @media (max-width: 576px) {
    gap: 10px;
  }
`

export const VideoItem = styled.li`
  width: 100%;
  max-width: 250px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 200px;
    margin-bottom: 15px;
  }

  @media (max-width: 576px) {
    max-width: 150px;
    margin-bottom: 10px;
  }
`

export const VideoDetails = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.h3`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 18px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`

export const VideoInfo = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#cbd5e1' : '#64748b')};
  font-size: 14px;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 576px) {
    font-size: 10px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;

  @media (max-width: 768px) {
    border-radius: 4px;
  }

  @media (max-width: 576px) {
    border-radius: 3px;
  }
`
