// import components
import Post from '../post/Post';
import Share from './../share/Share'

// import style feed 
import {ContainerFeed, FeedWrapper} from './styleFeed';

// import data
import {Posts} from './../Data'
 

const Feed = () => {
  return (
    <ContainerFeed>
      <FeedWrapper>
        <Share />
        {Posts.map((p) => <Post key={p.id} p={p} /> )}
      </FeedWrapper>
    </ContainerFeed>
  );
}

export default Feed;
