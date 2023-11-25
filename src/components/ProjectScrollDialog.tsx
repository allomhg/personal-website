import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogHeaderImage } from './DialogHeaderImage';

interface MyDialogProps {
        open: boolean;
        handleClose: () => void;
        descElementRef: React.RefObject<HTMLElement>;
        projectTitle: string;
        description: string;
}

export const ProjectScrollDialog: React.FunctionComponent<MyDialogProps> = ({ open, handleClose, descElementRef, projectTitle, description }) => {
    return (   
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            sx={{ maxWidth: "80%", m: "auto" }}
        >
            <DialogTitle id="scroll-dialog-title">{projectTitle}</DialogTitle>
            <DialogContent>
                <DialogHeaderImage />
                <DialogContentText
                    id="scroll-dialog-description"
                    ref={descElementRef}
                    tabIndex={-1}
                >
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleClose}>Open Project</Button>
            </DialogActions>
        </Dialog>
    );
}