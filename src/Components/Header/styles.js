import styled from "styled-components";

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 20px;
`;

export const SocialItem = styled.div`
    margin-right: 10px;
    transition: 400ms;
    &:hover{
        transform: scale(1.2);
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 30px;
`

export const TitleLetter = styled.div`
    font-family: 'Fredericka the Great', cursive;
    font-size: 30px;
    transition: 200ms;
    &:hover{
        transform: scale(1.2);
        color: yellow;
    }
`

export const Link = styled.a`
    text-decoration: none;
    color: white;
`