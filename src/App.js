import { Component } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Trending from './components/Trending'
import VideoDetailView from './components/VideoDetailView'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'

import './App.css'

class App extends Component {
  state = {
    savedVideos: JSON.parse(localStorage.getItem('savedVideos')) || [],
    isDarkTheme: JSON.parse(localStorage.getItem('isDarkTheme')) || false,
    activeTab: localStorage.getItem('activeTab') || 'Home',
  }

  componentDidUpdate(prevState) {
    if (prevState.savedVideos !== this.state.savedVideos) {
      localStorage.setItem('savedVideos', JSON.stringify(this.state.savedVideos))
    }
    if (prevState.isDarkTheme !== this.state.savedVideos) {
      localStorage.setItem('isDarkTheme', JSON.stringify(this.state.isDarkTheme))
    }
    if (prevState.activeTab !== this.state.activeTab) {
      localStorage.setItem('activeTab', this.state.activeTab)
    }
  }

  changeTab = tab => {
    this.setState({ activeTab: tab })
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideo = video => {
    const { savedVideos } = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({ savedVideos: [...savedVideos, video] })
    } else {
      savedVideos.splice(index, 1)
      this.setState({ savedVideos })
    }
  }

  removeVideo = id => {
    const { savedVideos } = this.state
    const updatedSavedVideos = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({ savedVideos: updatedSavedVideos })
  }

  render() {
    const { savedVideos, isDarkTheme, activeTab } = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          savedVideos,
          isDarkTheme,
          activeTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          changeTab: this.changeTab,
        }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trending"
            element={
              <ProtectedRoute>
                <Trending />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gaming"
            element={
              <ProtectedRoute>
                <Gaming />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-videos"
            element={
              <ProtectedRoute>
                <SavedVideos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/videos/:id"
            element={
              <ProtectedRoute>
                <VideoDetailView />
              </ProtectedRoute>
            }
          />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
