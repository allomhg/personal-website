import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { SectionContent } from '../pages/About';

    export const AboutList: React.FunctionComponent<SectionContent> = ({ date, title, place }) => {
        return (
            <>
                <li>{date} {title} {place}</li>
            </>
        );
}