import styled from "styled-components";

export const ProfileContainer = styled.div`
    display:flex;
`

export const ProfileRight = styled.div`
    flex:9;
`
export const ProfileRightTop = styled.div`

`
export const ProfileRightBottom = styled.div`
    display:flex;
`

export const ProfileCover =styled.div`
    height: 320px;
    position: relative;
`

export const ProfileCoverImg = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`

export const ProfileUserImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 150px;
    border: 3px solid white;
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ProfileInfoName = styled.h4`
    font-size: 24px;
`

export const ProfileInfoDesc = styled.span`
    font-weight: 300;
`
