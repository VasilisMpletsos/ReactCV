import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Container, SocialContainer, SocialItem, Title, TitleLetter, Link } from "./styles";
import { Menu, MenuItem, Button} from '@material-ui/core';
import { isMobile } from "react-device-detect";


function Header(){

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const callMe = () => {
        window.open('tel:12345');
    }

    const emailMe = () => {
        window.location.href = "mailto:mpletsos@auth.gr?subject=Conatct%20me%20from%20site";
    }

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
                <div style={{marginRight: "10px"}}>
                    <Button variant="contained" color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Contact Me
                    </Button>
                    <Menu
                        style={{position: "absolute", top: "40px"}}
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {isMobile ? <MenuItem onClick={callMe}>Phone Call</MenuItem> : undefined}
                        <MenuItem onClick={emailMe}>Send Email</MenuItem>
                    </Menu>
                </div>
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