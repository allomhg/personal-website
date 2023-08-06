import { Container, Box } from "@mui/material";
import Typography from '@mui/material/Typography';


export const Greeting = () => {
    return(
        <Container fixed sx={{ bgcolor: 'blue', height: '80vh', pt: 10 }}>
            <Box sx={{ bgcolor: 'red', m: 'auto' }}>  
                <Typography>
                    WHAT AM I DOING
                </Typography>
            </Box>
        </Container>
    );
}