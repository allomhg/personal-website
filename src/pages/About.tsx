import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { AboutContent } from "../components/AboutContent";
import { AboutImage } from "../components/AboutImage";


interface AboutProps {
    Job: {
        startDate: string;
        endDate: string;
        jobTitle: string;
        place: string;
    }
}

// trying to find a way to pass information to my AboutContent component so I don't have to repeat code
// I want to essentially be able to render X amount of AboutContent components depending on how many blocks of information I want
// Such as certification, education, work experience, etc.
// I need to pass information from these areas into the component using map (or something similar?)

export const About = (props: AboutProps) => {
    const experience: AboutProps = [
        Job: {startDate: "12-2017", endDate: "06-2022", jobTitle: "Design Engineer", place: "Patchell Industries Ltd."},
    ]
    
    return (
        <Container maxWidth="lg" sx={{ 
                display: "flex", 
                flexDirection: "column",
                pt: 10,
            }}
        >
            <AboutImage/>
            <AboutContent/>
        </Container>
    );
}