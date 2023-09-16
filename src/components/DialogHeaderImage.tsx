import Box from "@mui/material/Box";

export const DialogHeaderImage = () => {
    return (
        <Box 
            component="img"
            alignSelf="center"
            sx={{ 
                display: "flex",
                height: "auto",
                bgcolor: "orange", 
                borderRadius: "16px",
                maxWidth: "50%",
                my: 5
                }}
            src="https://source.unsplash.com/random?wallpapers"
            alt="greeting image" // add proper alt descriptions
        />
    );
}