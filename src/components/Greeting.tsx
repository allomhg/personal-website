import { Container, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const greeting = {
    greet: "Hello I'm Harry",
    description: "I'm currently a professional Mechanical/CAD Engineer, and aspiring web developer.",

} 

export const Greeting = () => {
    return(
        <Container fixed maxWidth='xl' sx={{ bgcolor: 'blue', height: '80vh', pt: 10 }}>
            <Grid2 container>  
                <Grid2 sx={{ bgcolor: 'maroon' }}>
                    <Box sx={{ bgcolor: 'red', m: 'auto' }}>  
                        <Typography
                            variant='h2'
                        >
                            {greeting.greet}
                        </Typography>
                        <Typography
                            variant='h6'
                        >
                            {greeting.description}
                        </Typography>
                    </Box>
                </Grid2>
                <Grid2 sx={{ bgcolor: 'maroon' }}>
                    <Box sx={{ bgcolor: 'orange', m: 'auto' }}>
                        <p>WHAT</p>
                    </Box>
                </Grid2>
            </Grid2>
        </Container>
    );
}