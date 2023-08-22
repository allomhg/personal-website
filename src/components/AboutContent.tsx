import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

const experience = [
    {startDate: "12-2017", endDate: "06-2022", jobTitle: "Design Engineer", place: "Patchell Industries Ltd."},
]

export const AboutContent = () => {
    return (
        <>
            <Box>
                <Typography color="text.primary" variant='h2' component="h2">
                    Experience
                </Typography>
                <Typography>
                    
                </Typography>
            </Box>
        </>

    );
}