import React from "react";
import { isMobile } from "react-device-detect";
import Fab from '@material-ui/core/Fab';
import CallIcon from '@material-ui/icons/Call';
import { Call } from "./styles";


function MobileContact(){

    const callMe = () => {
        window.open('tel:+30 6944048324');
    }

    return(
        <Call show={isMobile}>
            <Fab color="primary" onClick={callMe}>
                <CallIcon/>
            </Fab>
        </Call>
    )
}

export default MobileContact;