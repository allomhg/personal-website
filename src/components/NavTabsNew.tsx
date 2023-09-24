import * as React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface LinkTabProps {
    key?: string;
    label?: string;
    href?: string;
    // onClick: () => void;
}

const pages = ['Home', 'Projects', 'About'];

const LinkTab = (props: LinkTabProps) => {
    let navigate = useNavigate();

    const navFunc = (routePath?: string) => {
        if ( routePath !== undefined ) {
            navigate(routePath);
        }
    }
    
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

export const NavTabsNew = () => {   
    const [value, setValue] = React.useState(0);
    let navigate = useNavigate();

    const navFunc = (routePath?: string) => {
        if ( routePath !== undefined ) {
            navigate(routePath);
        }
    }

    useEffect(() => {
        const indexNav = window.localStorage.getItem("NAVTAB_INDEX");
        // if ( indexNav !== null) setValue(JSON.parse(indexNav));
        if ( indexNav !== null ) {
            console.log(indexNav)
            setValue(JSON.parse(indexNav));
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem("NAVTAB_INDEX", JSON.stringify(value));
    }, [value])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    const handleClick = (index: number) => {
        setValue(index);
        // event.preventDefault();
    }

    return (
        <Box sx={{ position: 'fixed', width: '100%', bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleChange} aria-label='nav tabs'>
                {pages.map( ( page, index ) => (
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