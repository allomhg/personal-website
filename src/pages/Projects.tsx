import * as React from 'react';
import { Typography } from "@mui/material";
import { ProjectHeader } from "../components/ProjectHeader";
import { ProjectCardGrid } from "../components/ProjectCardGrid";

export const Projects = () => {
    return (   
        <main>
            <ProjectHeader />
            <ProjectCardGrid />
            <Typography 
                color="text.primary" 
                variant="h4" 
                align="center"
                my="5rem"
            >
                More coming soon...
            </Typography>
        </main>
    );
}