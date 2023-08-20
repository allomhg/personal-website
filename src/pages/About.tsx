import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

export const About = () => {
    return (
        <Container fixed sx={{ display: 'flex', height: '100vh' }}>
            <Box 
                component='img'
                sx={{ 
                    bgcolor: 'orange', 
                    m: 'auto' 
                    }}
                src="https://source.unsplash.com/random?wallpapers"
                alt="greeting image"
            />
            <Typography sx={{ m: 'auto' }}>This is my about me page</Typography>
        </Container>
    );
}