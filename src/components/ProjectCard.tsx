import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ProjectCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia 
                component="img"
                alt="project image"
                height="140"
                image=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Project One
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is the project description for my project.
                    It will be a brief summary. Bleeeeeeeeeeeeeeep.
                    What on earth is going on!?!?!?!?!?!?!
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>

        </Card>
    );
}