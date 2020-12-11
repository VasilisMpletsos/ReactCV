import styled from "styled-components";

export const TitleContainer = styled.div`
    position: relative;
    margin: 10px 0px 0px 10px;
    font-family: 'Dancing Script';
    font-size: 40px;
    font-weight: bold;
    animation titleAppearProjects 4s;
    @keyframes titleAppearProjects{
        0% {
            right: 2000px;
        }
        100% {
            right: 0px;
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
    animation textAppearProjects 4s;
    @keyframes textAppearProjects{
        0% {
            right: 2000px;
        }
        100% {
            right: 0px;
        }
    }
`;