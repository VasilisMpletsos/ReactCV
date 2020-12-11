import styled from "styled-components";

export const CardConatiner = styled.div`
    width: 300px;
    height: 400px;
    transition: 400ms;
    box-shadow: 0 0 6px black;
    &:hover{
        transform: scale(1.1);
        box-shadow: 0 0 10px black;
    }
`;

export const TextContainer = styled.div`
    width: 100%;
    height: 100px;
`;

export const ButtonContainer = styled.div`
    margin: 10px;
`;

