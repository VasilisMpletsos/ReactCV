import styled from "styled-components";
import Card from '@material-ui/core/Card';

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

