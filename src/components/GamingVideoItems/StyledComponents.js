import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameListItems = styled.li`
  list-style-type: none;
  cursor: pointer;
  width: 250px;
  margin-right: 35px;
  border-bottom: 1px solid #000000;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #13293b;
  margin-bottom: 10px;
`

export const Image = styled.img`
  height: 250px;
  width: 100%;
`
export const Title = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  margin-top: 0px;
`
export const ViewsCount = styled.p`
  font-size: 13px;
  margin-top: 0px;
  margin-bottom: 10px;
  color: ${props => props.color};
  font-family: 'Roboto';
`
