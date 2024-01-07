import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import Home from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'HOME',
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addToSavedVideo = videoDetails => {
    const {savedVideos} = this.state
    const videoObject = savedVideos.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (videoObject) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos],
      }))
    } else {
      this.setState({
        savedVideos: [...savedVideos, videoDetails],
      })
    }
  }

  removeFromSavedVideos = id => {
    const {savedVideos} = this.state
    const updateSaveVideos = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: updateSaveVideos})
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          activeTab,
          changeTab: this.changeTab,
          savedVideos,
          addToSavedVideo: this.addToSavedVideo,
          removeFromSavedVideos: this.removeFromSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
