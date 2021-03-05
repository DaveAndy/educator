import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {IconButton,Typography} from '@material-ui/core';

interface IUsernameIcon{
    onClick?: () => void
    height?: number
    width?: number
}

const useStyles = makeStyles({ 
    usernameIcon:(props) => ({
        borderRadius:'50%',
        backgroundColor: 'white',
        padding: '15px',
        display: 'flex',
        height: props.height,
        justifyContent: 'center',
        margin: 'auto',
        width: props.width,
        alignItems: 'center',
    }),
    text:{
        color: 'orange',
        font:'normal normal 400 50px/24px Roboto'

    },
    
    userInfo:{
        marginTop:30
    }
})

const UsernameIcon = (props:IUsernameIcon) => {
    const classes = useStyles(props)
    return (
        <div className={classes.userInfo}>
            <IconButton onClick={props.onClick}>
                <div className={classes.usernameIcon}>
                    <Typography className={classes.text} variant="h1">Ca</Typography>
                </div>
            </IconButton>
        </div>
    )
}

export default UsernameIcon
