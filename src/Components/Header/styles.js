import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height:50px;
    background-color: #454c77;
    z-index: 999;
    box-shadow: 0 0 10px black;
    color: white;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    overflow: auto;
    padding: 10px;
    @media(max-width: 600px){
        justify-content: center;
    }
`

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    right: 20px;
    @media(max-width: 600px){
        display: none;
    }
`;

export const SocialItem = styled.div`
    margin-right: 10px;
    transition: 400ms;
    &:hover{
        transform: scale(1.2);
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    @media(max-width: 600px){
        margin-left: 0px;
    }
`;

export const TitleLetter = styled.div`
    font-family: 'Fredericka the Great', cursive;
    font-size: 30px;
    transition: 200ms;
    min-width:7px;
    &:hover{
        transform: scale(1.2);
        color: yellow;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: white;
`;