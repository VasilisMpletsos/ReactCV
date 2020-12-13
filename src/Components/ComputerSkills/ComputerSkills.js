import React from "react";
import { Container, TitleContainer, SkillsMargins} from "./styles";
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
            <SkillsMargins>
                <Grid container direction="row" spacing={2} justify={window.screen.width < 900 ? "center" : "undefined"}>
                    {mapSkills(skills)}
                </Grid>
            </SkillsMargins>
        </Container>
    )
}

export default ComputerSkills;