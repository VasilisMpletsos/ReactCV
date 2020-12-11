import styled from "styled-components";

export const Container = styled.div`
    margin: 30px 30px 30px; 
`


export const TitleContainer = styled.div`
    position: relative;
    margin: 10px 0px 0px 10px;
    font-family: 'Dancing Script';
    font-size: 40px;
    font-weight: bold;
    animation: titleAppearIntro 4s;
    @keyframes titleAppearIntro{
        0% {
            left: 2000px;
        }
        100% {
            left: 0px;
        }
    }
`;

export const TextContainer = styled.div`
    margin: 30px 50px 0px 50px;
`;

export const Text = styled.div`
    position: relative;
    font-family: 'Indie Flower';
    font-size: 22px;
    animation: textAppearIntro 4s;
    @keyframes textAppearIntro{
        0% {
            left: 2000px;
        }
        100% {
            left: 0px;
        }
    }
`;