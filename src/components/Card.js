import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MediaCard = ({ image, title, content, url }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }} component="div"> */}
        <Typography variant='body2' sx={{ color: "text.secondary" }} component='div'>
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' disabled={!url} onClick={url ? () => window.open(url, "_blank", "noopener,noreferrer") : undefined}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
