import * as React from 'react';
import { Box, Button, Container, IconButton, Menu, MenuItem } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';

import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'Projects', 'About'];

export const Navbar = () => {   
    let navigate = useNavigate();
    
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (routePath?: string) => {
        setAnchorElNav(null);
        
        if (routePath !== undefined) {
            navigate(routePath);
        }
    };
    
    return (
            <AppBar position='sticky'>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        {/* START OF LOGO/TEXT WHEN NOT IN xs MODE */} 
                        <AdbIcon  
                            sx={{ 
                                display: { xs: 'none', md: 'flex'}, 
                                mr: 1 
                            }}
                        />
                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            href=''
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
                        {/* END OF LOGO/TEXT WHEN NOT IN xs MODE */} 

                        {/* START OF MENU WHEN IN xs MODE */}  
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
                            <Menu 
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={ () => handleCloseNavMenu() }
                            sx={{
                                display: { xs: 'block', md: 'none'}
                            }}
                            >
                                {pages.map( (page) => (
                                    <MenuItem key={page} onClick={ () => handleCloseNavMenu(page) }>
                                        <Typography textAlign='center'>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        {/* END OF MENU WHEN IN xs MODE */} 

                        {/* START OF LOGO/TEXT WHEN IN xs MODE */}       
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1}}/>
                        <Typography
                            variant='h5'
                            noWrap
                            component='a'
                            href=''
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        {/* END OF LOGO/TEXT WHEN IN xs MODE */}  

                        {/* START OF PAGE BUTTONS */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
                            {pages.map( (page) => (
                                <Button
                                    key={page}
                                    onClick={ () => handleCloseNavMenu(page) }
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        {/* END OF PAGE BUTTONS */}
                    </Toolbar>
                </Container>
            </AppBar>
    );
}