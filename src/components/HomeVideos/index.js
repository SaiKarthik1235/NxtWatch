import {Link} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  VideosList,
  VideoItem,
  VideoImage,
  VideoPara,
  ProfileImg,
  Container,
  Content,
  Flex,
  VideoPara1,
} from './styledComponents'

const HomeVideos = ({homeVideos}) => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <VideosList>
          {homeVideos.map(video => (
            <Link
              to={`/videos/${video.id}`}
              key={video.id}
              style={{textDecoration: 'none'}}
            >
              <VideoItem isDarkTheme={isDarkTheme}>
                <VideoImage src={video.thumbnailUrl} alt="video thumbnail" />
                <Container>
                  <ProfileImg src={video.profileImageUrl} />
                  <Content>
                    <VideoPara isDarkTheme={isDarkTheme}>
                      {video.title}
                    </VideoPara>
                  </Content>
                  <Flex>
                    <VideoPara isDarkTheme={isDarkTheme}>
                      {video.name}
                    </VideoPara>
                    <VideoPara1 isDarkTheme={isDarkTheme}>
                      {video.viewCount} views
                    </VideoPara1>
                    <VideoPara1 isDarkTheme={isDarkTheme}>
                      {video.publishedAt}
                    </VideoPara1>
                  </Flex>
                </Container>
              </VideoItem>
            </Link>
          ))}
        </VideosList>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default HomeVideos
