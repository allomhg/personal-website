import { Container, Box } from "@mui/material";
import Typography from '@mui/material/Typography';

export const FooterBar = () => {
    return (
        <Container fixed sx={{ bgcolor: 'green', height: '10vh', pt: 10 }}>
            <Box sx={{ bgcolor: 'yellow', m: 'auto' }}>  
                <Typography>
                    WHAT AM I DOING
                </Typography>
            </Box>
        </Container>
    );
}