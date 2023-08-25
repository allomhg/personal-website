import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export const AboutImage = () => {
    return (
        <>
            <Box 
                component='img'
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
                alt="greeting image"
            />
            <Typography 
                color="text.primary"
                variant="h6"
                component="p"
                justifySelf="left"
            >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in est at turpis porta pulvinar. 
                    Curabitur quis dui sed lacus bibendum lobortis. In nec lorem sed dui faucibus porta. 
                    Donec vitae scelerisque arcu. In volutpat consectetur purus quis porttitor. 
                    Suspendisse egestas luctus facilisis. Vivamus dictum ac nibh et elementum. In quis volutpat tortor. 
                    Suspendisse ligula quam, luctus vel velit quis, feugiat venenatis felis. Aliquam nec venenatis sapien.
            </Typography>
        </>
    );
}