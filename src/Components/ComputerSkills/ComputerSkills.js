import React from "react";
import { Container, TitleContainer, TableMargins} from "./styles";
import { Divider, Grid } from "@material-ui/core";
import mapSkills from "./mapSkills";

const skills = ['C','C++','Python','Django','R','Java','Javascript','NodeJS','React','Matlab',
                'MySQL','MongoDB','OpenCV','Keras','Tensorflow',
                'Virtuoso','HFSS','EasyEDA','Multisim',
                'Photoshop','Solidworks','RasberryPI','Arduino'];

function ComputerSkills(){
    return(
        <Container>
            <TitleContainer>
                Computer Skills
                <Divider/>
            </TitleContainer>
            <TableMargins>
                <Grid container direction="row" spacing={2}>
                    {mapSkills(skills)}
                </Grid>
            </TableMargins>
        </Container>
    )
}

export default ComputerSkills;