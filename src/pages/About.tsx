import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { AboutContent } from "../components/AboutContent";
import { AboutImage } from "../components/AboutImage";

export interface SectionContent {
        date: string;
        title: string;
        place: string;
        link?: string;
}

export type ContentList = {
    title: string;
    contentArr: SectionContent[];
}

const experience: SectionContent[] = [
    {date: "12-2022 - present", title: "Computer Aided Design Engineer", place: "Deepwater EU Ltd.", link: "https://stoprust.com/"},
    {date: "12-2017 - 05-2022", title: "Mechanical Design Engineer", place: "Patchell Industries Ltd.", link: "https://patchell.co.nz/"},
    {date: "11-2016 - 03-2017", title: "Design Assistant", place: "Patchell Industries Ltd.", link: "https://patchell.co.nz/"},
    {date: "11-2015 - 03-2016", title: "Electronic Technician Assistant", place: "SI Lodec NZ Ltd.", link: "https://www.silodec.co.nz/"},
    {date: "03-2014 - 11-2017", title: "Bachelor of Engineering (Honours), Majoring in Mechatronics", place: "Massey University of New Zealand - Te Kunenga ki Pūrehuroa", link: "https://www.massey.ac.nz/"},
]

const webCertificates: SectionContent[] = [
    {date: "08-2023", title: "JavaScript Algorithms and Data Structures", place: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/allomhg/javascript-algorithms-and-data-structures"},
    {date: "05-2023", title: "Responsive Web Design Certification", place: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/allomhg/responsive-web-design"},
    {date: "12-2022", title: "Advanced React", place: "Coursera, Meta", link: "https://coursera.org/share/7ea675ae88c99954b1f160a552779985"},
    {date: "11-2022", title: "Principles of UX/UI Design", place: "Coursera, Meta", link: "https://coursera.org/share/5a848528e6e77a81dcf1b7a51ad8b5ac"},
    {date: "10-2022", title: "Version Control", place: "Coursera, Meta", link: "https://coursera.org/share/779bc4825dcb76547ac11e32162ddec0"},
    {date: "10-2022", title: "React Basics", place: "Coursera, Meta", link: "https://coursera.org/share/4b67cc91241bb6d315b270c8ae02ddf8"},
    {date: "10-2022", title: "HTML and CSS in depth", place: "Coursera, Meta", link: "https://coursera.org/share/da8b5177a2ac58bd0f3f3535e5f17d98"},
    {date: "09-2022", title: "Programming with JavaScript", place: "Coursera, Meta", link: "https://coursera.org/share/8cfcb4406914513dfc3c8af3eb5efa8e"},
    {date: "09-2022", title: "Introduction to Front-End Development", place: "Coursera, Meta", link: "https://coursera.org/share/50e07e0d1016040fdcb58c3ade79513b"},
]

const otherCertificates: SectionContent[] = [
    {date: "08-2023", title: "Certified SolidWorks Professional (CSWP)", place: "SolidWorks", link: "https://drive.google.com/file/d/1Bg4q3xELIYttk3FUNHuBKijN6iUehxff/view?usp=drive_link"},
    {date: "05-2023", title: "Certified SolidWorks Professional Advanced - Drawing Tools (CSWPA-DT)", place: "SolidWorks", link: "https://drive.google.com/file/d/19t01h7U1GlKVaV3MHo8UA18IRf-eac8Y/view?usp=drive_link"},
    {date: "02-2023", title: "Certified SolidWorks Associate (CSWA)", place: "SolidWorks", link: "https://drive.google.com/file/d/11hIr08oYlViAoW8fyHX7kBVVmRPEMGqs/view?usp=drive_link"},
]

const contentList: ContentList[] = [
    {title: "Experience", contentArr: experience},
    {title: "Web Development Certifications", contentArr: webCertificates},
    {title: "Other Certifications", contentArr: otherCertificates},
]

export const About = () => {
    console.log(contentList);
    
    return (
        <Container maxWidth="lg" sx={{ 
                display: "flex", 
                flexDirection: "column",
                pt: 10,
            }}
        >
            <AboutImage/>
            <Box>
                {contentList.map(( content ) => (
                    <AboutContent
                        title={content.title}
                        aboutContent={content.contentArr}
                    />
                ))}
            </Box>
        </Container>
    );
}