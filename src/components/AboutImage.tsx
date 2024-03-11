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
                    borderRadius: 2,
                    maxWidth: "50%",
                    my: 5
                    }}
                src="https://source.unsplash.com/random?wallpapers"
                alt="about image"
            />
            <Typography
                color="text.primary"
                variant="h6"
                component="p"
                alignSelf="left"
                mb="1rem"
                paragraph
            >
                I started my web development journey in the first quarter of 2022 with freeCodeCamp while still living in New Zealand.
                In Q4 of 2022 I moved to the United Kingdom after travelling around Europe for 3 months.
            </Typography>
            <Typography
                color="text.primary"
                variant="h6"
                component="p"
            >
                I’m a motorcycle lover, who enjoys equal parts of outdoor adventures and spending time inside reading, learning or playing video games.
                If you happen to be in the UK, feel free to reach out to me!
            </Typography>
        </>
    );
}