import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const ProjectHeader = () => {
    return (
        <Container maxWidth="sm" 
            sx={{ 
                pt: 13,
                pb: 6,
                bgcolor: "background.paper"
            }} 
        >
            <Typography
                component="h1"
                variant="h3"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Personal Projects
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                A collection of my personal projects and work from learning web developement
            </Typography>   
        </Container>
    );
}