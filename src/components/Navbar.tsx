import * as React from 'react';
import { Box, Container, IconButton } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home', 'Projects', 'About Me'];

export const Navbar = () => {   
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
        console.log('This works');
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    
    
    return (
            <AppBar position='static'>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <AdbIcon  sx={{ display: { xs: 'none', md: 'flex'}, mr: 1 }}/>
                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={handleOpenNavMenu}
                                color='inherit'
                            >
                                <MenuIcon/>

                            </IconButton>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
    );
}