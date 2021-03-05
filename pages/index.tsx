import React from 'react';
import { NextPage } from 'next';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Header, Layout, Sidebar} from '../imports'
import {EducatorProfile} from '../components/Profile';

const useStyles = makeStyles({
  headerContainer:{
    height:'10vh'
  },
  contentContainer:{
    height:'10vh',
    display:'flex'
  },
})
const Home:NextPage = () => {
  const classes = useStyles()
  return (
     <Layout pageTitle="Educator Page">
       <Grid container>
         <Grid 
          xs={12} 
          className={classes.headerContainer} 
          lg={12} 
          item
          >
          <Header />
         </Grid>
         <Grid 
          xs={12} 
          className={classes.contentContainer} 
          lg={12} 
          item
          container
          >
          <Grid xs={2} lg={2} item>
            <Sidebar />
          </Grid>
          <Grid 
          xs={10} 
          lg={10} 
          item>
            <EducatorProfile />
          </Grid>
         </Grid>
       </Grid>
     </Layout>
  )
}

export default Home;