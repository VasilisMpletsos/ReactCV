import styled from "styled-components";

export const Container = styled.div`
    margin: 30px 30px 30px; 
    @media(max-width: 900px){
        margin: 30px 5px 5px; 
    }
`


export const TitleContainer = styled.div`
    position: relative;
    margin: 10px 0px 0px 10px;
    font-family: 'Dancing Script';
    font-size: 40px;
    font-weight: bold;
`;

export const TextContainer = styled.div`
    margin: 30px 50px 0px 50px;
    @media(max-width: 900px){
        margin: 30px 10px 0px 10px; 
    }
`;

export const Text = styled.div`
    position: relative;
    font-family: 'Indie Flower';
    font-size: 22px;
`;