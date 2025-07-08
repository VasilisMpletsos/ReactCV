import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Stack, Typography } from '@mui/material';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const LanguageBadge = ({image, name, isLoved, score}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card 
      sx={{ 
        width: 300, 
        height: 300,
        position: 'relative',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.2s ease-in-out'
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Love indicator */}
      {isLoved && (
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            opacity: isHovered ? 1 : 0.3,
            transition: 'opacity 0.3s ease-in-out',
            zIndex: 1
          }}
        >
          <FavoriteIcon 
            sx={{ 
              color: '#ff4757', 
              fontSize: 24,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
            }} 
          />
        </Box>
      )}
      <CardMedia
        component="img"
        height="200"
        sx={{p: 1}}
        style={{ objectFit: 'contain' }}
        image={image}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Rating
            name="text-feedback"
            value={score}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <Box sx={{ ml: 2 }}>{labels[score]}</Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default LanguageBadge;