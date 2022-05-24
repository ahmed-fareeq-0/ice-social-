
import {BirthDayContainer, BirthDayImg, BirthDayText, ContainerRightBar, RightBarAds, RightBarFollowing, RightBarFollowingImg, RightBarFollowingName, RightBarFollowings, RightBarInfo, RightBarInfoItem, RightBarInfoKey, RightBarInfoValue, RightBarTitle, RightBarTitleFriends, RightBarWrapper} from './styleRightBar';


// import users online
import { Users } from '../Data';

// import components
import Online from './../onLine/Online'



const RightBar = ({profile}) => {

  const HomeRightBar = () => {
    return(
      <>
        <BirthDayContainer>
          <BirthDayImg src='assets/gift.png' />
          <BirthDayText><b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.</BirthDayText>
        </BirthDayContainer>

        <RightBarAds src='/assets/ad.png' alt='' />
        <RightBarTitleFriends>Online Friends</RightBarTitleFriends>

          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
      </>
    )
  }

  const ProfileRightBar = () => {
    return(
      <>
        <RightBarTitle>User information</RightBarTitle>
        <RightBarInfo>
          <RightBarInfoItem>
            <RightBarInfoKey>City:</RightBarInfoKey>
            <RightBarInfoValue>New York</RightBarInfoValue>
          </RightBarInfoItem>

          <RightBarInfoItem>
            <RightBarInfoKey>From:</RightBarInfoKey>
            <RightBarInfoValue>Madrid</RightBarInfoValue>
          </RightBarInfoItem>

          <RightBarInfoItem>
            <RightBarInfoKey>Relationship:</RightBarInfoKey>
            <RightBarInfoValue>Single</RightBarInfoValue>
          </RightBarInfoItem>
        </RightBarInfo>

        <RightBarTitle>User friends</RightBarTitle>
        <RightBarFollowings>
          <RightBarFollowing>
            <RightBarFollowingImg src="assets/person/1.jpeg" alt='' />
            <RightBarFollowingName>John Carter</RightBarFollowingName>
          </RightBarFollowing>

          <RightBarFollowing>
            <RightBarFollowingImg src="assets/person/2.jpeg" alt='' />
            <RightBarFollowingName>John Carter</RightBarFollowingName>
          </RightBarFollowing>

          <RightBarFollowing>
            <RightBarFollowingImg src="assets/person/3.jpeg" alt='' />
            <RightBarFollowingName>John Carter</RightBarFollowingName>
          </RightBarFollowing>

          <RightBarFollowing>
            <RightBarFollowingImg src="assets/person/4.jpeg" alt='' />
            <RightBarFollowingName>John Carter</RightBarFollowingName>
          </RightBarFollowing>

          <RightBarFollowing>
            <RightBarFollowingImg src="assets/person/5.jpeg" alt='' />
            <RightBarFollowingName>John Carter</RightBarFollowingName>
          </RightBarFollowing>

          <RightBarFollowing>
            <RightBarFollowingImg src="assets/person/6.jpeg" alt='' />
            <RightBarFollowingName>John Carter</RightBarFollowingName>
          </RightBarFollowing>
        </RightBarFollowings>
      </>
    )
  }

  return (
    <ContainerRightBar>
      <RightBarWrapper>
        {profile ? <ProfileRightBar/> : <HomeRightBar />}
      </RightBarWrapper>
    </ContainerRightBar>
  );
}

export default RightBar;
