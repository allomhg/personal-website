import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { ProjectScrollDialog } from './ProjectScrollDialog';

// TO REMOVE ONCE FINISHED TESTING
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// TO REMOVE ONCE FINISHED TESTING

export const ProjectCard = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        console.log("This is running");
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpenClose = () => {
        console.log(!open)
        setOpen(!open);
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
                    <Button 
                        size="small"
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Project Title</DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {[...new Array(50)]
                            .map(
                                () => "This is project description text.",
                            )
                            .join("\n")}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleClose}>Open Project</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}