// import components
import SideBar from './../../components/sideBar/SideBar';
import TopBar from './../../components/topBar/TopBar';
import Feed from './../../components/feed/Feed';
import RightBar from './../../components/rightBar/RightBar'

// import style Home 
import {
    ProfileContainer,
    ProfileRight,
    ProfileRightTop,
    ProfileRightBottom,
    ProfileCoverImg,
    ProfileUserImg,
    ProfileCover,
    ProfileInfo,
    ProfileInfoName,
    ProfileInfoDesc

} from './styleProfile';

const Profile = () => {
  return (
      <>
        <TopBar />

        <ProfileContainer>
        <SideBar />
        <ProfileRight>
        <ProfileRightTop>

            <ProfileCover>
                <ProfileCoverImg src='assets/post/3.jpeg' />
                <ProfileUserImg src='assets/person/7.jpeg' />
            </ProfileCover>

            <ProfileInfo>
                <ProfileInfoName>ahmed fareeq</ProfileInfoName>
                <ProfileInfoDesc>Hi im name ahmed fareeq</ProfileInfoDesc>
            </ProfileInfo>

        </ProfileRightTop>
        <ProfileRightBottom>
        <Feed />
        <RightBar profile={Profile}/>
        </ProfileRightBottom>

        </ProfileRight>
        </ProfileContainer>
      </>
  );
}

export default Profile;
