import { Container,Hidden,Drawer, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useStyles } from './HeaderStyle'
import SidenavData from './SidenavData';

export default function HeaderComponent({mobileOpen, handleDrawerOpen,handleDrawerClose}) {
  const classes=useStyles();

  return (
    
    <nav className={classes.drawer} aria-label="mailbox folders">

      <Hidden mdUp implementation="css">
        <Drawer
         
          variant="temporary"
          anchor={'left'}
          open={mobileOpen}
          onClose={handleDrawerOpen}
          classes={{
            paper:classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted:true,
          }}
          >
           <SidenavData handleDrawerClose={handleDrawerClose}/>
          
        </Drawer>
      </Hidden>

<Hidden mdDown implementation="css">
<Drawer classes={{paper:classes.drawerPaper,}}
variant="permanent"
open
>

<SidenavData handleDrawerClose={handleDrawerClose}/>
 </Drawer>
</Hidden>

    </nav>

  )
}
