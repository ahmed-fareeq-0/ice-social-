import {ContainerShare, ShareWrapper, ShareTop, ShareBottom, ShareProfileImg, ShareInput, ShareOptions, ShareOption, ShareOptionText, ShareButton} from './styleShare';

import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"


const Share = () => {
  return (
    <ContainerShare>
      <ShareWrapper>
        <ShareTop>
            <ShareProfileImg src="/assets/person/1.jpeg" alt="" />
            <ShareInput placeholder="What's in your mind Safak?" />
        </ShareTop>
        <hr style={{margin:"20px"}}/>

        <ShareBottom>
            <ShareOptions>
                <ShareOption>
                    <PermMedia htmlColor='tomato' style={{ fontSize: "18px", marginRight: "3px" }}/>
                    <ShareOptionText>Photo or video</ShareOptionText>
                </ShareOption>

                <ShareOption>
                    <Label htmlColor='blue' style={{ fontSize: "18px", marginRight: "3px" }}/>
                    <ShareOptionText>Tag</ShareOptionText>
                </ShareOption>

                <ShareOption>
                    <Room htmlColor='green' style={{ fontSize: "18px", marginRight: "3px" }}/>
                    <ShareOptionText>Location</ShareOptionText>
                </ShareOption>

                <ShareOption>
                    <EmojiEmotions htmlColor='goldenrod' style={{ fontSize: "18px", marginRight: "3px" }}/>
                    <ShareOptionText>Feelings</ShareOptionText>
                </ShareOption>

            </ShareOptions>

            <ShareButton>Share</ShareButton>
        </ShareBottom>
      </ShareWrapper>
    </ContainerShare>
  );
}

export default Share;
