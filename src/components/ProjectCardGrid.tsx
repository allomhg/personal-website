import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ProjectCardNew } from "../components/ProjectCardNew";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// TO REMOVE ONCE FINISHED TESTING
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// TO REMOVE ONCE FINISHED TESTING

const cards = [1, 2];

export const ProjectCardGrid = () => {
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

    // Continue to add the Scrolling long content example from MUI (see Notion notes)
    
    return (
        <Container 
        sx={{ 
            mb: 5,
            maxWidth: "md" 
            }}
         >
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid key={card} xs={12} sm={6}>
                        {/* <ProjectCard /> */}
                        <ProjectCardNew />
                    </Grid>
                ))}
            </Grid>

            {/* 
                This isn't working and I'm not sure why. Will continue to investigate.
            */}

            {/* MOVE THIS CONTENT INTO A COMPONENT ONCE TESTING IS FINISHED */}
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
            {/* MOVE THIS CONTENT INTO A COMPONENT ONCE TESTING IS FINISHED */}
        </Container>
    );
}