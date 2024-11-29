import styled from 'styled-components'

export const VideoList = styled.ul`
  padding: 0;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }
`

export const VideoItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 8px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const VideoDetails = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 8px;
  }
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const VideoInfo = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#a7a8aa' : '#7e858e')};
  margin: 4px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const TrendingVideosContainer = styled.div``
