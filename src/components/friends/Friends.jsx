import {SidebarFriendItem, SideBarFriendImg, SideBarFriendName} from './styleFriends';

const Friends = ({user}) => {
  return (
    <SidebarFriendItem>
    <SideBarFriendImg src={user.profilePicture} />
    <SideBarFriendName>{user.username}</SideBarFriendName>
  </SidebarFriendItem>
  );
}

export default Friends;
