import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

type JobProps = {
    date: string;
    jobTitle: string;
    place: string;
}

export const AboutContent: React.FunctionComponent<JobProps> = ({ date, jobTitle, place }) => {
    return (
        <>
            <Box sx={{ my: 5 }}>
                <Typography color="text.primary" variant='h4' component="h2">
                    Experience
                </Typography>
                <Typography>
                    {jobTitle}
                </Typography>
            </Box>
        </>
    );
}