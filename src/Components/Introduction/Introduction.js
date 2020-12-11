import React from "react";
import { Container, TitleContainer, TextContainer, Text } from "./styles";
import { Divider } from "@material-ui/core";

function Introduction(){
    return(
            <Container>
                <TitleContainer>
                    Introduction
                    <Divider/>
                </TitleContainer>
                <TextContainer>
                    <Text>
                        Hello i am Vasilis Mpletsos. I studied <b>Electrical and Computer Engineer</b> in one of the best Polytechnic
                        Universities in Greece the known <b>Aristotle University of Thessaloniki AUTH</b>. From a young age i was intrested 
                        in <b>automotive</b> and especially <b>racing</b>. So when i have seen that there was a racing team in the university i couldn't 
                        resist myself and i applied on my 3rd year. Having worked there for a full year on a demanding schedule i gained a lot
                        of experience, cooperated with awesome engineers and fullfilled one of my dreams, to see how it is to work as
                        a F1 engineer. We achieved some good distinctions by winning the <b>Special Design Award</b> on FSAE Italy and <b>7th overall</b> in 
                        FSAE Czech. My interests beyond automotive industry are:
                        <ul>
                            <li>Electromagnetic Simulations</li>
                            <li>High Frequency Antennas applications</li>
                            <li>Computer Vision and Robotic Operating Systems</li>
                            <li>Frontend and Backend Programming</li>
                            <li>Penetration Testing and Security </li>
                        </ul>
                    </Text>
                </TextContainer>
                <style>
                    @import url(&apos;https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap&apos;);
                </style>
            </Container>
    )
}

export default Introduction;