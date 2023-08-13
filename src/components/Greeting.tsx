import { Container, Box } from "@mui/material";
import Typography from '@mui/material/Typography';

const greeting = {
    greet: "Hello I'm Harry",
    description: "I'm currently a professional Mechanical/CAD Engineer, and a aspiring web developer",
} 

export const Greeting = () => {
    return(
        <Container fixed maxWidth='xl' sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column-reverse', md: 'row' },
                bgcolor: 'blue', 
                height: '100vh', 
                }}
            >
            <Box sx={{ 
                bgcolor: 'red', 
                m: 'auto' 
                }}>  
                <Typography variant='h2'>
                    {greeting.greet}
                </Typography>

                <Typography variant='h6'>
                    {greeting.description}
                </Typography>
            </Box>

            <Box 
                component='img'
                sx={{ 
                    height: 233,
                    width: 350,
                    bgcolor: 'orange', 
                    m: 'auto' 
                    }}
            />
        </Container>
    );
}