import styled from 'styled-components'

export const SearchVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 30px;
  width: 950px;
`
export const TopContainer = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
`

export const ProductLoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
export const Image = styled.img`
  height: 300px;
`

export const MainPageContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
`

export const HomeStickyContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`
export const HomeSideContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
`

export const VideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`

export const BottomContainer = styled.div`
  display: flex;
  margin-top: 5px;
`

export const ChannelLogo = styled.img`
  height: 30px;
  width: 30px;
`
export const TitleAndDescContainer = styled.div`
  margin-left: 15px;
`
export const Title = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
  margin-bottom: 2px;
  width: 100%;
`
export const ViewsCountAndLikesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const ViewsCountAndDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
`
export const LikeDislikeSaveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
`
export const LikeContainer = styled.button`
  color: ${props => props.color};
  display: flex;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
export const DislikeContainer = styled.button`
  color: ${props => props.color};
  display: flex;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
export const SaveContainer = styled.button`
  color: ${props => props.color};
  display: flex;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
export const ViewCount = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
`
export const Text = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  margin-left: 3px;
`
export const SaveText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  margin-left: 3px;
`
export const Name = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const SubCount = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 2px;
`
export const PublishedDate = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
  margin-left: 5px;
`
export const Desc = styled.p`
  color: ${props => props.color};
  width: 100%;
  font-family: 'Roboto';
  font-size: 16px;
`
