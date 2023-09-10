import React from "react";
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { useStyles } from "../Header/HeaderStyle";

   export const PageHeader=({label,pageTitle})=>{
    const classes=useStyles();
    return (
    <Grid container>
    <Grid item xs={12} sm={12}>

    <Typography variant='body2' className={classes.pageSubTitle}> DashBoard</Typography>
    <Typography variant='h5' className={classes.pageTitle}> Blog Overview</Typography>

    </Grid>
     </Grid>
    );
};