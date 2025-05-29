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
    image: string;
}

export default function BasicCard({title, summary, link}: BasicCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
       <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
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
      </CardContent>
      <CardActions>
      <Button size="small" href={link} target="_blank" rel="noopener noreferrer">Check it out!</Button>
      </CardActions>
    </Card>
  );
}
