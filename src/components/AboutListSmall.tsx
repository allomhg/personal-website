import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { ListItemText } from '@mui/material';
import { SectionContent } from '../pages/About';

export const AboutListSmall: React.FunctionComponent<SectionContent> = ({ date, title, place, link }) => {
    return (
        <>
            <Box component="li" sx={{ display: "flex", flexDirection: "column", background: "green" }}>
                <Typography 
                    color="text.primary" 
                    sx={{ width: 150 }}
                >
                    {date}
                </Typography>
                <Typography 
                    component="a"
                    href={link}
                    sx={{ pr: 1.5 }}
                >
                    {title}
                </Typography>
                <Typography 
                    color="text.secondary" 
                    sx={{ fontStyle: "italic" }}
                >
                    {place}
                </Typography>
            </Box>
            <Box>
            </Box>
            <Box>
            </Box>
        </>
    );
}