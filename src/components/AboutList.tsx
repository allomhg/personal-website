import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { SectionContent } from '../pages/About';

    export const AboutList: React.FunctionComponent<SectionContent> = ({ date, title, place }) => {
        return (
            <>
                <Box sx={{ my: 5, bgcolor: "green" }}>
                    <ul style={{ backgroundColor: "blue" }}>
                        <li style={{ backgroundColor: "yellow" }}>{date} {title} {place}</li>
                    </ul>
                </Box>
            </>
        );
}