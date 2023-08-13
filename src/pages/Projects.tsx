import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
    return (
                <Grid 
                    container 
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing={{ xs: 2, md: 4 }} 
                    sx={{ background: "red" }}
                >
                    <Grid xs={12} md={6} alignSelf="center" sx={{ background: "green" }}>
                        <ProjectCard />
                    </Grid>
                    <Grid xs={12} md={6}>
                        <ProjectCard />
                    </Grid>
                </Grid>
    );
}