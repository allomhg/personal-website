import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
// import { ListItemText } from '@mui/material';
import { SectionContent } from '../pages/About';

export const AboutList: React.FunctionComponent<SectionContent> = ({ date, title, place, link }) => {
    return (
        <>
            <Box 
                sx={{ 
                    display: "flex", 
                    flexDirection: { md: "row", xs: "column"}
                }}>
                <Typography 
                    color="text.primary" 
                    sx={{ 
                        width: "10rem",
                    }}
                >
                    {date}
                </Typography>
                <Typography 
                    component="a"
                    href={link}
                    width={"fit-content"}
                    sx={{ pr: 1.5 }}
                    
                >
                    {title}
                </Typography>
                <Typography 
                    color="text.secondary" 
                    fontStyle={"italic"}
                    pb={{ md: "0.25rem", sm: "0.5rem", xs: "0.5rem" }}
                >
                    {place}
                </Typography>
            </Box>
        </>
    );
}