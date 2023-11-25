import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { AboutList } from './AboutList';
import { SectionContent } from '../pages/About';
// import { AboutListSmall } from './AboutListSmall';

type AboutProps = {
    title: string;
    aboutContent: SectionContent[];
}

export const AboutContent: React.FunctionComponent<AboutProps> = ({ title, aboutContent }) => {
    const isMobile = window.innerWidth <= 600;

    return (
        <>
            <Box 
                sx={{ 
                    my: 5, 
                }}
            >
                <Typography color="text.primary" variant='h5' component="h3" pb="1rem">
                    {title}
                </Typography>
                <Box>
                    {aboutContent.map((content) => (
                        isMobile ? 
                            // <AboutListSmall key={content.title} date={content.date} title={content.title} place={content.place} link={content.link} /> 
                            <AboutList key={content.title} date={content.date} title={content.title} place={content.place} link={content.link}/>
                        : 
                            <AboutList key={content.title} date={content.date} title={content.title} place={content.place} link={content.link}/>
                    ))}
                </Box>
            </Box>
        </>
    );
}