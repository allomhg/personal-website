import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ProjectScrollDialog } from './ProjectScrollDialog';

export const ProjectCardNew = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const descriptionElementRef = React.useRef<HTMLElement>(null);
    
    React.useEffect( () => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia 
                    component="img"
                    alt="project image"
                    image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3" color="text.primary">
                        Project Heading
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This is the project description for my project.
                        It will be a brief summary. Bleeeeeeeeeeeeeeep.
                        What on earth is going on!?!?!?!?!?!?! hello
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        size="small"
                        onClick={handleClickOpen}
                    >
                        Read More
                    </Button>
                </CardActions>
            </Card>
            <ProjectScrollDialog
                open={open}
                handleClose={handleClose} 
                descElementRef={descriptionElementRef}
            />
        </>
    );
}