import * as React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface LinkTabProps {
    key?: string;
    label?: string;
    href?: string;
}

const pages = ["Home", "Projects", "About"];

const LinkTab = (props: LinkTabProps) => {
    let navigate = useNavigate();

    const navFunc = (routePath?: string) => {
        if (routePath !== undefined) {
            navigate(routePath);
        }
    };

    return (
        <Tab
            component="a"
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                event.preventDefault();
                navFunc(props.label);
            }}
            disableRipple
            {...props}
        />
    );
};

export const NavTabs = () => {
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        const indexNav = window.localStorage.getItem("NAVTAB_INDEX");

        // if ( indexNav !== null) setValue(JSON.parse(indexNav));
        if (indexNav !== null) {
            const indexNum = JSON.parse(indexNav);
            console.log(typeof indexNum);
            // This is a pretty crude way to prevent an error from happening.
            // I need to figure out what is causing this exactly.
            // The useEffect hook seems to run twice and reset the tabs back to 0
            if (indexNum !== 0) setValue(JSON.parse(indexNav));
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem("NAVTAB_INDEX", JSON.stringify(value));
    }, [value]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                position: "fixed",
                width: "100%",
                // bgcolor: "background.paper",
                // borderBottom: "solid red",
                // background: "paper"
            }}
        >
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
                {pages.map((page, index) => (
                    <LinkTab key={page} label={page} href={page} />
                ))}
            </Tabs>
        </Box>
    );
};
