import styled from "styled-components";

export const Call = styled.div`
    position: fixed;
    bottom: 20px;
    right: 30px;
    display: ${props => props.show ? "block" : "none"};
` ;