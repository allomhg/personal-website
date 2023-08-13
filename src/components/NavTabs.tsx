import * as React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface LinkTabProps {
    label?: string;
    href?: string;
}

const pages = ['Home', 'Projects', 'About'];

const LinkTab = (props: LinkTabProps) => {
    return (
        <Tab
        component='a'
        onClick={ (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault();
        }}
        {...props}
    />
    );
}

export const NavTabs = () => {   
    let navigate = useNavigate();
    
    // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    
    // useState for TABS
    const [value, setValue] = React.useState(0);

    // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElNav(event.currentTarget);
    // };

    // const handleCloseNavMenu = (routePath?: string) => {
    //     setAnchorElNav(null);
        
    //     if (routePath !== undefined) {
    //         navigate(routePath);
    //     }
    // };

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(newValue);
        setValue(newValue);
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange} aria-label='nav tabs'>
                {pages.map( ( page ) => (
                    <LinkTab 
                        key={page}
                        label={page} 
                        href='/yes' 
                    />
                ))}
            </Tabs>
        </Box>
    );
}