import React from 'react'
import { Grid, IconButton, Typography } from '@material-ui/core'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { UsernameIcon } from '../../icons'
import TextButton from '../Button';
import { ProfileInfo } from './info';
import {useStyles} from './EducatorProfile.styles'


const EducatorProfile = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item className={classes.profile} xs={3}>
                <div className={classes.profileHead}>
                    <Typography variant="h3">
                        Cameron Williamson
                    </Typography>
                    <UsernameIcon 
                        height={120} 
                        width={140} 
                    />
                </div>
                <div className={classes.uploadphoto}>
                    <IconButton>
                        <CameraAltIcon />
                        <Typography variant="h6">
                            Upload photo
                        </Typography>        
                    </IconButton>
                </div>

                <div className={classes.btnGrp}>
                    <TextButton 
                    text="684 Followers"
                    bgColor="white"
                    textColor="lightgreen"
                     />
                    <TextButton 
                    text="44 Follow" 
                    bgColor="white"
                    textColor="orange" 
                    />
                </div>
                <ul className={classes.moreInfo}>
                    {ProfileInfo.map((info,index) => (
                        <li key={index}>
                             <Typography variant="h6">
                                {Object.keys(info)}
                            </Typography>
                            <Typography variant="h6">
                                {Object.values(info)}
                            </Typography>
                        </li>
                    ))}
                </ul>
                <div className={classes.status}>
                    <Typography variant="h3">
                        Moderation Status
                    </Typography>
                    <li><p>Padding</p></li>
                </div>
            </Grid>
            <Grid item xs={8}>

            </Grid>
        </Grid>
    )
}

export default EducatorProfile
