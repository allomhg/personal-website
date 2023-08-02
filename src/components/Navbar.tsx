import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';

export const Navbar = () => {   
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label=''
                        sx={{ mr: 2}}
                        >
                            <HomeIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}