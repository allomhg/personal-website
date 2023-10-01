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
        <Grid container sx={{
            height: "100vh",
            bgcolor: "yellow",
        }}
        >
            <Grid md={6} sx={{
                bgcolor: "green",
                // justifyContent: "center",
                // justifyItems: "center",
                justifySelf: "center",
            }}
            >
                <Box
                    maxWidth="sm"
                    sx={{
                        // position: "relative"
                        // m: "auto",
                        // bgcolor: "red",
                        // flexGrow: 1,
                        // mt: { xs: "3rem" },
                        // mb: { xs: "5rem" },
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
            <Grid md={6} sx={{ bgcolor: "blue" }}>
                <Box
                    component="img"
                    sx={{
                        maxWidth: "500px",
                        // width: { xs: "80vw" },
                        height: "auto",
                        bgcolor: "orange",
                        borderRadius: 2,
                        // mt: { xs: "5rem" },
                        // m: "auto",
                    }}
                    src="https://source.unsplash.com/random?wallpapers"
                    alt="greeting image"
                />
            </Grid>
        </Grid>
    );
};
