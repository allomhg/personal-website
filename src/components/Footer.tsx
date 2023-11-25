import { Container, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const socials = [
    {title: 'Github', icon: <GitHubIcon/>, url: 'https://github.com/allomhg'},
    {title: 'LinkedIn', icon: <LinkedInIcon/>, url: 'https://linkedin.com/in/allomhg'},
    {title: 'Email', icon: <ContactMailIcon/> , url: 'mailto:hgallom.uk@gmail.com'},
]

export const Footer = () => {
    return (
        <Container 
            component='footer' 
            sx={{ 
                position: 'fixed', 
                bottom: 0, 
                width: 'fit-content'
            }}>
            <Box>  
                {socials.map( ( social ) => (   
                    <Link 
                        key={social.title}
                        href={social.url}
                    >
                        <IconButton>
                            {social.icon}
                        </IconButton>
                    </Link>
                ))}
            </Box>
            <Typography color="text.secondary">Made by Harry Allom</Typography>
        </Container>
    );
}