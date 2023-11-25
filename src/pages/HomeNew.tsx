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
                display: "flex",
                bgcolor: "yellow",
                flexDirection: { sm: "row", xs: "column-reverse" },
                // justifySelf: "center",
                // alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "lg",
                height: "100vh",
                pt: "50px",
                m: "auto",
                // mx: "1rem"
            }}
        >
            <Grid
                container
                md={6}
                sx={{
                    bgcolor: "green",
                    textAlign: { xs: "center"},
                    // mx: "10px",
                }}
            >
                <Box>
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
                }}
            >
                <Box
                    component="img"
                    sx={{
                        maxWidth: "500px",
                        width: { xs: "80vw" },
                        height: "auto",
                        bgcolor: "orange",
                        borderRadius: 2,
                        m: "auto",
                    }}
                    src="https://source.unsplash.com/random?wallpapers"
                    alt="greeting image"
                />
            </Grid>
        </Grid>
    );
};
