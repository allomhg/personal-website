import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

export const About = () => {
    return (
        <Container maxWidth="lg" sx={{ 
                display: "flex", 
                flexDirection: "column",
                bgcolor: "red",
                pt: 10,
                // height: '100vh' 
            }}
        >
            <Box 
                maxWidth="sm"
                component='img'
                sx={{ 
                    bgcolor: "orange", 
                    borderRadius: "16px",
                    m: "auto",
                    }}
                src="https://source.unsplash.com/random?wallpapers"
                alt="greeting image"
            />
            <Typography sx={{ m: "auto" }}>This is my about me page</Typography>
        </Container>
    );
}