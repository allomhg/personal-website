import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

export const About = () => {
    return (
        <Container maxWidth="lg" sx={{ 
                display: "flex", 
                flexDirection: "column",
                // bgcolor: "red",
                pt: 10,
                // height: '100vh' 
            }}
        >
            <Box 
                component='img'
                alignSelf="center"
                sx={{ 
                    display: "flex",
                    height: "auto",
                    bgcolor: "orange", 
                    borderRadius: "16px",
                    maxWidth: "50%",
                    }}
                src="https://source.unsplash.com/random?wallpapers"
                alt="greeting image"
            />
            <Typography 
                color="text.primary"
                variant="h6"
                component="p"
                align="center"
            >
                    This is my about me page
            </Typography>
        </Container>
    );
}