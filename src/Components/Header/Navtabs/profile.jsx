import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ListItem, ListItemIcon, Avatar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemText from '@mui/material/ListItemText';
import image from "./unnamed.jpg"
import { useStyles } from '../HeaderStyle';




export default function Profile() {

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
{
    label:"settings", icon:<SettingsIcon/>
},

{
    label:"logout", icon:<LogoutIcon/>
},

  ]
  return (

    <Box>

<Button 
aria-controls="simple-menu" 
aria-haspopup="true"  
onClick={handleClick}
startIcon={<Avatar src={image} className={classes.navAvatar}></Avatar>}
>  
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
       
      >
        {dropDownData.map((item,i)=>(<MenuItem key={i} component={ListItem} onClick={handleClose}>
            
         <ListItemIcon>{item.icon}</ListItemIcon>
         <ListItemText>{item.label}</ListItemText>
         
         </MenuItem>))}
        
        
      </Menu>

    </Box>
  )
}
