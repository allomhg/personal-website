import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ProjectCardNew } from "../components/ProjectCardNew";

const cards = [1, 2];

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
                        {/* <ProjectCard /> */}
                        <ProjectCardNew />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}