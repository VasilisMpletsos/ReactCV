import React from "react";
import { Container, TitleContainer, TextContainer, Text } from "./styles";
import { Divider, Grid } from "@material-ui/core";
import ProjectCard from "../ProjectCard/ProjectCard";
import Image from "../../Assets/Images/download.jpg"

function Projects(){
    return(
            <Container>
                <TitleContainer>
                    Projects
                    <Divider/>
                </TitleContainer>
                <Grid container style={{marginTop: "20px", width: "100%"}}>
                    <Grid item container justify="center" xs={12} md={6} lg={4}>
                        <ProjectCard title="Chargespot" image={Image}/>
                    </Grid>
                    <Grid item container justify="center" xs={12} md={6} lg={4}>
                        <ProjectCard title="Wifi World" image={Image}/>
                    </Grid>
                    <Grid item container justify="center" xs={12} md={6} lg={4}>
                        <ProjectCard title="Xomahos" image={Image}/>
                    </Grid>
                </Grid>
                <style>
                    @import url(&apos;https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Indie+Flower&display=swap&apos;);
                </style>
            </Container>
    )
}

export default Projects;