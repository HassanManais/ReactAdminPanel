import { Button, CardContent, Grid, Typography, makeStyles } from '@material-ui/core';
import { React,useEffect, useState } from 'react'
import {Box,Card} from '@mui/material/';
import { PageHeader } from '../../Common/CommonComponent';
import { useStyles } from '../BodyStyle'; 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {DisplayCardGraph} from '../../Common/GraphComponent';
import { fakeArrayDataGenetator, randomValueGenerator } from '../../../utils/fakeArrayDataGenetator';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { amber, blue, indigo, lightGreen,green,red } from '@material-ui/core/colors';
import UserOverview from "./UserOverview"
import { GetPost,GetUser } from '../../../utils/blogRequest';
import ListComponent from './ListComponent';



export default function DashBoardComponent() {
  const classes=useStyles();
  const[fetched,setFetched]=useState(false);
  const[posts,setPost]=useState([]);
  const[authors,setAuthors]=useState([]);


  const DisplayData=[

    {label:"Post", value:randomValueGenerator({digit:1000}),icon:<ArrowDropUpIcon/>,iconLabel:"4%"},
    {label:"Pages", value:randomValueGenerator({digit:100}),icon:<ArrowDropUpIcon/>,iconLabel:"9%"},
    {label:"New Visitor", value:randomValueGenerator({digit:100}),icon:<ArrowDropUpIcon/>,iconLabel:"23%"},
    {label:"Total visitor", value:randomValueGenerator({digit:1000}),icon:<ArrowDropUpIcon/>,iconLabel:"30%"},
  ];

  const GraphCardData=[
{
  id:"Post",
  data:fakeArrayDataGenetator({count:9,digit:100}),
  brColor:blue[500],
  bgColor:blue[50]
},
{
  id:"Pages",
  data:fakeArrayDataGenetator({count:9,digit:100}),
  brColor:indigo[500],
  bgColor:indigo[50]
},
{
  id:"New Visitor",
  data:fakeArrayDataGenetator({count:9,digit:100}),
  brColor:lightGreen[500],
  bgColor:lightGreen[50]
},
{
  id:"Total visitor",
  data:fakeArrayDataGenetator({count:9,digit:100}),
  brColor:amber[500],
  bgColor:amber[50]
}

  ];

  useEffect(()=>{
    if(!fetched){
    GraphCardData.map((item,i)=>
        DisplayCardGraph(
      {
        id:item.id,
        data:item.data,
        brcolor:item.brColor,
        bgcolor:item.bgColor
      }
    ));

    setFetched(true);
}
    //console.log("Id in DashBoard:"+item.id);
  },[fetched]);

  //  For Api Calling
  /*
      useEffect(()=>{
        if(!fetched){
      GetPost({limit:5}).then(({data:{data}})=>{              uncomment to get Data from API
      setPost(data);
       console.log("Post Data:",data);
    
       }
   );

        GetUser({limit:5}).then(({data:{data}})=>{                  uncomment to get Data from API
        setAuthors(data);
       console.log("GetUser Data",data);
           }
           );

           setFetched(true);
      }
},[fetched]);
*/
    
  return (
    <div>
       <Box>

        <PageHeader label="DashBoard" pageTitle="Blog Overview"/>

<Grid container spacing={1}>
  
  
  {DisplayData.map((item,i)=>(
<Grid item xs={6} sm={3} key={i}>
<Card>

  
  
  <CardContent  className={classes.CardContent}>


  <canvas id={item.label} className={classes.displayCardGraph}></canvas>
{console.log("Canvas id:",item.label )}



<DisplayCardGraph/>
  <Typography variant='body2' className={classes.cardLabel}>
{item.label}
  </Typography>
  <Typography varient='h5' component='h6' className={classes.cardTitle}>
{item.value}
  </Typography>

  <Typography
  component='p'
  style={{
    textAlign:"center",
    marginBottom:"0px"
  }}
  >
  <Button
  size='small'
  className={classes.ratioBtn}
  startIcon={item.icon}
  style={{
    color:item.label[0] ==="P" ? green[600] : red[500],
  }}
  >
    
    {item.iconLabel}
  </Button>
  </Typography>
</CardContent>





</Card>

</Grid>
))};
</Grid>

<UserOverview/>

{/* List Component  */}


<ListComponent posts={posts} authors={authors}/>
       </Box>
    </div>
  );
}
