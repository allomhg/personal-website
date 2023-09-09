import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { AboutContent } from "../components/AboutContent";
import { AboutImage } from "../components/AboutImage";

// interface Job {
//     date: string;
//     jobTitle: string;
//     place: string;
// }

const titles = ["Experience", "Education", "Certifications"]

const contentList = [
    [
        {date: "12-2022 - present", title: "Computer Aided Design Engineer", place: "Deepwater EU Ltd."},
        {date: "12-2017 - 05-2022", title: "Mechanical Design Engineer", place: "Patchell Industries Ltd."},
        {date: "11-2016 - 03-2017", title: "Design Assistant", place: "Patchell Industries Ltd."},
        {date: "11-2015 - 03-2016", title: "Electronic Technician Assistant", place: "SI Lodec"}
    ],
    [
        {date: "12-2022 - present", title: "Computer Aided Design Engineer", place: "Deepwater EU Ltd."},
        {date: "12-2017 - 05-2022", title: "Mechanical Design Engineer", place: "Patchell Industries Ltd."},
        {date: "11-2016 - 03-2017", title: "Design Assistant", place: "Patchell Industries Ltd."},
        {date: "11-2015 - 03-2016", title: "Electronic Technician Assistant", place: "SI Lodec"}
    ],
    [
        {date: "12-2022 - present", title: "Computer Aided Design Engineer", place: "Deepwater EU Ltd."},
        {date: "12-2017 - 05-2022", title: "Mechanical Design Engineer", place: "Patchell Industries Ltd."},
        {date: "11-2016 - 03-2017", title: "Design Assistant", place: "Patchell Industries Ltd."},
        {date: "11-2015 - 03-2016", title: "Electronic Technician Assistant", place: "SI Lodec"}
    ],
]

const experience = [
    {date: "12-2022 - present", title: "Computer Aided Design Engineer", place: "Deepwater EU Ltd."},
    {date: "12-2017 - 05-2022", title: "Mechanical Design Engineer", place: "Patchell Industries Ltd."},
    {date: "11-2016 - 03-2017", title: "Design Assistant", place: "Patchell Industries Ltd."},
    {date: "11-2015 - 03-2016", title: "Electronic Technician Assistant", place: "SI Lodec"},
    {date: "03-2014 - 11-2017", title: "Bachelor of Engineering (Honours), Majoring in Mechatronics", place: "Massey University"},
]

const webCertificates = [
    {date: "05-2023", title: "Responsive Web Design Certification", place: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/allomhg/responsive-web-design"},
    {date: "08-2023", title: "Responsive Web Design Certification", place: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/allomhg/javascript-algorithms-and-data-structures"},
]

const otherCertificates = [
    {date: "08-2023", title: "Certified SolidWorks Professional (CSWP)", place: "SolidWorks"},
    {date: "05-2023", title: "Certified SolidWorks Professional Advanced - Drawing Tools (CSWPA-DT)", place: "SolidWorks"},
    {date: "02-2023", title: "Certified SolidWorks Associate (CSWA)", place: "SolidWorks"},
]

export const About = () => {
    return (
        <Container maxWidth="lg" sx={{ 
                display: "flex", 
                flexDirection: "column",
                pt: 10,
            }}
        >
            <AboutImage/>
            <Box sx={{ bgcolor: "green" }}>
                {titles.map( (title) => (
                    <AboutContent
                        title={title}
                        // date={job.date}
                        // jobTitle={job.title}
                        // place={job.place}
                    />
                ))}

            </Box>
            {/* <Box sx={{ bgcolor: "red" }}>
                {experience.map( (job) => (
                    <AboutContent
                        date={job.date}
                        jobTitle={job.title}
                        place={job.place}
                    />
                ))}
            </Box> */}
        </Container>
    );
}