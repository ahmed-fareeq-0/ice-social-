import styled from "styled-components";

export const ContainerSideBar = styled.div`
    flex:3;
    height: calc(100vh - 50px);
    overflow-y: scroll;
    position: sticky;
    top: 50px;

    ::-webkit-scrollbar {width: 5px;}

    ::-webkit-scrollbar-track {background-color: #f1f1f1;}

    ::-webkit-scrollbar-thumb {background-color: rgb(179, 179, 179);}

`

export const SideBarWrapper = styled.div`
    padding: 20px ;
`

export const SideBarList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`

export const  SideBarListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
`

export const SideBarListItemText = styled.span`

`

export const SideBarButton = styled.button`
    width: 150px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        background-color: #0098;
    }
`

export const SideBarFriendsList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`


export const SidebarFriendItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;
`

export const SideBarFriendImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right:10px;
`

export const SideBarFriendName = styled.span`

`