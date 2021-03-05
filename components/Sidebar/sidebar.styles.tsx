import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 315;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      marginTop:4,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex:0,
      top:'unset',
      whiteSpace: 'nowrap',
      backgroundColor:'green',
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      height: 700
    },
    menuText:{
        color: 'white'
    },
    menuIcon:{
      color:'white',
    },
    drawerOpen: {
      borderBottomRightRadius: 50,
      borderTopRightRadius:50,
      top:'unset',
      width: 315,
      height: 715,
      backgroundColor:'green',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      backgroundColor:'green',
      top:'unset',
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      height: 700,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      zIndex:0,
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
      '& svg':{
        margin: '10px 0px'
      }
    },
    toolbar: {
      display: 'flex',
      alignItems: 'left',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      fontFamily:'Roboto',
      padding: theme.spacing(0, 1),
    },
  }),
);
