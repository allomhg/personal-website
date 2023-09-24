import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogHeaderImage } from './DialogHeaderImage';

interface MyDialogProps {
        open: boolean;
        handleClose: () => void;
        descElementRef: React.RefObject<HTMLElement>;
}

// const descriptionElementRef = React.useRef<HTMLElement>(null);

export const ProjectScrollDialog: React.FunctionComponent<MyDialogProps> = ({ open, handleClose, descElementRef }) => {
    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // }

    // const handleClose = () => {
    //     setOpen(false);
    // }

    // const descriptionElementRef = React.useRef<HTMLElement>(null);

    // React.useEffect( () => {
    //     if (open) {
    //         const { current: descriptionElement } = descriptionElementRef;
    //         if (descriptionElement !== null) {
    //             descriptionElement.focus();
    //         }
    //     }
    // }, [open]);
    
    return (   
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">Project Title</DialogTitle>
            <DialogContent>
                <DialogHeaderImage /> {/* Will obivously inherit the same image sent to the card component */}
                <DialogContentText
                    id="scroll-dialog-description"
                    ref={descElementRef}
                    tabIndex={-1}
                >
                    {[...new Array(10)]
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
    );
}