import React from 'react';
import { Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import { AddLink, ShoppingBasket, Toc, EditNote, Checklist, Tab, GridView } from '@mui/icons-material';
import { DRAWER_WIDTH } from "config";
import { useNavigate } from 'react-router-dom';

const openedMixin = (theme) => ({
    width: DRAWER_WIDTH,
    border: 0,
    borderRight: `solid rgba(0,0,0,.15) 1px`,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    border: 0,
    borderRight: `solid rgba(0,0,0,.15) 1px`,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const CustomDrawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

const Component = (props) => {
    const { open } = props;
    const [expand, setExpand] = React.useState(false);
    const NavigateTo = useNavigate();

    const handleClick = () => {
        setExpand(!expand);
    };

    const theme = useTheme();

    return (
        <CustomDrawer variant="permanent" open={open} anchor="left">
            <Toolbar />
            <List>
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={() => NavigateTo("/userdetails1")} sx={{ height: 50 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                                <Tooltip title="Userdetails">
                                    <AddLink color="primary" />
                                </Tooltip>
                            </ListItemIcon>
                            {open && <ListItemText primary="Userdetails" sx={{ pl: 1 }} />}
                        </ListItemButton>
                        <ListItemButton onClick={() => NavigateTo("/servicesmenu1")} sx={{ height: 50 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                                <Tooltip title="ServicesDisplay">
                                    <AddLink color="primary" />
                                </Tooltip>
                            </ListItemIcon>
                            {open && <ListItemText primary="ServicesDisplay" sx={{ pl: 1 }} />}
                        </ListItemButton>
                        <ListItemButton onClick={() => NavigateTo("/userinfo1")} sx={{ height: 50 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                                <Tooltip title="User Information form">
                                    <AddLink color="primary" />
                                </Tooltip>
                            </ListItemIcon>
                            {open && <ListItemText primary="User Information form" sx={{ pl: 1 }} />}
                        </ListItemButton>
                        <ListItemButton onClick={() => NavigateTo("/servicesinfoform1")} sx={{ height: 50 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                                <Tooltip title="Services Info form">
                                    <AddLink color="primary" />
                                </Tooltip>
                            </ListItemIcon>
                            {open && <ListItemText primary="Services Info form" sx={{ pl: 1 }} />}
                        </ListItemButton>
                    </List>
                </ListItem>
            </List>
        </CustomDrawer>
    );
}

export default Component;
