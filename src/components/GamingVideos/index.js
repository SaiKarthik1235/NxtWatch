import {Link} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoList,
  VideoItem,
  VideoDetails,
  VideoTitle,
  VideoInfo,
  ThumbnailImage,
} from './styledComponents'

const GamingVideos = ({gamingVideos}) => (
  <ThemeAndVideoContext.Consumer>
    {({isDarkTheme}) => (
      <VideoList>
        {gamingVideos.map(video => (
          <VideoItem key={video.id}>
            <Link to={`/videos/${video.id}`}>
              <ThumbnailImage
                src={video.thumbnailUrl}
                alt={`${video.title} thumbnail`}
              />
            </Link>
            <VideoDetails>
              <VideoTitle isDarkTheme={isDarkTheme}>{video.title}</VideoTitle>
              <VideoInfo isDarkTheme={isDarkTheme}>
                {video.viewCount} views
              </VideoInfo>
            </VideoDetails>
          </VideoItem>
        ))}
      </VideoList>
    )}
  </ThemeAndVideoContext.Consumer>
)

export default GamingVideos
