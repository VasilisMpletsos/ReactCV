import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Container, SocialContainer, SocialItem, Link } from "./styles";
import { Menu, MenuItem, Button, Tooltip} from '@material-ui/core';
import mapWord from "./mapWord";


function Header(){

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const emailMe = () => {
        window.location.href = "mailto:mpletsos@auth.gr?subject=Conatct%20me%20from%20site";
    }

    return(
        <Container >
            {mapWord("Vasilis Mpletsos CV")}
            <SocialContainer>
                <div style={{marginRight: "10px"}}>
                    <Button variant="contained" color="primary" onClick={handleClick}>
                        Contact Me
                    </Button>
                    <Menu
                        style={{top: "45px"}}
                        autoFocus={true}
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={emailMe}>Send Email</MenuItem>
                    </Menu>
                </div>
                <SocialItem>
                    <Link href="https://github.com/VasilisMpletsos" target="_blank">
                        <Tooltip title="Github">
                            <GitHubIcon/>
                        </Tooltip>
                    </Link>
                </SocialItem>
                <SocialItem>
                    <Link href="https://www.linkedin.com/in/vasileios-mpletsos-1158a3196/" target="_blank">
                        <Tooltip title="Linkedin">
                            <LinkedInIcon/>
                        </Tooltip>
                    </Link>
                </SocialItem>
                <SocialItem>
                    <Link href="https://www.facebook.com/vmpletsos" target="_blank">
                        <Tooltip title="Facebook">
                            <FacebookIcon/>
                        </Tooltip>
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