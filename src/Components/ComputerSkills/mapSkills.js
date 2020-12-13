import React from "react";
import { Grid } from "@material-ui/core";
import { StyledAvatar} from "./styles";

function mapSkills(data){
    return(
        data.map(skill=>{
            return(
                <Grid item>
                    <StyledAvatar>{skill}</StyledAvatar>
                </Grid>
            )
        })
    )
}

export default mapSkills;