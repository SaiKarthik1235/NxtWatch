import { Component } from 'react'
import Cookies from 'js-cookie'
import { ThreeDots } from 'react-loader-spinner'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import HomeVideos from '../HomeVideos'
import FailureView from '../FailureView'

import {
  HomeContainer,
  BannerContainer,
  BannerImage,
  BannerText,
  BannerButton,
  BannerLeftPart,
  BannerRightPart,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  LoaderContainer,
  NotFoundImg,
  NotFoundButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    homeVideos: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const { searchInput } = this.state
    this.setState({ apiStatus: apiStatusConstants.inProgress })
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput || ''}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      if (data && data.videos) {
        const updatedData = data.videos.map(eachVideo => ({
          id: eachVideo.id,
          title: eachVideo.title,
          thumbnailUrl: eachVideo.thumbnail_url,
          viewCount: eachVideo.view_count,
          publishedAt: eachVideo.published_at,
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        }))
        this.setState({
          homeVideos: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      }
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure })
    }
  }

  onCloseBanner = () => {
    this.setState({ bannerDisplay: 'none' })
  }

  onChangeInput = event => {
    this.setState({ searchInput: event.target.value })
  }

  getSearchResults = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.setState({ searchInput: '' }, this.getVideos)
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <ThreeDots type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const { homeVideos } = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const { isDarkTheme } = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          if (homeVideos.length === 0) {
            return (
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '20px',
                  backgroundColor: bgColor,
                  padding: '20px',
                }}
              >
                <NotFoundImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <h2>No Search results found</h2>
                <p>Try different key words or remove search filter</p>
                <NotFoundButton type="button" onClick={this.onRetry}>
                  Retry
                </NotFoundButton>
              </div>
            )
          }
          return <HomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderHomeVideos = () => {
    const { apiStatus } = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const { searchInput, bannerDisplay } = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const { isDarkTheme } = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'

          return (
            <>
              <Header />
              <NavigationBar />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <BannerContainer data-testid="banner" display={display}>
                  <BannerLeftPart>
                    <BannerImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                    <BannerText>Buy Nxt Watch Premium</BannerText>
                    <BannerButton>GET IT NOW</BannerButton>
                  </BannerLeftPart>
                  <BannerRightPart>
                    <BannerCloseButton
                      onClick={this.onCloseBanner}
                      type="button"
                      data-testid="close"
                    >
                      <AiOutlineClose />
                    </BannerCloseButton>
                  </BannerRightPart>
                </BannerContainer>
                <SearchContainer>
                  <SearchInput
                    value={searchInput}
                    onChange={this.onChangeInput}
                    type="search"
                    placeholder="Search"
                  />
                  <SearchIconContainer
                    type="button"
                    onClick={this.getSearchResults}
                  >
                    <AiOutlineSearch size={25} color="#231f20" />
                  </SearchIconContainer>
                </SearchContainer>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
