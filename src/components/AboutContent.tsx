import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { AboutList } from './AboutList';
import { ContentList, SectionContent } from '../pages/About';

type AboutProps = {
    title: string;
    aboutContent: SectionContent[];
}

    export const AboutContent: React.FunctionComponent<AboutProps> = ({ title, aboutContent }) => {
        return (
            <>
                <Box sx={{ my: 5 }}>
                    <Typography color="text.primary" variant='h4' component="h2">
                        {title}
                    </Typography>
                    <Box>
                        {aboutContent.map((content) => (
                            <AboutList
                                date={content.date}
                                title={content.title}
                                place={content.place}
                            />
                        ))}
                    </Box>
                </Box>
            </>
        );
}