import React from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "../ProjectCard/ProjectCard";

function mapProjects(projects){
    return(
        projects.map(project => {
            return(
                <Grid item container justify="center" xs={12} md={6} lg={4} xl={3}>
                    <ProjectCard title={project.title} image={project.image} text={project.text} link={project.link}/>
                </Grid>
            )
        })
    )
}

export default mapProjects;
