import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
    return (   
        <Box sx={{ display: "flex", flexGrow: 1, m: "auto", height: "100vh" }}>
            <Grid container spacing={2} columns={12} sx={{ m: "auto"}}>
                <Grid xs={12} md={6} >
                    <ProjectCard/>
                </Grid>
                <Grid xs={12} md={6} >
                    <ProjectCard/>
                </Grid>
            </Grid>
        </Box>
    );
}