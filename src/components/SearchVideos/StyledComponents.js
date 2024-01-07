import styled from 'styled-components'

export const SearchVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 30px;
`

export const ProductLoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
export const SearchInput = styled.input`
  width: 255px;
  border: 1px solid #64748b;
  border-radius: 2px;
  padding: 3px;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 40px;
  outline: none;
  height: 30px;
`
export const SearchButton = styled.button`
  width: 50px;
  height: 30px;
`

export const NoVideosFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RetryButton = styled.button`
  cursor: pointer;
`
export const Image = styled.img`
  height: 300px;
`

export const MainPageContainer = styled.div`
  display: flex;
  width: 100vw;
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

export const VideosContainer = styled.ul`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`

export const Heading = styled.h1`
  display: flex;
  align-self: flex-start;
  padding-left: 35px;
  color: ${props => props.color};
`
export const Desc = styled.p`
  display: flex;
  align-self: flex-start;
  padding-left: 35px;
  color: ${props => props.color};
`
