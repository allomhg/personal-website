import { Container, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const greeting = {
    greet: "Hello, I'm Harry",
    description:
        "I'm currently a professional Mechanical/CAD Engineer, and a aspiring web developer. This website is a work in progress.",
};

export const HomeNew = () => {
    return (
        <Grid
            container
            sx={{
                height: { sm: "100vh", xs:"100vh"},
                width: { sm: "100vw", xs: "80vw" },
                bgcolor: "yellow",
                alignItems: "center",
                maxWidth: "lg",
                m: "auto",
            }}
        >
            <Grid
                container
                md={6}
                sx={{
                    // bgcolor: "green",
                    textAlign: { sm: "center"},
                }}
            >
                <Box
                    maxWidth="sm"
                    sx={{
                        // position: "relative"
                        m: "auto",
                    }}
                >
                    <Typography variant="h2" color="text.primary">
                        {greeting.greet}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {greeting.description}
                    </Typography>
                </Box>
            </Grid>
            <Grid
                container
                md={6}
                sx={{
                    // bgcolor: "blue",
                    // alignItems: "center",
                }}
            >
                <Box
                    component="img"
                    sx={{
                        maxWidth: "500px",
                        // width: { xs: "80vw" },
                        height: "auto",
                        bgcolor: "orange",
                        borderRadius: 2,
                        // mt: { xs: "5rem" },
                        // mx: "10px",
                        m: "auto",
                    }}
                    src="https://source.unsplash.com/random?wallpapers"
                    alt="greeting image"
                />
            </Grid>
        </Grid>
    );
};
