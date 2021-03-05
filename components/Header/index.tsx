import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    appBar:{
        backgroundColor: 'white',
        height:100,
        zIndex:0
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <CssBaseline />
           <AppBar
            position="fixed"
            className={classes.appBar}
            >
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Mini variant drawer
                </Typography>
            </Toolbar>
            </AppBar> 
        </div>
    )
}

export default Header
