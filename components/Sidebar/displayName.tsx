import React from 'react'
import {Typography,IconButton, makeStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { UsernameIcon } from '../../icons';

const useStyles = makeStyles({
    info: {
        display: 'flex',
        alignItems: 'left',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        fontFamily:'Roboto',
        padding: 8,
       '& h3' :{
          color: 'white',
          fontSize: 25,
          margin:'5px 0px'
        },
        '& p':{
          color:'white',
          margin:'5px 0px'
        }
    },
    menubar:{
        margin:'40px 0px 60px 15px',
        height:20,
        width:20,
        '& svg':{
          color: 'white'
        }
      },
})

const DisplayName = ({menuState, onOpen, onClose}) => {
  const classes = useStyles();

    return menuState ? (
        <>
            <UsernameIcon 
              height={80} 
              width={80} 
              onClick={onClose} 
            />
            <div className={classes.info}>
            <Typography variant="h3">Charles Russell</Typography>
            <Typography paragraph>Educator</Typography>
            </div>
        </>
        ): (
        <IconButton 
          className={classes.menubar} 
          onClick={onOpen}
        >
           <MenuIcon />
        </IconButton>
       )
    }

export default DisplayName
