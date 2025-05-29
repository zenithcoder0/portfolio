import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardMedia } from '@mui/material';

type BasicCardProps = {
    title: string;
    summary: string;
    link: string;
    image?: string;
}

export default function BasicCard({title, summary, link, image}: BasicCardProps) {
  return (
    <Card
    sx={{
      width: '100%',
      maxWidth: 480, // Max width on large screens
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      padding: 2,
      boxSizing: 'border-box',
      margin: '0 auto'
    }}
>
       <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        sx={{
          width: { xs: '100%', sm: 140 },
          height: { xs: 'auto', sm: 140 },
          objectFit: 'cover',
          borderRadius: 1
        }}
        />
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingLeft: { sm: 2 },
      paddingTop: { xs: 2, sm: 0 }
    }}
  >
      <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20}}>
          {title}
        </Typography>
        <Typography variant="body2">
          {summary.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br/>
            </span>
          ))}
        </Typography>
      <CardActions>
      <Button size="small" href={link} target="_blank" rel="noopener noreferrer">Check it out!</Button>
      </CardActions>
      </CardContent>
      </Box>
    </Card>
  );
}
