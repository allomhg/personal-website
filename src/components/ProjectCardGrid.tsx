// import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ProjectCard } from "./ProjectCard";

export interface ProjectContentProps {
    projectTitle: string;
    cardImg: string;
    description: string;
}

const projectsArr: ProjectContentProps[] = [
    {projectTitle: "Coming soon...", cardImg: "https://source.unsplash.com/random?wallpapers", description: "Information coming soon..." },
    {projectTitle: "Coming soon...", cardImg: "https://source.unsplash.com/random?wallpapers", description: "Information coming soon..." }
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
                {projectsArr.map((project) => (
                    <Grid key={project.projectTitle} xs={12} sm={6}>
                        <ProjectCard
                            projectTitle={project.projectTitle} 
                            cardImg={project.cardImg}
                            description={project.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}