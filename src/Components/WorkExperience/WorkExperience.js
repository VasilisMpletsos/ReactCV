import React from "react";
import { Container, TitleContainer, WorkContainer } from "./styles";
import { Divider } from "@material-ui/core";
import mapTimeline from "./mapTimeline";

const workPlaces = [
    {
        name: "Fieldscale",
        position: "Software Engineer",
        location: "Thessaloniki, Anw Toumpa"
    },
    {
        name: "Aristotle Racing Team",
        position: "Electronics Engineer",
        location: "Thessaloniki, University"
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