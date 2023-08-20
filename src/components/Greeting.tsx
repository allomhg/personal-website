import { Container, Box } from "@mui/material";
import Typography from '@mui/material/Typography';

const greeting = {
    greet: "Hello, I'm Harry",
    description: "I'm currently a professional Mechanical/CAD Engineer, and a aspiring web developer",
} 

export const Greeting = () => {
    return(
        <Container maxWidth='xl' sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column-reverse', md: 'row' },
                height: '100vh', 
                }}
            >
            <Box sx={{ m: 'auto' }}>  
                <Typography variant='h2' color="text.primary">
                    {greeting.greet}
                </Typography>

                <Typography variant='h6' color="text.secondary">
                    {greeting.description}
                </Typography>
            </Box>

            <Box 
                component='img'
                sx={{ 
                    height: 216,
                    width: 384,
                    bgcolor: 'orange', 
                    m: 'auto' 
                    }}
                src="https://source.unsplash.com/random?wallpapers"
                alt="greeting image"
            />
        </Container>
    );
}