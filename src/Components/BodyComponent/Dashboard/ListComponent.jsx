import React from 'react'
import {Avatar, 
    Box,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, 
    Typography,
    Paper,
    Divider,
    CircularProgress
} from '@material-ui/core';
import { useStyles } from '../BodyStyle';

export default function ListComponent({posts,authors}) {
    const classes=useStyles();
  return (
    <Box className={classes.section}>
        <Grid container spacing={1}>


            {/* Author */}
         
            <Grid item xs={12} sm={6} md={5}>
                <Paper>
            <List>
                <ListItem>
                    <Typography variant='h6'>
                        Top Author
                    </Typography>
                </ListItem>
                <Divider/>
             {authors.length===0 ? (
             <Box className={classes.boxCentered}>
                       <CircularProgress/>
                
             </Box>
             ) : (authors.map((item,i)=>     
             <ListItem key={i}>
                   <ListItemIcon>
                         <Avatar src={item.picture} alt={item.firstName} >

                         </Avatar>
                   </ListItemIcon>
                   <ListItemText>
                        <Typography variant="body1" component="h6">
                           {item.firstName}
                        </Typography>

                        <Typography variant="subtitle2" color="textSecondary">
                         {item.email}
                         </Typography>

                   </ListItemText>

                </ListItem>
                ))
                
                }
            </List>
            </Paper>
            </Grid >
        


            {/* Post */}
            <Grid item xs={12} sm={6} md={7}>
                <Paper>
            <List>
                <ListItem>
                    <Typography variant='h6'>
                        Latest Post
                    </Typography>
                </ListItem>
                <Divider/>
             {posts.length===0 ? (
             <Box className={classes.boxCentered}>
                       <CircularProgress/>
                
             </Box>
             ) : (posts.map((item,i)=>     
             <ListItem key={i}>
                   <ListItemIcon>
                         <Avatar src={item.image} alt={item.text} >

                         </Avatar>
                   </ListItemIcon>
                   <ListItemText>
                        <Typography variant="body1" component="h6">

                           {item.text}
                        </Typography>

                   </ListItemText>

                </ListItem>
                ))
                
                }
            </List>
            </Paper>
            </Grid >
        </Grid>  
        </Box>
  )
}
