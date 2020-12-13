import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const Container = styled.div`
    margin: 50px 30px 30px 30px;
    @media(max-width: 900px){
        margin: 50px 10px 0px 10px; 
    } 
`

export const TitleContainer = styled.div`
    position: relative;
    margin: 10px 0px 0px 10px;
    font-family: 'Dancing Script';
    font-size: 40px;
    font-weight: bold;
`;

export const SkillsMargins = styled.div`
    margin: 30px 100px 0px 100px;
    @media(max-width: 900px){
        margin: 30px 10px 0px 10px; 
    }
`;

export const StyledAvatar = styled(Avatar)`
    &&{
        font-family: 'Indie Flower';
        font-size: 22px;
        width: 120px;
        height: 120px;
        background-color: purple;
        transition: 400ms;
        &:hover{
            background-color: orange;
            transform: scale(1.2);
            color: black;
        }
    }
`;