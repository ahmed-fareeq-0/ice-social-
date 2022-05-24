import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
`

export const PostWrapper = styled.div`
 padding: 10px;
`

export const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const PostLeftTop = styled.div`
  display: flex;
  align-items: center;
`
export const PostImgTop = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`
export const PostUserName = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin: 0 10px;
`
export const PostTime = styled.span`
  font-size: 12px;
`
export const PostRightTop = styled.div`
`

export const PostCenter = styled.div`
  margin: 20px 0;
`
export const PostTextCenter = styled.span`
`
export const PostImgCenter = styled.img`
    margin-top: 20px;
    width: 100%;
    max-height: 500px;
    object-fit: contain;
`

export const PostBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const PostLeftBottom = styled.div`
    display: flex;
    align-items: center; 
`


// export const PostIconBottom = styled.img`
//     width: 24px;
//     height: 24px;
//     margin-right: 5px;
//     cursor: pointer;
// `

export const PostLikeCounterBottom = styled.span`
    font-size: 15px;
`


export const PostRightBottom = styled.div`
`

export const PostCommentBottom = styled.span`
    cursor: pointer;
    font-size: 15px;
` 







