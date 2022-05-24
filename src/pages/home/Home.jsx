// import components
import SideBar from '../../components/sideBar/SideBar';
import TopBar from '../../components/topBar/TopBar';
import Feed from './../../components/feed/Feed';
import RightBar from './../../components/rightBar/RightBar';

// import style Home 
import {ContainerHome} from './styleHome';



const Home = () => {
  return (
    <>
      <TopBar />

      <ContainerHome>
        <SideBar />
        <Feed />
        <RightBar />
      </ContainerHome>
      
    </>
  );
}

export default Home;
