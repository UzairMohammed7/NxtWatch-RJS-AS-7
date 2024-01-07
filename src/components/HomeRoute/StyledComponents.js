import styled from 'styled-components'

export const MainPageContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 100vw;
  display: flex;
`
export const BannerImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => props.display};
  width: 100%;
  height: 40vh;
  padding: 40px;
  justify-content: space-between;
`

export const HomeSideContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
`

export const GetItNowButton = styled.button`
  color: #181818;
  text-align: center;
  background-color: transparent;
  height: 60px;
  width: 100px;
  margin: 20px;
  margin-left: 0;
  border: 1px solid #181818;
`
export const BannerImage = styled.img`
  object-fit: fill;
  height: 80px;
  width: 200px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
export const CloseButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 10px;
`
export const HomeStickyContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`
