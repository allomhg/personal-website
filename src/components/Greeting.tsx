import { Container, Box } from "@mui/material";
import Typography from '@mui/material/Typography';


export const Greeting = () => {
    return(
        <Container fixed>
            <Box sx={{ bgcolor: 'red', height: '100vh' }}>  
                <Typography>
                    WHAT AM I DOING
                </Typography>
            </Box>
        </Container>
    );
}