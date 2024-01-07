import styled from 'styled-components'

export const MainPageContainer = styled.div`
  display: flex;
  width: 100vw;
  background-color: ${props => props.bgColor};
`

export const NotSavedContainer = styled.div`
  background-color: ${props => props.bgColor};
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoSavedImage = styled.img`
  height: 270px;
`
export const NoSavedHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 24px;
`
export const NoSavedDesc = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 0;
`

export const SearchVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 30px;
`
export const SavedHeadContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  margin-left: 50px;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const FireLogo = styled.div`
  background-color: ${props => props.bgColor};
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
`
export const SavedHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: bold;
  margin-left: 15px;
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`
export const ProductLoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
