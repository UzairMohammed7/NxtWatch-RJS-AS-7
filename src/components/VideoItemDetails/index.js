import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'

import {RiPlayListAddLine} from 'react-icons/ri'

import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'

import {
  ProductLoaderContainer,
  SearchVideosContainer,
  MainPageContainer,
  HomeStickyContainer,
  VideosContainer,
  TopContainer,
  Title,
  ViewsCountAndLikesContainer,
  TitleAndDescContainer,
  SubCount,
  ViewsCountAndDateContainer,
  LikeDislikeSaveContainer,
  LikeContainer,
  DislikeContainer,
  Text,
  SaveText,
  SaveContainer,
  ViewCount,
  BottomContainer,
  Name,
  PublishedDate,
  ChannelLogo,
  Desc,
} from './StyledComponents'

import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: [],
    isVideoSaved: false,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        name: fetchedData.video_details.channel.name,
        profileImageUrl: fetchedData.video_details.channel.profile_image_url,
        subscriberCount: fetchedData.video_details.channel.subscriber_count,
        viewCount: fetchedData.video_details.view_count,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <ProductLoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProductLoaderContainer>
  )

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, addToSavedVideo, removeFromSavedVideos} = value
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        const {videoDetails, isLiked, isDisliked, isVideoSaved} = this.state
        const {
          id,
          title,
          videoUrl,
          name,
          profileImageUrl,
          subscriberCount,
          viewCount,
          publishedAt,
          description,
          videoSaved,
        } = videoDetails

        const publishedAtDate = formatDistanceToNowStrict(new Date(publishedAt))

        const addOrRemoveItem = () => {
          if (videoSaved === true) {
            removeFromSavedVideos(id)
          } else {
            addToSavedVideo({...videoDetails, videoSaved: true})
          }
        }

        const saveVideoToList = () => {
          this.setState(
            prevState => ({isVideoSaved: !prevState.isVideoSaved}),
            addOrRemoveItem,
          )
        }

        const onClickLikeButton = () => {
          this.setState(prev => ({isLiked: !prev.isLiked, isDisliked: false}))
        }

        const onClickDislikeButton = () => {
          this.setState(prev => ({
            isDisliked: !prev.isDisliked,
            isLiked: false,
          }))
        }

        const likeColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeColor = isDisliked ? '#2563eb' : '#64748b'
        const likeIcon = isLiked ? (
          <AiFillLike size={18} />
        ) : (
          <AiOutlineLike size={18} />
        )
        const dislikeIcon = isDisliked ? (
          <AiFillDislike size={18} />
        ) : (
          <AiOutlineDislike size={18} />
        )

        return (
          <SearchVideosContainer bgColor={bgColor}>
            <TopContainer>
              <ReactPlayer
                url={videoUrl}
                controls
                width="100%"
                height="500px"
              />
              <Title color={textColor}>{title}</Title>
              <ViewsCountAndLikesContainer>
                <ViewsCountAndDateContainer>
                  <ViewCount color={textColor}>{viewCount} views </ViewCount>
                  <PublishedDate> . {publishedAtDate}</PublishedDate>
                </ViewsCountAndDateContainer>

                <LikeDislikeSaveContainer>
                  <LikeContainer
                    type="button"
                    color={likeColor}
                    onClick={onClickLikeButton}
                  >
                    {likeIcon}
                    <Text color={likeColor}>Like</Text>
                  </LikeContainer>
                  <DislikeContainer
                    type="button"
                    color={dislikeColor}
                    onClick={onClickDislikeButton}
                  >
                    {dislikeIcon}
                    <Text color={dislikeColor}>Dislike</Text>
                  </DislikeContainer>
                  <SaveContainer
                    type="button"
                    onClick={saveVideoToList}
                    color={videoSaved ? '#4f46e5' : '#181818'}
                  >
                    <RiPlayListAddLine />
                    <SaveText color={videoSaved ? '#4f46e5' : '#181818'}>
                      {isVideoSaved ? 'Saved' : 'save'}
                    </SaveText>
                  </SaveContainer>
                </LikeDislikeSaveContainer>
              </ViewsCountAndLikesContainer>
            </TopContainer>
            <hr />
            <BottomContainer className="bottom">
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
              <TitleAndDescContainer>
                <Name>{name}</Name>
                <SubCount>{subscriberCount} subscribers</SubCount>
                <Desc color={textColor}>{description}</Desc>
              </TitleAndDescContainer>
            </BottomContainer>
          </SearchVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  onRetry = () => {
    this.getVideoItemDetails()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
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
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <div data-testid="videoItemDetails">
              <Header />
              <MainPageContainer data-testid="home" bgColor={bgColor}>
                <HomeStickyContainer>
                  <Sidebar />
                </HomeStickyContainer>
                <VideosContainer bgColor={bgColor}>
                  {this.renderAllViews()}
                </VideosContainer>
              </MainPageContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
