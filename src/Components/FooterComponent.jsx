import React from 'react'
import {Box,Grid,IconButton as Button,Typography}from '@material-ui/core'
import { useStyles } from './Header/HeaderStyle'
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function FooterComponent() {
    const classes=useStyles();
    const data=new Date();

  return (
    <Box className={classes.footer}>
        <Grid container>
          <Grid item xs={12} sm={6}>
           <Typography variant="body1" color="textSecondary" align="center">
            Created With {" "}
            <Button size="small">
               <FavoriteIcon color="secondary"/>

                </Button> and affection
           </Typography>
          </Grid>


          <Grid item xs={12} sm={6}>
          <Typography variant="body1" color="textSecondary" align="center">
           All right reserved @Greatcoders {data.getFullYear()}
           </Typography>
          </Grid>

<Grid item xs={12} sm={6}>


</Grid>
        </Grid>
    </Box>
  )
}
