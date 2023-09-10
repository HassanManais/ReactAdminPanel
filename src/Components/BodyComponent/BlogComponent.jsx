import React, { useEffect, useState } from 'react'
import {Box,
  Typography,
  Page,
  List,
  ListItem,
  Avatar,
  ListItemIcon,
  Grid,
  Card,
  CardActions,
  Button,
  ListItemText,
  CircularProgress} from '@material-ui/core'


import { PageHeader } from '../Common/CommonComponent'
import { GetPost, GetUser } from '../../utils/blogRequest';
import { useStyles } from '../BodyComponent/BodyStyle';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function BlogComponent() {
  const classes=useStyles();

  const [fetched,setfetched]=useState([]);
   const [posts,setPosts]=useState([]);
   const [authors,setAuthors]=useState([]);


   {/*useEffect(()=>{
    if(!fetched){

      GetUser({limit:25}).then(({data :{data}})=>{
        setAuthors(data);
        console.log("Authors:",data)
      });
      

      GetPost({limit:25}).then(({data :{data}})=>{
        setPosts(data);
        console.log("Posts:",data)
      },[fetched]);

     setfetched(true);
    }
   });
  */}
  return (
    <div>
        <Box mt={2}>
            {/* // PageHeader  */}

            <PageHeader label={"posts"} pageTitle="Blog Post"/>
            
            {/* // blogPost Card */}

            <Grid container spacing={1}>
              {posts.length === 0 ? (
              
              <Box className={classes.boxCentered}>

                <CircularProgress/>
              </Box>
              
              )
              
              :posts.map((item,i)=>
              <Grid key={i} item xs={12} sm={4}>
               <Card>
                  <List>
                  <ListItem>
                   <ListItemIcon>
                        <Avatar src={item.owner.picture} alt={item.owner.firstName} > 

                         </Avatar>

                        
                   </ListItemIcon>
                   <ListItemText>
                        <Typography variant="body1" component="h6">
                          {item.owner.firstName}
                        </Typography>

                      

                   </ListItemText>

                </ListItem>


                  </List>

                  {/*  //Image */}
                  <img src={item.image} alt={item.id} className={'${classes.responsiveImg} ${classes.cardImg}'}></img>

                  {/*  //CardAction */}

                  <CardActions>
                     <Button color="secondary" size="small">
                        <FavoriteIcon/><span style={{marginRight:"5px"}}>{item.likes}</span>
                     </Button>

                  </CardActions>

               </Card>
             </Grid>
             )}
             

            </Grid>
        </Box>
    </div>
  )
}
