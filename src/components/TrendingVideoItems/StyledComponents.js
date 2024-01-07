import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #13293b;
  margin-bottom: 10px;
`

export const TrendingVideoList = styled.li`
  list-style-type: none;
  display: flex;
  margin-bottom: 20px;
`
export const Image = styled.img`
  height: 150px;
  width: 250px;
`
export const TitleAndDescContainer = styled.div`
  margin-left: 15px;
`
export const Title = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 22px;
  margin-top: 0px;
  margin-bottom: 2px;
`
export const Name = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const ViewsCountAndDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
`
export const ViewCount = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 13px;
`
export const PublishedDate = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  margin-left: 5px;
`
