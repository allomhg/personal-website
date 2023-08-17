import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ProjectCard } from "../components/ProjectCard";
import { Typography } from "@mui/material";

export const Projects = () => {
    return (   
        <Box sx={{ mt: 5, height: "100vh", background: "green" }}>
            <Box  pt={10} bgcolor={"red"} >
                <Typography variant="h5" >
                    A collection of projects and work complete learning web development.
                </Typography>
            </Box>
            
            <Grid container spacing={6} columns={12} sx={{ m: "auto"}}>
                <Grid xs={12} md={6} >
                    <ProjectCard/>
                </Grid>
                <Grid xs={12} md={6} >
                    <ProjectCard/>
                </Grid>
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