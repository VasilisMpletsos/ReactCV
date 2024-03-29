import React from "react";
import { Container, TitleContainer } from "./styles";
import { Divider, Grid } from "@material-ui/core";
import ChargeSpot from "../../Assets/Images/chargeSpot.jpg";
import MaskRadio from "../../Assets/Images/maskradio.jpg";
import WifiWorld from "../../Assets/Images/wifiworld.png";
import Digit from "../../Assets/Images/digitkaggle.png";
import Telemetry from "../../Assets/Images/carTelemetry.jpg";
import PlatesBlur from "../../Assets/Images/blurplates.jpg";
import Art from "../../Assets/Images/art.png";
import FixedPdf from "../../Assets/Images/pdfcleaner.jpg";
import Lock from "../../Assets/Images/boot.png";
import Ikariam from "../../Assets/Images/ikariam.png";
import Stevva from "../../Assets/Images/stevva.jpg";
import InstaScrapper from "../../Assets/Images/instascrapper.png";
import KinoProphet from "../../Assets/Images/kino.png";
import mapProjects from "./mapProjects";

const projects = [
    {
        title: "Aristotle Racing Team",
        image: Art,
        text: "I was in Aristotle Racing Team in 2017 as head of Electronics. We designed and manufactured an awesome FSAE Car. Best thing in my life!",
        link: "http://aristotleracing.gr/"
    },
    {
        title: "Instagram Scrapper",
        image: InstaScrapper,
        text: "An automated bot created with python and Selenium to scrap data from instagram profiles and crawl on its own.",
        link: "https://www.kaggle.com/vasileiosmpletsos/1100-instagram-users-datetime-posts-data"
    },
    {
        title: "Charge Spot",
        image: ChargeSpot,
        text: "Charge Spot will be a 100% echo friendly structure that produces energy, so people can charge anything when they go for a walk to port of Thessaloniki.",
        link: "https://github.com/VasilisMpletsos/ChargeSpot_UI"
    },
    {
        title: "I-Stevva",
        image: Stevva,
        text: "I-Stevva is a device which farmers can buy and monitor the conitions of their fields remotely 24/7",
    },
    {
        title: "Mask Radio",
        image: MaskRadio,
        text: "Mask Radio was a web app i designed, we made lives with a friend and our friends could send us their songs on site, directly from youtube API.",
        link: "https://github.com/VasilisMpletsos/MaskRadio"
    },
    {
        title: "Wifi World",
        image: WifiWorld,
        text: "Wifi World is a web app idea, where users can upload or search for decrypted Wifi handshakes, upload their captures or help the commutity by decrypting hashes.",
        link: "https://github.com/VasilisMpletsos/WifiWorld"
    },
    {
        title: "Kino Prophet",
        image: KinoProphet,
        text: "DNN decided that if you play 4,8,12,15,19,23,27,31,35,39,42,46, 50,54,58,62,66,69,73,77 you have the best chances (about 25%) for KINO!",
        link: "https://github.com/VasilisMpletsos/KinoAI"
    },
    {
        title: "Fix Scanned PDF",
        image: FixedPdf,
        text: "Fixed Scanned PDF, is a python program that reads each page of a pdf and aplying thresholding techniques to clean it if was scanned and had bad quality.",
        link: "https://github.com/VasilisMpletsos/FixScannedPDF"
    },
    {
        title: "Digit Recogniser",
        image: Digit,
        text: "Digit Recogniser was a Kaggle Competition, where i achieved 99.56% accuracy. Feel free to take the code and use it.",
        link: "https://github.com/VasilisMpletsos/Digit_Recognizer_Kaggle_Competition"
    },
    {
        title: "Telemetry",
        image: Telemetry,
        text: "Telemetry was a fun project where our FSAE car can send data directly to server and be displayed live. It has steering angle, tempratures and tyre usage.",
        link: "https://github.com/VasilisMpletsos/Car_Telemetry"
    },
    {
        title: "Blur Plates",
        image: PlatesBlur,
        text: "Blur Plates is a simple Open CV project where license plates are located in images and then blured.",
        link: "https://github.com/VasilisMpletsos/BluringLicensePlates"
    },
    {
        title: "Boot Image Scanner",
        image: Lock,
        text: "Boot image scanner is a Python program. If you open your PC and don' show it the image key it shutdowns.",
        link: "https://github.com/VasilisMpletsos/StartUpImageScanner"
    },
    {
        title: "Fortress Hack",
        image: Ikariam,
        text: "In early years i used to play Ikariam and i develoved a program in Python to do actions automatically.",
        link: "https://github.com/VasilisMpletsos/IkariamFortressHack"
    }
]

function Projects(){
    return(
            <Container>
                <TitleContainer>
                    Projects
                    <Divider/>
                </TitleContainer>
                <Grid container justify={window.screen.width < 900 ? "center" : "undefined"}>
                    {mapProjects(projects)}
                </Grid>
                <style>
                    @import url(&apos;https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Indie+Flower&display=swap&apos;);
                </style>
            </Container>
    )
}

export default Projects;
