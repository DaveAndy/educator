import { HomeOutlined } from '@material-ui/icons';
import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PaymentIcon from '@material-ui/icons/Payment';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const SidebarMenu = [
    {
        name: 'Profile', 
        icon: <PersonIcon />
    },
    {
        name: 'Home', 
        icon: <HomeIcon />
    },
    {
        name: 'Dashboard', 
        icon: <DashboardIcon />
    },
    {
        name: 'Libraries', 
        icon: <VideoLibraryIcon />
    },
    {
        name: 'Books', 
        icon: <MenuBookIcon />
    },
    {
        name: 'Payment', 
        icon: <PaymentIcon />
    },
    {
        name: 'Settings', 
        icon: <SettingsIcon />
    },
    {
        name: 'Support', 
        icon: <HelpIcon />
    },
    {
        name: 'Logout', 
        icon: <ExitToAppIcon />
    }
]

export default SidebarMenu;