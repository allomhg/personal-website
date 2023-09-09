import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

type ListProps = {
    date: string;
    title: string;
    place: string;
    link?: string;
}

    export const AboutList: React.FunctionComponent<ListProps> = ({ date, title, place, link }) => {
        return (
            <>
                <Box sx={{ my: 5 }}>
   
                </Box>
            </>
        );
}