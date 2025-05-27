import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


type BasicCardProps = {
    title: string;
    summary: string;
    link: string;
}

export default function BasicCard({title, summary, link}: BasicCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {title}
        </Typography>
        <Typography variant="body2">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{link}</Button>
      </CardActions>
    </Card>
  );
}
