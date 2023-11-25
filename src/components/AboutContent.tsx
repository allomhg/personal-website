import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { AboutList } from './AboutList';
import { SectionContent } from '../pages/About';

type AboutProps = {
    title: string;
    aboutContent: SectionContent[];
}

const AboutSmallList = () => {
    return (
        <Box>
            
        </Box>
    );
}

export const AboutContent: React.FunctionComponent<AboutProps> = ({ title, aboutContent }) => {
    return (
        <>
            <Box sx={{ my: 5 }}>
                <Typography color="text.primary" variant='h5' component="h3">
                    {title}
                </Typography>
                <Box component="ul">
                    {aboutContent.map((content) => (
                        <AboutList
                            key={content.title}
                            date={content.date}
                            title={content.title}
                            place={content.place}
                            link={content.link}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );
}