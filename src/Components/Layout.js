import React from 'react'
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
// import HomeMaxIcon from '@mui/icons-material/HomeMax'
import LogoutIcon from '@mui/icons-material/Logout'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import LockOpenIcon from '@mui/icons-material/LockOpen';


import logo from '../Assets/Images/logo.png'
import { NavLink, Outlet, useLocation } from 'react-router-dom'


const Layout = () => {
    const drawerWidth = 240

    const drawerList = [
        {
            title: 'Users',
            to: '/dashboard',
            icon: <PeopleAltIcon />
        },
        {
            title: 'Iframes',
            to: '/dashboard/iframes',
            icon: <DynamicFeedIcon />
        },
        {
            title: 'Up Date Password',
            to: '/dashboard/updatePassword',
            icon: <LockOpenIcon />
        }
    ]


    const { pathname } = useLocation()
    return (
        <div className='d-flex'>
            <div style={{ width: drawerWidth }}>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        // display: 'none',
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box'
                        }
                    }}
                    variant='permanent'
                    anchor='left'
                >
                    <div className='title-logo'>
                        <img src={logo} alt={logo} />
                        <h2>Overpower</h2>
                    </div>
                    <Divider />
                    <List>
                        {drawerList.map(({ title, icon, to }, index) => (
                            <NavLink
                                className={pathname === to ? 'navlinks-active' : 'navlinks'}
                                key={index}
                                to={`${to}`}
                            >
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>{icon}</ListItemIcon>
                                        <ListItemText primary={title} />
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                        ))}
                    </List>
                    <Divider />
                    <List>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Logout'} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
            <div className='w-100 flex-1'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
