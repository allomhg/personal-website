import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { AboutContent } from "../components/AboutContent";
import { AboutImage } from "../components/AboutImage";

interface Job {
    date: string;
    jobTitle: string;
    place: string;
}

const experience: Job[] = [
    {date: "12-2022 - present", jobTitle: "Computer Aided Design Engineer", place: "Deepwater EU Ltd."},
    {date: "12-2017 - 05-2022", jobTitle: "Mechanical Design Engineer", place: "Patchell Industries Ltd."},
    {date: "11-2016 - 03-2017", jobTitle: "Design Assistant", place: "Patchell Industries Ltd."},
    {date: "11-2015 - 03-2016", jobTitle: "Electronic Technician Assistant", place: "SI Lodec"},
]

const education = [
    {date: "2014 - 2017", title: "Bachelor of Engineering (Honours), Majoring in Mechatronics", place: "Massey University"},
    {date: "08-2023", title: "Certified SolidWorks Professional (CSWP)", place: "SolidWorks", code: "C-AQG5XZUM42"},
    {date: "05-2023", title: "Certified SolidWorks Professional Advanced - Drawing Tools (CSWPA-DT)", place: "SolidWorks", code: "C-EG5PJMF8Y7"},
    {date: "02-2023", title: "Certified SolidWorks Associate (CSWA)", place: "SolidWorks", code: "C-3SNGBREW6J"},
]

const freeCodeCamp = [
    {date: "05-2023", title: "Responsive Web Design Certification", place: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/allomhg/responsive-web-design"},
    {date: "08-2023", title: "Responsive Web Design Certification", place: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/allomhg/javascript-algorithms-and-data-structures"},
]

// trying to find a way to pass information to my AboutContent component so I don't have to repeat code
// I want to essentially be able to render X amount of AboutContent components depending on how many blocks of information I want
// Such as certification, education, work experience, etc.
// I need to pass information from these areas into the component using map (or something similar?)

export const About = (experience: Job[]) => {
    return (
        <Container maxWidth="lg" sx={{ 
                display: "flex", 
                flexDirection: "column",
                pt: 10,
            }}
        >
            <AboutImage/>
            <Box>
                {experience.map( (job) => (
                    <AboutContent
                        date={job.date}
                    />
                ))}
            </Box>
            <AboutContent/>
        </Container>
    );
}