import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Container, SocialContainer, SocialItem, Title, TitleLetter, Link } from "./styles";


function Header(){
    return(
        <Container >
            <Title>
                <TitleLetter>V</TitleLetter>
                <TitleLetter>a</TitleLetter>
                <TitleLetter>s</TitleLetter>
                <TitleLetter>i</TitleLetter>
                <TitleLetter>l</TitleLetter>
                <TitleLetter>i</TitleLetter>
                <TitleLetter>s</TitleLetter>
                &nbsp;
                <TitleLetter>M</TitleLetter>
                <TitleLetter>p</TitleLetter>
                <TitleLetter>l</TitleLetter>
                <TitleLetter>e</TitleLetter>
                <TitleLetter>t</TitleLetter>
                <TitleLetter>s</TitleLetter>
                <TitleLetter>o</TitleLetter>
                <TitleLetter>s</TitleLetter>
                &nbsp;
                <TitleLetter>C</TitleLetter>
                <TitleLetter>V</TitleLetter>
            </Title>
            <SocialContainer>
                <SocialItem>
                    <Link href="https://github.com/VasilisMpletsos" target="_blank">
                        <GitHubIcon/>
                    </Link>
                </SocialItem>
                <SocialItem>
                    <Link href="https://www.linkedin.com/in/vasileios-mpletsos-1158a3196/" target="_blank">
                        <LinkedInIcon/>
                    </Link>
                </SocialItem>
                <SocialItem>
                    <Link href="https://www.facebook.com/vmpletsos" target="_blank">
                        <FacebookIcon/>
                    </Link>
                </SocialItem>
            </SocialContainer>
            <style>
                @import url(&apos;https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap&apos;);
            </style>
        </Container>
    )
}

export default Header;