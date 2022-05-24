import {RightBarFriendOnLineImg, RightBarFriends, RightBarFriendsList, RightBarOnLineContainer, RightBarOnLine, RightBarUserName} from './styleOnline';

const Online = ({user}) => {
  return (
    <RightBarFriendsList>
    <RightBarFriends>
      <RightBarOnLineContainer>
        <RightBarFriendOnLineImg src={user.profilePicture} />
        <RightBarOnLine></RightBarOnLine>
        <RightBarUserName>{user.username}</RightBarUserName>
      </RightBarOnLineContainer>
    </RightBarFriends>
  </RightBarFriendsList>
  );
}

export default Online;
