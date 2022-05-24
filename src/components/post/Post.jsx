// import style 
import { PostBottom, PostCenter, PostContainer, PostImgTop, PostLeftTop, PostUserName, PostRightTop, PostTime, PostTop, PostTextCenter, PostImgCenter, PostWrapper, PostRightBottom, PostLeftBottom, PostCommentBottom, PostLikeCounterBottom } from './stylePost';

// import icon
 import {  Favorite, MoreVert } from '@material-ui/icons';

//  import users in data
 import {Users} from './../Data';

// 
import { useState } from 'react';


const Post = ({p}) => {

  // Like and dislike function
  const [like, setLike] = useState(p.like);
  const [isLiked, setIsLiked] = useState(false);
  const [colorLike, setColorLike] = useState(false)

  const LikeAndDislike = () => {
    setLike(isLiked === true ? like-1 : like+1)
    setIsLiked(!isLiked)
    setColorLike(true)
    setColorLike(!colorLike)
  }



  return (
    <PostContainer>
      <PostWrapper>
      <PostTop>
        <PostLeftTop>
          <PostImgTop src={Users.filter((user) => user.id === p.userId)[0].profilePicture} alt='' />
          <PostUserName>{Users.filter((user) => user.id === p.userId)[0].username}</PostUserName>
          <PostTime>{p.date}</PostTime>
        </PostLeftTop>

        <PostRightTop> 
          <MoreVert /> 
        </PostRightTop>
      </PostTop>

      <PostCenter>
        <PostTextCenter>{p.desc}</PostTextCenter>
        <PostImgCenter src={p.photo} />
      </PostCenter>


      <PostBottom>
        <PostLeftBottom>

          <Favorite style={{
            width: "24px",
            height: "24px",
            marginRight: "5px",
            cursor: "pointer",
            color: `#${colorLike === false ? "000" : "B20600"}`
          }} onClick={LikeAndDislike} />

          <PostLikeCounterBottom>{like} people like it</PostLikeCounterBottom>
        </PostLeftBottom>

        <PostRightBottom>
          <PostCommentBottom>{p.comment} Comments</PostCommentBottom>
        </PostRightBottom>
      </PostBottom>
      </PostWrapper>
    </PostContainer>
  );
}

export default Post;
