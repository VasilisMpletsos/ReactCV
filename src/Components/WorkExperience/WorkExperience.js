import React from "react";
import { Container, TitleContainer, WorkContainer } from "./styles";
import { Divider } from "@material-ui/core";
import mapTimeline from "./mapTimeline";

const workPlaces = [
    {
        name: "Kenotom",
        position: "Embedded Systems Engineer",
        location: "Thessaloniki, Greece"
    },
    {
        name: "Army",
        position: "Telecommunications Private",
        location: "Evros, Soufli"
    },
    {
        name: "Fieldscale",
        position: "Software Engineer",
        location: "Thessaloniki, Greece"
    },
    {
        name: "Aristotle Racing Team",
        position: "Electronics Engineer",
        location: "Thessaloniki, Greece"
    },
]

function WorkExperience(){
    return(
            <Container>
                <TitleContainer>
                    Timeline
                    <Divider/>
                </TitleContainer>
                <WorkContainer>
                    {mapTimeline(workPlaces)}
                </WorkContainer>
            </Container>
    )
}

export default WorkExperience;