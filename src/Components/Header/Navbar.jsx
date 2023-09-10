import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Profile from './Navtabs/profile';
import Notification from './Navtabs/notification';
import Messages from './Navtabs/Messages';
import { useStyles } from './HeaderStyle';
import Hidden from '@mui/material/Hidden';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';






export default function Navbar({handleDrawerOpen}) {

  const classes=useStyles();
  return (
   
     // <AppBar position="fixed">

       <AppBar position="static">
        <Toolbar className={classes.toolbar}>
      
          <Typography variant="h6" className={classes.logo}>
           {"HassanManais"}
          </Typography>


         <Hidden mdDown> 
          <Box style={{display:"flex"}}>
          <Notification/>
          <Messages/>
          <Profile/>
        
          </Box>
          </Hidden>



          <Hidden mdUp> 
          <IconButton color='inherit' onClick={handleDrawerOpen}>
            
<MenuIcon/>
          </IconButton>
          </Hidden> 
        </Toolbar>
      </AppBar>
    
  )
}








