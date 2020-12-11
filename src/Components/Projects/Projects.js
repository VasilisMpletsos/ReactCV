import React from "react";
import { TitleContainer, TextContainer, Text } from "./styles";
import classes from "./Projects.module.css"

function Projects(){
    return(
            <div className={classes.header}>
                <TitleContainer>
                    Projects
                </TitleContainer>
                <TextContainer>
                    <Text>
                       I have done on my own or helped in many projects some of many:
                    </Text>
                </TextContainer>
            </div>
    )
}

export default Projects;