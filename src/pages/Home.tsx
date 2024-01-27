import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";

const greeting = {
    greet: "Hello, I'm Harry",
    description:
        "I'm currently a professional Mechanical/CAD Engineer, and a aspiring web developer. This website is a work in progress.",
};

export const Home = () => {
    return (
        <Container
            sx={{
                height: "100vh",
                width: "80%",
                display: "flex",
                flexDirection: { md: "row", xs: "column-reverse" },
                alignItems: "center",
                justifyContent: "center",
                gap: "3rem",
            }}
        >
            <Box
                sx={{
                    maxWidth: { md: "50%", xs: "100%" },
                }}
            >
                <Typography
                    variant="h2"
                    color="text.primary"
                    textAlign={{ md: "start", xs: "center" }}
                >
                    {greeting.greet}
                </Typography>
                <Typography
                    component="p"
                    variant="h6"
                    color="text.secondary"
                    textAlign={{ md: "start", xs: "center" }}
                >
                    {greeting.description}
                </Typography>
            </Box>
            <Box
                component="img"
                sx={{
                    width: { xs: "80%" },
                    borderRadius: 2,
                }}
                src="/assets/camping.png"
                alt="Greeting Image - Camping"
            />
        </Container>
    );
};
