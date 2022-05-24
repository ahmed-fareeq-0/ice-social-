import {Search, Person, Chat, Notifications} from '@material-ui/icons';
import {Link} from 'react-router-dom'

// import style top bar
    import {
    TopBarContainer,
    TopBarLeft,
    TopBarCenter,
    TopBarRight,
    Logo,
    SearchContainer,
    SearchInput,
    TopBarLinks,
    TopBarLink,
    TopBarIcons,
    TopBarIconItem,
    TopBarIconBadge,
    Img
} 
    from './styleTopBar';

const TopBar = () => {
  return (
    <TopBarContainer>
        <TopBarLeft>
            <Logo><Link to="/" style={{color:"#fff", textDecoration:"none"}}>ICE</Link></Logo>
        </TopBarLeft>

        <TopBarCenter>
            <SearchContainer>
                <Search style={{fontSize: "20px !important", marginLeft: "10px" }} />
                <SearchInput placeholder='Search for friend, post or video'/>
            </SearchContainer>
        </TopBarCenter>

        <TopBarRight>
            <TopBarLinks>
                <TopBarLink>Homepage</TopBarLink>
                <TopBarLink>Timeline</TopBarLink>
            </TopBarLinks>

                <TopBarIcons>
                    <TopBarIconItem>
                        <Person />
                        <TopBarIconBadge>1</TopBarIconBadge>
                    </TopBarIconItem>

                    <TopBarIconItem>
                        <Chat />
                        <TopBarIconBadge>1</TopBarIconBadge>
                    </TopBarIconItem>

                    <TopBarIconItem>
                        <Notifications />
                        <TopBarIconBadge>1</TopBarIconBadge>
                    </TopBarIconItem>
                </TopBarIcons>

                <Link to="/profile" style={{color:"#fff", textDecoration:"none"}}>
                <Img src='/assets/person/1.jpeg' alt='1' />
                </Link>
                   
                
        </TopBarRight>

    </TopBarContainer>
  );
}

export default TopBar;
