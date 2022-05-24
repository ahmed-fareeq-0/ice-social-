import styled from "styled-components";

export const ContainerShare = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`

export const ShareWrapper = styled.div`
  padding: 10px;
`
export const ShareTop = styled.div`
  display: flex;
  align-items: center;
`


export const ShareProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`

export const ShareInput = styled.input`
  border: 3px #f2f2f2 solid;
  border-radius: 5px;
  padding:5px 3px;
  outline:none;
  width: 80%;
`

export const ShareBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ShareOptions = styled.div`
    display: flex;
    margin-left: 20px;
`

export const ShareOption = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
`

export const ShareOptionText = styled.div`
    font-size: 14px;
    font-weight: 500;
`

export const ShareButton = styled.button`
    border: none;
    padding: 7px;
    border-radius: 5px;
    background-color: green;
    font-weight: 500;
    margin-right: 20px;
    cursor: pointer;
    color: white;
`