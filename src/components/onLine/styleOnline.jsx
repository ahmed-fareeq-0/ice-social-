import styled from "styled-components"

export const RightBarFriendsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`
export const RightBarFriends = styled.li`
  margin-bottom: 15px;
`
export const RightBarOnLineContainer = styled.div`
  margin-right: 10px;
  position: relative;
  display:flex;
  align-items: center;
`

export const RightBarFriendOnLineImg = styled.img`
  width:40px;
  height:40px;
  border-radius:50%;
  object-fit:cover;
`
export const RightBarOnLine = styled.span`
  width:12px;
  height:12px;
  border-radius:50%;
  background-color:limegreen;
  position:absolute;
  top:-2px;
  left:28px;
  border:2px solid white ;

`
export const RightBarUserName = styled.span`
margin:0 0 0 10px;
`