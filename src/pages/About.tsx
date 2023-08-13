import { Container, Typography } from "@mui/material";

export const About = () => {
    return (
        <Container fixed sx={{ display: 'flex', height: '100vh' }}>
            <Typography sx={{ m: 'auto' }}>This is my about me page</Typography>
        </Container>
    );
}