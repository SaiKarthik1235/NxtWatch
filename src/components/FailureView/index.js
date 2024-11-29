import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  FailureViewContainer,
  FailedImage,
  FailedHeading,
  FailedPara,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const paraColor = isDarkTheme ? '#e2e8f0' : '#475569'

        const failureViewImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <FailureViewContainer isDarkTheme={isDarkTheme}>
            <FailedImage src={failureViewImg} alt="failure view" />
            <FailedHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </FailedHeading>
            <FailedPara paraColor={paraColor}>
              We are having some trouble completing your request <br />
              Please try again.
            </FailedPara>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailureView
