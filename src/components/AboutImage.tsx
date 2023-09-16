import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export const AboutImage = () => {
    return (
        <>
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
                alt="greeting image"
            />
            <Typography 
                color="text.primary"
                variant="h6"
                component="p"
                justifySelf="left"
                mb="1rem"
                paragraph
            >
                I started my web development journey in the first quarter of 2022 with freeCodeCamp while still living in New Zealand. 
                I picked it back up in September 2022 with Coursera after traveling around Europe for 3 months and moving to the United Kingdom. 
                Once again, I had to put it on the back burner after relocating and starting a new job in December. 
                However, I have since picked web development back up and have been slowly but steadily building my skills in my spare time.
            </Typography>
            <Typography 
                color="text.primary"
                variant="h6"
                component="p"
                justifySelf="left"
            >
                I’m a motorcycle lover, who enjoys equal parts of outdoor adventures and spending time inside reading, learning or playing video games.
                If you happen to be in the UK, feel free to reach out to me!
            </Typography>
        </>
    );
}