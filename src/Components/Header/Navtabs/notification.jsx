import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import { IconButton, ListItem, ListItemIcon, Avatar, List } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemText from '@mui/material/ListItemText';
import { useStyles } from '../HeaderStyle';






export default function Notification() {

const classes=useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData=[

{  label:"Alax",  desc : "likes your feed.."},
{  label:"Freza",  desc : "likes your feed.."},
{  label:"Dazer",  desc : "likes your feed.."},
{  label:"Lobie",  desc : "likes your feed.."},


  ]
  return (

    <Box>

<IconButton 
aria-controls="messages" 
aria-haspopup="true"  
onClick={handleClick}
color='inherit'>  

<Badge badgeContent={3} color='secondary'>

<NotificationsIcon/>
</Badge>
      </IconButton>
      <Menu
        id="notification"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <List className={classes.navlist}>
        {dropDownData.map((item,i)=>(<ListItem key={i}  onClick={handleClose}>
            
         <ListItemIcon>
         <Avatar className={classes.ulAvatar}>{item.label[0].toUpperCase()}</Avatar>
         </ListItemIcon>
         <ListItemText primary={item.label} secondary={item.desc}></ListItemText>
         
         </ListItem>))}
        
         </List>
      </Menu>

    </Box>
  )
}
