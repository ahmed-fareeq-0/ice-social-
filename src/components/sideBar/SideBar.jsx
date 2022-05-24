// import style right bar
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

import {ContainerSideBar, SideBarList, SideBarListItem, SideBarWrapper, SideBarListItemText, SideBarButton, SideBarFriendsList} from './styleSideBar';

// import users friends
import { Users } from "./../Data";

// import components
import Friends from "../friends/Friends";

const SideBar = () => {
  return (
    <ContainerSideBar>
      <SideBarWrapper>
        <SideBarList>
          <SideBarListItem>
            <RssFeed style={{marginRight: "15px"}} />
            <SideBarListItemText>Feed</SideBarListItemText>
          </SideBarListItem>

          <SideBarListItem>
            <Chat style={{marginRight: "15px"}} />
            <SideBarListItemText>Chats</SideBarListItemText>
          </SideBarListItem>

          <SideBarListItem>
            <PlayCircleFilledOutlined style={{marginRight: "15px"}} />
            <SideBarListItemText>Videos</SideBarListItemText>
          </SideBarListItem>

          <SideBarListItem>
            <Group style={{marginRight: "15px"}} />
            <SideBarListItemText>Groups</SideBarListItemText>
          </SideBarListItem>

          <SideBarListItem>
            <Bookmark style={{marginRight: "15px"}} />
            <SideBarListItemText>Bookmarks</SideBarListItemText>
          </SideBarListItem>

          <SideBarListItem>
            <HelpOutline style={{marginRight: "15px"}} />
            <SideBarListItemText>Questions</SideBarListItemText>
          </SideBarListItem>

          <SideBarListItem>
            <WorkOutline style={{marginRight: "15px"}} />
            <SideBarListItemText>Jobs</SideBarListItemText>
          </SideBarListItem>

          <SideBarListItem>
            <Event style={{marginRight: "15px"}} />
            <SideBarListItemText>Events</SideBarListItemText>
          </SideBarListItem>

          <SideBarListItem>
            <School style={{marginRight: "15px"}} />
            <SideBarListItemText>Courses</SideBarListItemText>
          </SideBarListItem>

        </SideBarList>
        <SideBarButton>Show More</SideBarButton>
          <hr style={{margin: "20px 0"}} />

          <SideBarFriendsList>
            {Users.map((u) => (
              <Friends key={u.id} user={u} />
            ))}
          </SideBarFriendsList>

      </SideBarWrapper>
      </ContainerSideBar>
  );
}

export default SideBar;
