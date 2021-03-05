import React from 'react'
import { Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    txtBtn: (props) => ({
        backgroundColor: props.bgColor,
        width: 350,
        height:40,
        color: props.textColor,
        borderRadius: '50px',
        border: 'none',
        boxShadow: 'none',
        fontFamily:'Roboto',
        textTransform:'capitalize'
    })
})

interface ITextButton{
    textColor: string,
    bgColor: string,
    text:string
}


const TextButton = (props:ITextButton) => {
    const classes = useStyles(props)
    return (
        <Button 
        className={classes.txtBtn} 
        variant="contained"
        >
            {props.text}
        </Button>
    )
}

export default TextButton


