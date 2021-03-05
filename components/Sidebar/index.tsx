import React from 'react';
import clsx from 'clsx';
import {List,Drawer,ListItem,
    ListItemIcon,ListItemText} from '@material-ui/core';
import SidebarMenu from './menu';
import { useStyles } from './sidebar.styles';
import DisplayName from './displayName';

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
      setOpen(true)
  }

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} >
            <DisplayName 
                menuState={open} 
                onOpen={handleDrawerOpen}
                onClose={handleDrawerClose}
            />
         <div>
          </div>
        </div>
        <List>
          {SidebarMenu.map((menu, index) => (
            <ListItem button key={index}>
              <ListItemIcon className={classes.menuIcon}>{menu.icon}</ListItemIcon>
              <ListItemText className={classes.menuText} primary={menu.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}


export default Sidebar;