import * as React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface LinkTabProps {
    key?: string;
    label?: string;
    href?: string;
}

const pages = ['Home', 'Projects', 'About'];

const LinkTab = (props: LinkTabProps) => {
    let navigate = useNavigate();

    const navFunc = (routePath?: string) => {
        if ( routePath !== undefined ) {
            navigate(routePath);
        }
    }
    
    // console.log('yes');
    // console.log(props);
    return (
        <Tab
        component='a'
        onClick={ (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault();
            navFunc(props.label)
        }}
        {...props}
    />
    );
}

export const NavTabs = () => {   
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return (
        <Box sx={{ position: 'fixed', width: '100%' }}>
            <Tabs value={value} onChange={handleChange} aria-label='nav tabs'>
                {pages.map( ( page ) => (
                    <LinkTab 
                        key={page}
                        label={page} 
                        href={page} 
                    />
                ))}
            </Tabs>
        </Box>
    );
}