import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import PostAddIcon from '@mui/icons-material/PostAdd';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom';
import { useStyles } from './HeaderStyle';
import { Button } from '@mui/material';



export default function SidenavData({handleDrawerClose}) {
  const classes=useStyles();
    const listItemData=[

       
          { label:"Dashboard",link:"/",icon:<DashboardIcon/>},
          {  label:"Blog Post",link:"/blogComponent",icon:<BookIcon/>},
          {  label:"Link 1",link:"/linkComponent",icon:<PostAddIcon/>},
          {  label:"Notification",link:"/notificationComponent",icon:<NotificationsActiveIcon/>},
          {  label:"Logout",link:"/logoutComponent",icon:<ExitToAppIcon/>},
        
    ];
  return (
    <List>
        {listItemData.map((item,i)=>(

       <Button size="small" className={classes.navButton} onClick={()=>handleDrawerClose()}
       key={i}
       >
        
  <ListItem exact component={NavLink} className={classes.navlinks}
   activeClassName={classes.activeNavlinks} 
   to={item.link} >

   <ListItemIcon>{item.icon}</ListItemIcon>
   <ListItemText>{item.label}</ListItemText>

        </ListItem>
        </Button>
))}
    </List>
  );
}
