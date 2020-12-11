import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardConatiner } from "./styles";
 
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
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant="outlined">
          Learn More
        </Button>
      </CardActions>
    </CardConatiner>
    )
}

export default ProjectCard;