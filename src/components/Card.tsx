import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

type BasicCardProps = {
    title: string;
    summary: string;
    link: string;
    image?: string;
}

export default function BasicCard({title, summary, link, image}: BasicCardProps) {
  return (
    <Card sx={{ width: 600, display: 'flex', flexDirection: 'row', padding: 2}}>
       <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        sx={{ width: '50%', height: '50%', objectFit: 'cover', flexShrink: 0 }}
        />

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
    </Card>
  );
}
