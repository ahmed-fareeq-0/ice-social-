import styled from 'styled-components';

export const TopBarContainer = styled.div`
  height: 50px;
  width: 100%;
  background-color: #191A19;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const TopBarLeft = styled.div`
  flex: 3;
`

export const Logo = styled.h1`
  font-size: 24px;
  margin-left: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`

export const TopBarCenter = styled.div`
  flex: 5;
`

export const SearchContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  border: none;
  width: 70%;

  &:focus{
    outline:none;
  }
`

export const TopBarRight = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`


export const TopBarLinks = styled.div`

`

export const TopBarLink = styled.span`
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
`

export const TopBarIcons = styled.div`
  display: flex;
  align-items:center;
`

export const TopBarIconItem = styled.div`
  margin-right: 15px;
  cursor: pointer;
  position: relative;
`

export const TopBarIconBadge = styled.span`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  color: white;
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`

export const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`