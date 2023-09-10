import React from 'react'
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import { Box } from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import DashBoardComponent from '../BodyComponent/Dashboard/DashBoardComponent';
import BlogComponent from '../BodyComponent/BlogComponent';
import LinkComponent from '../BodyComponent/LinkComponent';
import LogoutComponent from '../BodyComponent/LogoutComponent';
import NotificationComponent from '../BodyComponent/NotificationComponent';
import { useStyles } from './HeaderStyle';
import {useState} from 'react'



export default function HeaderComponent() {

  const classes=useStyles();

  const [mobileOpen, setmobileOpen]=useState(false);
  const handleDrawerOpen=()=>{
  setmobileOpen(!mobileOpen);
  };

  const handleDrawerClose=()=>{
    setmobileOpen(false);
    };

  return (
    <div>
<Navbar handleDrawerOpen={handleDrawerOpen}/>


<Sidenav mobileOpen={mobileOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>

<Box className={classes.wrapper}>
<Routes>

<Route exact path="/" element={<DashBoardComponent />} />
<Route exact path="/blogComponent" element={<BlogComponent />} />
<Route exact path="/linkComponent" element={<LinkComponent />} />
<Route exact path="/notificationComponent" element={<NotificationComponent />} />
<Route exact path="/logoutComponent" element={<LogoutComponent />} />

</Routes>
</Box>

    </div>
  )
}
