import { Component } from 'react'
import Cookies from 'js-cookie'
import { ThreeDots } from 'react-loader-spinner'
import { SiYoutubegaming } from 'react-icons/si'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import FailureView from '../FailureView'
import GamingVideos from '../GamingVideos'

import {
  LoaderContainer,
  GamingContainer,
  GamingVideoTitle,
  TitleIconContainer,
  GamingText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getgamingVideos()
  }

  getgamingVideos = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress })
    const jwtToken = Cookies.get('jwt_token')
    const gamingUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(gamingUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure })
    }
  }

  onRetry = () => {
    this.getgamingVideos()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <ThreeDots type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderGamingVideosView = () => {
    const { gamingVideos } = this.state
    return <GamingVideos gamingVideos={gamingVideos} onRetry={this.onRetry} />
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderGamingVideos = () => {
    const { apiStatus } = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const { isDarkTheme } = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <div data-testid="gaming">
              <Header />
              <NavigationBar />
              <GamingContainer data-testid="gaming" bgColor={bgColor}>
                <GamingVideoTitle>
                  <TitleIconContainer>
                    <SiYoutubegaming size={35} color="#ff0000" />
                  </TitleIconContainer>
                  <GamingText color={textColor}>Gaming</GamingText>
                </GamingVideoTitle>
                {this.renderGamingVideos()}
              </GamingContainer>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Gaming
