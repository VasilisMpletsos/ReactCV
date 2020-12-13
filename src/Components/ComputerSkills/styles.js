import styled from "styled-components";
import { TableCell } from "@material-ui/core";

export const Container = styled.div`
    margin: 50px 30px 30px; 
`

export const TitleContainer = styled.div`
    position: relative;
    margin: 10px 0px 0px 10px;
    font-family: 'Dancing Script';
    font-size: 40px;
    font-weight: bold;
`;

export const TableMargins = styled.div`
    margin: 30px 100px 0px 100px;
`;

export const StyledCell = styled(TableCell)`
    &&{
        font-family: 'Indie Flower';
        font-size: 22px;
    }
`;