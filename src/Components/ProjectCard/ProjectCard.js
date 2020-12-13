import React from 'react';
import { Link, CardMedia, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { CardConatiner, TextContainer } from "./styles";
 
function ProjectCard(props){
    return(
    <CardConatiner>
        <CardMedia
          component="img"
          alt="ChargeSpot"
          image={props.image}
          style={{height: "200px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Dancing Script', fontWeight: 'bold', fontSize: "25px"}}>
            {props.title}
          </Typography>
          <TextContainer>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.text}
            </Typography>
          </TextContainer>
          {props.link ? (
            <Link href={props.link} target="_blank" color="primary">
            Learn More
          </Link>
          ) : "No Info"}
        </CardContent>
      <style>
          @import url(&apos;https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Indie+Flower&display=swap&apos;);
      </style>
    </CardConatiner>
    )
}

export default ProjectCard;