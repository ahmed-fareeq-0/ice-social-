import styled from "styled-components";

export const ContainerRightBar = styled.div`
    flex: 3.5;


    height: calc(100vh - 50px);
    overflow-y: scroll;
    position: sticky;
    top: 50px;

    ::-webkit-scrollbar {width: 0px;}
`

export const RightBarWrapper = styled.div`
  padding: 20px 20px 0 0;
`

export const BirthDayContainer = styled.div`
  display: flex;
  align-items: center;
`

export const BirthDayImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

export const BirthDayText = styled.span`
  font-weight: 300;
  font-size: 15px;
`

export const RightBarAds = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 30px 0;
`

export const RightBarTitleFriends = styled.h4`
  margin-bottom: 20px;
`

export const RightBarTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`
export const RightBarInfo = styled.div`
  margin-bottom: 30px;
`
export const RightBarInfoItem = styled.div`
  margin-bottom: 10px;
`
export const RightBarInfoKey = styled.span`
  font-weight: 500;
  margin-right: 15px;
  color: #555;
`
export const RightBarInfoValue = styled.span`
  font-weight: 300;
`

export const RightBarFollowings = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const RightBarFollowing = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
`
export const RightBarFollowingImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`
export const RightBarFollowingName = styled.span``



