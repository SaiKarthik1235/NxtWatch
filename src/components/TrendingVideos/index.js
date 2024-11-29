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

const TrendingVideos = ({trendingVideos = []}) => (
  <ThemeAndVideoContext.Consumer>
    {({isDarkTheme}) => (
      <VideoList>
        {trendingVideos.map(video => (
          <VideoItem key={video.id}>
            <Link to={`/videos/${video.id}`}>
              <ThumbnailImage src={video.thumbnailUrl} alt="thumbnail" />
            </Link>
            <VideoDetails>
              <VideoTitle isDarkTheme={isDarkTheme}>{video.title}</VideoTitle>
              <VideoInfo isDarkTheme={isDarkTheme}>{video.name}</VideoInfo>
              <VideoInfo isDarkTheme={isDarkTheme}>
                {video.viewCount} views • {video.publishedAt}
              </VideoInfo>
            </VideoDetails>
          </VideoItem>
        ))}
      </VideoList>
    )}
  </ThemeAndVideoContext.Consumer>
)

export default TrendingVideos
