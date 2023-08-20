import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ProjectCard } from "../components/ProjectCard";
import { ProjectCardNew } from "../components/ProjectCardNew";
import { Typography } from "@mui/material";

export const Projects = () => {

    const cards = [1, 2];

    return (   
        <main>
            {/* Hero section */}
            <Box sx={{ bgcolor: "background.paper", 
                    pt: 8, 
                    pb: 6 
                }}
            >
                <Container maxWidth="sm" >
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Personal Projects
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        A collection of my personal projects and work from learning web developement.
                    </Typography>   
                </Container>
            </Box>
            {/* End hero section */}
            {/* Card section */} 
            <Container sx={{ py: 8, maxWidth: "md" }}>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid key={card} xs={12} sm={6}>
                            {/* <ProjectCard /> */}
                            <ProjectCardNew />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* END card section */}
        </main>
    );
}