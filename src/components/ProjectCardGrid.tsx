import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ProjectCard } from "./ProjectCard";

interface ProjectContent {
    title: string;
    cardImg: string;
    description: string;
}

const cards = [1, 2];

const projects: ProjectContent[] = [
    {title: "Project 1", cardImg: "", description: "" }
]

export const ProjectCardGrid = () => {
    return (
        <Container 
        sx={{ 
            mb: 5,
            maxWidth: "md" 
            }}
         >
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid key={card} xs={12} sm={6}>
                        <ProjectCard />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}