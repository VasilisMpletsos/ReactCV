import React from "react";
import { Container, TitleContainer, TableMargins, StyledCell} from "./styles";
import { Divider, Table, TableBody, TableContainer, TableRow } from "@material-ui/core";

function ComputerSkills(){
    return(
        <Container>
            <TitleContainer>
                Computer Skills
                <Divider/>
            </TitleContainer>
            <TableMargins>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <StyledCell align="center">C/C++</StyledCell>
                                <StyledCell align="center">Java</StyledCell>
                                <StyledCell align="center">Python</StyledCell>
                            </TableRow>
                            <TableRow>
                                <StyledCell align="center">NodeJS</StyledCell>
                                <StyledCell align="center">Django</StyledCell>
                                <StyledCell align="center">React</StyledCell>
                            </TableRow>
                            <TableRow>
                                <StyledCell align="center">Javascript</StyledCell>
                                <StyledCell align="center">R</StyledCell>
                                <StyledCell align="center">Virtuoso</StyledCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </TableMargins>
        </Container>
    )
}

export default ComputerSkills;